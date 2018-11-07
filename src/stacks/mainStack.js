import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TouchableHighlight, View, Image, Text } from 'react-native'
import Drawer from './drawer.js'
import Login from '../pages/login'
import ResetPassword from '../pages/reset-password'
import Splash from '../pages/splash'
import logo from '../images/logo.png'

const Aplication = StackNavigator({
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  ResetPassword: {
    screen: ResetPassword
  },
  DrawerStack: {
    screen: Drawer, initialRouteName: 'Splash'
  }
}, { navigationOptions: ({navigation}) => ({
  headerStyle: {
    padding: 10
  },
  headerTintColor: 'white',
  headerTitle: (<Image style={{width: '100%'}} resizeMode='center' source={logo} />),
  headerLeft: (<TouchableHighlight
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>
    <Image
      style={{ backgroundColor: 'white' }}
      source={require('./menu.png')} />
  </TouchableHighlight>),
  headerRight: (<TouchableHighlight
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>
    <Image
      style={{ backgroundColor: 'white' }}
      source={require('./menu.png')} />
  </TouchableHighlight>)
})
}
)

export default Aplication
