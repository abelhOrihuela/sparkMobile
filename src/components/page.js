import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native'

export default class Layout extends Component {
  render () {
    return (
      <ScrollView style={[styles.container, this.props.style]}>
          {this.props.children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})
