import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getStudy, studyData, legacyStudyRoutes } from "@/lib/studies";
import PageIntro from "@/components/PageIntro";
import StudyRoom from "@/components/StudyRoom";
export function generateStaticParams() {
  return [
    ...studyData.topics.map((t) => ({ pathId: t.id })),
    { pathId: "sanctuary-foundations" },
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ pathId: string }>;
}): Promise<Metadata> {
  const { pathId } = await params;
  const topic = getStudy(pathId);
  return {
    title: topic?.title || "Sanctuary Foundations",
    description: topic?.description,
  };
}
export default async function StudyPage({
  params,
}: {
  params: Promise<{ pathId: string }>;
}) {
  const { pathId } = await params;
  if (pathId === "sanctuary-foundations")
    return (
      <>
        <PageIntro kicker="Original study" title="Sanctuary Foundations">
          Continue your original introduction. Your previous browser-local
          progress is retained.
        </PageIntro>
        <section className="ppx-section">
          <h2>One available module</h2>
          <div className="ppx-actions">
            <Link
              className="ppx-action ppx-action-primary"
              href="/quiz/sanctuary-foundations/sanctuary-intro"
            >
              Introduction to the Sanctuary
            </Link>
            <Link className="ppx-action" href="/quiz/sanctuary">
              Explore the new seven-part sanctuary study
            </Link>
          </div>
        </section>
      </>
    );
  const topic = getStudy(pathId);
  if (!topic) {
    const redirectId = legacyStudyRoutes[pathId];
    if (redirectId) redirect(`/quiz/${redirectId}`);
    notFound();
  }
  return (
    <>
      <nav className="ppx-breadcrumb" aria-label="Breadcrumb">
        <Link href="/quiz">All studies</Link>
        <span> / {topic.title}</span>
      </nav>
      <PageIntro kicker={topic.group} title={topic.title}>
        {topic.description}
      </PageIntro>
      <StudyRoom
        key={topic.id}
        topic={topic}
        topics={studyData.topics.map(({ id, title }) => ({ id, title }))}
      />
    </>
  );
}
