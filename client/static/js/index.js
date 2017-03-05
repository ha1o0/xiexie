import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
//import { fetchCaseList } from './actions/caseList'
import Root from './containers/Root'

const store = configureStore()

//store.dispatch(fetchCaseList())

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
