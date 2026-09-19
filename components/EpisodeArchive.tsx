"use client";
import { useMemo, useState } from "react";
import { Video } from "@/lib/videos";
import VideoCard from "./VideoCard";
export default function EpisodeArchive({
  videos,
  initialCategory = "All studies",
}: {
  videos: Video[];
  initialCategory?: string;
}) {
  const categories = [
    "All studies",
    ...Array.from(new Set(videos.map((v) => v.category))),
  ];
  const [category, setCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All studies",
  );
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      videos.filter(
        (v) =>
          (category === "All studies" || v.category === category) &&
          `${v.title} ${v.description}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      ),
    [videos, category, query],
  );
  return (
    <section className="ppx-section">
      <div className="ppx-watch-toolbar">
        <label className="ppx-search">
          Search studies
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a title or subject…"
          />
        </label>
      </div>
      <div className="ppx-filters" aria-label="Filter videos by topic">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={c === category}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="ppx-result-count" role="status">
        {filtered.length} {filtered.length === 1 ? "study" : "studies"} found
      </p>
      <div className="ppx-episode-grid">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {!filtered.length && (
        <p>No studies match. Try another search or topic.</p>
      )}
    </section>
  );
}
