// Quiz System Types and Utilities

// ============================================
// TYPES
// ============================================

export type QuestionType = 'multiple-choice' | 'true-false' | 'fill-blank'
export type SectionType = 'reading' | 'flashcards' | 'quiz'
export type ModuleStatus = 'not-started' | 'in-progress' | 'completed'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
export type Topic = 'sanctuary' | 'prophecy' | 'sabbath' | 'commandments' | 'last-days' | 'general'

export interface LearningPath {
  id: string
  title: string
  description: string
  topic: Topic
  difficulty: Difficulty
  estimatedTime: string
  icon: string
  modules: string[]
  prerequisites?: string[]
}

export interface Module {
  id: string
  pathId: string
  title: string
  description: string
  order: number
  sections: Section[]
}

export type Section = ReadingSection | FlashcardSection | QuizSection

export interface ReadingSection {
  id: string
  type: 'reading'
  title: string
  content: string
  keyPoints: string[]
  scriptureReferences: string[]
}

export interface FlashcardSection {
  id: string
  type: 'flashcards'
  title: string
  cards: Flashcard[]
}

export interface Flashcard {
  id: string
  front: string
  back: string
  hint?: string
  scriptureRef?: string
}

export interface QuizSection {
  id: string
  type: 'quiz'
  title: string
  passingScore: number
  questions: Question[]
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | FillBlankQuestion

export interface BaseQuestion {
  id: string
  type: QuestionType
  question: string
  explanation: string
  scriptureRef?: string
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice'
  options: string[]
  correctAnswer: number
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false'
  correctAnswer: boolean
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill-blank'
  correctAnswer: string
  acceptedAnswers: string[]
}

// Progress tracking types
export interface QuizProgress {
  version: number
  lastUpdated: string
  paths: Record<string, PathProgress>
}

export interface PathProgress {
  started: string
  lastAccessed: string
  modules: Record<string, ModuleProgress>
}

export interface ModuleProgress {
  status: ModuleStatus
  lastAccessed: string
  sections: Record<string, SectionProgress>
}

export interface SectionProgress {
  completed: boolean
  completedAt?: string
  flashcardsReviewed?: string[]
  quizAttempts?: QuizAttempt[]
  quizBestScore?: number
}

export interface QuizAttempt {
  date: string
  score: number
  totalQuestions: number
  answers: Record<string, { given: string | number | boolean; correct: boolean }>
}

// ============================================
// DATA IMPORTS
// ============================================

import pathsData from '@/content/quiz/paths.json'

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function getAllPaths(): LearningPath[] {
  return pathsData.paths as LearningPath[]
}

export function getPathById(id: string): LearningPath | undefined {
  return getAllPaths().find(path => path.id === id)
}

export function getPathsByTopic(topic: Topic): LearningPath[] {
  return getAllPaths().filter(path => path.topic === topic)
}

export async function getModuleById(moduleId: string): Promise<Module | null> {
  try {
    const module = await import(`@/content/quiz/modules/${moduleId}.json`)
    return module.default as Module
  } catch {
    return null
  }
}

export async function getModulesForPath(pathId: string): Promise<Module[]> {
  const path = getPathById(pathId)
  if (!path) return []

  const modules: Module[] = []
  for (const moduleId of path.modules) {
    const module = await getModuleById(moduleId)
    if (module) modules.push(module)
  }
  return modules.sort((a, b) => a.order - b.order)
}

export function getTopicLabel(topic: Topic): string {
  const labels: Record<Topic, string> = {
    sanctuary: 'Sanctuary',
    prophecy: 'Prophecy',
    sabbath: 'Sabbath',
    commandments: 'Commandments',
    'last-days': 'Last Days',
    general: 'General'
  }
  return labels[topic]
}

export function getDifficultyLabel(difficulty: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  }
  return labels[difficulty]
}

export function getTopicColor(topic: Topic): string {
  const colors: Record<Topic, string> = {
    sanctuary: 'gold',
    prophecy: 'blue',
    sabbath: 'green',
    commandments: 'purple',
    'last-days': 'red',
    general: 'gray'
  }
  return colors[topic]
}
