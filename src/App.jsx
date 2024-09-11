import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeIdPage from './pages/PokeIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
    <div className='app-container'>
      <div className='caja1'>
        <div className='caja2'>
          <div className='caja3'>
            <span><Link to="/">POKEDEX</Link></span>
            <div className='circle1'>
              <div className='circle2'>
                <div className='circle3'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
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
