import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // comentar o stricMode faz o useEffect parar de ser chamado 2x
    <App />
  // </React.StrictMode>
);
