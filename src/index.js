import React from 'react'
import {render} from 'react-dom'

import App from './App'
import state from './state'

render(<App {...state} />, document.querySelector('#app'))
