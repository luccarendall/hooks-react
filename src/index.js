import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './components/routes/Home'
import Contact from './components/routes/Contact'

const router = createBrowserRouter([ // sintaxe router = createBrowserRouter([{}]) - recebe um array de objetos com o componente base - 'path: '/' element: <App /> - e as demais páginas (componentes) vem como children do componente base (App.js)
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/contact', element: <Contact />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  No lugar do App deve colocar RouterProvider e passar a prop router recebendo router */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
