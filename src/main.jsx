import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GoallApp from './GoallApp.jsx'

const params = new URLSearchParams(window.location.search)
const isGoall = params.get('form') === 'goall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isGoall ? <GoallApp /> : <App />}
  </StrictMode>,
)
