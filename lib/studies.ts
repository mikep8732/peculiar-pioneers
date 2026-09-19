import data from "@/content/studies.json";
export const studyData = data;
export type StudyTopic = (typeof data.topics)[number];
export type StudyItem = StudyTopic["items"][number];
export function getStudy(id: string) {
  return data.topics.find((topic) => topic.id === id);
}
// Preserve old links while directing unfinished paths to a complete reviewed study.
export const legacyStudyRoutes: Record<string, string> = {
  "sanctuary-foundations": "sanctuary",
  "daniels-prophecies": "2300-days",
  "sabbath-truth": "sabbath",
  "signs-of-the-end": "three-angels",
};
export function orderedOptions(item: StudyItem) {
  const offset =
    Array.from(item.id).reduce((n, c) => n + c.charCodeAt(0), 0) %
    item.options.length;
  return item.options
    .map((option, index) => ({ option, index }))
    .slice(offset)
    .concat(
      item.options.map((option, index) => ({ option, index })).slice(0, offset),
    );
}
