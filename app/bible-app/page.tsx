import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
export const metadata: Metadata = { title: "Bible App \u2014 In Development" };
export default function Page() {
  return (
    <>
      <section className="ppx-page-intro">
        <div className="ppx-kicker">{"In development"}</div>
        <h1>
          {"A Bible app."}
          <br />
          {"A growing vision."}
        </h1>
        <p>
          {
            "We’re building a Bible app to support deeper study of Scripture. More details will follow as development progresses."
          }
        </p>
      </section>
      <section className="ppx-section ppx-about-lead">
        <div>
          <div className="ppx-kicker">{"The purpose"}</div>
          <h2>
            {"Grow in the Word."}
            <br />
            {"Help us serve."}
          </h2>
          <p>
            {
              "Our first aim is to create a useful companion for Bible study. We also hope the app can help sustain the ministry and support future practical assistance for families in need."
            }
          </p>
          <p>
            {
              "The app is still in development. Availability, features, and pricing will be announced when they are ready."
            }
          </p>
          <div className="ppx-actions">
            <Link className="ppx-action ppx-action-primary" href="/watch">
              {"Explore our current studies"}
              <Icon name="arrow-up-right" />
            </Link>
          </div>
        </div>
        <div className="ppx-scripture-panel">
          <Icon name="book-open" />
          <blockquote>
            {"“Thy word is a lamp unto my feet, and a light unto my path.”"}
          </blockquote>
          <cite>{"Psalm 119:105 · KJV"}</cite>
        </div>
      </section>
      <section className="ppx-section" style={{ paddingTop: "0" }}>
        <div className="ppx-section-head">
          <div>
            <div className="ppx-kicker">{"Looking ahead"}</div>
            <h2>{"Our vision for serving families."}</h2>
            <p>
              {
                "Areas in which we hope to develop practical support as the ministry grows."
              }
            </p>
          </div>
        </div>
        <div className="ppx-values ppx-vision-grid">
          <div className="ppx-value">
            <span>{"01"}</span>
            <h3>{"Spiritually"}</h3>
            <p>
              {
                "Sharing Bible truth, prayer, and encouragement for a closer walk with Christ."
              }
            </p>
          </div>
          <div className="ppx-value">
            <span>{"02"}</span>
            <h3>{"Mentally"}</h3>
            <p>
              {
                "Developing ways to offer care, encouragement, and helpful connections for families facing difficult seasons."
              }
            </p>
          </div>
          <div className="ppx-value">
            <span>{"03"}</span>
            <h3>{"Physically"}</h3>
            <p>
              {
                "Encouraging healthful living and exploring practical ways to support families’ everyday needs."
              }
            </p>
          </div>
          <div className="ppx-value">
            <span>{"04"}</span>
            <h3>{"Financially"}</h3>
            <p>
              {
                "Working toward the ability to provide practical assistance to families experiencing hardship."
              }
            </p>
          </div>
        </div>
        <div className="ppx-mission-band">
          <h2>{"A vision we hope to build together."}</h2>
          <p>
            {
              "These are plans for the future. As the work develops, we intend to share how the ministry and app contribute to serving others."
            }
          </p>
          <Link className="ppx-text-link" href="/contact">
            {"Connect with the ministry "}
            <Icon name="arrow-up-right" />
          </Link>
        </div>
      </section>
    </>
  );
}
