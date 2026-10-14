import type { Focus } from '../types/exercise'

export const focusList: Focus[] = ['Core', 'Glutes', 'Back', 'Stretch']

export const focusStyles: Record<Focus, string> = {
  Core: 'bg-rose-100 text-rose-700',
  Glutes: 'bg-amber-100 text-amber-700',
  Back: 'bg-emerald-100 text-emerald-700',
  Stretch: 'bg-sky-100 text-sky-700',
}