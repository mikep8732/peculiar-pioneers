"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { StudyTopic, orderedOptions } from "@/lib/studies";
import {
  loadStudyState,
  persistStudyState,
  StudyState,
} from "@/lib/studyProgress";
import StudySources from "./StudySources";
import Icon from "./Icon";
const empty: StudyState = {
  read: [],
  cards: [],
  answers: {},
  attempts: 0,
  best: 0,
};
type Tab = "read" | "cards" | "quiz";
export default function StudyRoom({
  topic,
  topics,
}: {
  topic: StudyTopic;
  topics: { id: string; title: string }[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("read");
  const [state, setState] = useState<StudyState>(empty);
  const [loaded, setLoaded] = useState(false);
  const [card, setCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [question, setQuestion] = useState(0);
  const [summary, setSummary] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const saved = loadStudyState(topic);
    setState(saved);
    setLoaded(true);
    setQuestion(
      Math.max(
        0,
        topic.items.findIndex((i) => saved.answers[i.id] === undefined),
      ),
    );
    setSummary(Object.keys(saved.answers).length === 7);
  }, [topic]);
  function save(next: StudyState, attempt = false) {
    setState(next);
    persistStudyState(topic, next, attempt);
  }
  function answer(index: number) {
    const item = topic.items[question];
    if (state.answers[item.id] !== undefined) return;
    const next = { ...state, answers: { ...state.answers, [item.id]: index } };
    const complete = Object.keys(next.answers).length === 7;
    if (complete) {
      next.attempts = state.attempts + 1;
      next.best = Math.max(
        state.best,
        Math.round(
          (topic.items.filter((i) => i.options[next.answers[i.id]]?.correct)
            .length /
            7) *
            100,
        ),
      );
    }
    save(next, complete);
  }
  const item = topic.items[question];
  const given = state.answers[item.id];
  const answered = given !== undefined;
  const correct = answered && item.options[given].correct;
  const score = topic.items.filter(
    (i) => i.options[state.answers[i.id]]?.correct,
  ).length;
  const allAnswered = Object.keys(state.answers).length === 7;
  function advance() {
    if (question < 6) {
      setQuestion(question + 1);
    } else if (allAnswered) {
      setSummary(true);
    }
    setTimeout(() => heading.current?.focus(), 0);
  }
  function retake() {
    save({ ...state, answers: {} });
    setQuestion(0);
    setSummary(false);
    setTimeout(() => heading.current?.focus(), 0);
  }
  function tabKey(e: React.KeyboardEvent, index: number) {
    if (
      [
        "ArrowDown",
        "ArrowRight",
        "ArrowUp",
        "ArrowLeft",
        "Home",
        "End",
      ].includes(e.key)
    ) {
      e.preventDefault();
      const next =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? 2
            : (index + (["ArrowDown", "ArrowRight"].includes(e.key) ? 1 : 2)) %
              3;
      const id = (["read", "cards", "quiz"] as const)[next];
      setTab(id);
      document.getElementById(`tab-${id}`)?.focus();
    }
  }
  if (!loaded)
    return (
      <section className="ppx-section" aria-busy="true">
        Opening your study…
      </section>
    );
  return (
    <section className="ppx-section ppx-course-section">
      <div className="ppx-study-switch">
        <label htmlFor="study-picker">Choose a study</label>
        <select
          id="study-picker"
          value={topic.id}
          onChange={(e) => router.push(`/quiz/${e.target.value}`)}
        >
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
      </div>
      <div className="ppx-lesson-layout">
        <div>
          <nav
            className="ppx-lesson-menu"
            role="tablist"
            aria-label="Lesson activities"
            aria-orientation="vertical"
          >
            {(
              [
                ["read", "Read & reflect", "book-open"],
                ["cards", "Flashcards", "layers"],
                ["quiz", "Check understanding", "circle-help"],
              ] as const
            ).map(([id, label, icon], i) => (
              <button
                role="tab"
                id={`tab-${id}`}
                key={id}
                aria-controls="study-panel"
                aria-selected={tab === id}
                tabIndex={tab === id ? 0 : -1}
                onKeyDown={(e) => tabKey(e, i)}
                onClick={() => setTab(id)}
              >
                <Icon name={icon} />
                {label}
                <span>7</span>
              </button>
            ))}
          </nav>
          <p className="ppx-session-note">
            Progress is saved in this browser when storage is available. It does
            not sync between devices.
          </p>
          <p className="ppx-session-note">
            {state.read.length}/7 readings · {state.cards.length}/7 cards ·{" "}
            {Object.keys(state.answers).length}/7 answers
          </p>
        </div>
        <div
          className="ppx-lesson-body"
          role="tabpanel"
          id="study-panel"
          aria-labelledby={`tab-${tab}`}
        >
          {tab === "read" && (
            <>
              <div className="ppx-kicker">Read & reflect</div>
              <h2>
                Begin with prayer.
                <br />
                Let Scripture lead.
              </h2>
              <p className="ppx-source-note">
                These explanations summarize the cited passages; they are not
                verbatim quotations from Ellen G. White. Reflection prompts are
                not scored.
              </p>
              <div className="ppx-quote">
                <p>“{topic.verseText}”</p>
                <cite>{topic.verse} · KJV</cite>
              </div>
              <div className="ppx-reading-list">
                {topic.items.map((reading, i) => (
                  <details key={reading.id} open={i === 0 ? true : undefined}>
                    <summary>
                      <span>{String(i + 1).padStart(2, "0")}</span>{" "}
                      {reading.title}
                      {state.read.includes(reading.id) && " · Read"}
                    </summary>
                    <div className="ppx-reading-detail">
                      <p>{reading.reading}</p>
                      <StudySources item={reading} />
                      <div className="ppx-reflect">
                        <strong>Pause & reflect</strong>
                        <p>{reading.reflect}</p>
                      </div>
                      <button
                        className="ppx-action"
                        disabled={state.read.includes(reading.id)}
                        onClick={() =>
                          save({
                            ...state,
                            read: Array.from(
                              new Set([...state.read, reading.id]),
                            ),
                          })
                        }
                      >
                        {state.read.includes(reading.id)
                          ? "Marked as read"
                          : "Mark as read"}
                      </button>
                    </div>
                  </details>
                ))}
              </div>
              <button
                className="ppx-action ppx-action-primary"
                onClick={() => setTab("cards")}
              >
                Practice with flashcards <Icon name="arrow-right" />
              </button>
            </>
          )}
          {tab === "cards" && (
            <>
              <div className="ppx-course-progress">
                <span>Flashcards</span>
                <span>Card {card + 1} of 7</span>
              </div>
              <button
                className="ppx-flashcard"
                aria-label={
                  flipped
                    ? "Show flashcard question"
                    : "Reveal flashcard answer"
                }
                onClick={() => setFlipped(!flipped)}
              >
                <small>{flipped ? "THE ANSWER" : "THINK IT THROUGH"}</small>
                <strong>
                  {flipped
                    ? topic.items[card].flashAnswer
                    : topic.items[card].flashQuestion}
                </strong>
                <span>
                  {flipped
                    ? "Click to see the question"
                    : "Click to reveal the answer"}
                </span>
              </button>
              <StudySources item={topic.items[card]} />
              <div className="ppx-course-navigation">
                <button
                  className="ppx-action"
                  disabled={card === 0}
                  onClick={() => {
                    setCard(card - 1);
                    setFlipped(false);
                  }}
                >
                  Previous card
                </button>
                <button
                  className="ppx-action ppx-action-primary"
                  disabled={!flipped}
                  onClick={() => {
                    save({
                      ...state,
                      cards: Array.from(
                        new Set([...state.cards, topic.items[card].id]),
                      ),
                    });
                    if (card < 6) {
                      setCard(card + 1);
                      setFlipped(false);
                    } else setTab("quiz");
                  }}
                >
                  {card === 6
                    ? "Mark reviewed & start quiz"
                    : "Mark reviewed & next"}
                </button>
              </div>
              <p className="ppx-source-note">
                Keep practicing: use Previous card to revisit any answer.
              </p>
            </>
          )}
          {tab === "quiz" &&
            (summary && allAnswered ? (
              <>
                <h2 ref={heading} tabIndex={-1}>
                  Your study review
                </h2>
                <div className="ppx-quiz-summary">
                  <span className="ppx-score">
                    {score}
                    <small> / 7</small>
                  </span>
                  <h3>
                    {score === 7
                      ? "Well done. Keep growing."
                      : "Keep studying. Every answer is a chance to learn."}
                  </h3>
                  <p>
                    {Math.round((score / 7) * 100)}% correct. Your best score is{" "}
                    {Math.max(state.best, Math.round((score / 7) * 100))}%.
                  </p>
                  <button
                    className="ppx-action ppx-action-dark"
                    onClick={retake}
                  >
                    Retake the quiz
                  </button>
                </div>
                <div className="ppx-review-missed">
                  <h3>
                    {score === 7
                      ? "All answers correct"
                      : "Review missed answers"}
                  </h3>
                  {topic.items
                    .filter((i) => !i.options[state.answers[i.id]]?.correct)
                    .map((i) => (
                      <article className="missed-answer" key={i.id}>
                        <h4>{i.question}</h4>
                        <p>
                          Your answer: {i.options[state.answers[i.id]]?.text}
                        </p>
                        <p>
                          <strong>
                            Correct answer:{" "}
                            {i.options.find((o) => o.correct)?.text}
                          </strong>
                        </p>
                        <p>{i.options[state.answers[i.id]]?.feedback}</p>
                        <StudySources item={i} />
                        <button
                          className="ppx-text-link"
                          onClick={() => {
                            setQuestion(topic.items.indexOf(i));
                            setSummary(false);
                          }}
                        >
                          Review this question
                        </button>
                      </article>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div className="ppx-course-progress">
                  <span>Check understanding</span>
                  <span>Question {question + 1} of 7</span>
                </div>
                <div className="ppx-question-steps" aria-label="Quiz questions">
                  {topic.items.map((q, i) => (
                    <button
                      key={q.id}
                      aria-label={`Question ${i + 1}`}
                      aria-current={i === question ? "step" : undefined}
                      disabled={
                        i > question &&
                        state.answers[topic.items[i - 1].id] === undefined
                      }
                      onClick={() => setQuestion(i)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <h2 ref={heading} tabIndex={-1} className="ppx-question-title">
                  {item.question}
                </h2>
                <div className="ppx-answers">
                  {orderedOptions(item).map(({ option, index }, order) => (
                    <button
                      key={index}
                      disabled={answered}
                      onClick={() => answer(index)}
                      className={
                        answered && option.correct
                          ? "ppx-answer-correct"
                          : answered && index === given
                            ? "ppx-answer-incorrect"
                            : ""
                      }
                    >
                      <span className="ppx-option-letter">
                        {String.fromCharCode(65 + order)}
                      </span>
                      <span>
                        {option.text}
                        {answered && option.correct && (
                          <small>
                            <Icon name="check" />
                            Correct answer
                          </small>
                        )}
                        {answered && index === given && !option.correct && (
                          <small>Your answer</small>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                {!answered && (
                  <details className="ppx-quiz-hint">
                    <summary>Need a hint?</summary>
                    <p>{item.hint}</p>
                  </details>
                )}
                {answered && (
                  <div className="ppx-answer-feedback" role="status">
                    <div
                      className={`ppx-quiz-feedback ${correct ? "ppx-is-correct" : "ppx-is-retry"}`}
                    >
                      <strong>
                        {correct ? "Correct!" : "Not quite. Let’s review."}
                      </strong>
                      <p>{item.options[given].feedback}</p>
                      {!correct && (
                        <p>
                          <strong>
                            Correct answer:{" "}
                            {item.options.find((o) => o.correct)?.text}
                          </strong>
                        </p>
                      )}
                    </div>
                    <StudySources item={item} />
                  </div>
                )}
                <div className="ppx-course-navigation">
                  <button
                    className="ppx-action"
                    disabled={question === 0}
                    onClick={() => setQuestion(question - 1)}
                  >
                    Previous question
                  </button>
                  <button
                    className="ppx-action ppx-action-primary"
                    disabled={!answered || (question === 6 && !allAnswered)}
                    onClick={advance}
                  >
                    {question === 6 ? "See results" : "Next question"}
                  </button>
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
}
