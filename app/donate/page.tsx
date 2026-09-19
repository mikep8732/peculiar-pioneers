import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
export const metadata: Metadata = { title: "Support the Ministry" };
export default function Page() {
  return (
    <>
      <section className="ppx-page-intro">
        <div className="ppx-kicker">{"Support the work"}</div>
        <h1>{"Support Our Ministry"}</h1>
        <p>
          {
            "Your generous donations help us continue to proclaim present truth and reach souls with the everlasting gospel. Please contact us to learn about the ministry’s current work and giving arrangements."
          }
        </p>
      </section>
      <section className="ppx-section">
        <div className="ppx-support-options">
          <div className="ppx-resource-card">
            <div className="ppx-kicker">{"Coming soon"}</div>
            <h2>{"PayPal"}</h2>
            <p>
              {
                "Online giving is planned. Please contact us to ask about currently available ways to support the ministry."
              }
            </p>
            <Link className="ppx-action ppx-action-dark" href="/contact">
              {"Contact us to give"}
              <Icon name="arrow-up-right" />
            </Link>
          </div>
          <div className="ppx-resource-card">
            <div className="ppx-kicker">{"Other ways to give"}</div>
            <h2>{"Contact Us to Give"}</h2>
            <p>
              {
                "For donation inquiries or other ways to give, please reach out to us directly."
              }
            </p>
            <a className="ppx-email" href="mailto:peculiarpioneers@gmail.com">
              {"peculiarpioneers@gmail.com"}
            </a>
          </div>
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
      <div style={{ height: "35px" }}></div>
    </>
  );
}
