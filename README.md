

# Projeto de Demonstração de Hooks React

Este é um projeto de demonstração que ilustra o uso de alguns hooks no React. Este projeto destina-se a fins educacionais e serve como um guia prático para entender alguns dos diferentes hooks disponíveis no React. Cada hook implementado está disponível em uma pull request separada.

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório para o seu computador:

   ```bash
   git clone git@github.com:luccarendall/hooks-react.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd hooks-react
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o aplicativo:

   ```bash
   npm start
   ```
   
4. Acesse a branch correspondente ao hook escolhido:

   ```bash
   ex: git checkout useState-demonstration
   ```

## Demonstração de Hooks

A tabela a seguir mostra exemplos de como cada hook é usado no projeto:

| Hook                 | Descrição                                                                     |
|----------------------|-------------------------------------------------------------------------------|
| `useState`           | Este hook permite que você adicione um estado local a componentes funcionais. Ele retorna um par de valores: o estado atual e uma função para atualizá-lo. Usado para gerenciar estados simples, como contadores. |
| `useEffect`          | O `useEffect` lida com efeitos colaterais em componentes funcionais. Ele permite que você execute código após a renderização do componente, o que é útil para realizar operações assíncronas, como requisições HTTP, e manipular a árvore DOM. |
| `useContext`         | Este hook fornece acesso a um contexto global, permitindo o compartilhamento de informações em componentes aninhados sem a necessidade de passar props manualmente. É útil para temas, autenticação e outras configurações globais. |
| `useReducer`         | O `useReducer` é uma alternativa ao `useState` quando você precisa lidar com estados complexos. Ele segue o padrão Redux e gerencia estados usando um "reducer" e uma ação. Útil para casos em que o estado depende do estado anterior. |
| `useRef`             | `useRef` cria uma referência mutável que pode ser usada para acessar elementos do DOM diretamente ou para armazenar valores persistentes entre renderizações sem causar uma nova renderização. É usado para interações com o DOM ou para manter valores não afetados pelas mudanças de estado. |
| `useMemo`            | O `useMemo` memoiza valores calculados, evitando cálculos repetidos em renderizações. Ele recebe uma função e uma lista de dependências e recalcula o valor apenas quando as dependências mudam. É útil para otimizar o desempenho ao calcular valores computacionais. |
| `useCallback`        | `useCallback` é semelhante ao `useMemo`, mas memoiza funções em vez de valores. Ele é usado para evitar a recriação de funções em renderizações, especialmente quando essas funções são passadas como props para componentes filhos. |
| `useLayoutEffect`    | O `useLayoutEffect` é semelhante ao `useEffect`, mas executa de forma síncrona após todas as mudanças no DOM. É útil quando você precisa medir ou fazer alterações no layout do DOM imediatamente após uma renderização. |
| `useDebugValue`      | `useDebugValue` é usado para personalizar a exibição de informações de depuração em ferramentas de desenvolvedor, como o React DevTools. É útil para fornecer informações adicionais sobre hooks personalizados. |
| `useImperativeHandle`| O `useImperativeHandle` é usado para personalizar o valor retornado por um `ref` em componentes filhos, permitindo o controle de funções específicas expostas a componentes pais. É útil quando você precisa interagir diretamente com um componente filho. |

## Fontes utilizadas

1. [Documentação oficial do React](https://legacy.reactjs.org/docs/getting-started.html)

2. [W3Schools](https://www.w3schools.com/react/react_hooks.asp)

3. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)


## Contribuições

Sinta-se à vontade para contribuir com melhorias ou adicionar mais exemplos de uso de hooks React a este projeto. Basta criar um fork deste repositório, fazer suas modificações e enviar um pull request.
