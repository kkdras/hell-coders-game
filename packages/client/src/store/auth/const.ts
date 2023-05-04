export interface authState {
  user: User | null;
  isUserAuthorized: boolean;
}

export const initialState: authState = {
  user: null,
  isUserAuthorized: false
}

export interface User {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

export interface SignUpRequest {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface SignInRequest {
  login: string
  password: string
}
