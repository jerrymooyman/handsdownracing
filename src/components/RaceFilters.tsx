import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  TOGGLE_HORSE_FILTER,
  TOGGLE_GREYHOUND_FILTER,
  TOGGLE_HARNESS_FILTER
} from '../state/filters/types'
import { toggleHorseFilter, toggleFilter } from '../state/filters/actions'

const getFilterStyle = enabled =>
  enabled ? { ...styles.filter, ...styles.enabled } : styles.filter

const Filter = ({ style, name, onClick }) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onClick}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

class RaceFilters extends Component {
  render() {
    const { horse, harness, greyhound } = this.props.filters
    const { toggleFilter } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.filters}>
          <Filter
            style={getFilterStyle(horse)}
            onClick={() => toggleFilter(TOGGLE_HORSE_FILTER)}
            name="Horse"
          />
          <Filter
            style={getFilterStyle(greyhound)}
            onClick={() => toggleFilter(TOGGLE_GREYHOUND_FILTER)}
            name="Greyhound"
          />
          <Filter
            style={getFilterStyle(harness)}
            onClick={() => toggleFilter(TOGGLE_HARNESS_FILTER)}
            name="Harness"
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleFilter: category => {
      dispatch(toggleFilter(category))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceFilters)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1
  },
  filter: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  enabled: {
    backgroundColor: 'lightgreen'
  }
})
