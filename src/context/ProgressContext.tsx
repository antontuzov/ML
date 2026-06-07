import { createContext, useContext, useState, ReactNode } from 'react'

interface ProgressContextType {
  completedSections: string[]
  toggleSection: (sectionId: string) => void
  getProgress: () => number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedSections, setCompletedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const getProgress = () => {
    const totalSections = 21 // Total number of sections in the handbook
    return Math.round((completedSections.length / totalSections) * 100)
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
