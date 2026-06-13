import { createContext, useContext, useState, ReactNode } from 'react'
import { TOTAL_ARTICLES } from '@/content'

interface ProgressContextType {
  completedSections: string[]
  toggleSection: (sectionId: string) => void
  getProgress: () => number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

const STORAGE_KEY = 'ml-handbook-progress'

function loadProgress(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedSections, setCompletedSections] = useState<string[]>(loadProgress)

  const toggleSection = (sectionId: string) => {
    setCompletedSections(prev => {
      const next = prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const getProgress = () => {
    return Math.round((completedSections.length / TOTAL_ARTICLES) * 100)
  }

  return (
    <ProgressContext.Provider value={{ completedSections, toggleSection, getProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
