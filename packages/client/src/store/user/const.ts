import { User } from './types'

export interface userState {
  user: User | null
  localUser: User | null
  localUserId: null | number
}

export const initialState: userState = {
  user: null,
  localUser: null,
  localUserId: null
}
