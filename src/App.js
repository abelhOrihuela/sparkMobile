/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import t from 'i18n-react'
import translations from './i18n'
import Aplication from './stacks/mainStack.js'
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
