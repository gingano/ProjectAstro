import React from 'react'
import { NativeRouter, Route } from 'react-router-native'
import HomeView from './components/HomeView'
import DetailedView from './components/DetailedView'

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detailed" component={DetailedView} />
    </NativeRouter>
  )
}

export default App
