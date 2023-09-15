import './App.css';
import NavBar from './components/context-components/NavBar';

import { Outlet } from 'react-router-dom';
// Com o Outlet do react-router-dom conseguimos exibir as páginas que foram providas à aplicação (lá no index.js)

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
