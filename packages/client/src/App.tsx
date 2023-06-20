import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/Home/Home'
import { LeaderBoard } from './pages/Leaderboard/Leaderboard'
import { Error500 } from './pages/Error/Error500'
import { Error404 } from './pages/Error/Error404'
import { ErrorComponent } from './pages/Error/ErrorComponent'
import { Game } from './pages/Game/Game'
import { Register } from './pages/Register/Register'
import { Forum } from './pages/Forum/Forum'
import { Profile } from './pages/Profile/Profile'
import { WithAuthorization } from './processes/auth/WithAuthorization'
import { useSelector } from 'react-redux'
import { RootState } from './store/rootReducer'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { themes } from './themes'

export enum RouteNames {
  MAIN = '/',
  GAME = '/game',
  LEADERBOARD = '/leaderboard',
  PROFILE = '/profile',
  ERROR_500 = '/error500',
  REGISTER = '/register',
  ERROR_404 = '/error404',
  ERROR_COMPONENT = '/errorcomponent',
  FORUM = '/forum',
}

function App() {
  const { theme } = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <WithAuthorization>
        <Routes>
          <Route path={RouteNames.MAIN} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={RouteNames.LEADERBOARD} element={<LeaderBoard />} />
            <Route path={RouteNames.GAME} element={<Game />} />
            <Route path={RouteNames.REGISTER} element={<Register />} />
            <Route path={RouteNames.FORUM} element={<Forum />} />
            <Route path={RouteNames.ERROR_500} element={<Error500 />} />
            <Route
              path={RouteNames.ERROR_COMPONENT}
              element={<ErrorComponent />}
            />
            <Route path="*" element={<Error404 />} />
            <Route path={RouteNames.PROFILE} element={<Profile />} />
          </Route>
        </Routes>
      </WithAuthorization>
    </ThemeProvider>
  )
}

export default App
