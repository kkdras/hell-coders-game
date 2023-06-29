import { User } from './types'

export interface userState {
  user: User | null
  localUser: User | null
}

export const initialState: userState = {
  user: null,
  localUser: null
}
