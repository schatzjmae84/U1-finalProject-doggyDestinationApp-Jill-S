import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import { BrowserRouter as Router, Route, Routes } from "react-router"

function App() {
  
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchForm" element={<SearchForm />} />   
        </Routes>
      </Router>
    </>
  )
}

export default App
