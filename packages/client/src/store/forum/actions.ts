import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { customAxios } from '../../http-common'
import { CUSTOM_BASE_URL } from '../../shared/consts'
import {
  CommentAndReplyRequestData,
  GetCommentRequest,
  GetReliesRequest,
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
  GetCommentRequest,
  { rejectValue: AxiosError['response'] }
>('forum/topics/getTopicComments', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<ICommentAndReply[]> = await customAxios.get(
      `${CUSTOM_BASE_URL}/forum/topics/${data.id}/comments?userId=${data.userId}`
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
  GetReliesRequest,
  { rejectValue: AxiosError['response'] }
>('forum/comments/replies', async (data, { rejectWithValue }) => {
  try {
    const response = await customAxios.get(
      `${CUSTOM_BASE_URL}/forum/comments/${data.commentId}/replies?userId=${data.userId}`
    )
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const createComment = createAsyncThunk<
  AxiosResponse,
  CommentAndReplyRequestData,
  { rejectValue: AxiosError['response'] }
>('forum/comments/create', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse = await customAxios.post(
      `${CUSTOM_BASE_URL}/forum/comments/create`,
      data
    )
    dispatch(getAllComments({ id: data.topicId, userId: data.userId }))
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})

export const createReply = createAsyncThunk<
  AxiosResponse,
  CommentAndReplyRequestData,
  { rejectValue: AxiosError['response'] }
>('forum/comments/create', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse = await customAxios.post(
      `${CUSTOM_BASE_URL}/forum/comments/create`,
      data
    )
    if (data.parentId) dispatch(getCommentsReply({ commentId: data.parentId, userId: data.userId }))
    return response
  } catch (error) {
    return rejectWithValue((error as AxiosError)?.response)
  }
})
