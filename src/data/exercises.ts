import type { Exercise } from '../types/exercise'

import ex1 from '../assets/images/ex1.jpg'
import ex2 from '../assets/images/ex2.jpg'
import ex3 from '../assets/images/ex3.jpg'
import ex4 from '../assets/images/ex4.jpg'
import ex5 from '../assets/images/ex5.jpg'
import ex6 from '../assets/images/ex6.jpg'
import ex7 from '../assets/images/ex7.jpg'
import ex8 from '../assets/images/ex8.jpg'

export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'The Hundred',
    focus: 'Core',
    level: 'Beginner',
    seconds: 60,
    description: 'Lie back, curl up, and pump your arms while you breathe in and out.',
    image: ex1,
  },
  {
    id: 2,
    name: 'Roll Up',
    focus: 'Core',
    level: 'Intermediate',
    seconds: 45,
    description: 'Peel your spine off the mat one bone at a time, then roll back down slowly.',
    image: ex2,
  },
  {
    id: 3,
    name: 'Single Leg Stretch',
    focus: 'Core',
    level: 'Beginner',
    seconds: 45,
    description: 'Alternate pulling one knee in while the other leg extends long.',
    image: ex3,
  },
  {
    id: 4,
    name: 'Bridge',
    focus: 'Glutes',
    level: 'Beginner',
    seconds: 45,
    description: 'Press through your heels and lift your hips, one vertebra at a time.',
    image: ex4,
  },
  {
    id: 5,
    name: 'Side-Lying Leg Lift',
    focus: 'Glutes',
    level: 'Beginner',
    seconds: 60,
    description: 'Lie on your side and lift the top leg with control, keeping hips stacked.',
    image: ex5,
  },
  {
    id: 6,
    name: 'Swan',
    focus: 'Back',
    level: 'Intermediate',
    seconds: 30,
    description: 'Lie face down and press up, lengthening through the front of your body.',
    image: ex6,
  },
  {
    id: 7,
    name: 'Mermaid',
    focus: 'Back',
    level: 'Beginner',
    seconds: 40,
    description: 'Sit tall and reach one arm overhead, bending gently to the side.',
    image: ex7,
  },
  {
    id: 8,
    name: 'Spine Stretch Forward',
    focus: 'Stretch',
    level: 'Beginner',
    seconds: 30,
    description: 'Sit with legs apart and round forward, scooping your belly in.',
    image: ex8,
  },
]