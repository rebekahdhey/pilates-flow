import { useState } from 'react'
import ExerciseCard from './ExerciseCard'
import FocusFilter from './FocusFilter'
import type { FocusOption } from './FocusFilter'
import { exercises } from '../data/exercises'

type ExerciseGridProps = {
  sessionIds: number[]
  onToggle: (id: number) => void
}

function ExerciseGrid({ sessionIds, onToggle }: ExerciseGridProps) {
  const [activeFocus, setActiveFocus] = useState<FocusOption>('All')

  const visible =
    activeFocus === 'All'
      ? exercises
      : exercises.filter((exercise) => exercise.focus === activeFocus)

  return (
    <section className="pt-12">
      <h2 className="text-2xl font-bold text-stone-800">Choose your moves 🌸</h2>
      <p className="mt-1 mb-6 text-stone-500">
        Showing {visible.length} of {exercises.length} exercises.
      </p>

      <div className='mb-8'>
        <FocusFilter active={activeFocus} onChange={setActiveFocus}/>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isAdded={sessionIds.includes(exercise.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  )
}

export default ExerciseGrid