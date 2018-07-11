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
const getSeparator = (i) => {
  return <View key={i} styles={[styles.separator, {left: (i - 1) * width - 2.5}]} />
}
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
      animatedScroll: new Animated.Value(0),
      scrollEnabled: true
    }
    this.handleFocus = this.handleFocus.bind(this)
  }
  handleFocus (focused) {
    this.setState({
      scrollEnabled: !focused
    })
  }
  render () {
    let {scrollEnabled} = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          scrollEnabled={scrollEnabled}
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
                {...image}
                onFocus={this.handleFocus}
                focused={!scrollEnabled} />)
            })
          }
          {
            Array.apply(null, {length: this.props.images.length + 1}).map((_, i) => {
              return getSeparator(i)
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
  },
  separator: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 5
  }
})
