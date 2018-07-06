import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated
} from 'react-native'
import Moment from './moment'
const {width, height} = Dimensions.get('window')
export default class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animatedScroll: new Animated.Value(0)
    }
  }
  render () {
    console.log('props', this.props)
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
            this.props.images.map((item, i) => {
              return (<Moment key={i} {...item} />)
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
