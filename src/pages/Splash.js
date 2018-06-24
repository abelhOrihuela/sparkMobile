import React from 'react'
import {ActivityIndicator, AsyncStorage, Text, View, Image, StyleSheet, Animated, Dimensions} from 'react-native'
import Video from 'react-native-video'

import lights from '../lights.mp4'
const {height} = Dimensions.get("window")
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
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
  }

  componentDidMount () {
    Animated.stagger(300, [
      Animated.timing(this.animatedValue1, {
        toValue: height,
        duration: 1500
      }),
      Animated.timing(this.animatedValue2, {
        toValue: height,
        duration: 1500
      }),
      Animated.timing(this.animatedValue3, {
        toValue: height,
        duration: 1500
      })
    ]).start()
  }

  render () {

    const animatedStyle1 = {
      height: this.animatedValue1,
      backgroundColor: '#BBDEFB'
    }
    const animatedStyle2 = {
      height: this.animatedValue2,
      backgroundColor: '#2196F3'
    }
    const animatedStyle3 = {
      height: this.animatedValue3,
      backgroundColor: '#64B5F6'
    }
    return (<View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle1]}></Animated.View>
      <Animated.View style={[styles.box, animatedStyle2]}></Animated.View>
      <Animated.View style={[styles.box, animatedStyle3]}></Animated.View>
      <Animated.View style={[styles.box, animatedStyle1]}></Animated.View>
      <Animated.View style={[styles.box, animatedStyle2]}></Animated.View>
      <Animated.View style={[styles.box, animatedStyle3]}></Animated.View>


    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  box: {
    width: 50,
    backgroundColor: "#333",
    marginHorizontal: 5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  }
})

export default Splash
