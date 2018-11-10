/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Aplication from './stacks/mainStack.js'
import { Font } from 'expo'

Font.loadAsync({
  'ginora-regular': require('../assets/fonts/ginora-sans-regular.otf'),
  'adam': require('../assets/fonts/adam.otf'),
})

export default class App extends Component {
  render () {
    return (
      <Aplication />
    )
  }
}
