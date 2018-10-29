import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'
import Notifications from '../pages/notifications'
import Reports from '../pages/reports-list'
import MyNewMe from '../pages/my-new-me'
import ReportDetail from '../pages/reports-detail'
import NotificationDetail from '../pages/notification-detail'
import Logout from '../pages/logout'

// const StackNotifications = StackNavigator({
//   Notifications: { screen: Notifications },
//   NotificationDetail: { screen: NotificationDetail }
// })

const StackReports = StackNavigator({
  Reports: { screen: Reports },
  ReportDetail: {screen: ReportDetail}
})

const StackMyNewMe = StackNavigator({
  MyNewMe: { screen: MyNewMe },
  ReportDetail: {screen: ReportDetail}
})

const Drawer = DrawerNavigator({
  Dashboard: {screen: Dashboard},
  // Todo: {screen: Todo},
  Profile: {screen: Profile},
  // Notifications: {screen: StackNotifications},
  Reports: {screen: StackReports},
  MyNewMe: {screen: StackMyNewMe},
  Logout: {screen: Logout}
}, {
  contentOptions: {
    activeTintColor: '#FFFFFF',
    activeBackgroundColor: 'transparent',
    inactiveTintColor: '#FAFAFA',
    inactiveBackgroundColor: 'transparent',
    labelStyle: {
      fontSize: 15,
      marginLeft: 10
    }
  },
  headerMode: 'none',
  drawerBackgroundColor: '#0D4E78',
  drawerPosition: 'left'
})

export default Drawer
