import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers/app'

export default function configureStore(initialState) {
  const middleware = [ thunk ]
  // if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  // }

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  )

  return store
}