import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { mainAxios } from '../../http-common'
import { YANDEX_BASE_URL } from '../../shared/consts'
import { getAuthUser } from '../user/actions'
import { OauthSignInRequest, SignInRequest, SignUpRequest } from './types'

export const postRegister = createAsyncThunk<
  AxiosResponse,
  SignUpRequest,
  { rejectValue: AxiosError['response'] }
>('auth/postRegister', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await mainAxios.post(
      `${YANDEX_BASE_URL}/auth/signup`,
      data
    )
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
      `${YANDEX_BASE_URL}/oauth/yandex/service-id/`,
      {
        params: { redirect_uri: redirect_uri },
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
      `${YANDEX_BASE_URL}/oauth/yandex`,
      data,
      {
        withCredentials: true,
      }
    )
    dispatch(getAuthUser())
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
