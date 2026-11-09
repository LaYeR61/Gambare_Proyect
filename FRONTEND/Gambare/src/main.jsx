import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/colors.css'
import './styles/estilo_general.css'
import './styles/layout.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
