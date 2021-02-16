
import React from 'react'
import { Provider } from 'react-redux'
import globalStore from './src/redux/store'
import MainTabNavigator from './src/navigations/MainTabNavigator'

const App = () => {
  return (
    <Provider store={globalStore}>
      <MainTabNavigator />
    </Provider>
  )
}
export default App
