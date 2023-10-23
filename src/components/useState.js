// TemplateComponent.js
import React, {useState} from 'react';

function MeuComponente() {
  const [counter, setCounter] = useState(0);
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');

  const sum = () => {
    const a = parseFloat(numA); // transforma o dado escrito no input em número
    const b = parseFloat(numB);

    const result = a + b;
    setCounter(result);
  }

  return (
    <div>
    <h1>Contador</h1>
    <div>
      <input
        type="text"
        placeholder="Insira um número"
        value={numA}
        onChange={(event) => setNumA(event.target.value)} // atualiza o valor de num A apartir do evento
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Insira outro número"
        value={numB}
        onChange={(event) => setNumB(event.target.value)}
      />
    </div>
    <button onClick={sum}>Somar</button>
    <p>{`O resultado da soma é: ${counter}`}</p>
  </div>
);
}

export default MeuComponente;
