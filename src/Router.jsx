import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cursinho from './pages/Cusinho'
import Contato from './pages/Contato'
import Footer from './components/Footer'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/cursinho" element={<Cursinho/>} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer content="Feito pela Mônica com muito amor ♡" />
    </BrowserRouter>
  )
}

export default Router
