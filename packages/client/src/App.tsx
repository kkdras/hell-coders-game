import { useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/Home/Home'
import { Game } from './pages/Game/Game'

export enum RouteNames {
  MAIN = '/',
  GAME = '/game',
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
        <Route path="*" element={<NoMatch />} />
        <Route path={RouteNames.GAME} element={<Game />} />
      </Route>
    </Routes>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default App
