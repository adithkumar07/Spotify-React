import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spotify from './pages/spotify.jsx'
import Login from './pages/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Spotify />} style={Spotify}></Route>
        <Route path="/login" exact element={<Login />} style={Login}>

        </Route>
      </Routes>
    </>
  )
}

export default App
