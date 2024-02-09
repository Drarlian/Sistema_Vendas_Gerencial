import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { UtilsProvider } from './contexts/UtilsContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UtilsProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UtilsProvider>
  </React.StrictMode>,
)
