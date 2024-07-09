
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Auth from './pages/Auth'
function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
