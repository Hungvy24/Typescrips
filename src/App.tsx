import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './page/Home'
import Shop from './page/Shop'
import ProductDetail from './page/ProductDetail'
import Login from './page/Login'
import Register from './page/Register'
import Notfound from './page/Notfound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
