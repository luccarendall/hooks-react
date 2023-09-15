// TemplateComponent.js
import React, {useState} from 'react';

function TemplateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>O contador é: {count}</h1>
        <button onClick={
          () => {
            setCount((prevCount) => prevCount + 1)} // adiciona +1 ao valor antigo do estado contador
          }>+1</button>
    </div>
  );
}

export default TemplateComponent;

// Toda vez que o estado é alterado, o componente é renderizado novamente. Lembra que a requisição a uma API que guarda os dados num estado precisa vir no useEffect por causa disso, pra não causar loop infinito.

// Pensando nisso, o useRef permite a mudança do valor mas bloqueia a re renderização do componente. 