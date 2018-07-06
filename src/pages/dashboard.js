import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Slider from '../components/slider'

const images = [
  {image: require('../images/drink1.jpg'), title: 'Drink 1'},
  {image: require('../images/drink2.jpg'), title: 'Drink 2'},
  {image: require('../images/drink3.jpg'), title: 'Drink 3'},
  {image: require('../images/drink4.jpg'), title: 'Drink 4'}
]
export default class Dashboard extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Slider images={images} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
