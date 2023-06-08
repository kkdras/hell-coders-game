import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RouteNames } from '../../App'
import { AppStoreDispatch } from '../../store'

import { RootState } from '../../store/rootReducer'
import { getAuthUser } from '../../store/user/actions'
import { AuthorizationForm } from './AuthorizationForm'

export const Auth: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch<AppStoreDispatch>()
  const isUserAuthorized = localStorage.getItem('auth')
  const location = useLocation()
  const { user } = useSelector((state: RootState) => state.user)

  // после обновления, получаем пользователя заново
  useEffect(() => {
    if (isUserAuthorized && !user) dispatch(getAuthUser())
  }, [])

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
