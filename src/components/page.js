import React, { Component } from 'react'
import background from 'app/src/images/textura.png'
import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView
} from 'react-native'

export default class Layout extends Component {
  render () {
    return (
      <ScrollView style={[styles.container, this.props.style]}>
        <ImageBackground style={[StyleSheet.absoluteFill]} source={background} />
        {this.props.children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})
