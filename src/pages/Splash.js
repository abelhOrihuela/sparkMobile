import React from 'react'
import {ActivityIndicator, AsyncStorage, Text, View, Image, StyleSheet, Animated, TouchableOpacity} from 'react-native'
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
    this.value = 0
    this.animatedValue = new Animated.Value(0)
    this.animatedValue.addListener(({value}) => {
      this.value = value
    })

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })

    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard () {
    if (this.value >= 90) {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 800
      }).start()
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 180,
        duration: 800
      }).start()
    }
  }
  render () {

    const frontAnimatedStyle = {
      transform: [
        {
          rotateY: this.frontInterpolate
        }
      ]
    }

    const backAnimatedStyle = {
      transform: [
        {
          rotateY: this.backInterpolate
        }
      ]
    }
    return (
      <View style={styles.container}>
      <View>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
          <Text style={styles.flipText}>
            This text is flipping on the front.
          </Text>
        </Animated.View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack,backAnimatedStyle, {opacity: this.backOpacity}]}>
          <Text style={styles.flipText}>
            This text is flipping on the back.
          </Text>
        </Animated.View>
      </View>
      <TouchableOpacity onPress={() => this.flipCard()}>
        <Text>Flip!</Text>
      </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
})

export default Splash
