/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import t from 'i18n-react'
import translations from './i18n'
import Aplication from './stacks/mainStack.js'
import { Font } from 'expo'

Font.loadAsync({
  'ginora-regular': require('../assets/fonts/ginora-sans-regular.otf'),
  'adam': require('../assets/fonts/adam.otf'),
})

export default class App extends Component {
  componentDidMount () {
    console.log('translations', translations)
    t.setTexts(translations['es-MX'])
  }

  render () {
    return (
      <Aplication />
    )
  }
}
