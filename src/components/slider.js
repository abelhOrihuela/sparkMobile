import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated
} from 'react-native'
import Slide from './slide'
const {width} = Dimensions.get('window')

const getInterpolate = (animatedScroll, i, imageLength) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width
  ]
  const outputRange = i === 0 ? [0, 0, 150] : [0, 0, 150]

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp'
  })
}
export default class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animatedScroll: new Animated.Value(0)
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.state.animatedScroll
                  }
                }
              }
            ])
          }>
          {
            this.props.images.map((image, i) => {
              return (<Slide
                key={i}
                translateX={getInterpolate(this.state.animatedScroll, i, this.props.images.length)}
                {...image} />)
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
