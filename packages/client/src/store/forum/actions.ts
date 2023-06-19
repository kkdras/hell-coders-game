import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { customAxios } from '../../http-common'
import { CUSTOM_BASE_URL } from '../../shared/consts'
import { ITopic } from './types'


// todo написать все функции
export const getAllTopics = createAsyncThunk<
  AxiosResponse<ITopic[]>,
  void,
  { rejectValue: AxiosError['response'] }
>('forum/getAllTopics', async (_, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(`${CUSTOM_BASE_URL}/forum/topics`, {
      withCredentials: true,
    })
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

