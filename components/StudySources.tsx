import type { StudyItem } from "@/lib/studies";
export default function StudySources({ item }: { item: StudyItem }) {
  return (
    <div className="ppx-study-sources">
      <div>
        <strong>Read in your Bible</strong>
        <span>
          {item.bibleLinks.map((s, i) => (
            <span key={s.url}>
              {i > 0 ? " · " : ""}
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </span>
          ))}
        </span>
      </div>
      <div>
        <strong>Study with Ellen G. White</strong>
        <span>
          {item.egw.map((s, i) => (
            <span key={s.url + s.pages}>
              {i > 0 ? " · " : ""}
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
