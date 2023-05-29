import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/rootReducer'
import { AuthorizationForm } from './AuthorizationForm'

export const Auth: FC<PropsWithChildren> = ({ children }) => {
  const { isUserAuthorized } = useSelector((state: RootState) => state.auth)

  return isUserAuthorized ? <>{children}</> : <AuthorizationForm />
}
