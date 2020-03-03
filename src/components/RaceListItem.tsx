import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { secondsFromDate } from '../utils/dateUtil'
import { categoryById } from '../utils/raceCategory'

const Icon = ({ children }) => {
  return (
    <View style={styles.icon}>
      <Text>{children}</Text>
    </View>
  )
}

export default class RaceListItem extends Component {
  render() {
    const { race } = this.props
    const secondsToStart = secondsFromDate(race.advertised_start.seconds)
    const category = categoryById(race.category_id)
    return (
      <View key={race.race_id} style={styles.container}>
        <View style={styles.leftSide}>
          <Icon>{category}</Icon>
          <Text style={styles.meetName}>{race.meeting_name}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.time}>{secondsToStart.toLocaleString()}</Text>
          <Icon>R{race.race_number}</Icon>
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
    borderWidth: 1
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  meetName: {
    marginLeft: 10
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  time: {
    marginRight: 10
  },
  icon: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10
  }
})
