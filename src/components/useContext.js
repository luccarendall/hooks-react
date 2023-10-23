import React from 'react';

// useContext é um hook utilizado para consumir um contexto, da Context API. É um gerenciador de estados.
// Passo 1: Criar um contexto e um provedor (provider)
// Passo 2: Envolver os componentes que vão receber os dados do contexto
// Passo 3: Usar o useContext onde for necessário

// o useContext geralmente é utilizado quando trabalhamos com rotas. Para trafegar dados entre essas rotas. Na verdade cada componente envia/recebe os dados ao/do contexto

function MeuComponente() {
  return (
    <div>
      <p>Olá</p>
    </div>
  );
}

export default MeuComponente;
