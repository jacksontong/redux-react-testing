import { Provider } from 'react-redux'
import React from 'react'
import configureStore from './store/configureStore'

export default ({
  initialState = {},
  children
}) => (
  <Provider store={configureStore(initialState)}>
    {children}
  </Provider>
)