import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class PlanAlimentation extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Im the PlanAlimentation component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
