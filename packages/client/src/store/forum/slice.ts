import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { comments } from '../../pages/Forum/const'
import { getAllTopics } from './actions'
import { initialState } from './const'
import { ITopic } from './types'


export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
  },
  extraReducers: builder => {builder.addCase(
    getAllTopics.fulfilled,
    (state, { payload }: PayloadAction<AxiosResponse<ITopic[]>>) => {
      state.topics = payload.data  
    }
  )

  }, 
})

