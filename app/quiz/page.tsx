import type { Metadata } from "next";
import Link from "next/link";
import { studyData } from "@/lib/studies";
import PageIntro from "@/components/PageIntro";
import Icon from "@/components/Icon";
export const metadata: Metadata = { title: "Bible Study & Flashcards" };
export default function Studies() {
  return (
    <>
      <PageIntro
        kicker="Bible study & flashcards"
        title={
          <>
            Choose a study.
            <br />
            Grow in the Word.
          </>
        }
      >
        Follow one subject from Scripture into reflection, recall, and
        understanding. Begin wherever your questions lead.
      </PageIntro>
      <section className="ppx-section ppx-study-catalog">
        <div className="ppx-study-welcome">
          {[
            ["book-open", "Read & reflect", "Understand seven key truths."],
            ["layers", "Flashcards", "Recall them in your own words."],
            ["circle-help", "Check understanding", "Learn from each answer."],
          ].map(([icon, title, text]) => (
            <div key={title}>
              <Icon name={icon} />
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <p className="ppx-source-note">
          KJV Scripture · Explanations drawn from Ellen G. White’s writings.
          Open the references to read each passage in context.
        </p>
        {studyData.groups.map((group) => (
          <section key={group} className="ppx-study-group">
            <div className="ppx-section-head">
              <h2>{group}</h2>
            </div>
            <div className="ppx-topic-grid">
              {studyData.topics
                .filter((t) => t.group === group)
                .map((t) => (
                  <Link
                    key={t.id}
                    href={`/quiz/${t.id}`}
                    className="ppx-topic-tile ppx-study-topic"
                  >
                    <Icon name={t.icon} />
                    <span>
                      <strong>{t.title}</strong>
                      <small>{t.description}</small>
                      <span className="ppx-topic-counts">
                        7 readings · 7 cards · 7 questions
                      </span>
                    </span>
                    <Icon name="arrow-up-right" />
                  </Link>
                ))}
            </div>
          </section>
        ))}
        <div className="ppx-study-more">
          <div>
            <div className="ppx-kicker">Go deeper</div>
            <h2>1844 &amp; the Sanctuary</h2>
            <p>
              Continue with the dedicated study of Daniel’s prophecy and
              Christ’s heavenly ministry.
            </p>
          </div>
          <Link className="ppx-action ppx-action-primary" href="/prophecy/1844">
            Open the 1844 study <Icon name="arrow-up-right" />
          </Link>
        </div>
        <p className="study-progress-note">
          Your progress is saved in this browser when storage is available. It
          does not sync between devices. Your saved progress in the original
          sanctuary introduction is retained.
        </p>
        <div className="ppx-actions">
          <Link
            className="ppx-action"
            href="/quiz/sanctuary-foundations/sanctuary-intro"
          >
            Continue the original sanctuary introduction
          </Link>
          <Link className="ppx-action" href="/watch">
            Watch the video studies
          </Link>
          <Link className="ppx-action" href="/beliefs">
            Explore our beliefs
          </Link>
        </div>
      </section>
      <section className="ppx-app-band">
        <div>
          <div className="ppx-kicker">In development</div>
          <h2>
            Bible app.
            <br />
            Coming soon.
          </h2>
          <p>
            We’re developing a Bible app to help you study more deeply. Our hope
            is that it will also help sustain the ministry and grow our ability
            to serve families in need.
          </p>
          <Link className="ppx-text-link" href="/bible-app">
            Discover the vision <Icon name="arrow-up-right" />
          </Link>
        </div>
        <div className="ppx-app-book">
          <Icon name="book-open" />
          <div>
            <strong>
              Study with
              <br />
              purpose.
            </strong>
            <small>Peculiar Pioneers</small>
          </div>
        </div>
      </section>
    </>
  );
}
