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
      <button onClick={modifyTheme}>Alterar tema</button>
    </div>
  );
}

export default Home;

// Lembrete: a persistencia de estado usando useContext é perdida após atualizar a página. Para manter nesses casos use outra forma de persistir dados, como o localStorage por exemplo. Inclusive tem o hook useLocalStorage que é bastante usado. O useContext é mais para facilitar a comunicação entre os componentes, criando um intermediário entre todos os componentes filhos de app por exemplo. Evitando prop drilling que torna teu código mt mais complexo e propenso a erros