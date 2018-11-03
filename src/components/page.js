import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Page extends Component {
  render () {
    return (
      <View style={styles.page}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  }
})
