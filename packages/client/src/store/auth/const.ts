import { User } from '../user/types'

export interface authState {
  user: User | null
  isUserAuthorized: boolean
}

export const initialState: authState = {
  user: null,
  isUserAuthorized: false,
}
