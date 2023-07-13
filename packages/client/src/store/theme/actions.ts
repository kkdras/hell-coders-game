import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { CUSTOM_BASE_URL } from '../../shared/consts'
import { customAxios } from '../../http-common'
import { ThemeResponse } from './types'

export const postTheme = createAsyncThunk<
  AxiosResponse,
  { userId: string; theme: string },
  { rejectValue: AxiosError['response'] }
>('theme/postTheme', async (data, { rejectWithValue }) => {
  try {
    const response = await customAxios.post(
      `${CUSTOM_BASE_URL}/theme/create`,
      data
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getTheme = createAsyncThunk<
  AxiosResponse<ThemeResponse>,
  number,
  { rejectValue: AxiosError['response'] }
>('theme/getTheme', async (userId, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(`${CUSTOM_BASE_URL}/theme/${userId}`)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
