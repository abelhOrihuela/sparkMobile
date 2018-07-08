import {DrawerNavigator} from 'react-navigation'
import Splash from '../pages/splash'
import Todo from '../pages/todo'

const Drawer = DrawerNavigator({
  Splash: {screen: Splash},
  Todo: {screen: Todo}
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default Drawer
