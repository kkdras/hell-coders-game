import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { mainAxios } from '../../http-common'
import { BASE_URL, CUSTOM_BASE_URL } from '../../shared/consts'
import {
  ChangePasswordRequest,
  CreateLocalUserRequest,
  User,
  UserUpdateRequest
} from './types'

export const getAuthUser = createAsyncThunk<
  AxiosResponse<User>,
  void,
  { rejectValue: AxiosError['response'] }
>('user/getAuthUser', async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await mainAxios.get(`${BASE_URL}/auth/user`, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
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
    const response = await mainAxios.put(`${BASE_URL}/user/profile`, data, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
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
    const response = await mainAxios.put(
      `${BASE_URL}/user/profile/avatar`,
      data,
      {
        withCredentials: true,
        headers: {
          'Content-type': 'multipart/form-data'
        }
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
    // @ts-ignore
    const response = await mainAxios.put(`${BASE_URL}/user/password`, data, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json'
      }
    })
    return response
  } catch (error) {
    // @ts-ignore
    if (error.response?.data?.reason === 'Password is incorrect') {
      alert('Введен неверный пароль')
    }
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const createLocalUser = createAsyncThunk<
  AxiosResponse,
  CreateLocalUserRequest,
  { rejectValue: AxiosError['response'] }
>('user/create', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await mainAxios.post(
      `${CUSTOM_BASE_URL}/user/create`,
      data
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getUserByLogin = createAsyncThunk<
  AxiosResponse,
  User,
  { rejectValue: AxiosError['response'] }
>('user/getByLogin', async (user, { rejectWithValue, dispatch }) => {
  try {

    const response = await mainAxios.get(
      `${CUSTOM_BASE_URL}/user/?login=${user.login}`
    )

    return response
  } catch (error) {
    // @ts-ignore
    if ((error as AxiosError)?.response?.data?.message === 'User not found') {
      dispatch(
        createLocalUser({
          first_name: user.first_name,
          second_name: user.second_name,
          password: '',
          phone: user.phone,
          login: user.login,
          email: user.email
        })
      )
      dispatch(getUserByLogin(user))
    }  
    return rejectWithValue((error as AxiosError)?.response)
  }
})
