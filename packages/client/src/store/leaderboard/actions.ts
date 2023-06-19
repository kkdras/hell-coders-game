import { YANDEX_BASE_URL } from '../../shared/consts'
import { User } from './types'
import { store } from '../../store'
import { mainAxios } from '../../http-common'

export function saveScore(score: number) {
  const { user } = store.getState().user

  const userData: User = {
    avatar: user?.avatar,
    name: user?.login,
    score: score,
  }

  const data = {
    data: userData,
    ratingFieldName: 'score',
    teamName: 'hell-coders',
  }

  console.log(data)

  mainAxios
    .post(`${YANDEX_BASE_URL}/leaderboard`, data, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error)
    })
}
