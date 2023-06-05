import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RouteNames } from '../../App'

import { RootState } from '../../store/rootReducer'
import { AuthorizationForm } from './AuthorizationForm'

export const Auth: FC<PropsWithChildren> = ({ children }) => {
  const { isUserAuthorized } = useSelector((state: RootState) => state.auth)
  const location = useLocation()
  console.log(location.pathname)
  const isNeedAuthorization =
    location.pathname === RouteNames.PROFILE ||
    location.pathname === RouteNames.GAME ||
    location.pathname === RouteNames.LEADERBOARD ||
    location.pathname === RouteNames.FORUM

  return (isUserAuthorized && isNeedAuthorization) || !isNeedAuthorization ? (
    <>{children}</>
  ) : (
    <AuthorizationForm />
  )
}
