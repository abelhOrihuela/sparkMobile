import {DrawerNavigator} from 'react-navigation'
import Splash from '../pages/Splash'

const Drawer = DrawerNavigator({
  Splash: {screen: Splash}
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default Drawer
