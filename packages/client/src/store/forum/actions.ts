import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { customAxios } from '../../http-common'
import { CUSTOM_BASE_URL } from '../../shared/consts'
import {
  CommentAndReplyRequestData,
  ICommentAndReply,  
  ITopic,  
  TopicRequestData
} from './types'

export const getAllTopics = createAsyncThunk<
  AxiosResponse<ITopic[]>,
  void,
  { rejectValue: AxiosError['response'] }
>('forum/getAllTopics', async (_, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(`${CUSTOM_BASE_URL}/forum/topics`)
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getAllComments = createAsyncThunk<
  AxiosResponse<ICommentAndReply[]>,
  number,
  { rejectValue: AxiosError['response'] }
>('forum/getTopicComments', async (topicId: number, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(
      `${CUSTOM_BASE_URL}/forum/${topicId}/comments`
    )
    
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postTopic = createAsyncThunk<
  AxiosResponse,
  TopicRequestData,
  { rejectValue: AxiosError['response'] }
>('forum/topics/create', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse = await customAxios.post(
      `${CUSTOM_BASE_URL}/forum/topics/create`,
      data
    )
    dispatch(getAllTopics())
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const getCommentsReply = createAsyncThunk<
  AxiosResponse<ICommentAndReply[]>,
  number,
  { rejectValue: AxiosError['response'] }
>('comment/getCommentsReply', async (parentId: number, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(
      `${CUSTOM_BASE_URL}/comment/${parentId}/replies/`
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postComment = createAsyncThunk<
  AxiosResponse,
  CommentAndReplyRequestData,
  { rejectValue: AxiosError['response'] }
>('comment/create', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse = await customAxios.post(
      `${CUSTOM_BASE_URL}/comment/`,
      data
    )
    dispatch(getAllComments(data.topicId))
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const postReply = createAsyncThunk<
  AxiosResponse,
  CommentAndReplyRequestData,
  { rejectValue: AxiosError['response'] }
>('comment/create', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse = await customAxios.post(
      `${CUSTOM_BASE_URL}/comment/`,
      data
    )
    if(data.parentId) dispatch(getCommentsReply(data.parentId))
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
