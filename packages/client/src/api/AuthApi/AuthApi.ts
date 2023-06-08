import { SignInRequest } from '../../store/auth/types'
import BaseAPI from '../BaseApi/BaseApi'

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth')
  }

  signin(data: SignInRequest) {
    return this.http.post('/signin', data)
  }

  logout() {
    return this.http.post('/logout')
  }

  read = undefined
  create = undefined
  update = undefined
  delete = undefined
}
