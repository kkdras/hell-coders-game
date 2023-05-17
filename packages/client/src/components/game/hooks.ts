import { RefObject, useEffect, useRef } from 'react'
import { GameConstructor } from './core'

export const useGame = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const refGameInstance = useRef<null | GameConstructor>(null)
  useEffect(() => {
    refGameInstance.current = new GameConstructor({
      canvas: canvasRef.current as HTMLCanvasElement,
      cellSize: 34,
      // двигаем фигуру каждые 800 милисекунд
      movesBoundary: 50,
    })
  }, [])

  // add keyboard listeners
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (refGameInstance.current?.isGameEnd) return

      if (event.code === 'ArrowRight') {
        refGameInstance.current?.moveFigureToRight()
      } else if (event.code === 'ArrowLeft') {
        refGameInstance.current?.moveFigureToLeft()
      } else if (event.ctrlKey) {
        refGameInstance.current?.rotateFigureLeft()
      } else if (event.code === 'Space') {
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
