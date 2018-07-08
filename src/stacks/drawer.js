import {DrawerNavigator} from 'react-navigation'
import Splash from '../pages/splash'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'

const Drawer = DrawerNavigator({
  Splash: {screen: Splash},
  Todo: {screen: Todo},
  Dashboard: {screen: Dashboard}

}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default Drawer
