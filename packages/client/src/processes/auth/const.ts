import { SignInRequest } from '../../store/auth/types'

export const defaultValues: SignInRequest = {
  login: '',
  password: ''
}

export const redirect_uri = `http://localhost:3000`
