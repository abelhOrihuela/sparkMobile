import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Dashboard from '../pages/dashboard'
import Profile from '../pages/profile'
import Reports from '../pages/reports-list'
import MyNewMe from '../pages/my-new-me'
import ReportDetail from '../pages/reports-detail'
import Exercise from '../pages/exercise/index'
import ExerciseDetail from '../pages/exercise/detail/index'
import ExerciseTypes from '../pages/exercise/types/index'
import Suplementation from '../pages/suplementation/index'
import SuplementationActivities from '../pages/suplementation/activities'
import SuplementationDetail from '../pages/suplementation/detail'
import SuplementatioIntestinal from '../pages/suplementation/intestinal'

import Longevity from '../pages/longevity/index'
import LongevityAntioxidants from '../pages/longevity/antioxidants'
import LongevitySuggestions from '../pages/longevity/suggestions'

import Lifestyle from '../pages/lifestyle/index'
import LifestyleHidratation from '../pages/lifestyle/hidratation'
import LifestyleSleep from '../pages/lifestyle/sleep'
import LifestyleBreathing from '../pages/lifestyle/breathing'
import LifestyleStress from '../pages/lifestyle/stress'
import LifestylePsychological from '../pages/lifestyle/psychological'

import Nutrition from '../pages/nutrition/index'
import PlanAlimentation from '../pages/nutrition/plan/index'
import AlchemyPlate from '../pages/nutrition/plate/index'

import TipsNutrition from '../pages/tips-nutrition'
import TipsDetail from '../pages/tips-detail'

import Logout from '../pages/logout'

// const StackNotifications = StackNavigator({
//   Notifications: { screen: Notifications },
//   NotificationDetail: { screen: NotificationDetail }
// })
// const StackReports = StackNavigator({
//   Reports: { screen: Reports },
//   ReportDetail: {screen: ReportDetail}
// })

const StackMyNewMe = StackNavigator({
  Home: {screen: Dashboard},
  Reports: { screen: Reports },
  ReportDetail: {screen: ReportDetail},

  MyNewMe: { screen: MyNewMe },

  Nutrition: {screen: Nutrition},
  PlanAlimentation: {screen: PlanAlimentation},
  AlchemyPlate: {screen: AlchemyPlate},

  Exercise: {screen: Exercise},
  ExerciseDetail: {screen: ExerciseDetail},
  ExerciseTypes: {screen: ExerciseTypes},

  Suplementation: {screen: Suplementation},
  SuplementationActivities: {screen: SuplementationActivities},
  SuplementationDetail: {screen: SuplementationDetail},
  SuplementatioIntestinal: {screen: SuplementatioIntestinal},

  Longevity: {screen: Longevity},
  LongevityAntioxidants: {screen: LongevityAntioxidants},
  LongevitySuggestions: {screen: LongevitySuggestions},

  Lifestyle: {screen: Lifestyle},
  LifestyleHidratation: {screen: LifestyleHidratation},
  LifestyleSleep: {screen: LifestyleSleep},
  LifestyleBreathing: {screen: LifestyleBreathing},
  LifestyleStress: {screen: LifestyleStress},
  LifestylePsychological: {screen: LifestylePsychological},

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
