import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { mainAxios } from '../../http-common'
import { BASE_URL } from '../../shared/consts'
import { createLocalUser, getAuthUser, getUserByLogin } from '../user/actions'
import { OauthSignInRequest, SignUpRequest } from './types'

export const postRegister = createAsyncThunk<
  AxiosResponse,
  SignUpRequest,
  { rejectValue: AxiosError['response'] }
>('auth/postRegister', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse = await mainAxios.post(
      `${BASE_URL}/auth/signup`,
      data
    )
    if (response) {
      dispatch(
        createLocalUser({
          first_name: data.first_name || '',
          second_name: data.second_name || '',
          password: '',
          phone: data.phone || '',
          login: data.login || '',
          email: data.email || ''
        })
      )
    }
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getYandexServiceId = createAsyncThunk<
  AxiosResponse,
  string,
  { rejectValue: AxiosError['response'] }
>('auth/yandex/service-id', async (redirect_uri, { rejectWithValue }) => {
  try {
    const response = await mainAxios.get(
      `${BASE_URL}/oauth/yandex/service-id/`,
      {
        params: { redirect_uri: redirect_uri }
      }
    )

    window.location.replace(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.data.service_id}&redirect_uri=${redirect_uri}`
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postYandexOAuth = createAsyncThunk<
  AxiosResponse,
  OauthSignInRequest,
  { rejectValue: AxiosError['response'] }
>('auth/yandex', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await mainAxios.post(
      `${BASE_URL}/oauth/yandex`,
      data,
      {
        withCredentials: true
      }
    )
    dispatch(getAuthUser())  
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})


