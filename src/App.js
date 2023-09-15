import './App.css';
import NavBar from './components/context-components/NavBar';

import { Outlet } from 'react-router-dom';
// Com o Outlet do react-router-dom conseguimos exibir as páginas que foram providas à aplicação (lá no index.js)

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
// tood componente que vou usar o contexto preciso importar o useContext, importar o contexto que vou usar e setar as variáveis vindo do contexto. Igual lá no Home.

function App() {
  const {theme} = useContext(ThemeContext) // o nome da variável aqui deve ser o mesmo que o da propriedade lá no context blz?!
  
  return (
    // Adicionar uma classe ao meu App.js condicionada ao contexto.
    <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>{/* criando uma classe dinâmica */}
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
