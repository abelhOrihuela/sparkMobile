import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class TipsNutrition extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Im the TipsNutrition component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
