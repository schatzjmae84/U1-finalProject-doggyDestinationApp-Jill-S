import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import DestinationList from './components/DestinationList'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router"

function App() {
  
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchForm" element={<SearchForm />} />
          <Route path="/pupPlaces" element={<DestinationList />} />   
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
