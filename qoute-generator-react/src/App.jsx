import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './components/Navbar/Navbar'
import NoPageFound from './pages/NoPageFound/NoPageFound'
import SearchQuotePage from './pages/SearchQuotePage/SearchQuotePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/search-for-quote' element={<SearchQuotePage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
