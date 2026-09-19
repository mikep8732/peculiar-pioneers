"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import type { CSSProperties } from "react";
import erasData from "@/content/evidence.json";
import typesData from "@/content/event-types.json";
import copy from "@/content/reviewed-copy.json";
type Quote = {
  text: string;
  source: string;
  reviewStatus: string;
  sourceUrl?: string;
};
type Event = {
  type: string;
  text: string;
  sources?: { label: string; url: string }[];
};
type Era = {
  id: number;
  name: string;
  years: string;
  description: string;
  egwRefs: [string, number, string][];
  introQuote?: Quote;
  events: { year: number; events: Event[]; quote?: Quote }[];
};
const eras = erasData as Era[];
const types = typesData as Record<
  string,
  { label: string; color: string; ink: string; icon: string; textColor: string }
>;
function ContextLinks({ refs }: { refs: [string, number, string][] }) {
  return (
    <p className="ppx-source-note">
      Study the context:{" "}
      {refs.map(([book, chapter, pages], index) => (
        <span key={`${book}-${chapter}`}>
          {index > 0 && " · "}
          <a
            href={
              book === "GC"
                ? `https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-${chapter}.htm`
                : `https://www.ellenwhite.info/books/bk-sc-${String(chapter).padStart(2, "0")}.htm`
            }
            target="_blank"
            rel="noreferrer"
          >
            {book === "GC" ? "The Great Controversy" : "Steps to Christ"},{" "}
            {pages}
          </a>
        </span>
      ))}
    </p>
  );
}
function QuoteBlock({ quote }: { quote: Quote }) {
  return (
    <blockquote className="ppx-quote">
      <p>“{quote.text}”</p>
      <cite>{quote.source}</cite>
      <p className="source-pending">
        {quote.reviewStatus} Document date is stated in its attribution where
        available; placement beside a year does not establish a prediction of
        that event.
      </p>
      {quote.sourceUrl && (
        <a href={quote.sourceUrl} target="_blank" rel="noreferrer">
          Read the quotation in context
        </a>
      )}
    </blockquote>
  );
}
export default function ChronologicalEvidence() {
  const [eraId, setEra] = useState(1);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(Object.keys(types));
  useEffect(() => {
    const hash = window.location.hash.match(/^#(?:era-(\d+)|year-(\d+))$/);
    if (hash) {
      const id = hash[1]
        ? Number(hash[1])
        : eras.find((e) => e.events.some((y) => y.year === Number(hash[2])))
            ?.id;
      if (id) setEra(id);
      if (hash[2])
        setTimeout(() => {
          const d = document.getElementById(
            `year-${hash[2]}`,
          ) as HTMLDetailsElement | null;
          if (d) {
            d.open = true;
            d.scrollIntoView();
          }
        }, 100);
    }
  }, []);
  const era = eras.find((e) => e.id === eraId)!;
  const rows = useMemo(
    () =>
      era.events
        .map((y) => ({
          ...y,
          events: y.events.filter(
            (e) =>
              selected.includes(e.type) &&
              (e.text.toLowerCase().includes(search.trim().toLowerCase()) ||
                String(y.year).includes(search.trim())),
          ),
        }))
        .filter((y) => y.events.length),
    [era, search, selected],
  );
  return (
    <section className="ppx-section">
      <div className="ppx-timeline-intro">
        <p>{copy.evidenceText.intro}</p>
        <div className="ppx-quote">
          <p>{copy.evidenceText.introQuote}</p>
          <cite>Study note · The Great Controversy, chapters 36–39</cite>
          <ContextLinks
            refs={[
              ["GC", 36, "589.1–591.2"],
              ["GC", 37, "593.1–599.3"],
              ["GC", 39, "621.1"],
            ]}
          />
        </div>
        <p className="ppx-preview-note">
          Historical entries and inherited quotations have separate source
          requirements. Entries without source links remain unverified. See{" "}
          <a href="#evidence-sources">Sources and scope</a> for the remaining
          verification limits.
        </p>
      </div>
      <nav className="ppx-era-tabs" aria-label="Historical eras">
        {eras.map((e) => (
          <button
            key={e.id}
            aria-pressed={eraId === e.id}
            onClick={() => {
              setEra(e.id);
              setSearch("");
              window.history.replaceState(null, "", `#era-${e.id}`);
            }}
          >
            <strong>{e.years}</strong>
            <small>{e.name}</small>
          </button>
        ))}
      </nav>
      <div className="ppx-era-heading">
        <h2>{era.name}</h2>
        <span>
          Era {era.id} of 6 · {era.years}
        </span>
      </div>
      <div className="ppx-timeline-intro">
        <p>{era.description}</p>
        <ContextLinks refs={era.egwRefs} />
      </div>
      {era.introQuote && <QuoteBlock quote={era.introQuote} />}
      <div className="ppx-evidence-tools">
        <label className="ppx-search">
          <Icon name="search" />
          <input
            aria-label="Search this era"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search this era"
          />
        </label>
        <div className="ppx-filter-heading">
          <span>Filter by event type</span>
          <div>
            <button onClick={() => setSelected(Object.keys(types))}>
              Select all
            </button>
            <button onClick={() => setSelected([])}>Clear all</button>
          </div>
        </div>
        <div className="ppx-type-filters" aria-label="Event types">
          {Object.entries(types).map(([key, t]) => (
            <button
              key={key}
              className="ppx-type-pill"
              aria-pressed={selected.includes(key)}
              style={
                {
                  "--ppx-type-color": t.color,
                  "--ppx-type-ink": t.ink,
                  "--ppx-type-off-ink": t.textColor,
                } as CSSProperties
              }
              onClick={() =>
                setSelected((old) =>
                  old.includes(key)
                    ? old.filter((k) => k !== key)
                    : [...old, key],
                )
              }
            >
              <Icon name={t.icon} />
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <p className="ppx-result-count" role="status">
        {rows.reduce((n, y) => n + y.events.length, 0)} events in {rows.length}{" "}
        years
      </p>
      <div className="ppx-year-list">
        {rows.map((y) => (
          <details className="ppx-year" key={y.year} id={`year-${y.year}`}>
            <summary>
              <span className="ppx-timeline-toggle" aria-hidden="true">
                <Icon name="plus" />
              </span>
              <strong>{y.year}</strong>
              <small>
                {y.events.length} events
                {y.quote && (
                  <span className="ppx-quote-indicator">
                    Includes EGW quotation
                  </span>
                )}
              </small>
              <span className="ppx-year-dots" aria-hidden="true">
                {Array.from(new Set(y.events.map((e) => e.type))).map(
                  (type) => (
                    <span
                      key={type}
                      style={
                        {
                          "--ppx-dot-color": types[type].color,
                        } as CSSProperties
                      }
                    />
                  ),
                )}
              </span>
            </summary>
            <div className="ppx-year-body">
              <a href={`#year-${y.year}`}>Link to {y.year}</a>
              <ul>
                {y.events.map((event, i) => {
                  const t = types[event.type];
                  return (
                    <li className="ppx-event" key={i}>
                      <span
                        className="ppx-event-type"
                        style={
                          {
                            "--ppx-event-color": t.textColor,
                            "--ppx-event-tint": t.color + "15",
                          } as CSSProperties
                        }
                      >
                        <Icon name={t.icon} />
                        {t.label}
                      </span>
                      <div>
                        <p>{event.text}</p>
                        {event.sources ? (
                          <p className="source-pending">
                            Sources:{" "}
                            {event.sources.map((s) => (
                              <a
                                key={s.url}
                                href={s.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {s.label}{" "}
                              </a>
                            ))}
                          </p>
                        ) : (
                          <p className="source-pending">
                            {event.type === "prophecy"
                              ? "Ministry interpretation — study the biblical and EGW sources in the 1844 study."
                              : "Historical entry — individual source verification pending."}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              {y.quote && (
                <>
                  <h3>Related religious writing</h3>
                  <QuoteBlock quote={y.quote} />
                </>
              )}
            </div>
          </details>
        ))}
      </div>
      {!rows.length && <p>No events match these filters.</p>}
      <section className="ppx-evidence-conclusion">
        <div className="ppx-kicker">Ministry commentary</div>
        <h2>Watchfulness, faith, and hope</h2>
        {copy.evidenceText.conclusion.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="ppx-quote">
          <p>{copy.evidenceText.closingQuote}</p>
          <cite>Ellen G. White · The Great Controversy, 678.3 · excerpt</cite>
          <ContextLinks refs={[["GC", 42, "678.3"]]} />
        </div>
        <p>Even so, come, Lord Jesus! · Revelation 22:20</p>
      </section>
      <details className="ppx-editorial-notes" id="evidence-sources">
        <summary>Sources and scope of this chronology</summary>
        <p>
          The teaching notes were reviewed against The Great Controversy,
          chapters 18–42, and Steps to Christ. Those books do not document every
          modern event or casualty figure in this chronology. Entries without a
          historical source link remain unverified.
        </p>
        <p>
          Tangshan has been corrected to 1976, Black Sunday to 1935, and the
          California wildfire comparisons have been revised using USGS, National
          Weather Service, and CAL FIRE records. General 2026 trend statements
          have been removed from the event count.
        </p>
        <p>
          Two timeline quotations from The Great Controversy were checked
          against their original paragraphs. The other 46 quotation placements
          cite works outside these two books; their inherited attributions
          remain pending verification. A quotation placed beneath a year may
          have been written later and does not establish that it predicted that
          event.
        </p>
        <p>
          This is a selected chronology. It does not independently establish a
          statistical increase in disasters or identify every entry as a
          specific fulfillment of prophecy.
        </p>
        <p>Reviewed September 14, 2026 · 566 selected entries.</p>
        <Link className="ppx-text-link" href="/prophecy/1844">
          Read the biblical basis for 1844
        </Link>
      </details>
    </section>
  );
}
