import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { secondsFromDate, epochToJsDate } from '../utils/dateUtil'
import { categoryById } from '../utils/raceCategory'

export default class RaceListItem extends Component {
  render() {
    const { race } = this.props
    const secondsToStart = secondsFromDate(race.advertised_start.seconds)
    const category = categoryById(race.category_id)
    return (
      <View key={race.race_id} style={styles.container}>
        <View style={styles.meetName}>
          <Text>{category}</Text>
          <Text>{race.meeting_name}</Text>
        </View>
        <View style={styles.raceNumber}>
          <Text>R{race.race_number}</Text>
          <Text>{secondsToStart.toLocaleString()}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderWidth: 0.2
  },
  meetName: {
    flexDirection: 'row'
  },
  raceNumber: {}
})
