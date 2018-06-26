import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Footer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Im the MyComponent component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
