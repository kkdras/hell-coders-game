import Error from '../../components/error'
import Image from '../../image/404.png'
import { useEffect } from 'react'

export function Error404() {
  useEffect(() => {
    document.title = 'Ошибка 404 - Страница не найдена'
  }, [])

  return (
    <Error
      title="Ошибка 404!"
      text="К сожалению, запрашиваемая страница не найдена."
      img={Image}
    />
  )
}
