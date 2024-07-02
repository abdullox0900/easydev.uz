import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async'
import Context from './context/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Context>
)
