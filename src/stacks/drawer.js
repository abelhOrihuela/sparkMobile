import {DrawerNavigator} from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'

const Drawer = DrawerNavigator({
  Profile: {screen: Profile},
  Todo: {screen: Todo},
  Dashboard: {screen: Dashboard}
}, {
  headerMode: 'none'
})

export default Drawer
