"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const links = [
  ["/watch", "Watch"],
  ["/evidence", "Evidence"],
  ["/about", "About us"],
];
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [study, setStudy] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMobile(false);
    setStudy(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (menu.current && !menu.current.contains(e.target as Node))
        setStudy(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  const active = (href: string) =>
    pathname === href ? ("page" as const) : undefined;
  return (
    <div id="pp-site" data-page={pathname === "/" ? "home" : "page"}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="ppx-stage">
        <div className="ppx-site">
          <header className="ppx-header">
            <Link
              className="ppx-brand"
              href="/"
              aria-label="Peculiar Pioneers home"
            >
              <span className="ppx-brand-symbol">
                <Icon name="book-open" />
              </span>
              <span>
                peculiar
                <br />
                pioneers<span className="ppx-brand-dot">.</span>
              </span>
            </Link>
            <nav className="ppx-nav" aria-label="Main navigation">
              <Link href="/watch" aria-current={active("/watch")}>
                Watch
              </Link>
              <div
                ref={menu}
                className="ppx-study-nav"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setStudy(false);
                    trigger.current?.focus();
                  }
                }}
              >
                <button
                  ref={trigger}
                  type="button"
                  className="ppx-study-toggle"
                  aria-expanded={study}
                  aria-controls="study-links"
                  onClick={() => setStudy(!study)}
                >
                  Study <Icon name="chevron-down" />
                </button>
                <div
                  id="study-links"
                  className="ppx-study-links"
                  hidden={!study}
                >
                  <Link href="/quiz">
                    <strong>Bible study &amp; flashcards</strong>
                    <small>Read, reflect, and learn</small>
                  </Link>
                  <Link href="/prophecy/1844">
                    <strong>1844 &amp; the Sanctuary</strong>
                    <small>October 22 explained from Scripture</small>
                  </Link>
                  <Link href="/beliefs">
                    <strong>Our beliefs</strong>
                    <small>Foundations of faith</small>
                  </Link>
                </div>
              </div>
              <Link href="/evidence" aria-current={active("/evidence")}>
                Evidence
              </Link>
              <Link href="/about" aria-current={active("/about")}>
                About us
              </Link>
              <Link href="/contact" className="ppx-contact-nav">
                Get in touch <Icon name="arrow-up-right" />
              </Link>
            </nav>
            <button
              className="ppx-menu"
              aria-expanded={mobile}
              aria-controls="mobile-navigation"
              onClick={() => setMobile(!mobile)}
            >
              <Icon name={mobile ? "x" : "menu"} />
              {mobile ? "Close" : "Menu"}
            </button>
          </header>
          <nav
            id="mobile-navigation"
            className="ppx-mobile-nav"
            aria-label="Mobile navigation"
            hidden={!mobile}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setMobile(false);
                document.querySelector<HTMLButtonElement>(".ppx-menu")?.focus();
              }
            }}
          >
            {[
              ...links,
              ["/quiz", "Bible studies"],
              ["/prophecy/1844", "1844 & the Sanctuary"],
              ["/beliefs", "Our beliefs"],
              ["/contact", "Get in touch"],
              ["/donate", "Support"],
            ].map(([href, label]) => (
              <Link key={href} href={href} aria-current={active(href)}>
                <Icon name="arrow-up-right" />
                {label}
              </Link>
            ))}
            <Link href="/bible-app" className="ppx-mobile-app">
              <Icon name="book-open" />
              Bible app <small>In development</small>
            </Link>
          </nav>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <footer className="ppx-footer">
            <div className="ppx-footer-top">
              <Link href="/" className="ppx-brand">
                <span>
                  peculiar
                  <br />
                  pioneers<span className="ppx-brand-dot">.</span>
                </span>
              </Link>
              <p>
                Proclaiming present truth.
                <br />
                Scripture. Study. Living faith.
              </p>
              <div>
                <Link href="/quiz">
                  Open a Bible study <Icon name="arrow-up-right" />
                </Link>
                <a
                  href="https://www.youtube.com/@PeculiarPioneers"
                  target="_blank"
                  rel="noreferrer"
                >
                  Subscribe on YouTube <Icon name="arrow-up-right" />
                </a>
                <Link href="/contact">
                  Get in touch <Icon name="arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="ppx-footer-bottom">
              <span>
                © {new Date().getFullYear()} Peculiar Pioneers. All rights
                reserved.
              </span>
              <div>
                {[
                  ["/beliefs", "Beliefs"],
                  ["/prophecy/1844", "1844 study"],
                  ["/bible-app", "Bible app"],
                  ["/donate", "Support"],
                ].map(([href, label]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
