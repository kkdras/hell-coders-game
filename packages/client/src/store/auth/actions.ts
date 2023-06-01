import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { BASE_URL } from '../../shared/consts'
import { OauthSignInRequest, SignInRequest, SignUpRequest } from './types'

export const postRegister = createAsyncThunk<
  AxiosResponse,
  SignUpRequest,
  { rejectValue: AxiosError['response'] }
>('auth/postRegister', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, data)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postAuth = createAsyncThunk<
  AxiosResponse,
  SignInRequest,
  { rejectValue: AxiosError['response'] }
>('auth/postAuth', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, data, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json',
      },
    })
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getYandexServiceId = createAsyncThunk<
  AxiosResponse,
  {redirect_uri: string},
  { rejectValue: AxiosError['response'] }
>('oauth/yandex/service-id', async (redirect_uri, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/oauth/yandex/${redirect_uri}`, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json',
      },
    })
    console.log(response)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postYandexOAuth = createAsyncThunk<
  AxiosResponse,
  OauthSignInRequest,
  { rejectValue: AxiosError['response'] }
>('oauth/yandex', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/oauth/yandex`, data, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json',
      },
    })
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
