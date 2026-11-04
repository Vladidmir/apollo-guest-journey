import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AppState } from './state'
import './index.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={basename}>
    <AppState>
      <App />
    </AppState>
  </BrowserRouter>,
)
