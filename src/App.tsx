import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getStore } from './state/store'
import RaceListScreen from './screens/RaceListScreen'
import { fetchRacingData } from './state/races/actions'

const store = getStore()
const Stack = createStackNavigator()

const intervalDataFetcher = () => {
  store.dispatch(fetchRacingData())
  setInterval(() => {
    store.dispatch(fetchRacingData())
  }, 10000)
}

intervalDataFetcher()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Hands Down Racing" component={RaceListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
