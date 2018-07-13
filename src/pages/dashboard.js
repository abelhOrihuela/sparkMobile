import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

export default class Dashboard extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.heartLeft]}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heartLeft: {
    height: 100,
    width: 200,
    backgroundColor: 'red',
    transform: [
      {rotate: '45deg'}
    ]
  }
})
