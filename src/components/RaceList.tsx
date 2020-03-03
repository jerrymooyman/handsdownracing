import React, { Component } from 'react'
import { StyleSheet, Text, View, RefreshControl } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import RaceListItem from './RaceListItem'

class RaceList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  onRefresh() {
    console.log(`====== refreshing`)
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
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
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
