import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import MovieDetails from './pages/MovieDetails'
import SeatSelection from './pages/SeatSelection'
import BuyTickets from './pages/BuyTickets'
function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/moviedetails' element={<MovieDetails/>}/>
        <Route path='/seatselection' element={<SeatSelection/>}/>
        <Route path='/buytickets' element={<BuyTickets/>}/>


      </Routes>
      <Footer/>
    </>
  )
}

export default App
