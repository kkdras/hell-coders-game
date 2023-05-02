import Error from '../components/error'
import Image from '../image/500.png'
import { useEffect } from 'react'

export function Error500() {
  useEffect(() => {
    document.title = 'Ошибка сервера 500'
    return () => { document.title = 'Тетрис' }
  }, [])

  return (
    <Error
      title="Ошибка сервера!"
      text="Мы уже бросили все свои дела и стремительно ремонтируем..."
      img={Image}
    />
  )
}
