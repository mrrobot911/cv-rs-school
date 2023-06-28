import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './scripts/App.jsx'
import ThemeProvider from './utils/ThemeProvider.jsx'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
