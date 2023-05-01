import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { SignUpRequest } from './const'
import { BASE_URL } from '../../shared/consts'

export const postRegister = createAsyncThunk<
  AxiosResponse,
  SignUpRequest,
  { rejectValue: AxiosError['response'] }
>('auth/postRegister', async (graphPath, { rejectWithValue }) => {
  try {
    const response = axios.post(`${BASE_URL}/auth/signup`)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
