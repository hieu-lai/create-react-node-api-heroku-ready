import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import registerServiceWorker from './registerServiceWorker'
import App from './router/AppRouter'

injectGlobal`
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

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
