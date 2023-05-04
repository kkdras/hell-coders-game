import { AsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { AppStoreDispatch } from './index'
import { RootState } from './rootReducer'

declare module 'react-redux' {
  function useSelector<TSelected>(
    selector: (state: RootState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected

  function useDispatch<AppDispatch extends AppStoreDispatch>()
}

declare module '@reduxjs/toolkit' {
  type AsyncThunkConfig = {
    dispatch?: AppStoreDispatch
    state: RootState
    rejectValue?: AxiosError['response']
    serializedErrorType?: unknown
    getState: RootState
  }

  function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = {
      state: RootState
      extra: Injectable
    }
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    >,
    options?: unknown
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>
}
