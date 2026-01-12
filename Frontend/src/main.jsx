import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Cadastro from './pages/home/App' 
import Login from './pages/login'       
import Lista from './pages/lista'
import Contato from './pages/contato'       // <--- IMPORTAR AQUI

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/listar-usuarios" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)