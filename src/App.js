import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from './components/HomeView'
import DetailedView from './components/DetailedView'
import store from './redux/store'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Detailed" component={DetailedView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
