import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Filter = ({ style, name }) => {
  return (
    <View style={style}>
      <Text>{name}</Text>
    </View>
  )
}

export default class RaceFilters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filters}>
          <Filter style={styles.filter} name="Horse" />
          <Filter style={styles.filter} name="Greyhound" />
          <Filter style={styles.filter} name="Harness" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //borderWidth: 1
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //alignItems: 'center',
    borderWidth: 1,
  },
  filter: {
    height: 40,
    //borderWidth: 1
  }
})
