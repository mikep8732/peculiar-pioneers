import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
const json = async (path) =>
  JSON.parse(await readFile(new URL("../" + path, import.meta.url), "utf8"));
const studies = await json("content/studies.json");
assert.equal(studies.topics.length, 10, "Ten selectable study topics");
assert.equal(
  new Set(studies.topics.map((t) => t.id)).size,
  10,
  "Unique topic routes",
);
for (const topic of studies.topics) {
  assert.equal(topic.items.length, 7, `${topic.id}: seven activities`);
  assert.equal(new Set(topic.items.map((i) => i.id)).size, 7);
  for (const item of topic.items) {
    for (const key of [
      "reading",
      "reflect",
      "flashQuestion",
      "flashAnswer",
      "question",
      "hint",
    ])
      assert(item[key]?.trim(), `${topic.id}/${item.id}/${key}`);
    assert.equal(item.options.length, 4);
    assert.equal(item.options.filter((o) => o.correct).length, 1);
    assert(item.options.every((o) => o.text && o.feedback));
    assert(
      item.bibleLinks.length > 0 && item.egw.length > 0,
      "Every item retains source references",
    );
    for (const source of [...item.bibleLinks, ...item.egw])
      assert.equal(new URL(source.url).protocol, "https:");
  }
}
const { videos } = await json("content/videos.json");
assert(videos.length >= 30, "Preserve all existing video records");
assert.equal(new Set(videos.map((v) => v.id)).size, videos.length);
assert.equal(new Set(videos.map((v) => v.slug)).size, videos.length);
assert(
  videos.some((v) => v.id === "KcMoiLOVR7w"),
  "Newest checkpoint video retained",
);
const eras = await json("content/evidence.json");
assert.equal(
  eras.reduce(
    (sum, e) => sum + e.events.reduce((n, y) => n + y.events.length, 0),
    0,
  ),
  566,
);
assert(
  eras.every(
    (e) =>
      e.introQuote.reviewStatus &&
      e.events.every((y) => !y.quote || y.quote.reviewStatus),
  ),
  "Quotations retain review status",
);
const handoff = await json(
  "design-reference/Approved_Design/Study_Content.json",
);
assert.deepEqual(
  studies,
  handoff,
  "Study content is unchanged from the reviewed handoff",
);
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? files(`${dir}/${e.name}`) : `${dir}/${e.name}`,
      ),
    )
  ).flat();
}
assert(
  !(await files("public")).some((p) =>
    /Approved_Design|Study_Content|design-reference|\.zip$/i.test(p),
  ),
  "No reference documents in public assets",
);
console.log(
  `PASS: 10 topics, 70 readings, 70 cards, 70 questions, ${videos.length} videos, 566 selected chronology entries, source references, and handoff isolation.`,
);
