import { SignInRequest } from '../../store/auth/types'

export const defaultValues: SignInRequest = {
  login: '',
  password: '',
}

export const redirect_uri = `http://localhost:${__SERVER_PORT__}`
