import { useState } from 'react'
import ExerciseGrid from './components/ExerciseGrid'
import Hero from './components/Hero'
import SessionPanel from './components/SessionPanel'
import { exercises } from './data/exercises'
import type { Exercise } from './types/exercise'

function App() {
  const [sessionIds, setSessionIds] = useState<number[]>([])

  const toggleExercise = (id: number) => {
    setSessionIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    )
  }

  const clearSession = () => setSessionIds([])

  const sessionExercises = sessionIds
    .map((id) => exercises.find((exercise) => exercise.id === id))
    .filter((exercise): exercise is Exercise => exercise !== undefined)

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
          <ExerciseGrid sessionIds={sessionIds} onToggle={toggleExercise} />
          <SessionPanel
            exercises={sessionExercises}
            onRemove={toggleExercise}
            onClear={clearSession}
          />
        </div>
      </main>
    </div>
  )
}

export default App