import React, { Component } from 'react'
import { StyleSheet, Text, View, RefreshControl } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import RaceListItem from './RaceListItem'
import { fetchRacingData } from '../state/races/actions'

class RaceList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  onRefresh() {
    this.props.fetchRacingData()
  }

  render() {
    const { nextRaces } = this.props
    const { refreshing } = this.state
    return (
      <FlatList
        style={styles.container}
        data={nextRaces}
        renderItem={({ item }) => (
          <RaceListItem key={item.race_id} race={item} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh.bind(this)} />
        }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    nextRaces: state.nextRaces
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRacingData: () => {
      dispatch(fetchRacingData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceList)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})
