import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default class Layout extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
