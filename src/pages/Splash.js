import React from 'react'
import {ActivityIndicator, AsyncStorage, Text, View, Image, StyleSheet, Animated} from 'react-native'
import Video from 'react-native-video'

import lights from '../lights.mp4'

class Splash extends React.Component {
  static navigationOptions = {
         header: null,
         drawerLabel: () => null
  }
  constructor () {
    super()
    this.state = {
    }
  }

  componentWillMount () {
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start()
  }

  render () {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0, 0, 0)', 'gray']
    })

    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        {
          translateY: this.animatedValue
        }
      ]
    }
    return (<View style={[styles.container]}>
      <Animated.View style={[styles.box,animatedStyle]}/>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
  }
})
export default Splash
