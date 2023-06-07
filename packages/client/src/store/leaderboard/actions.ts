import { BASE_URL } from '../../shared/consts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { User } from './types'
import { store } from '../../store'

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

  axios
    .post(`${BASE_URL}/leaderboard`, data, {
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
