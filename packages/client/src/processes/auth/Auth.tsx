import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RootState } from '../../store/rootReducer'
import { AuthorizationForm } from './AuthorizationForm'

export const Auth: FC<PropsWithChildren> = ({ children }) => {
  const { isUserAuthorized } = useSelector((state: RootState) => state.auth)
  const location = useLocation()

  return isUserAuthorized || location.pathname === '/register' ? (
    <>{children}</>
  ) : (
    <AuthorizationForm />
  )
}
