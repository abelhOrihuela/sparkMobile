import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'
import Notifications from '../pages/notifications'
import NotificationDetail from '../pages/notification-detail'

const StackNotifications = StackNavigator({
  Notifications: { screen: Notifications },
  NotificationDetail: { screen: NotificationDetail }
})
const Drawer = DrawerNavigator({
  Profile: {screen: Profile},
  Todo: {screen: Todo},
  Dashboard: {screen: Dashboard},
  Notifications: { screen: StackNotifications},
}, {
  headerMode: 'none'
})

export default Drawer
