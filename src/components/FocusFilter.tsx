import { focusList } from '../data/focus'
import type { Focus } from '../types/exercise'

export type FocusOption = Focus | 'All'

type FocusFilterProps = {
  active: FocusOption
  onChange: (option: FocusOption) => void
}

const options: FocusOption[] = ['All', ...focusList]

function FocusFilter({ active, onChange }: FocusFilterProps) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${active === option ? 'bg-rose-400 text-white shadow-sm' : 'bg-white text-stone-500 ring-1 ring-rose-100 hover:bg-rose-50'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default FocusFilter