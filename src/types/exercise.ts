export type Focus = 'Core' | 'Glutes' | 'Back' | 'Stretch'

export type Level = 'Beginner' | 'Intermediate'

export type Exercise = {
  id: number
  name: string
  focus: Focus
  level: Level
  seconds: number
  description: string
  image: string
}