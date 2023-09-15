// TemplateComponent.js
import React, {useState, useEffect, useRef} from 'react';

function TemplateComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0); //

  const numberRef = useRef(0); // ao usar o useRef, o que seria o nosso setState é current.
  const buttonRef = useRef()
  // A forma de atribuir valor a uma constante useRef é semelhante ao useState:
  // invés de usar: state = setState(novo-estado)
  // usamos: estado.current = novo-estado


  // Não re-renderiza o componente a cada atualização de estado
  useEffect(() => {
    // setNumber((prevNumber) => prevNumber + 1); O setNumber cria um loop infinito
    numberRef.current = numberRef.current + 1; // Já o useRef impede a re-renderização da página, não criando o loop
  })


  // Referência para elementos do DOM
  useEffect(() => {
    // buttonRef.current -> nesse ponto p useRef se comportar exatamente como um querySelector e agora vc tem acesso a todas as funções originalmente do DOM. Vc tem controle sobre o comportamento do botão, além do controle do que acontece quando ele é clicado como é o caso do onClick(). Exemplo:
    buttonRef.current.click() // Essa manipulação de DOM gera um click automatico no botão, que dentro desse useEffect vai ser realizado sempre que o componente for montado. Você pode usar para ativar um botão assim que o usuário entrar na tela do seu componente ou você pode renderizar um componente de formulário com o 1º input do formulário já selecionado por exemplo. Lembre-se o useRef usado dessa forma te dá acesso a todo poder de manipulação de DOM, não só com tags button. Serve para qualquer tag e aí vc usa um atributo que faça sentido para aquela tag
  }, [])


  return (
    <div>
        <h1>O componente foi re-montado {number} vezes</h1>
        <h1>O número do useRef é: {numberRef.current}</h1>
        <h1>O contador é: {count}</h1>
        <button
        ref={buttonRef} // Toda tag jsx tem o atributo "ref". Que aceita o useRef para fazer a ligação entre a referência e o input
        onClick={() => {setCount((prevCount) => prevCount + 1)}}>+1</button>
    </div>
  );
}

export default TemplateComponent;

// Toda vez que o estado é alterado, o componente é renderizado novamente. Lembra que a requisição a uma API que guarda os dados num estado precisa vir no useEffect por causa disso, pra não causar loop infinito.

// Pensando nisso, o useRef permite a mudança do valor mas bloqueia a re renderização do componente. Sendo um recurso útil quando pensamos em