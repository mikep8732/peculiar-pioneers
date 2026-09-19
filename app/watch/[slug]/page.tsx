import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllVideos,
  getVideoBySlug,
  getAdjacentSeriesVideos,
  formatDate,
} from "@/lib/videos";
export function generateStaticParams() {
  return getAllVideos().map((v) => ({ slug: v.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVideoBySlug(slug);
  return { title: v?.title || "Study not found", description: v?.description };
}
export default async function Episode({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();
  const { prev, next } = getAdjacentSeriesVideos(video);
  return (
    <>
      <nav className="ppx-breadcrumb" aria-label="Breadcrumb">
        <Link href="/watch">All video studies</Link>
        <span> / {video.category}</span>
      </nav>
      <article className="ppx-section ppx-episode-page">
        <div className="ppx-kicker">
          {video.category} · {formatDate(video.date)} · {video.duration}
        </div>
        <h1>{video.title}</h1>
        <div className="video-embed">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p>{video.description}</p>
        <div className="ppx-actions">
          <a
            className="ppx-action ppx-action-primary"
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
          <Link className="ppx-action" href="/quiz">
            Open a Bible study
          </Link>
        </div>
        {video.series && (
          <nav className="series-navigation" aria-label="More in this series">
            <h2>{video.series.name}</h2>
            <p>
              Part {video.series.part} of {video.series.total}
            </p>
            <div className="ppx-actions">
              {prev && (
                <Link className="ppx-action" href={`/watch/${prev.slug}`}>
                  Previous: {prev.title}
                </Link>
              )}
              {next && (
                <Link className="ppx-action" href={`/watch/${next.slug}`}>
                  Next: {next.title}
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </>
  );
}
