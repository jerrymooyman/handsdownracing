import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import RaceListItem from './RaceListItem'

class RaceList extends Component {
  render() {
    const { nextRaces} = this.props
    return (
      <FlatList
        style={styles.container}
        data={nextRaces}
        renderItem={({ item }) => (
          <RaceListItem key={item.race_id} race={item} />
        )}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    nextRaces: state.nextRaces
    //raceSummaries: state.races.race_summaries,
    //nextToGoIds: state.races.next_to_go_ids
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      //dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceList)

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: 'red',
    flexGrow: 1
    //alignItems: 'center',
    //justifyContent: 'center',
    //borderWidth: 1
  }
})
