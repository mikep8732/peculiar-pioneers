"use client";
import { getQuizProgress, saveQuizProgress } from "./quizProgress";
import type { StudyTopic } from "./studies";
import type { SectionProgress } from "./quiz";
const moduleId = "reviewed-2026-09";
export type StudyState = {
  read: string[];
  cards: string[];
  answers: Record<string, number>;
  attempts: number;
  best: number;
};
export function loadStudyState(topic: StudyTopic): StudyState {
  const module =
    getQuizProgress().paths[`study:${topic.id}`]?.modules?.[moduleId];
  const valid = new Set(topic.items.map((i) => i.id));
  const quiz = module?.sections?.quiz;
  const answers = Object.fromEntries(
    Object.entries(quiz?.studyAnswers || {}).filter(
      ([id, index]) =>
        valid.has(id) && Number.isInteger(index) && index >= 0 && index < 4,
    ),
  );
  return {
    read: topic.items
      .filter((i) => module?.sections?.[i.id]?.completed)
      .map((i) => i.id),
    cards: (module?.sections?.flashcards?.flashcardsReviewed || []).filter(
      (id) => valid.has(id),
    ),
    answers,
    attempts: quiz?.quizAttempts?.length || 0,
    best: quiz?.quizBestScore || 0,
  };
}
export function persistStudyState(
  topic: StudyTopic,
  state: StudyState,
  recordAttempt = false,
) {
  const progress = getQuizProgress();
  const key = `study:${topic.id}`;
  const now = new Date().toISOString();
  const path = (progress.paths[key] ||= {
    started: now,
    lastAccessed: now,
    modules: {},
  });
  const module = (path.modules[moduleId] ||= {
    status: "in-progress",
    lastAccessed: now,
    sections: {},
  });
  for (const item of topic.items) {
    if (state.read.includes(item.id))
      module.sections[item.id] = {
        completed: true,
        completedAt: module.sections[item.id]?.completedAt || now,
      };
  }
  module.sections.flashcards = {
    completed: state.cards.length === 7,
    flashcardsReviewed: state.cards,
  };
  const previous = module.sections.quiz;
  const score = Math.round(
    (topic.items.filter((i) => i.options[state.answers[i.id]]?.correct).length /
      topic.items.length) *
      100,
  );
  const quiz: SectionProgress = {
    ...previous,
    completed: previous?.completed || Object.keys(state.answers).length === 7,
    studyAnswers: state.answers,
  };
  if (recordAttempt) {
    quiz.quizAttempts = [
      ...(previous?.quizAttempts || []),
      {
        date: now,
        score,
        totalQuestions: topic.items.length,
        answers: Object.fromEntries(
          topic.items.map((i) => [
            i.id,
            {
              given: state.answers[i.id],
              correct: i.options[state.answers[i.id]]?.correct === true,
            },
          ]),
        ),
      },
    ];
    quiz.quizBestScore = Math.max(previous?.quizBestScore || 0, score);
  }
  module.sections.quiz = quiz;
  module.lastAccessed = now;
  path.lastAccessed = now;
  module.status =
    state.read.length === 7 && state.cards.length === 7 && quiz.completed
      ? "completed"
      : "in-progress";
  saveQuizProgress(progress);
}
