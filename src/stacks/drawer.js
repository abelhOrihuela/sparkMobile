import {DrawerNavigator} from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'
import ViewPage from '../pages/webview'

const Drawer = DrawerNavigator({
  Profile: {screen: Profile},
  ViewPage: {screen: ViewPage},
  Todo: {screen: Todo},
  Dashboard: {screen: Dashboard}
}, {
  headerMode: 'none'
})

export default Drawer
