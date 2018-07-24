import {DrawerNavigator} from 'react-navigation'
import Login from '../pages/login'
import Splash from '../pages/splash'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'

const Drawer = DrawerNavigator({
  Splash: {screen: Splash},
  Login: {screen: Login},
  Profile: {screen: Profile},
  Todo: {screen: Todo},
  Dashboard: {screen: Dashboard}

}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default Drawer
