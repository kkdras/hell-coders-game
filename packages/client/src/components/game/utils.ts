import { Matrix } from './const'

// work only with square
export const rotateMatrix = (matrix: Matrix, rotateBack = false) => {
  const newMatrix: Matrix = []

  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = []
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[i][j] =
        matrix[matrix.length - 1 - j][rotateBack ? matrix[0].length - 1 - i : i]
    }
  }

  return newMatrix
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomSequence = <T extends I[], I>(seq: T) => {
  const newSeq = [] as I[]
  const seqCopy = [...seq]

  while (seqCopy.length) {
    const el = seqCopy.splice(getRandomInt(0, seqCopy.length), 1)
    newSeq.push(...el)
  }

  return newSeq
}

export const throttle = <T extends []>(fn: (...args: T) => void, t: number) => {
  let lastArgs: null | T = null
  let needStartExecute = true

  const execute = () => {
    if (lastArgs && needStartExecute) {
      fn(...lastArgs)
      needStartExecute = false
      lastArgs = null

      setTimeout(() => {
        needStartExecute = true
        execute()
      }, t)
    }
  }

  function debounced(...args: T) {
    lastArgs = args
    execute()
  }

  debounced.cancel = () => {
    needStartExecute = false
    lastArgs = null
  }

  return debounced as typeof debounced & { cancel: () => void }
}

type AnyFunction = (...args: any[]) => void

export class EventBus {
  private hashMap: Record<string, AnyFunction[]> = {}

  public on(eventName: string, handler: AnyFunction) {
    if (!this.hashMap[eventName]) {
      this.hashMap[eventName] = []
    }
    this.hashMap[eventName].push(handler)
  }

  public off(eventName: string, handler: AnyFunction) {
    const handlers = this.hashMap[eventName]
    if (handlers) {
      this.hashMap[eventName] = handlers.filter(item => item !== handler)
    }
  }

  public emit(eventName: string, ...args: any[]) {
    const handlers = this.hashMap[eventName]
    if (handlers) {
      handlers.forEach(handler => handler(args))
    }
  }
}
