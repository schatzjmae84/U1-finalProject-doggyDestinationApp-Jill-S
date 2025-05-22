import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import DestinationList from './components/DestinationList'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import SelectedDestination from './components/SelectedDestination'

function App() {
  
  return (
      <>
        <Header /><hr></hr>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searchForm" element={<SearchForm />} />
              <Route path="/pupPlaces" element={<DestinationList />} /> 
              <Route path="/idealInfo" element={<SelectedDestination />} />  
            </Routes>
          </Router>
          <Footer />
        </main>
      </>
  )
}

export default App
