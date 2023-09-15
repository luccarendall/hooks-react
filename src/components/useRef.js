// TemplateComponent.js
import React, {useState, useEffect, useRef} from 'react';

function TemplateComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0); //

  const numberRef = useRef(0); // ao usar o useRef, o que seria o nosso setState é current.

  // A forma de atribuir valor a uma constante useRef é semelhante ao useState:
  // invés de usar: state = setState(novo-estado)
  // usamos: estado.current = novo-estado

  console.log(numberRef)
  useEffect(() => {
    // setNumber((prevNumber) => prevNumber + 1); O setNumber cria um loop infinito
    numberRef.current = numberRef.current + 1; // Já o useRef impede a re-renderização da página, não criando o loop
  })

  return (
    <div>
        <h1>O componente foi re-montado {number} vezes</h1>
        <h1>O número do useRef é: {numberRef.current}</h1>
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

// Pensando nisso, o useRef permite a mudança do valor mas bloqueia a re renderização do componente. Sendo um recurso útil quando pensamos em