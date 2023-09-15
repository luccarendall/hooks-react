import React, { useState, useReducer } from 'react';

const reducer = (state, action) => { // state são os estados e action as ações que o dispatch vai disparara
  switch(action.type) {
    case 'increment':
      return {...state, count: state.count + 1} // state passado com spread para que ao adicionar +1 não sobrescever o showText que tb tá no estado. O que o spread faz é alterar só o que é pedido, no caso o count: que está depois da virgula. Garantindo que os outros dados do objeto não vao ser sobrescritos e perdidos
    case 'showText':
      return {...state, showText: !state.showText}
    default:
      console.log('Switch caiu no default')
      return 'Esta action não existe'
    }
}

function TemplateComponent() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);


// Sintaxe:
  // const [{A}, B] = useReducer (C, {D})
  // A = obj com os estados
  // B = dispatch --> é a função que dispara uma ação(como o setState)
  // C = Função que diz o que vai acontecer a cada vez que a gente despachar alguma coisa
  // D = obj com os valores dos estados iniciais
  const [state, dispatch] = useReducer(reducer, {
    count:0,
    showText: true,
  });



  // const handleClick = () => {
    //   setCout(count + 1) // EM situações de concorrencia de atualizações de estado essa forma de implementação pode causar perda de alguma atualização. Exemplo:
    // }

    // useEffect(() => { // Esse useEffect gera um loop que atualiza os estados infinitamente. Ao fazer cerca de 16 mil atualizações, a implementação com prevCount conta todas enquanto a atualização direto no estado count perdeu 1 atualização. Num cenário com 1 milhão de requisições isso geraria um erro de quase 63 no valor real do estado
    //   // setCout(count + 1) --> implementação ruim
    //   // setCout2((prevCount) => prevCount + 1) --> implementação melhor
    // Isso é chamado de "função de atualização de estado" e é útil em situações de concorrência, pois garante que você esteja atualizando o estado com base no valor mais recente, mesmo se várias atualizações estiverem ocorrendo simultaneamente. Isso pode ajudar a evitar problemas de perda de atualizações.
    // })

  const handleClick = () => { // Nesse caso que temos 1 função atualizando 2 ou + estados podemos usar o userReducer
    setCount((prevCount) => prevCount + 1)
    setShowText(!showText) // inverte o valor
  }


  return (
    <div className='App'>
      <h1>Front</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Clique</button>
      {showText && <p>Bem vindo ao bla bla bla</p>}
    </div>
  );
}

export default TemplateComponent;
