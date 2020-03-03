import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import RaceFilters from '../components/RaceFilters'
import RaceList from '../components/RaceList'

export default function RaceListScreen() {
  return (
    <View style={styles.container}>
      <RaceFilters />
      <RaceList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
