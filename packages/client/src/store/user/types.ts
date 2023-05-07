export interface UserUpdateRequest {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
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

export interface ChangePasswordRequest {
  oldPassword: string
  newPassword: string
}
