import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { BASE_URL } from '../../shared/consts'
import { User, UserUpdateRequest } from './types'

export const getAuthUser = createAsyncThunk<
  AxiosResponse<User>,
  void,
  { rejectValue: AxiosError['response'] }
>('user/getAuthUser', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/user`, {
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
    const response = await axios.put(`${BASE_URL}/user/profile`, data, {
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

export const putAvatar = createAsyncThunk<
  AxiosResponse<User>,
  FormData,
  { rejectValue: AxiosError['response'] }
>('user/putAvatar', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${BASE_URL}/user/profile/avatar`, data, {
      withCredentials: true,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
