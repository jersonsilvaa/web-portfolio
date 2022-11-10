import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { $ } from './utils/dom'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)