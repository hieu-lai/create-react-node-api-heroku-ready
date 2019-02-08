import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
  }

  body {
    font-family: 'Montserrat', sans-serif; 
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle