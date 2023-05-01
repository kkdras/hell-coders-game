import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/Home/Home'
import { Game } from './pages/Game/Game'
import { Error500 } from './pages/Error500/Error500'
import { Error404 } from './pages/Error404/Error404'

export enum RouteNames {
  MAIN = '/',
  GAME = '/game',
  BLOG = '/blog',
  LEADERBOARD = '/leaderboard',
  PROFILE = '/profile',
  ERROR_500 = '/error500',
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
        <Route path={RouteNames.ERROR_500} element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
        <Route path={RouteNames.GAME} element={<Game />} />
      </Route>
    </Routes>
  )
}

export default App
