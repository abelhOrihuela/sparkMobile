import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TouchableHighlight, View, Image } from 'react-native'
import Drawer from './drawer.js'
import Login from '../pages/login'
import ResetPassword from '../pages/reset-password'
import Splash from '../pages/splash'

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
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: 'AlchemyCode',
  headerTintColor: 'white',
  headerLeft: <View>
    <TouchableHighlight
      onPress={() => {
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen')
        } else {
          navigation.navigate('DrawerClose')
        }
      }}>
      <Image
        style={{ width: 30, height: 30, backgroundColor: 'black' }}
        source={require('./menu.png')} />
    </TouchableHighlight>
  </View>
})
}
)

export default Aplication
