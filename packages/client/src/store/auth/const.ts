export interface authState {
  isUserAuthorized: boolean
  service_id?: string
}

export const initialState: authState = {
  isUserAuthorized: false,
}
