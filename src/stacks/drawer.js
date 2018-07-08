import {DrawerNavigator} from 'react-navigation'
import Splash from '../pages/splash'
import Dashboard from '../pages/dashboard'

const Drawer = DrawerNavigator({
  Splash: {screen: Splash},
  Dashboard: {screen: Dashboard}
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default Drawer
