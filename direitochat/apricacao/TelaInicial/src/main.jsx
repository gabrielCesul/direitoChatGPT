import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import TelaInicial from './App.jsx'
import Duvida from './Rotas/chat/src/App.jsx';
import Simulador from './Rotas/simulador/src/App.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <TelaInicial/>
  },
  {
    path : "Duvida",
    element : <Duvida/>
  },
  {
    path : "Professor",
    element : <Simulador/>
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
