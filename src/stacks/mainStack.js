import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TouchableHighlight, View, Image } from 'react-native'
import Drawer from './drawer.js'

const Aplication = StackNavigator({
  DrawerStack: {screen: Drawer, initialRouteName: 'Splash'}},
  { navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#4A4A5A',
      paddingLeft: 10,
      paddingRight: 10
    },
    title: 'Aleph',
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
      </TouchableHighlight>
    </View>
  })
  }
)

export default Aplication
