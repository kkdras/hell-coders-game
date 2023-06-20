import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { customAxios } from '../../http-common'
import { CUSTOM_BASE_URL } from '../../shared/consts'
import { CommentRequestData, IComment, IReply, ITopic, ReplyRequestData, TopicRequestData } from './types'


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

export const getTopicComments = createAsyncThunk<
  AxiosResponse<IComment[]>,
  string,
  { rejectValue: AxiosError['response'] }
>('forum/getTopicComments', async (forumId: string, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(`${CUSTOM_BASE_URL}/forum/comments/${forumId}`, {
      withCredentials: true,
    })
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getCommentReplyes = createAsyncThunk<
  AxiosResponse<IReply[]>,
  string,
  { rejectValue: AxiosError['response'] }
>('forum/getCommentReplyes', async (commentId: string, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(`${CUSTOM_BASE_URL}/forum/replyes/${commentId}`, {
      withCredentials: true,
    })
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postTopic = createAsyncThunk<
  AxiosResponse,
  TopicRequestData,
  { rejectValue: AxiosError['response'] }
>('forum/posTopic', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await customAxios.post(`${CUSTOM_BASE_URL}/forum/posTopic`, data)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postComment = createAsyncThunk<
  AxiosResponse,
  CommentRequestData,
  { rejectValue: AxiosError['response'] }
>('forum/posComment', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await customAxios.post(`${CUSTOM_BASE_URL}/forum/posComment`, data)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postReply = createAsyncThunk<
  AxiosResponse,
  ReplyRequestData,
  { rejectValue: AxiosError['response'] }
>('forum/posReply', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await customAxios.post(`${CUSTOM_BASE_URL}/forum/posReply`, data)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

