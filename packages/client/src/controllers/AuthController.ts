import AuthAPI from '../api/AuthApi/AuthApi';
import { SigninData } from '../api/AuthApi/types';


class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = new AuthAPI;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      localStorage.setItem('auth', "userAuthorized")
    } catch (e: any) {
      if (
        e.reason ===
        'User already in system'
      ) {
        localStorage.setItem('auth', "userAuthorized")
      }
      else {
        localStorage.removeItem('auth')
        alert('Неверный логин или пароль')
      }
    }
  }

  async logout() {
    try {
      await this.api.logout();
    } catch (e: any) {
      alert(e);
    }
  }
}

export default new AuthController();

