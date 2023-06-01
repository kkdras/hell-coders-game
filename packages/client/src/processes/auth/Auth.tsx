import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RootState } from '../../store/rootReducer'
import { AuthorizationForm } from './AuthorizationForm'

export const Auth: FC<PropsWithChildren> = ({ children }) => {
  const { isUserAuthorized } = useSelector((state: RootState) => state.auth)
  const location = useLocation()
  const isNotNeedAuthorization = 
  location.pathname === '/register' || 
  location.pathname === '/' || 
  location.pathname === '/error500' || 
  location.pathname === '/error404' || 
  location.pathname === '/errorcomponent'

  return isUserAuthorized || isNotNeedAuthorization  ? (
    <>{children}</>
  ) : (
    <AuthorizationForm />
  )
}
