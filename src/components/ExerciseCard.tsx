import { Check, Clock, Plus } from 'lucide-react'
import type { Exercise } from '../types/exercise'
import { focusStyles } from '../data/focus'

type ExerciseCardProps = {
  exercise: Exercise
  isAdded: boolean
  onToggle: (id: number) => void
}

function ExerciseCard({ exercise, isAdded, onToggle }: ExerciseCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/5] overflow-hidden bg-rose-50">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${focusStyles[exercise.focus]}`}
          >
            {exercise.focus}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-stone-400">
            <Clock className="h-3.5 w-3.5" />
            {exercise.seconds}s
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-stone-800">{exercise.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-500">{exercise.description}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="text-xs font-semibold text-stone-400">{exercise.level}</p>
          <button
            onClick={() => onToggle(exercise.id)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition ${
              isAdded
                ? 'bg-rose-400 text-white hover:bg-rose-500'
                : 'bg-rose-50 text-rose-500 hover:bg-rose-100'
            }`}
          >
            {isAdded ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {isAdded ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ExerciseCard