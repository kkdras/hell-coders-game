export type Matrix = number[][]

export const figureNames = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'] as const

export type FigureNames = typeof figureNames[number]

export const figures: Record<FigureNames, Matrix> = {
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ]
}

export enum Colors {
  GREEN = 'green',
  RED = 'red',
  DARK_MAGENTA = 'darkMagenta',
  YELLOW = 'yellow',
  PINK = 'PINK',
  ORANGE = 'orange',
  BLUE = 'blue'
}

export const figuresColors: Record<FigureNames, Colors> = {
  I: Colors.BLUE,
  J: Colors.RED,
  L: Colors.DARK_MAGENTA,
  O: Colors.GREEN,
  S: Colors.ORANGE,
  T: Colors.YELLOW,
  Z: Colors.PINK
}
