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

export interface RejectReason {
  reason: string
}

export interface OauthSignInRequest {
  code: string
  redirect_uri: string
}
