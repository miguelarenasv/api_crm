import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Routing
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import VerCliente from './paginas/VerCliente'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/'
          element={
            <Navigate to="/clientes" replace={true} />
          }
        />

        <Route>
          <Route path='/clientes' element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="nuevo" element={<NuevoCliente />} />
            <Route path="editar/:id" element={<EditarCliente />} />
            <Route path=":id" element={<VerCliente />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
