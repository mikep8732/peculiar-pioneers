import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import "./globals.css";
import "./approved.css";
import "./native.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.peculiarpioneers.com"),
  title: {
    default: "Peculiar Pioneers | Present Truth Ministry",
    template: "%s | Peculiar Pioneers",
  },
  description:
    "A Seventh-day Adventist ministry sharing the everlasting gospel through Bible study, preaching, and fellowship.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
