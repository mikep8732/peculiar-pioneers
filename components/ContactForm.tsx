"use client";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/localStorage";
import Icon from "./Icon";
type Draft = {
  name: string;
  email: string;
  message: string;
  isPrayerRequest: boolean;
  subject?: string;
};
export default function ContactForm() {
  const [draft, setDraft] = useState<Draft>({
    name: "",
    email: "",
    message: "",
    isPrayerRequest: false,
    subject: "A Bible question",
  });
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const saved = getLocalStorage<Draft | null>("contact-form-draft", null);
    if (saved)
      setDraft({ ...saved, subject: saved.subject || "A Bible question" });
  }, []);
  function update(changes: Partial<Draft>) {
    const next = { ...draft, ...changes };
    setDraft(next);
    setLocalStorage("contact-form-draft", next);
    setOpened(false);
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = draft.isPrayerRequest ? "Prayer request" : draft.subject;
    const body = `Name: ${draft.name}\nReply email: ${draft.email}\n\n${draft.message}`;
    window.location.href = `mailto:peculiarpioneers@gmail.com?subject=${encodeURIComponent(subject || "Website inquiry")}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return (
    <form className="ppx-contact-form" onSubmit={submit}>
      <div className="ppx-form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            value={draft.name}
            onChange={(e) => update({ name: e.target.value })}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={draft.email}
            onChange={(e) => update({ email: e.target.value })}
          />
        </label>
      </div>
      <label>
        I’m reaching out about
        <select
          name="subject"
          value={draft.subject}
          onChange={(e) => update({ subject: e.target.value })}
        >
          {[
            "A Bible question",
            "The ministry",
            "The coming Bible app",
            "Supporting the ministry",
            "Something else",
          ].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="ppx-prayer-choice">
        <input
          name="prayer"
          type="checkbox"
          checked={draft.isPrayerRequest}
          onChange={(e) => update({ isPrayerRequest: e.target.checked })}
        />
        This is a prayer request
      </label>
      <label>
        Your message
        <textarea
          name="message"
          required
          value={draft.message}
          onChange={(e) => update({ message: e.target.value })}
        />
      </label>
      <button type="submit" className="ppx-action ppx-action-dark">
        Open email app <Icon name="arrow-up-right" />
      </button>
      <p className="ppx-source-note">
        This opens your email app with a prepared message. Review it and press
        Send there. This website does not send email. Your draft stays in this
        browser.
      </p>
      {opened && (
        <p className="ppx-form-feedback" role="status">
          Your email app was requested. Your message has not been sent by this
          website. If no app opened, email peculiarpioneers@gmail.com directly;
          your draft is still here.
        </p>
      )}
    </form>
  );
}
