import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
export const metadata: Metadata = { title: "Beliefs" };
export default function Page() {
  return (
    <>
      <section className="ppx-page-intro">
        <div className="ppx-kicker">{"Foundations of faith"}</div>
        <h1>{"What We Believe"}</h1>
        <p>
          {
            "We hold fast to the fundamental truths of Scripture as understood by Seventh-day Adventists, with particular emphasis on the present truth for this generation."
          }
        </p>
      </section>
      <section className="ppx-section">
        <div className="ppx-belief-list">
          <details open>
            <summary>{"The Word of God"}</summary>
            <p>
              {
                "The Holy Scriptures, Old and New Testaments, are the written Word of God. The Bible is the only rule of faith and practice, sufficient for all doctrine and instruction."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"2 Timothy 3:16-17"}</span>
              <span>{"2 Peter 1:20-21"}</span>
              <span>{"Isaiah 8:20"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-37.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 595.1; 598.1–599.3"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/bk-sc-10.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Steps to Christ, 89–91"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The Godhead"}</summary>
            <p>
              {
                "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons. God is immortal, all-powerful, all-knowing, above all, and ever present."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"Deuteronomy 6:4"}</span>
              <span>{"Matthew 28:19"}</span>
              <span>{"1 John 5:7"}</span>
            </div>
          </details>
          <details>
            <summary>{"Salvation in Jesus Christ"}</summary>
            <p>
              {
                "God gave His Son to save us from sin. Christ draws us to repentance, offers forgiveness, and renews the heart. When we surrender to Him and receive Him by faith, His righteousness is our acceptance before God. We cannot earn salvation by our works; living faith bears fruit in loving obedience. We grow by daily dependence on Christ and the power of His Spirit."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"John 3:16"}</span>
              <span>{"Acts 5:31"}</span>
              <span>{"1 John 1:9"}</span>
              <span>{"Ephesians 2:8–10"}</span>
              <span>{"John 15:4–5"}</span>
            </div>
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
                href="https://www.ellenwhite.info/books/bk-sc-06.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Steps to Christ, 49–55"}
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
                href="https://www.ellenwhite.info/books/bk-sc-08.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Steps to Christ, 68–72"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The Sabbath"}</summary>
            <p>
              {
                "The seventh day is the Sabbath of the Lord, a memorial of Creation and a sign of His sanctifying power. We observe it from Friday sunset to Saturday sunset, laying aside secular work for rest, worship, and fellowship with God. We honor the Sabbath as an expression of love and obedience to our Creator."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"Genesis 2:1-3"}</span>
              <span>{"Exodus 20:8-11"}</span>
              <span>{"Isaiah 58:13-14"}</span>
              <span>{"Mark 2:27-28"}</span>
              <span>{"Leviticus 23:32"}</span>
              <span>{"Ezekiel 20:12"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-25.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 433.2–437.2"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-26.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 451.1–453.3"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The Second Coming"}</summary>
            <p>
              {
                "Jesus Christ will return personally, visibly, and in glory. The righteous dead will be raised, and the living righteous will be changed and gathered with them to meet the Lord. We look for His coming with hope, watchfulness, and faithful service, without setting a date for His return."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"John 14:1-3"}</span>
              <span>{"Acts 1:9-11"}</span>
              <span>{"Revelation 1:7"}</span>
              <span>{"Matthew 24:30-31"}</span>
              <span>{"1 Thessalonians 4:16–17"}</span>
              <span>{"1 Corinthians 15:51–54"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-26.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 456.1–457.1"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-40.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 640.3–645.1"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The Sanctuary"}</summary>
            <p>
              {
                "Jesus ministers for us in the heavenly sanctuary on the merits of His sacrifice. His priestly ministry began after His ascension. In 1844 He entered the most holy place to begin the closing work of atonement, including the investigative judgment and the blotting out of sins. He is the Advocate of those who come to God through Him in repentance and faith."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"Hebrews 8:1-5"}</span>
              <span>{"Hebrews 9:23-24"}</span>
              <span>{"Daniel 8:14"}</span>
              <span>{"Revelation 14:6-7"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-23.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 420.2–422.1"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-28.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 482.4–485.2"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The Three Angels' Messages"}</summary>
            <p>
              {
                "Revelation 14:6–12 presents the everlasting gospel, announces that the hour of God’s judgment has come, calls us to worship the Creator, declares Babylon’s fall, and warns against worshiping the beast and his image or receiving his mark. These messages call for the commandments of God and the faith of Jesus. Revelation 18 adds the call for God’s people to come out of Babylon. In the final test, the issue is an informed choice between God’s commandment and enforced false worship."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"Revelation 14:6-12"}</span>
              <span>{"Revelation 18:1-4"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-20.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 355.1–355.3"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-25.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 435.2–450.1"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-38.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 603.1–605.2"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The State of the Dead"}</summary>
            <p>
              {
                "Death is an unconscious sleep until the resurrection. At Christ’s return, the righteous dead will be raised to immortality. The general resurrection of the wicked takes place after the thousand years. Our hope rests in Jesus, who has conquered death."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"Ecclesiastes 9:5-6"}</span>
              <span>{"Psalm 146:4"}</span>
              <span>{"John 11:11-14"}</span>
              <span>{"1 Thessalonians 4:16-17"}</span>
              <span>{"Revelation 20:4–6"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-33.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 545.2–550"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-41.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 660.4–661.2"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"Health Reform"}</summary>
            <p>
              {
                "Our bodies belong to God. We seek to preserve our physical and mental powers through healthful habits and temperance, avoiding practices that harm them. Caring for health is part of our service to God and others; it does not earn salvation. We depend on Christ’s grace for a renewed heart and a life of obedience."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"1 Corinthians 6:19-20"}</span>
              <span>{"1 Corinthians 10:31"}</span>
              <span>{"Romans 12:1-2"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-27.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 473.2–475.1"}
              </a>
              {" · "}
              <a
                href="https://www.ellenwhite.info/books/bk-sc-07.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Steps to Christ, 59–63"}
              </a>
            </p>
          </details>
          <details>
            <summary>{"The Spirit of Prophecy"}</summary>
            <p>
              {
                "We receive the writings of Ellen G. White as prophetic counsel that directs us to Jesus Christ and the Scriptures. The Bible remains the standard by which every teaching and religious experience must be tested. We encourage readers to examine each quotation in its original context."
              }
            </p>
            <div className="ppx-belief-refs">
              <span>{"Revelation 12:17"}</span>
              <span>{"Revelation 19:10"}</span>
              <span>{"Amos 3:7"}</span>
              <span>{"Joel 2:28-29"}</span>
            </div>
            <p className="ppx-calendar-source">
              {"Study the context: "}
              <a
                href="https://www.ellenwhite.info/books/ellen-g-white-book-great-controversy-gc-37.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"The Great Controversy, 593.1; 595.1"}
              </a>
            </p>
          </details>
        </div>
        <div className="ppx-actions">
          <Link className="ppx-action ppx-action-primary" href="/watch">
            {"Explore Bible studies"}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
      </section>
    </>
  );
}
