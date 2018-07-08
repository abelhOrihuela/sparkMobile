import React from 'react'
import { StackNavigator } from 'react-navigation'
import { TouchableHighlight, View, Text, Image } from 'react-native'
import Drawer from './drawer.js'

const Aplication = StackNavigator({
  DrawerStack: {screen: Drawer, initialRouteName: 'Splash'}}, { navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: '#000',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: 'Spark',
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
        style={{ width: 30, height: 30, backgroundColor: '#000' }}
        source={require('./menu.png')} />
    </TouchableHighlight>
  </View>
})
}
)

export default Aplication
