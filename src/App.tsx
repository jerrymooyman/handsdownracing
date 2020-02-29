import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import { getStore } from './state/store'

const store = getStore()

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
