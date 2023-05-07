import { User } from './types'

export interface userState {
  user: User | null
}

export const initialState: userState = {
  user: null,
}
