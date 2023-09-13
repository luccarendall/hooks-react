// Consulta a uma API - useEffect

import React, { useState, useEffect } from 'react';

function MeuComponente() {
  const [image, setImage] = useState();

  // lembrando: Função impura é uma função que utiliza variáveis de fora do escopo dela (efeito colateral)
  // exemplo: const soma = (a,b) => {resultado = a + b} ... nesse caso a variável resultado vem de fora da função

  // o useEffect recebe 1º uma função callback e 2º um array contendo a lista de sensitividade dessa função. Ou seja, toda vez que a variável que está dentro do array é alterada, a função do 1º parâmetro do useEffect é executada.
  // useEffect( () => {}, 1º parâmetro
  //  []) 2º parâmetro

  useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random") // elemento externo à função. Efeito colateral
      .then((res) => res.json())
      .then((obj) => {
        setImage(obj.message);
        console.log('Fetch à API realizado com sucesso')
      })
  }, []) // Se o array ficar vazio, a função é executada apenas na montagem do componente

  return (
    <div>
      <img src={image} alt='imagem aleatória de cachorrinho'/>
    </div>
  );
}

export default MeuComponente;
