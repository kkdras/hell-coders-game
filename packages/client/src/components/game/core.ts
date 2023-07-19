import {
  Colors,
  figureNames,
  FigureNames,
  figures,
  figuresColors,
  Matrix
} from './const'
import { EventBus, getRandomInt, rotateMatrix } from './utils'
import Image from '../../image/gameover.png'

interface FigureParameters {
  name: FigureNames
  matrix: Matrix
  row: number
  column: number
}

export class Figure implements FigureParameters {
  name: FigureNames
  matrix: Matrix
  row: number
  column: number

  constructor({ name, matrix, row, column }: FigureParameters) {
    this.name = name
    this.matrix = matrix
    this.row = row
    this.column = column
  }
}

type GameParameters = {
  movesBoundary?: number
  canvas: HTMLCanvasElement
  cellSize?: number
}

export class GameConstructor extends EventBus {
  private context: CanvasRenderingContext2D
  private canvas: HTMLCanvasElement
  private cellSize: number
  private gameField: (number | FigureNames)[][] = []
  private rAF: number | null = null
  figureSequence: [Figure, Figure] | null = null
  private fieldHeight = 20
  private fieldWidth = 10
  public isGameEnd = true
  public points = 0

  // milliseconds
  private movesBoundary: number
  private lastedTime = 0
  private prevTime: number = Date.now()

  public endMessage = 'GAME OVER'
  public startMessage = 'GAME STARTING...'
  public beforeStartSeconds = 4

  constructor({ movesBoundary = 800, canvas, cellSize = 34 }: GameParameters) {
    super()
    this.movesBoundary = movesBoundary
    this.canvas = canvas
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D
    this.cellSize = cellSize

    this.loop = this.loop.bind(this)
  }

  private createNewFigure(): Figure {
    const index = getRandomInt(0, figureNames.length - 1)
    const name = figureNames[index]
    const matrix = figures[name]
    const startColumn = this.fieldWidth / 2 - Math.floor(matrix.length / 2)
    const startRow = matrix.length * -1

    const newFigure = new Figure({
      name: name,
      column: startColumn,
      row: startRow,
      matrix
    })

    return newFigure
  }

  private isValidMove(figure: Figure): boolean {
    for (let row = 0; row < figure.matrix.length; row++) {
      for (let col = 0; col < figure.matrix[0].length; col++) {
        const el = figure.matrix[row][col]
        if (!el) continue

        const isPositionIncorrect =
          figure.column + col < 0 ||
          figure.column + col >= this.fieldWidth ||
          figure.row + row >= this.fieldHeight ||
          this.gameField[figure.row + row]?.[figure.column + col]

        if (isPositionIncorrect) {
          return false
        }
      }
    }

    return true
  }

  private loop() {
    if (!this.figureSequence) {
      throw new Error(
        'figureSequence must have elements before starts the loop'
      )
    }
    const currentFigure = this.figureSequence[0]

    this.rAF = requestAnimationFrame(this.loop)

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (let row = 0; row < this.fieldHeight; row++) {
      for (let col = 0; col < this.fieldWidth; col++) {
        const name = this.gameField[row][col]
        if (typeof name === 'number') continue

        this.drawSquare({
          color: figuresColors[name],
          column: col,
          row
        })
      }
    }

    const needMove = this.movesBoundary < this.lastedTime

    if (currentFigure) {
      if (needMove) {
        this.lastedTime = 0
        currentFigure.row += 1

        if (!this.isValidMove(currentFigure)) {
          currentFigure.row -= 1
          this.placeFigure(currentFigure)
          this.figureSequence = [this.figureSequence[1], this.createNewFigure()]
        }
      } else {
        this.lastedTime = this.lastedTime + Date.now() - this.prevTime
        this.prevTime = Date.now()
      }

      for (let row = 0; row < currentFigure.matrix.length; row++) {
        for (let col = 0; col < currentFigure.matrix[0].length; col++) {
          const item = currentFigure.matrix[row][col]

          if (!item) continue
          this.drawSquare({
            color: figuresColors[currentFigure.name],
            column: currentFigure.column + col,
            row: currentFigure.row + row
          })
        }
      }
    }
  }

