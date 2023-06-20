import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { getAllTopics, getTopicComments, getCommentReplyes } from './actions'
import { initialState } from './const'
import { IComment, IReply, ITopic } from './types'


export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(
      getAllTopics.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<ITopic[]>>) => {
        state.topics = payload.data
      }
    )

    builder.addCase(
      getTopicComments.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<IComment[]>>) => {
        state.comments[payload.data[0].topicId] = payload.data
      }
    )

    builder.addCase(
      getCommentReplyes.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<IReply[]>>) => {
        state.replyes[payload.data[0].commentId] = payload.data
      }
    )

  },
})

