"use client";

import { useState, useEffect, useCallback } from "react";
import type {
  Module,
  Section,
  QuizAttempt,
  ReadingSection,
  FlashcardSection,
  QuizSection,
} from "@/lib/quiz";
import {
  getModuleProgress,
  markSectionComplete,
  saveFlashcardProgress,
  saveQuizAttempt,
  updateModuleStatus,
  initializeModuleProgress,
} from "@/lib/quizProgress";
import ReadingContent from "./ReadingContent";
import FlashcardDeck from "./FlashcardDeck";
import QuizContainer from "./QuizContainer";

interface StudyModuleProps {
  module: Module;
  onComplete?: () => void;
}

export default function StudyModule({ module, onComplete }: StudyModuleProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    new Set(),
  );
  const [mounted, setMounted] = useState(false);

  const currentSection = module.sections[currentSectionIndex];
  const isLastSection = currentSectionIndex === module.sections.length - 1;

  // Load progress on mount
  useEffect(() => {
    setMounted(true);
    initializeModuleProgress(module.pathId, module.id);

    const progress = getModuleProgress(module.pathId, module.id);
    if (progress) {
      const completed = new Set<string>();
      Object.entries(progress.sections).forEach(
        ([sectionId, sectionProgress]) => {
          if (sectionProgress.completed) {
            completed.add(sectionId);
          }
        },
      );
      setCompletedSections(completed);

      // Find first incomplete section
      const firstIncomplete = module.sections.findIndex(
        (s) => !completed.has(s.id),
      );
      if (firstIncomplete !== -1) {
        setCurrentSectionIndex(firstIncomplete);
      }
    }
  }, [module]);

  const handleSectionComplete = useCallback(
    (sectionId: string) => {
      markSectionComplete(module.pathId, module.id, sectionId);
      setCompletedSections((prev) => {
        const newSet = new Set(prev);
        newSet.add(sectionId);
        return newSet;
      });
    },
    [module.pathId, module.id],
  );

  const handleReadingComplete = useCallback(() => {
    handleSectionComplete(currentSection.id);
    if (!isLastSection) {
      setCurrentSectionIndex((prev) => prev + 1);
    } else {
      updateModuleStatus(module.pathId, module.id, "completed");
      onComplete?.();
    }
  }, [
    currentSection,
    handleSectionComplete,
    isLastSection,
    module.pathId,
    module.id,
    onComplete,
  ]);

  const handleFlashcardsComplete = useCallback(
    (knownCards: string[]) => {
      saveFlashcardProgress(
        module.pathId,
        module.id,
        currentSection.id,
        knownCards,
      );
      handleSectionComplete(currentSection.id);
      if (isLastSection) {
        updateModuleStatus(module.pathId, module.id, "completed");
        onComplete?.();
      }
    },
    [
      currentSection.id,
      handleSectionComplete,
      isLastSection,
      module.pathId,
      module.id,
      onComplete,
    ],
  );

  const handleQuizComplete = useCallback(
    (attempt: QuizAttempt) => {
      saveQuizAttempt(module.pathId, module.id, currentSection.id, attempt);

      // Only mark complete if passed
      const quizSection = currentSection as QuizSection;
      if (attempt.score >= quizSection.passingScore) {
        handleSectionComplete(currentSection.id);
        if (isLastSection) {
          updateModuleStatus(module.pathId, module.id, "completed");
          onComplete?.();
        }
      }
    },
    [
      currentSection,
      handleSectionComplete,
      isLastSection,
      module.pathId,
      module.id,
      onComplete,
    ],
  );

  const goToSection = (index: number) => {
    // Only allow going to completed sections or the next one
    const targetSection = module.sections[index];
    if (
      completedSections.has(targetSection.id) ||
      index <= currentSectionIndex
    ) {
      setCurrentSectionIndex(index);
    }
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      {/* Section tabs/navigation */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {module.sections.map((section, index) => {
          const isCompleted = completedSections.has(section.id);
          const isCurrent = index === currentSectionIndex;
          const isAccessible = isCompleted || index <= currentSectionIndex;

          return (
            <button
              key={section.id}
              onClick={() => goToSection(index)}
              disabled={!isAccessible}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                isCurrent
                  ? "bg-gold text-white"
                  : isCompleted
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                    : isAccessible
                      ? "bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300"
                      : "bg-gray-100 dark:bg-dark-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isCompleted && !isCurrent && (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {section.type === "reading" && "Reading"}
              {section.type === "flashcards" && "Flashcards"}
              {section.type === "quiz" && "Quiz"}
            </button>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>Module Progress</span>
          <span>
            {completedSections.size} of {module.sections.length} complete
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{
              width: `${(completedSections.size / module.sections.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Current section content */}
      <div className="bg-white dark:bg-dark-100 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
        {currentSection.type === "reading" && (
          <ReadingContent
            section={currentSection as ReadingSection}
            onComplete={handleReadingComplete}
            isCompleted={completedSections.has(currentSection.id)}
          />
        )}

        {currentSection.type === "flashcards" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {(currentSection as FlashcardSection).title}
            </h2>
            <FlashcardDeck
              cards={(currentSection as FlashcardSection).cards}
              onComplete={handleFlashcardsComplete}
            />
          </div>
        )}

        {currentSection.type === "quiz" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {(currentSection as QuizSection).title}
            </h2>
            <QuizContainer
              questions={(currentSection as QuizSection).questions}
              passingScore={(currentSection as QuizSection).passingScore}
              onComplete={handleQuizComplete}
            />
          </div>
        )}
      </div>

      {/* Continue button (shown when current section is done but not last) */}
      {completedSections.has(currentSection.id) && !isLastSection && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentSectionIndex((prev) => prev + 1)}
            className="px-8 py-3 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors"
          >
            Continue to Next Section
          </button>
        </div>
      )}
    </div>
  );
}
