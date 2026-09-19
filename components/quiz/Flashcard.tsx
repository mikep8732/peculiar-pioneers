"use client";

import { useState } from "react";
import type { Flashcard as FlashcardType } from "@/lib/quiz";

interface FlashcardProps {
  card: FlashcardType;
  onKnown?: () => void;
  onReview?: () => void;
  showControls?: boolean;
}

export default function Flashcard({
  card,
  onKnown,
  onReview,
  showControls = true,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Card container with perspective */}
      <div
        className="relative h-64 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label={
          isFlipped ? "Show flashcard question" : "Reveal flashcard answer"
        }
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleFlip();
          }
        }}
      >
        {/* Card inner - handles rotation */}
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front side */}
          <div
            className="absolute inset-0 w-full h-full p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 flex flex-col items-center justify-center text-center"
            aria-hidden={isFlipped}
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {card.front}
            </p>
            {card.hint && (
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
                Hint: {card.hint}
              </p>
            )}
            <p className="absolute bottom-4 text-xs text-gray-400 dark:text-gray-500">
              Tap to reveal answer
            </p>
          </div>

          {/* Back side */}
          <div
            className="absolute inset-0 w-full h-full p-6 rounded-xl border-2 border-gold bg-gold/5 dark:bg-gold/10 flex flex-col items-center justify-center text-center"
            aria-hidden={!isFlipped}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {card.back}
            </p>
            {card.scriptureRef && (
              <p className="mt-4 text-sm text-gold font-medium">
                {card.scriptureRef}
              </p>
            )}
            <p className="absolute bottom-4 text-xs text-gray-400 dark:text-gray-500">
              Tap to see question
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      {showControls && isFlipped && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
              onReview?.();
            }}
            className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
          >
            Need Review
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
              onKnown?.();
            }}
            className="px-6 py-2 rounded-lg bg-gold text-white hover:bg-gold-600 transition-colors"
          >
            Got It
          </button>
        </div>
      )}
    </div>
  );
}
