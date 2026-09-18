'use client'

import { getLocalStorage, setLocalStorage } from '@/lib/localStorage'
import type { QuizProgress, PathProgress, ModuleProgress, SectionProgress, QuizAttempt, ModuleStatus } from '@/lib/quiz'

const QUIZ_PROGRESS_KEY = 'quiz-progress'

function getDefaultProgress(): QuizProgress {
  return {
    version: 1,
    lastUpdated: new Date().toISOString(),
    paths: {}
  }
}

export function getQuizProgress(): QuizProgress {
  return getLocalStorage<QuizProgress>(QUIZ_PROGRESS_KEY, getDefaultProgress())
}

export function saveQuizProgress(progress: QuizProgress): void {
  progress.lastUpdated = new Date().toISOString()
  setLocalStorage(QUIZ_PROGRESS_KEY, progress)
}

export function getPathProgress(pathId: string): PathProgress | null {
  const progress = getQuizProgress()
  return progress.paths[pathId] ?? null
}

export function getModuleProgress(pathId: string, moduleId: string): ModuleProgress | null {
  const pathProgress = getPathProgress(pathId)
  return pathProgress?.modules[moduleId] ?? null
}

export function getSectionProgress(pathId: string, moduleId: string, sectionId: string): SectionProgress | null {
  const moduleProgress = getModuleProgress(pathId, moduleId)
  return moduleProgress?.sections[sectionId] ?? null
}

export function initializePathProgress(pathId: string): void {
  const progress = getQuizProgress()
  if (!progress.paths[pathId]) {
    progress.paths[pathId] = {
      started: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      modules: {}
    }
    saveQuizProgress(progress)
  }
}

export function initializeModuleProgress(pathId: string, moduleId: string): void {
  const progress = getQuizProgress()

  if (!progress.paths[pathId]) {
    progress.paths[pathId] = {
      started: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      modules: {}
    }
  }

  if (!progress.paths[pathId].modules[moduleId]) {
    progress.paths[pathId].modules[moduleId] = {
      status: 'in-progress',
      lastAccessed: new Date().toISOString(),
      sections: {}
    }
  }

  progress.paths[pathId].lastAccessed = new Date().toISOString()
  saveQuizProgress(progress)
}

export function markSectionComplete(pathId: string, moduleId: string, sectionId: string): void {
  const progress = getQuizProgress()

  // Initialize path if needed
  if (!progress.paths[pathId]) {
    progress.paths[pathId] = {
      started: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      modules: {}
    }
  }

  // Initialize module if needed
  if (!progress.paths[pathId].modules[moduleId]) {
    progress.paths[pathId].modules[moduleId] = {
      status: 'in-progress',
      lastAccessed: new Date().toISOString(),
      sections: {}
    }
  }

  // Mark section complete
  progress.paths[pathId].modules[moduleId].sections[sectionId] = {
    ...progress.paths[pathId].modules[moduleId].sections[sectionId],
    completed: true,
    completedAt: new Date().toISOString()
  }

  progress.paths[pathId].modules[moduleId].lastAccessed = new Date().toISOString()
  progress.paths[pathId].lastAccessed = new Date().toISOString()

  saveQuizProgress(progress)
}

export function updateModuleStatus(pathId: string, moduleId: string, status: ModuleStatus): void {
  const progress = getQuizProgress()

  if (progress.paths[pathId]?.modules[moduleId]) {
    progress.paths[pathId].modules[moduleId].status = status
    progress.paths[pathId].modules[moduleId].lastAccessed = new Date().toISOString()
    saveQuizProgress(progress)
  }
}

export function saveFlashcardProgress(pathId: string, moduleId: string, sectionId: string, reviewedCards: string[]): void {
  const progress = getQuizProgress()

  if (!progress.paths[pathId]?.modules[moduleId]) {
    initializeModuleProgress(pathId, moduleId)
  }

  const currentSection = progress.paths[pathId].modules[moduleId].sections[sectionId] || {
    completed: false
  }

  progress.paths[pathId].modules[moduleId].sections[sectionId] = {
    ...currentSection,
    flashcardsReviewed: reviewedCards
  }

  saveQuizProgress(progress)
}

export function saveQuizAttempt(
  pathId: string,
  moduleId: string,
  sectionId: string,
  attempt: QuizAttempt
): void {
  const progress = getQuizProgress()

  if (!progress.paths[pathId]?.modules[moduleId]) {
    initializeModuleProgress(pathId, moduleId)
  }

  const currentSection = progress.paths[pathId].modules[moduleId].sections[sectionId] || {
    completed: false
  }

  const existingAttempts = currentSection.quizAttempts || []
  const currentBest = currentSection.quizBestScore || 0

  progress.paths[pathId].modules[moduleId].sections[sectionId] = {
    ...currentSection,
    quizAttempts: [...existingAttempts, attempt],
    quizBestScore: Math.max(currentBest, attempt.score)
  }

  saveQuizProgress(progress)
}

export function getPathCompletionPercent(pathId: string, totalModules: number): number {
  const pathProgress = getPathProgress(pathId)
  if (!pathProgress || totalModules === 0) return 0

  const completedModules = Object.values(pathProgress.modules).filter(
    m => m.status === 'completed'
  ).length

  return Math.round((completedModules / totalModules) * 100)
}

export function getModuleCompletionPercent(pathId: string, moduleId: string, totalSections: number): number {
  const moduleProgress = getModuleProgress(pathId, moduleId)
  if (!moduleProgress || totalSections === 0) return 0

  const completedSections = Object.values(moduleProgress.sections).filter(
    s => s.completed
  ).length

  return Math.round((completedSections / totalSections) * 100)
}

export function isPrerequisiteMet(prerequisitePathIds: string[] | undefined): boolean {
  if (!prerequisitePathIds || prerequisitePathIds.length === 0) return true

  const progress = getQuizProgress()

  return prerequisitePathIds.every(pathId => {
    const pathProgress = progress.paths[pathId]
    if (!pathProgress) return false

    // Check if at least one module is completed
    return Object.values(pathProgress.modules).some(m => m.status === 'completed')
  })
}

export function resetProgress(): void {
  setLocalStorage(QUIZ_PROGRESS_KEY, getDefaultProgress())
}
