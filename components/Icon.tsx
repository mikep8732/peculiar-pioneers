import type { SVGProps } from "react";
const paths: Record<string, string[]> = {
  "book-open": [
    "M12 7v14",
    "M3 3h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5v17h-5a4 4 0 0 0-4 1 4 4 0 0 0-4-1H3z",
  ],
  "arrow-up-right": ["M7 17 17 7", "M7 7h10v10"],
  "arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
  "chevron-down": ["m6 9 6 6 6-6"],
  "chevron-right": ["m9 6 6 6-6 6"],
  "chevron-left": ["m15 6-6 6 6 6"],
  plus: ["M12 5v14M5 12h14"],
  activity: ["M2 12h4l3-9 6 18 3-9h4"],
  "cloud-lightning": [
    "M7 15a5 5 0 1 1 1-10 6 6 0 0 1 11 5 3 3 0 0 1 0 6",
    "m13 12-3 5h4l-3 5",
  ],
  waves: [
    "M2 6c4-5 6 5 10 0s6 5 10 0M2 12c4-5 6 5 10 0s6 5 10 0M2 18c4-5 6 5 10 0s6 5 10 0",
  ],
  flame: [
    "M12 2c2 6-4 7-4 11 0 2 2 3 4 3 4 0 5-4 4-7 4 3 6 7 4 10-4 6-14 4-15-2C4 10 10 8 12 2Z",
  ],
  mountain: ["m2 21 9-18 11 18Z", "m7 11 4 2 3-5"],
  stethoscope: [
    "M5 3v5a5 5 0 0 0 10 0V3M3 3h4M13 3h4M10 13v2a6 6 0 0 0 12 0v-4M22 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
  ],
  wheat: [
    "M12 22V3M12 8C5 8 5 4 5 4c7 0 7 4 7 4M12 14c-7 0-7-4-7-4 7 0 7 4 7 4M12 8c7 0 7-4 7-4-7 0-7 4-7 4M12 14c7 0 7-4 7-4-7 0-7 4-7 4",
  ],
  swords: [
    "m3 3 12 12M3 3v5l7 7M3 3h5l7 7M14 17l3-3M16 16l5 5M21 3 9 15M21 3v5l-7 7M21 3h-5l-7 7M10 17l-3-3M8 16l-5 5",
  ],
  "triangle-alert": ["m12 3 10 18H2Z", "M12 9v5M12 17h.01"],
  "circle-alert": [
    "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
    "M12 7v6M12 17h.01",
  ],
  play: ["m8 5 11 7-11 7z"],
  menu: ["M4 6h16M4 12h16M4 18h16"],
  x: ["m6 6 12 12M6 18 18 6"],
  check: ["m5 12 4 4L19 6"],
  search: ["M21 21l-5-5", "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"],
  layers: ["m12 3 10 6-10 6L2 9z", "m2 13 10 6 10-6", "m2 17 10 6 10-6"],
  "heart-handshake": [
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
    "m7 12 3-3 4 4 3-3",
  ],
  sprout: [
    "M12 22v-9",
    "M12 13C5 14 2 10 2 4c7 0 10 3 10 9Z",
    "M12 15c0-8 3-12 10-12 0 8-3 12-10 12Z",
  ],
  "calendar-days": [
    "M4 5h16v16H4z",
    "M8 2v6M16 2v6M4 10h16M8 14h1M15 14h1M8 18h1M15 18h1",
  ],
  compass: ["M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0", "m16 8-3 5-5 3 3-5z"],
  history: ["M3 12a9 9 0 1 0 3-7", "M3 3v6h6", "M12 7v5l4 2"],
  "notebook-pen": [
    "M5 3h13v18H5z",
    "M2 7h6M2 12h6M2 17h6",
    "m12 15 7-7 2 2-7 7-3 1z",
  ],
  "circle-help": [
    "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
    "M9 9a3 3 0 0 1 6 0c0 2-3 2-3 5M12 17h.01",
  ],
  mail: ["M3 5h18v14H3z", "m3 5 9 8 9-8"],
  youtube: ["M3 5h18v14H3z", "m10 9 5 3-5 3z"],
  sun: [
    "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8",
    "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1",
  ],
};
export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {(paths[name] || paths["book-open"]).map((d, i) => (
        <path d={d} key={i} />
      ))}
    </svg>
  );
}
