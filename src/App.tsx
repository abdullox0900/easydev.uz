import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './pages/home/home'
import JsPage from './pages/jsPage/jsPage'
import TsPage from './pages/tsPage/tsPage'

import { SmileOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import Version from './pages/version/version'
import NotFound from './components/not_found/not_found'

function App() {

  const [api, contextHolder] = notification.useNotification()

  const openNotification = () => {
    api.open({
      message: 'Sayt test rejimida ishlayapti',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    })
  }

  setTimeout(() => {
    openNotification()
  }, 30000)

  return (
    <>
      <Header />
      {contextHolder}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/javascript' element={<JsPage />} />
        <Route path='/typescript' element={<TsPage />} />
        <Route path='/easydev/version' element={<Version />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
