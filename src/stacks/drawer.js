import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'
import Notifications from '../pages/notifications'
import Reports from '../pages/reports-list'
import NotificationDetail from '../pages/notification-detail'
import Logout from '../pages/logout'

const StackNotifications = StackNavigator({
  Notifications: { screen: Notifications },
  NotificationDetail: { screen: NotificationDetail }
})
const StackReports = StackNavigator({
  Reports: { screen: Reports }
})

const Drawer = DrawerNavigator({
  Dashboard: {screen: Dashboard},
  Todo: {screen: Todo},
  Profile: {screen: Profile},
  Notifications: {screen: StackNotifications},
  Reports: {screen: StackReports},
  Logout: {screen: Logout}
}, {
  headerMode: 'none'
})

export default Drawer