  private showGameOver() {
    if (!this.rAF) {
      throw new Error('game not started')
    }

    cancelAnimationFrame(this.rAF)
    this.isGameEnd = true
    const img = new window.Image()
    img.onload = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.context.textAlign = 'center'
      this.context.textBaseline = 'middle'
      this.context.font = '30px monospace'
      this.context.fillStyle = 'black'
      this.context.fillText(
        this.endMessage,
        this.canvas.width / 2,
        this.canvas.height / 4
      )
      this.context.drawImage(img, 25, this.canvas.height / 3, 300, 300)
    }
    img.src = Image
  }

  private placeFigure(figure: Figure) {
    const figureHeight = figure.matrix.length
    const figureWidth = figure.matrix[0].length

    for (let row = 0; row < figureHeight; row++) {
      for (let col = 0; col < figureWidth; col++) {
        const item = figure.matrix[row][col]
        if (!item) continue

        if (figure.row + row <= 0) {
          this.showGameOver()
          this.emit('gameOver', this.points)
        }

        this.gameField[figure.row + row][figure.column + col] = figure.name
      }
    }

    for (let row = 0; row < this.gameField.length; ) {
      const isCurrentRowFullFilled = this.gameField[row].every(item => !!item)

      if (isCurrentRowFullFilled) {
        this.gameField.splice(row, 1)
        this.gameField.unshift(this.gameField[0].map(() => 0))
        this.movesBoundary -= this.movesBoundary / 3
        this.points += 10000
        this.emit('upPoint', this.points)
        continue
      }
      row++
    }
  }

  private drawSquare(params: { color: Colors; row: number; column: number }) {
    this.context.fillStyle = params.color
    this.context.fillRect(
      params.column * this.cellSize,
      params.row * this.cellSize,
      this.cellSize - 1,
      this.cellSize - 1
    )
  }

  public gameLaunch() {
    this.figureSequence = [this.createNewFigure(), this.createNewFigure()]
    this.isGameEnd = false
    for (let row = 0; row < this.fieldHeight; row++) {
      this.gameField[row] = []
      for (let col = 0; col < this.fieldWidth; col++) {
        this.gameField[row][col] = 0
      }
    }
    this.rAF = requestAnimationFrame(this.loop)
  }

  public start() {
    let secondsBefore = this.beforeStartSeconds
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.textAlign = 'center'
    this.context.textBaseline = 'middle'
    this.context.font = '30px monospace'
    this.context.fillStyle = 'black'
    this.context.fillText(
      this.startMessage,
      this.canvas.width / 2,
      this.canvas.height / 4
    )

    const redraw = () => {
      this.context.clearRect(
        0,
        this.canvas.height / 3,
        this.canvas.width,
        this.canvas.height
      )
      this.context.font = '40px monospace'
      this.context.fillStyle = 'red'
      this.context.fillText(String(counter()), this.canvas.width / 2, 300)
    }

    const interval = setInterval(redraw, 1000)

    const counter = () => {
      secondsBefore = secondsBefore - 1
      if (secondsBefore === 0) {
        clearInterval(interval)
        this.gameLaunch()
      }
      return secondsBefore
    }
  }

  private rotateCurrentFigure(rotateBack = false) {
    const figure = this.figureSequence?.[0]

    assertFigure(figure)

    const oldMatrix = figure.matrix
    const newMatrix = rotateMatrix(figure.matrix, rotateBack)

    console.log(oldMatrix, newMatrix)

    figure.matrix = newMatrix
    const isValidPosition = this.isValidMove(figure)

    if (!isValidPosition) {
      figure.matrix = oldMatrix
    }
  }

  private moveFigure(right = false) {
    const figure = this.figureSequence?.[0]

    assertFigure(figure)

    const oldValue = figure.column
    const newValue = figure.column + (right ? 1 : -1)

    figure.column = newValue
    const isValidPosition = this.isValidMove(figure)

    if (!isValidPosition) {
      figure.column = oldValue
    }
  }

  public pause() {
    throw new Error('method does not implement')
  }

  public rotateFigureRight() {
    this.rotateCurrentFigure(false)
  }

  public rotateFigureLeft() {
    this.rotateCurrentFigure(true)
  }

  public moveFigureToRight() {
    this.moveFigure(true)
  }

  public moveFigureToLeft() {
    this.moveFigure()
  }

  public speedUp() {
    this.lastedTime += this.movesBoundary
  }

  public getMoveBoundary() {
    return this.movesBoundary
  }

  public getNextFigure() {
    return this.figureSequence?.[1]
  }

  public toggleDropHint() {
    throw new Error('method does not implement')
  }
}

function assertFigure(figure: Figure | undefined): asserts figure is Figure {
  if (!figure) {
    throw new Error('current figure does not defined')
  }
}
