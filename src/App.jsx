
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Wedding from './Pages/Wedding'
import Concert from './Pages/Concert'
import Studio from './Pages/Studio'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Documentory from './Pages/Documentory'
import RupakKona from './Pages/RupakKona'

function App() {

  return (
    <div >
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/wedding' element={<Wedding/>}></Route>
            <Route path='/concert' element={<Concert/>}></Route>
            <Route path='/studio' element={<Studio/>}></Route>
            <Route path='/documentory' element={<Documentory/>}></Route>
            <Route path='/RupakKona' element={<RupakKona/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
    </div>
  ) 
}

export default App

