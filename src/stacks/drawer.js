import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Todo from '../pages/todo'
import Profile from '../pages/profile'
import Notifications from '../pages/notifications'
import Reports from '../pages/reports-list'
import MyNewMe from '../pages/my-new-me'
import ReportDetail from '../pages/reports-detail'
import Nutrition from '../pages/nutrition'
import Exercise from '../pages/exercise'
import Suplementation from '../pages/suplementation'
import Longevity from '../pages/longevity'
import Lifestyle from '../pages/lifestyle'
import Logout from '../pages/logout'
import AlchemyPlate from '../pages/alchemyplate/index'
import PlanAlimentation from '../pages/plan-alimentation'
import TipsNutrition from '../pages/tips-nutrition'
import TipsDetail from '../pages/tips-detail'

// const StackNotifications = StackNavigator({
//   Notifications: { screen: Notifications },
//   NotificationDetail: { screen: NotificationDetail }
// })

const StackReports = StackNavigator({
  Reports: { screen: Reports },
  ReportDetail: {screen: ReportDetail}
})

const StackMyNewMe = StackNavigator({
  Home: {screen: Dashboard},
  Reports: { screen: Reports },
  ReportDetail: {screen: ReportDetail},
  MyNewMe: { screen: MyNewMe },
  Nutrition: {screen: Nutrition},
  Exercise: {screen: Exercise},
  Suplementation: {screen: Suplementation},
  Longevity: {screen: Longevity},
  Lifestyle: {screen: Lifestyle},
  AlchemyPlate: {screen: AlchemyPlate},
  PlanAlimentation: {screen: PlanAlimentation},
  TipsNutrition: {screen: TipsNutrition},
  TipsDetail: {screen: TipsDetail}
}, {
  headerMode: 'none'
})

const Drawer = DrawerNavigator({
  Dashboard: {screen: StackMyNewMe},
  Profile: {screen: Profile},
  Reports: {screen: Reports},
  MyNewMe: {screen: MyNewMe},
  Logout: {screen: Logout}
}, {
  headerMode: 'none',
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
  drawerBackgroundColor: '#0D4E78',
  drawerPosition: 'right'
})

export default Drawer
