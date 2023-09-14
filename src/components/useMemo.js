import React, {useState, useEffect, useMemo} from 'react';

// O useMemo é um hook que trabalha com memoização (sim, tá certo). É uma técnica focada em melhorar o desempenho de softwares, que consiste em armazenar em cache/memória o resultado de chamadas à funções específicas que sejam custosas. Geralmente é usada para funções que retornam o mesmo valor várias vezes e/ou é uma função que demora para ser computada, pra buscar os dados de uma requisição, enfim... uma função que demora e pesa o fluxo.

function MeuComponente() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [num3, setNum3] = useState(1);
  const [num4, setNum4] = useState(1);

  const potencia = (() => { // Ao fazer uma função auto invocada "const potencia = (() => {...})()" invés de "const potencia = () => {...}" e chamar ela depoius potencia(). Ao fazer isso potencia deixa de ser uma função e vira uma variável que recebe o retorno da função, já que a função é declarada e chamada logo em seguida nesse formato.
    const delay = Date.now() + 1000; // Adiciona um delay de 1 segundo. Simula uma função mt pesada
    while (Date.now() < delay) {}
    return num1 ** num2;
  })()

  const soma = num3 + num4;

  return (
    <div className='main'>
        <p> {`${num1}^${num2}: ${potencia}`} </p>
        <div className='buttons'>
          <input type='number' value={num1} onChange={ (e) => setNum1(Number(e.target.value)) } />
          <input type='number' value={num2} onChange={ (e) => setNum2(Number(e.target.value)) } />
        </div>
        <p> {`${num3}+${num4}: ${soma}`} </p>
        <div className='buttons'>
          <input type='number' value={num3} onChange={ (e) => setNum3(Number(e.target.value)) } />
          <input type='number' value={num4} onChange={ (e) => setNum4(Number(e.target.value)) } />
        </div>
    </div>
  );
}

export default MeuComponente;
