import Link from "next/link";
import { Video, formatDate, getYouTubeThumbnail } from "@/lib/videos";
import Icon from "./Icon";
export default function VideoCard({ video }: { video: Video }) {
  return (
    <article className="ppx-episode">
      <Link
        className="ppx-thumbnail"
        href={`/watch/${video.slug}`}
        aria-label={`Watch ${video.title}`}
      >
        <img
          src={video.thumbnail || getYouTubeThumbnail(video.id)}
          alt={`${video.title} video artwork`}
          width="640"
          height="360"
          loading="lazy"
        />
        <span className="ppx-duration">{video.duration}</span>
        <span className="ppx-card-play">
          <Icon name="play" />
        </span>
      </Link>
      <div className="ppx-episode-meta">
        <span>{video.category}</span>
        <time dateTime={video.date}>{formatDate(video.date)}</time>
      </div>
      <h3>
        <Link href={`/watch/${video.slug}`}>{video.title}</Link>
      </h3>
    </article>
  );
}
