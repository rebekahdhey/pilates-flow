import { Flower2, Timer, X } from 'lucide-react'
import type { Exercise } from '../types/exercise'
import { formatDuration } from '../utils/time'

type SessionPanelProps = {
  exercises: Exercise[]
  onRemove: (id: number) => void
  onClear: () => void
}

function SessionPanel({ exercises, onRemove, onClear }: SessionPanelProps) {
  const totalSeconds = exercises.reduce((sum, exercise) => sum + exercise.seconds, 0)

  return (
    <aside className="lg:pt-12">
      <div className="rounded-3xl border border-rose-100 bg-white p-5 shadow-sm lg:sticky lg:top-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-800">My session ✨</h2>
          {exercises.length > 0 && (
            <button
              onClick={onClear}
              className="text-sm font-semibold text-stone-400 transition hover:text-rose-500"
            >
              Clear
            </button>
          )}
        </div>

        {exercises.length === 0 ? (
          <div className="mt-6 flex flex-col items-center rounded-2xl bg-rose-50/60 px-4 py-8 text-center">
            <Flower2 className="h-8 w-8 text-rose-300" />
            <p className="mt-3 text-sm font-semibold text-stone-500">
              Your session is empty. Press Add on a move to start building your flow.
            </p>
          </div>
        ) : (
          <>
            <ol className="mt-4 space-y-2">
              {exercises.map((exercise, index) => (
                <li
                  key={exercise.id}
                  className="flex items-center gap-3 rounded-2xl bg-rose-50/60 p-2 pr-3"
                >
                  <img
                    src={exercise.image}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-stone-800">
                      {index + 1}. {exercise.name}
                    </p>
                    <p className="text-xs font-semibold text-stone-400">{exercise.seconds}s</p>
                  </div>
                  <button
                    onClick={() => onRemove(exercise.id)}
                    aria-label={`Remove ${exercise.name}`}
                    className="rounded-full p-1.5 text-stone-400 transition hover:bg-white hover:text-rose-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-rose-400 px-4 py-3 text-white">
              <span className="flex items-center gap-2 text-sm font-bold">
                <Timer className="h-4 w-4" />
                Total time
              </span>
              <span className="font-bold">{formatDuration(totalSeconds)}</span>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}

export default SessionPanel