import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { getAllVideos, formatDate, getYouTubeThumbnail } from "@/lib/videos";
import VideoCard from "@/components/VideoCard";
export const metadata: Metadata = { title: "Present Truth Ministry" };
export default function Page() {
  const videos = getAllVideos();
  const latest = videos[0];
  return (
    <>
      <section className="ppx-hero">
        <div className="ppx-hero-copy">
          <div className="ppx-eyebrow">
            <span className="ppx-eyebrow-dot"></span>
            {"Scripture. Study. Living faith."}
          </div>
          <h1>
            {"Discover"}
            <br />
            {"Bible truth."}
            <br />
            <em>{"Grow in Christ."}</em>
          </h1>
          <p>
            {
              "We share the everlasting gospel and the three angels’ messages with a world in need of hope. Through Bible study, preaching, and fellowship, we invite people to know Jesus, receive His grace, and prepare for His return."
            }
          </p>
          <div className="ppx-actions">
            <Link
              className="ppx-action ppx-action-primary"
              href={`/watch/${latest.slug}`}
            >
              <Icon name="play" />
              {"Watch a study"}
            </Link>
            <Link className="ppx-action ppx-action-secondary" href="/beliefs">
              {"Our beliefs"}
              <Icon name="arrow-up-right" />
            </Link>
          </div>
          <div className="ppx-under-hero">
            <Icon name="book-open" />
            <span>{"King James Bible · Christ-centered study"}</span>
          </div>
        </div>
        <div className="ppx-hero-media">
          <div className="ppx-hero-artwork">
            <div className="ppx-orbit"></div>
            <div className="ppx-orbit"></div>
            <div className="ppx-orbit"></div>
            <div className="ppx-orbit"></div>
            <div className="ppx-study-cover">
              <div className="ppx-study-cover-top">
                <span>{"Bible studies"}</span>
                <Icon name="book-open" />
              </div>
              <strong>
                {"Health."}
                <br />
                {"Faith."}
                <br />
                {"Living truth."}
              </strong>
              <div className="ppx-study-cover-bottom">
                {"Peculiar Pioneers / Health Reform"}
              </div>
            </div>
            <Link
              className="ppx-feature-art"
              aria-label={`View the latest study: ${latest.title}`}
              href={`/watch/${latest.slug}`}
            >
              <div className="ppx-image-wrap">
                <img
                  src={latest.thumbnail || getYouTubeThumbnail(latest.id)}
                  alt={latest.title}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="ppx-art-caption">
                {latest.id === "KcMoiLOVR7w"
                  ? "Stimulants & the battle for the mind"
                  : latest.title}
                <small>
                  {latest.category}
                  {latest.series ? ` · Part ${latest.series.part}` : ""}
                </small>
              </div>
            </Link>
            <div className="ppx-listen-card">
              <small>{"Start with Scripture"}</small>
              <strong>{"Your next Bible study starts here."}</strong>
              <div className="ppx-listen-line"></div>
            </div>
            <Link
              className="ppx-big-play"
              aria-label="Open the latest Bible study"
              href={`/watch/${latest.slug}`}
            >
              <Icon name="play" />
            </Link>
            <div className="ppx-media-caption">
              <span>{"Latest study"}</span>
              <span>
                {formatDate(latest.date)}
                {latest.series ? ` · Part ${latest.series.part}` : ""}
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="ppx-topic-strip">
        <Link href="/watch?category=Sanctuary">
          <Icon name="book-open" />
          {"The Sanctuary"}
        </Link>
        <Link href="/watch?category=2300%20Day%20Prophecy">
          <Icon name="compass" />
          {"Bible Prophecy"}
        </Link>
        <Link href="/watch?category=Health%20Reform">
          <Icon name="sprout" />
          {"Health Reform"}
        </Link>
        <Link href="/quiz">
          <Icon name="notebook-pen" />
          {"Study Together"}
        </Link>
      </div>
      <section className="ppx-section">
        <div className="ppx-section-head">
          <div>
            <div className="ppx-kicker">{"Latest releases"}</div>
            <h2>{"Make room for a deeper study."}</h2>
          </div>
          <Link className="ppx-text-link" href="/watch">
            {`Explore all ${videos.length} studies `}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
        <div className="ppx-episode-grid">
          {videos.slice(0, 3).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
      <section className="ppx-start-band">
        <div>
          <div className="ppx-kicker">{"New here?"}</div>
          <h2>
            {"A good place"}
            <br />
            {"to begin."}
          </h2>
          <p>
            {
              "You don’t need to have every answer. Bring your Bible, your questions, and a willingness to learn."
            }
          </p>
        </div>
        <div className="ppx-start-steps">
          <Link className="ppx-start-step" href="/about">
            <span>{"01"}</span>
            <span>
              <strong>{"Get to know the ministry"}</strong>
              <small>{"Our purpose and what brings us together"}</small>
            </span>
            <Icon name="arrow-up-right" />
          </Link>
          <Link
            className="ppx-start-step"
            href="/watch/what-is-jesus-doing-right-now-part-1"
          >
            <span>{"02"}</span>
            <span>
              <strong>{"Watch your first study"}</strong>
              <small>{"Start with the sanctuary"}</small>
            </span>
            <Icon name="arrow-up-right" />
          </Link>
          <Link className="ppx-start-step" href="/quiz">
            <span>{"03"}</span>
            <span>
              <strong>{"Open a Bible lesson"}</strong>
              <small>{"Read, reflect, and check your understanding"}</small>
            </span>
            <Icon name="arrow-up-right" />
          </Link>
        </div>
      </section>
      <section className="ppx-section ppx-ministry">
        <div className="ppx-scripture-panel">
          <Icon name="book-open" />
          <blockquote>
            {"“Sanctify them through thy truth: thy word is truth.”"}
          </blockquote>
          <cite>{"John 17:17 · KJV"}</cite>
        </div>
        <div className="ppx-ministry-copy">
          <div className="ppx-kicker">{"Our Mission"}</div>
          <h2>
            {"Rooted in the Word."}
            <br />
            {"Growing together."}
          </h2>
          <p>
            {
              "Peculiar Pioneers shares the everlasting gospel and the three angels’ messages of Revelation 14. We invite people to repentance and faith in Jesus, to understand His ministry in the heavenly sanctuary, and to honor God’s commandments, including the seventh-day Sabbath. Our desire is a life transformed by His grace and ready for His return."
            }
          </p>
          <Link className="ppx-text-link" href="/about">
            {"More about us "}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
      </section>
      <section className="ppx-app-band">
        <div>
          <div className="ppx-kicker">{"In development"}</div>
          <h2>
            {"Bible app."}
            <br />
            {"Coming soon."}
          </h2>
          <p>
            {
              "We’re developing a Bible app to help you study more deeply. Our hope is that it will also help sustain the ministry and grow our ability to serve families in need."
            }
          </p>
          <Link className="ppx-text-link" href="/bible-app">
            {"Discover the vision "}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
        <div className="ppx-app-book">
          <Icon name="book-open" />
          <div>
            <strong>
              {"Study with"}
              <br />
              {"purpose."}
            </strong>
            <small>{"Peculiar Pioneers"}</small>
          </div>
        </div>
      </section>
      <section className="ppx-section">
        <div className="ppx-section-head">
          <div>
            <div className="ppx-kicker">{"Study the message"}</div>
            <h2>{"Explore the evidence."}</h2>
          </div>
        </div>
        <div className="ppx-topic-grid">
          <Link className="ppx-topic-tile" href="/evidence">
            <Icon name="history" />
            <span>
              <strong>{"Chronological Evidence"}</strong>
              <small>
                {
                  "Explore the ministry’s record of world events from 1844 to 2026."
                }
              </small>
            </span>
            <Icon name="arrow-up-right" />
          </Link>
          <Link className="ppx-topic-tile" href="/prophecy/1844">
            <Icon name="calendar-days" />
            <span>
              <strong>{"October 22, 1844"}</strong>
              <small>
                {
                  "Study the prophecy and Christ’s ministry in the heavenly sanctuary."
                }
              </small>
            </span>
            <Icon name="arrow-up-right" />
          </Link>
        </div>
        <div className="ppx-quote">
          <p>{"“The Bible should never be studied without prayer.”"}</p>
          <cite>{"Ellen G. White · The Great Controversy, 599.3"}</cite>
          <p className="ppx-calendar-source">
            {"Study the context: "}
            <a
              href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-37.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"The Great Controversy, 599.3"}
            </a>
          </p>
        </div>
      </section>
      <section className="ppx-sabbath">
        <div>
          <div className="ppx-kicker">{"A time to rest and worship"}</div>
          <h2>{"Remember the Sabbath."}</h2>
          <p>{"From sunset Friday to sunset Saturday."}</p>
          <Link className="ppx-text-link" href="/beliefs">
            {"Explore the biblical foundation "}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
        <div>
          <blockquote>
            {"“Remember the sabbath day, to keep it holy.”"}
          </blockquote>
          <cite>{"Exodus 20:8 · KJV"}</cite>
        </div>
      </section>
      <section className="ppx-connect">
        <div>
          <h2>
            {"Bring your questions."}
            <br />
            {"Let’s open the Bible."}
          </h2>
          <p>
            {
              "Have a study question or a prayer request? We’d love to hear from you."
            }
          </p>
        </div>
        <Link className="ppx-action ppx-action-dark" href="/contact">
          {"Get in touch"}
          <Icon name="arrow-up-right" />
        </Link>
      </section>
    </>
  );
}
