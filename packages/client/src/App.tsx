import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/Home/Home'
import { Error500 } from './pages/error500'
import { Error404 } from './pages/error404'
import { Game } from './pages/Game/Game'
import { Register } from './pages/Register/Register'

export enum RouteNames {
  MAIN = '/',
  GAME = '/game',
  BLOG = '/blog',
  LEADERBOARD = '/leaderboard',
  PROFILE = '/profile',
  ERROR_500 = '/error500',
  REGISTER = '/register',
  ERROR_404 = '/error404'
}

function App() {
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
    <Routes>
      <Route path={RouteNames.MAIN} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/error500" element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
        <Route path={RouteNames.GAME} element={<Game />} />
        <Route path={RouteNames.REGISTER} element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
