import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getAllPaths, getModuleById } from "@/lib/quiz";
import { legacyStudyRoutes } from "@/lib/studies";
import StudyModule from "@/components/quiz/StudyModule";
import PageIntro from "@/components/PageIntro";
export const metadata: Metadata = { title: "Introduction to the Sanctuary" };
export function generateStaticParams() {
  return [{ pathId: "sanctuary-foundations", moduleId: "sanctuary-intro" }];
}
export default async function OriginalModule({
  params,
}: {
  params: Promise<{ pathId: string; moduleId: string }>;
}) {
  const { pathId, moduleId } = await params;
  const path = getAllPaths().find((p) => p.id === pathId);
  if (!path || !path.modules.includes(moduleId)) notFound();
  const module = await getModuleById(moduleId);
  if (!module) {
    redirect(`/quiz/${legacyStudyRoutes[pathId] || pathId}`);
  }
  return (
    <>
      <nav className="ppx-breadcrumb" aria-label="Breadcrumb">
        <Link href="/quiz">All studies</Link>
        <span> / Original sanctuary introduction</span>
      </nav>
      <PageIntro
        kicker="Original study · saved progress retained"
        title={module.title}
      >
        {module.description}
      </PageIntro>
      <section className="ppx-section legacy-study">
        <StudyModule module={module} />
        <div className="ppx-actions">
          <Link className="ppx-action" href="/quiz/sanctuary">
            Continue with the complete sanctuary study
          </Link>
          <Link className="ppx-action" href="/quiz">
            All studies
          </Link>
        </div>
      </section>
    </>
  );
}
