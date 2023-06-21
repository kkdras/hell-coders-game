import { MutableRefObject, RefObject, useEffect, useRef } from 'react'
import { saveScore } from '../../store/leaderboard/actions'
import { GameConstructor } from './core'
import { throttle } from './utils'

enum UsedKeys {
  RIGHT = 'ArrowRight',
  LEFT = 'ArrowLeft',
  SPACE = 'Space',
  DOWN = 'ArrowDown',
}

const useTurnOnSpeedUp = (game: MutableRefObject<GameConstructor | null>) => {
  const refThrottleFn = useRef<ReturnType<typeof throttle> | null>(null)
  const refTimer = useRef<NodeJS.Timer>(null)

  useEffect(() => {
    const defaultSpeed = game.current?.getMoveBoundary()

    if (!defaultSpeed) return

    const customSpeedUp = (speed: number) => {
      if (refTimer.current) {
        clearInterval(refTimer.current)
      }
      let repeatCount = 2

      const handler = () => {
        game.current?.speedUp()
        if (repeatCount <= 0 && refTimer.current) {
          clearInterval(refTimer.current)
        }

        repeatCount -= 1
      }

      ;(refTimer as MutableRefObject<NodeJS.Timer>).current = setInterval(
        handler,
        speed
      )
    }

    refThrottleFn.current = throttle(
      customSpeedUp.bind(null, defaultSpeed / 8),
      defaultSpeed / 4
    )

    game.current?.on('changeMoveBoundary', (newSpeed: number) => {
      refThrottleFn.current = throttle(
        customSpeedUp.bind(null, newSpeed / 8),
        newSpeed / 4
      )
    })

    let repeat = false
    document.addEventListener('keydown', event => {
      if (event.key === UsedKeys.DOWN) {
        event.preventDefault()
        refThrottleFn.current?.()
        repeat = event.repeat
      }
    })

    // нужно чтобы при долгом нажатии и отпускании сразу
    // сразу прекратить последующие циклы ускорения
    document.addEventListener('keyup', event => {
      if (event.key === UsedKeys.DOWN && repeat && refTimer.current) {
        clearInterval(refTimer.current)
        refThrottleFn.current?.cancel()
      }
    })
  }, [])

  return refThrottleFn
}

export const useGame = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const refGameInstance = useRef<null | GameConstructor>(null)

  useEffect(() => {
    refGameInstance.current = new GameConstructor({
      canvas: canvasRef.current as HTMLCanvasElement,
      cellSize: 34,
      // двигаем фигуру каждые 800 милисекунд
      movesBoundary: 800,
    })
  }, [])

  useTurnOnSpeedUp(refGameInstance)

  // add keyboard listeners
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (refGameInstance.current?.isGameEnd) return

      if (event.code in UsedKeys || event.ctrlKey) {
        event.preventDefault()
      }

      if (event.code === UsedKeys.RIGHT) {
        refGameInstance.current?.moveFigureToRight()
      } else if (event.code === UsedKeys.LEFT) {
        refGameInstance.current?.moveFigureToLeft()
      } else if (event.ctrlKey) {
        refGameInstance.current?.rotateFigureLeft()
      } else if (event.code === UsedKeys.SPACE) {
        refGameInstance.current?.rotateFigureRight()
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return refGameInstance
}

export const useWatchGame = (game: MutableRefObject<GameConstructor | null>) => {
  useEffect(() => {
    // assume that game exist
    game.current!.on('gameOver', (score: number) => {
      // dispatch thunk that will save game points
      saveScore(score)
    })
  }, [])
}
