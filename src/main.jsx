import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Theme init: keep user's choice
const rootEl = document.documentElement
const saved = localStorage.getItem('theme')
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  rootEl.classList.add('dark')
} else {
  rootEl.classList.remove('dark')
}

createRoot(document.getElementById('root')).render(<App />)
