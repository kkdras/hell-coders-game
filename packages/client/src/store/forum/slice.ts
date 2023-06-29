import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { getAllTopics, getAllComments, getCommentsReply } from './actions'
import { initialState } from './const'
import { ICommentAndReply, ITopic } from './types'

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getAllTopics.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<ITopic[]>>) => {
        state.topics = payload.data
      }
    )

    builder.addCase(
      getAllComments.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<ICommentAndReply[]>>) => {
        state.comments[payload.data[0].topicId] = payload.data
      }
    )

    builder.addCase(
      getCommentsReply.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<ICommentAndReply[]>>) => {
        if(payload.data[0].parentId) state.replyes[payload.data[0].parentId] = payload.data
      }
    )
  }
})
