import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Provider from './utils/Provider.jsx'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
