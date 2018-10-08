import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TouchableHighlight, View, Image } from 'react-native'
import Drawer from './drawer.js'
import Login from '../pages/login'
import Splash from '../pages/splash'

const Aplication = StackNavigator({
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  DrawerStack: {
    screen: Drawer, initialRouteName: 'Splash'
  }
}, { navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: '#2771A2',
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
        style={{ width: 30, height: 30, backgroundColor: '#2771A2' }}
        source={require('./menu.png')} />
    </TouchableHighlight>
  </View>
})
}
)

export default Aplication
