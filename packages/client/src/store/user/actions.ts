import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { mainAxios } from '../../http-common'
import { YANDEX_BASE_URL } from '../../shared/consts'
import { ChangePasswordRequest, User, UserUpdateRequest } from './types'

export const getAuthUser = createAsyncThunk<
  AxiosResponse<User>,
  void,
  { rejectValue: AxiosError['response'] }
>('user/getAuthUser', async (_, { rejectWithValue }) => {
  try {
    const response = await mainAxios.get(`${YANDEX_BASE_URL}/auth/user`, {
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

export const putUser = createAsyncThunk<
  AxiosResponse<User>,
  UserUpdateRequest,
  { rejectValue: AxiosError['response'] }
>('user/putUser', async (data, { rejectWithValue }) => {
  try {
    const response = await mainAxios.put(
      `${YANDEX_BASE_URL}/user/profile`,
      data,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const putAvatar = createAsyncThunk<
  AxiosResponse<User>,
  FormData,
  { rejectValue: AxiosError['response'] }
>('user/putAvatar', async (data, { rejectWithValue }) => {
  try {
    const response = await mainAxios.put(
      `${YANDEX_BASE_URL}/user/profile/avatar`,
      data,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      }
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const putPassword = createAsyncThunk<
  AxiosResponse,
  ChangePasswordRequest,
  { rejectValue: AxiosError['response'] }
>('user/putPassword', async (data, { rejectWithValue }) => {
  try {
    const response = await mainAxios.put(
      `${YANDEX_BASE_URL}/user/password`,
      data,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
    return response
  } catch (error) {
    // @ts-ignore
    if (error.response?.data?.reason === 'Password is incorrect') {
      alert('Введен неверный пароль')
    }
    return rejectWithValue((error as AxiosError)?.response)
  }
})
