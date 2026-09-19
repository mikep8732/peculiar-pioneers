import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
export const metadata: Metadata = { title: "About" };
export default function Page() {
  return (
    <>
      <section className="ppx-page-intro">
        <div className="ppx-kicker">{"About the ministry"}</div>
        <h1>{"About Peculiar Pioneers"}</h1>
        <p>{"Who we are and why we do what we do"}</p>
      </section>
      <section className="ppx-section">
        <div className="ppx-about-lead">
          <div className="ppx-prose">
            <div className="ppx-kicker">{"Who we are"}</div>
            <p>
              {
                "Peculiar Pioneers is a Seventh-day Adventist ministry sharing the everlasting gospel and the three angels’ messages of Revelation 14. We invite people to know Jesus Christ, study His Word, and prepare for His return through repentance and faith in Him."
              }
            </p>
            <p>
              {
                "The everlasting gospel reveals God’s love in giving His Son to save us from sin. Jesus died for us, rose again, and ministers as our High Priest in the heavenly sanctuary. We depend on His righteousness for acceptance with God and on His Spirit to renew our hearts and enable us to obey His commandments."
              }
            </p>
          </div>
          <div className="ppx-scripture-panel">
            <Icon name="book-open" />
            <blockquote>
              {"“Thy word is a lamp unto my feet, and a light unto my path.”"}
            </blockquote>
            <cite>{"Psalm 119:105 · KJV"}</cite>
          </div>
        </div>
        <div className="ppx-prose" style={{ marginTop: "30px" }}>
          <p>
            {
              "The word ‘peculiar’ in our name comes from 1 Peter 2:9, where God’s people are called ‘a peculiar people’ and are to show forth His praises. The pioneers of the Advent movement remind us to search the Scriptures prayerfully, comparing passage with passage. We seek to study, live, and share the truths of God’s Word with humility and love."
            }
          </p>
          <p>
            {
              "Through sermons, Bible studies, and podcasts, we explain the sanctuary, the Sabbath, the three angels’ messages, and the hope of Christ’s return. We also encourage confession and the forsaking of sin, daily prayer, healthful living, and practical care for others. While Christ intercedes for us, His invitation to repent and receive His grace remains open; our purpose is to help people respond to Him now."
            }
          </p>
          <p className="ppx-calendar-source">
            {"Study the context: "}
            <a
              href="https://www.ellenwhite.info/books/bk-sc-03.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Steps to Christ, 23–26"}
            </a>
            {" · "}
            <a
              href="https://www.ellenwhite.info/books/bk-sc-07.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Steps to Christ, 59–63"}
            </a>
            {" · "}
            <a
              href="https://www.ellenwhite.info/books/bk-sc-09.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Steps to Christ, 77–83"}
            </a>
            {" · "}
            <a
              href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-28.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"The Great Controversy, 482.4–484.2"}
            </a>
          </p>
        </div>
        <div className="ppx-mission-band">
          <div className="ppx-kicker">{"Our Mission"}</div>
          <h2>
            {"The everlasting gospel."}
            <br />
            {"Present truth for our time."}
          </h2>
          <p>
            {
              "To proclaim the everlasting gospel and the three angels’ messages: calling people to repentance and faith in Jesus, announcing the hour of God’s judgment, honoring the Creator and His commandments, and sharing His call to leave Babylon and be ready for Christ’s return."
            }
          </p>
        </div>
      </section>
      <section className="ppx-section" style={{ paddingTop: "0" }}>
        <div className="ppx-section-head">
          <h2>{"Our Values"}</h2>
        </div>
        <div className="ppx-values ppx-about-values">
          <div className="ppx-value">
            <span>{"01"}</span>
            <h3>{"Scripture First"}</h3>
            <p>
              {
                "The Bible is our rule of faith and practice. We study it prayerfully and test every teaching by its testimony."
              }
            </p>
          </div>
          <div className="ppx-value">
            <span>{"02"}</span>
            <h3>{"Present Truth"}</h3>
            <p>
              {
                "We share the everlasting gospel with the sanctuary, the Sabbath, the judgment, and the three angels’ messages as we look for Christ’s return."
              }
            </p>
          </div>
          <div className="ppx-value">
            <span>{"03"}</span>
            <h3>{"Christ-Centered"}</h3>
            <p>
              {
                "Jesus is our Saviour, righteousness, and High Priest. We depend on His grace for forgiveness and for a life of loving obedience."
              }
            </p>
          </div>
          <div className="ppx-value">
            <span>{"04"}</span>
            <h3>{"Practical Godliness"}</h3>
            <p>
              {
                "Faith in Christ bears fruit in honesty, kindness, modesty, temperance, and service. We seek to honor God in our thoughts, words, dress, health, and conduct."
              }
            </p>
          </div>
        </div>
      </section>
      <section className="ppx-section" style={{ paddingTop: "0" }}>
        <div className="ppx-mission-band" style={{ marginTop: "0" }}>
          <div className="ppx-kicker">{"Looking ahead"}</div>
          <h2>{"Our vision for serving families."}</h2>
          <p>
            {
              "We hope to grow a ministry that supports families facing mental, physical, spiritual, and financial struggles. Alongside sharing Bible truth, our desire is to develop practical ways to serve our community and help those in need."
            }
          </p>
          <p>
            {
              "Our Bible app is one part of that vision. As it develops, we hope it can support both the ministry’s work and future assistance for families."
            }
          </p>
          <Link className="ppx-text-link" href="/bible-app">
            {"Learn about the coming Bible app "}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
      </section>
      <section className="ppx-connect">
        <div>
          <h2>{"Let’s study together."}</h2>
          <p>{"Find a conversation that helps you take your next step."}</p>
        </div>
        <Link className="ppx-action ppx-action-dark" href="/watch">
          {"Explore the studies"}
          <Icon name="arrow-up-right" />
        </Link>
      </section>
    </>
  );
}
