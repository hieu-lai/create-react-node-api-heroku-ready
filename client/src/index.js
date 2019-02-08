import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'
import App from './router/AppRouter'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/Theme';

const jsx = (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <App />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>

)

ReactDOM.render(jsx, document.getElementById('root'))
registerServiceWorker()
