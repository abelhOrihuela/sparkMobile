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
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
  }

  componentDidMount () {
    Animated.sequence(
      [
        Animated.timing(this.animatedValue1, {
          toValue: 150,
          duration: 1000
        }),
        Animated.spring(this.animatedValue2, {
          toValue: 3
        }),
        Animated.timing(this.animatedValue1, {
          toValue: 0,
          duration: 1000
        }),
        Animated.spring(this.animatedValue2, {
          toValue: 0.5
        })
      ]
    ).start()
  }

  render () {

    const animatesStyle = {
      transform: [
        {
          translateY: this.animatedValue1
        },
        {
          scale: this.animatedValue2
        }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatesStyle]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#333"
  }
});

export default Splash
