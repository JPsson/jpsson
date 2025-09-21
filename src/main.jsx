// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './tw.css'       // <-- use the built CSS, not index.css
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
