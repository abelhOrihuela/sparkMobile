import React from 'react'
import { StackNavigator, SafeAreaView } from 'react-navigation'
import { Platform, TouchableHighlight, View, Image } from 'react-native'
import Drawer from './drawer.js'
import Login from '../pages/login'
import ResetPassword from '../pages/reset-password'
import Splash from '../pages/splash'
import logo from '../images/logo.png'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Octicon from 'react-native-vector-icons/Octicons'

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(25)
}

if (Platform.OS === 'ios') {
  SafeAreaView.setStatusBarHeight(35)
}

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
}, {
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20
    },
    headerTintColor: 'white',
    headerTitle: (<Image style={{width: '100%'}} resizeMode='center' source={logo} />),
    headerLeft: (<View style={{flex: 1}}>
      {navigation.state.routeName !== 'Dashboard' && (
        <AntIcon
          style={{ color: '#0D4E78' }}
          name='left'
          size={18}
          onPress={() => {
            navigation.goBack()
          }}
        />
      )}
    </View>),
    headerRight: (<TouchableHighlight
      underlayColor='transparent'
      onPress={() => {
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen')
        } else {
          navigation.navigate('DrawerClose')
        }
      }}>
      <View>
        <Octicon
          style={{ color: '#0D4E78' }}
          size={24}
          name='three-bars'
        />
      </View>
    </TouchableHighlight>)
  })
})

export default Aplication
