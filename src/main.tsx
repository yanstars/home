import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './index'
import 'uno.css'

const root = document.getElementById('app')!

const rootWrap = createRoot(root)

rootWrap.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>)
