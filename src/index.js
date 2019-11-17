import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import { I18nextProvider } from 'react-i18next';
import App from './containers/app'
import i18n from './i18n'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
