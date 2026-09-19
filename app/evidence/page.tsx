import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ChronologicalEvidence from "@/components/ChronologicalEvidence";
export const metadata: Metadata = {
  title: "Chronological Evidence — Sources & Study",
};
export default function Evidence() {
  return (
    <>
      <PageIntro
        kicker="The ministry’s chronology"
        title="Chronological Evidence"
      >
        Natural Disasters, Crime &amp; World Events — 1844–2026
      </PageIntro>
      <ChronologicalEvidence />
    </>
  );
}
