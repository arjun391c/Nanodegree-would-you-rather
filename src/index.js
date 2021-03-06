import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import middlewares from './middlewares'

const store = createStore( reducers, middlewares )

ReactDOM.render(
  <Provider store={store} >
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
