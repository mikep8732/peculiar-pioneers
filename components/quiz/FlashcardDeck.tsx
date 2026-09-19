"use client";

import { useState } from "react";
import type { Flashcard as FlashcardType } from "@/lib/quiz";
import Flashcard from "./Flashcard";

interface FlashcardDeckProps {
  cards: FlashcardType[];
  onComplete?: (knownCards: string[], reviewCards: string[]) => void;
}

export default function FlashcardDeck({
  cards,
  onComplete,
}: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [knownCards, setKnownCards] = useState<string[]>([]);
  const [reviewCards, setReviewCards] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const [activeCards, setActiveCards] = useState(cards);
  const currentCard = activeCards[currentIndex];
  const progress = ((currentIndex + 1) / activeCards.length) * 100;

  const recordCard = (known: boolean) => {
    const nextKnown = known
      ? Array.from(new Set([...knownCards, currentCard.id]))
      : knownCards.filter((id) => id !== currentCard.id);
    const nextReview = known
      ? reviewCards.filter((id) => id !== currentCard.id)
      : Array.from(new Set([...reviewCards, currentCard.id]));
    setKnownCards(nextKnown);
    setReviewCards(nextReview);
    if (currentIndex < activeCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
      onComplete?.(nextKnown, nextReview);
    }
  };
  const handleKnown = () => recordCard(true);
  const handleReview = () => recordCard(false);
  const handleRestart = () => {
    setActiveCards(cards);
    setCurrentIndex(0);
    setKnownCards([]);
    setReviewCards([]);
    setIsComplete(false);
  };
  const handleReviewOnly = () => {
    const remaining = cards.filter((c) => reviewCards.includes(c.id));
    if (remaining.length) {
      setActiveCards(remaining);
      setCurrentIndex(0);
      setIsComplete(false);
    }
  };

  if (isComplete) {
    const knownPercent = Math.round((knownCards.length / cards.length) * 100);

    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Flashcards Complete!
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You marked{" "}
          <span className="font-semibold text-gold">{knownCards.length}</span>{" "}
          cards as known and{" "}
          <span className="font-semibold">{reviewCards.length}</span> for
          review.
        </p>

        {/* Results summary */}
        <div className="max-w-xs mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>Known</span>
            <span>{knownPercent}%</span>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold rounded-full transition-all duration-500"
              style={{ width: `${knownPercent}%` }}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {reviewCards.length > 0 && (
            <button
              onClick={handleReviewOnly}
              className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
            >
              Review Again ({reviewCards.length})
            </button>
          )}
          <button
            onClick={handleRestart}
            className="px-6 py-2 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>
            Card {currentIndex + 1} of {activeCards.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current card */}
      <Flashcard
        key={currentCard.id}
        card={currentCard}
        onKnown={handleKnown}
        onReview={handleReview}
      />

      {/* Navigation dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {activeCards.map((card, index) => (
          <div
            key={card.id}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-gold"
                : knownCards.includes(card.id)
                  ? "bg-green-500"
                  : reviewCards.includes(card.id)
                    ? "bg-orange-500"
                    : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Skip option */}
      <div className="text-center mt-4">
        <button
          onClick={handleReview}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          Review this card later
        </button>
      </div>
    </div>
  );
}
