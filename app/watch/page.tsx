import type { Metadata } from "next";
import { getAllVideos } from "@/lib/videos";
import PageIntro from "@/components/PageIntro";
import EpisodeArchive from "@/components/EpisodeArchive";
export const metadata: Metadata = { title: "Watch Bible Studies" };
export default async function Watch({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const query = await searchParams;
  const category =
    typeof query.category === "string" ? query.category : undefined;
  return (
    <>
      <PageIntro
        kicker="Watch & listen"
        title={
          <>
            Make room for
            <br />a deeper study.
          </>
        }
      >
        Bible studies, sermons, and conversations to help you grow in the Word.
      </PageIntro>
      <EpisodeArchive
        key={category}
        videos={getAllVideos()}
        initialCategory={category}
      />
    </>
  );
}
