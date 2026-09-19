import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
export const metadata: Metadata = { title: "Contact & Prayer" };
export default function Contact() {
  return (
    <>
      <PageIntro kicker="Connect with the ministry" title="Contact Us">
        Have a question or a prayer request? Prepare an email below, or contact
        us directly.
      </PageIntro>
      <section className="ppx-section ppx-contact-layout">
        <div>
          <div className="ppx-kicker">Get in touch</div>
          <h2>What’s on your heart?</h2>
          <p>
            Have a question about a study, a prayer request, or something you’d
            like to share? We’d love to hear from you.
          </p>
          <a className="ppx-email" href="mailto:peculiarpioneers@gmail.com">
            peculiarpioneers@gmail.com
          </a>
          <div className="ppx-scripture-panel contact-quote">
            <Icon name="heart-handshake" />
            <blockquote>“Pray one for another…”</blockquote>
            <cite>James 5:16 · KJV excerpt</cite>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
