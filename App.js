
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'
import MainTabNavigator from './src/navigations/MainTabNavigator'

const App = () => {
  return (
    <Provider store={configureStore}>
      <MainTabNavigator />
    </Provider>
  )
}
export default App
