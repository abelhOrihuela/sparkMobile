import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native'

export default class Layout extends Component {
  render () {
    const style = this.props.style || {}

    return (
      <ScrollView style={[styles.container, styles.isBackgroundWhite, style]}>
        <View style={{flex: 1}}>
          {this.props.children}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})
