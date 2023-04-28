import Error from '../components/error'
import Image from '../../public/500.png'
import { useEffect } from 'react'

export function Error500() {
  useEffect(() => {
    document.title = 'Ошибка сервера 500'
  }, [])

  return (
    <Error
      title="Ошибка сервера!"
      text="Мы уже бросили все свои дела и стремительно ремонтируем..."
      img={Image}
    />
  )
}
