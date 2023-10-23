import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const modifyTheme = () => { // função para alterar o tema
    if( theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    // passar na variável value um objeto com os valores que eu quero compartilhar entre os componentes
    <ThemeContext.Provider value={{theme, modifyTheme}}> {/* nesse caso estou compartilhando uma forma de consultar o estado atual do tema e uma forma de alterar o estado do tema */}
      {children}
    </ThemeContext.Provider>
  )
}