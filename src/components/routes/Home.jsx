import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Home() {
  // precisamos inicializar o context e extrair as informações que vieram dele, através de um objeto.
  // setamos as variáveis theme e modifyTheme, que representam o valor do estado atual e a função para alterar esse estado. Trazemos o valor dessas variáveis a partir do useContext, deixando claro nele de qual contexto estamos importando essas variáveis.
  const { theme, modifyTheme } = useContext(ThemeContext)

  return (
    <div>
      <p>Componente Home</p>
      <p>O tema atual é: {theme}</p>
    </div>
  );
}

export default Home;
