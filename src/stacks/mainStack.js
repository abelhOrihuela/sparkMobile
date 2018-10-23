import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TouchableHighlight, View, Image, Text } from 'react-native'
import Drawer from './drawer.js'
import Login from '../pages/login'
import ResetPassword from '../pages/reset-password'
import Splash from '../pages/splash'
import logo from '../logo.png'

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
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: 'AlchemyCode',
  headerTintColor: 'white',
  headerTitle: (<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1}}>
        <TouchableHighlight
          onPress={() => {
            if (navigation.state.index === 0) {
              navigation.navigate('DrawerOpen')
            } else {
              navigation.navigate('DrawerClose')
            }
          }}>
          <Image
            style={{ width: 30, height: 30, backgroundColor: '#0D4E78' }}
            source={require('./menu.png')} />
        </TouchableHighlight>
      </View>
      <View style={{flex: 4}}>
        <Image style={{padding: 20}} source={logo} />
      </View>
    </View>),
  headerLeft: null
})
}
)

export default Aplication
