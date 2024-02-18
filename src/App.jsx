import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeIdPage from './pages/PokeIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
    <div className='app-container'>
      <h1>Pokedex</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokeIdPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
