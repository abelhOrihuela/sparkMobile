import React, { Component } from 'react'
import {
  Platform
} from 'react-native'
import PanelAndroid from './panel-android'
import PanelIOS from './panel-ios'

class Panel extends Component {
  render () {
    if (Platform.OS === 'ios') {
      return <PanelIOS {...this.props} />
    }

    return <PanelAndroid {...this.props} />
  }
}

export default Panel
