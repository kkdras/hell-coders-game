import { createAsyncThunk } from '@reduxjs/toolkit'
import { YANDEX_BASE_URL } from '../../shared/consts'
import { User } from './types'
import { RootState } from '../../store'

type AsyncThunkConfig = {
  state: RootState
}

type ResponseData = { data: unknown }
import { mainAxios } from '../../http-common'

export const saveScore = createAsyncThunk<
  ResponseData['data'],
  number,
  AsyncThunkConfig
>('leaderBoard/saveScore', async (score: number, { getState }) => {
  const { user } = getState().user

  const userData: User = {
    avatar: user?.avatar,
    name: user?.login,
    score: score,
  }

  const body = {
    data: userData,
    ratingFieldName: 'score',
    teamName: 'hell-coders',
  }

  try {
    const { data } = await axios.post<ResponseData>(
      `${BASE_URL}/leaderboard`,
      body,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      }
    )

    return data
  } catch (e) {
    console.error(e)
  }
})
