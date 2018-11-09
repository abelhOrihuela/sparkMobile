import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native'

export default class Layout extends Component {
  render () {
    return (
      <ScrollView style={[{backgroundColor: 'white'}]}>
        <View style={styles.container}>
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
