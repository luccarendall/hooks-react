import './App.css';

import { Outlet } from 'react-router-dom';
// Com o Outlet do react-router-dom conseguimos exibir as páginas que foram providas à aplicação (lá no index.js)

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
