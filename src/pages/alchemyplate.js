import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class AlchemyPlate extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>I the AlchemyPlate component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
