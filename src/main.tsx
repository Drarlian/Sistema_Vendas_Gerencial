import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { UtilsProvider } from './contexts/UtilsContext/index.tsx'
import { AuthProvider } from './contexts/AuthContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <UtilsProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </UtilsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
