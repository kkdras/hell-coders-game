import { Figure, GameConstructor } from './core'
import { figures } from './const'

HTMLCanvasElement.prototype.getContext = jest.fn()

describe('GameConstructor class', () => {
  const canvas = document.createElement('canvas')
  canvas.id = 'canvas'
  canvas.width = 200
  canvas.height = 200
  const game = new GameConstructor({
    canvas,
    cellSize: 34,
    movesBoundary: 50
  })
  let figureSequence: [Figure, Figure]
  beforeEach(() => {
    figureSequence = [
      {
        name: 'J',
        matrix: [
          [1, 0, 0],
          [1, 1, 1],
          [0, 0, 0]
        ],
        column: 4,
        row: 16
      },
      {
        name: 'J',
        matrix: [
          [1, 0, 0],
          [1, 1, 1],
          [0, 0, 0]
        ],
        column: 4,
        row: 16
      }
    ]
  })

  it('should be initialized', () => {
    expect(game).toBeTruthy()
  })

  it('has figure J with the right rotations', () => {
    expect(figures['J']).toEqual(figureSequence[0].matrix)
  })

  it('should rotate figure right', () => {
    game.figureSequence = figureSequence
    game.rotateFigureRight()
    expect(game.figureSequence[0].matrix).toEqual([
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ])
  })

  it('should rotate figure left', () => {
    game.figureSequence = figureSequence
    game.rotateFigureLeft()
    expect(game.figureSequence[0].matrix).toEqual([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ])
  })

  it('should move figure to right', () => {
    game.figureSequence = figureSequence
    game.moveFigureToRight()
    expect(game.figureSequence[0].column).toEqual(5)
  })

  it('should move figure to left', () => {
    game.figureSequence = figureSequence
    game.moveFigureToLeft()
    expect(game.figureSequence[0].column).toEqual(3)
  })
})
