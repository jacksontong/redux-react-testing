import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from '../reducers'

const configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  )

  return store
}

export default configureStore