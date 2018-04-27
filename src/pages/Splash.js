import React from 'react'
import {ActivityIndicator, AsyncStorage, Text, View, Image} from 'react-native'

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
        <Image style={{ width: 320, height: 300, backgroundColor: 'white'}} source={require('../../assets/img/splash.png')} />
      </View>)
  }
}

export default Splash
