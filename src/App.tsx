import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './pages/home/home'
import JsPage from './pages/jsPage/jsPage'
import TsPage from './pages/tsPage/tsPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/js' element={<JsPage />} />
        <Route path='/ts' element={<TsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
