import React from 'react'
import {ActivityIndicator, AsyncStorage, Text, View, Image, StyleSheet} from 'react-native'
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

  render () {
    return (<View style={{flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'}}>
      <Video
        source={lights}
        resizeMode='cover'
        style={StyleSheet.absoluteFill} />
      </View>)
  }
}

export default Splash
