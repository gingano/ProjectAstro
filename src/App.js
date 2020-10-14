import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import HomeView from './components/HomeView'
import DetailedView from './components/DetailedView'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene
            key="home"
            component={HomeView}
            title="home"
            initial={true}
            hideNavBar={true}
          />
          <Scene key="detailed" component={DetailedView} hideNavBar={true} />
        </Stack>
      </Router>
    </Provider>
  )
}

export default App
