import React, { Component } from 'react'
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import ejercicioBg from 'app/src/ejercicio-fondo.jpg'

import bgTipsExercise from 'app/src/images/bg-tips-exercise.png'
import iconExercise from 'app/src/icon-exercise.png'
import iconExerciseRun from 'app/src/icon-exercise-run.png'
import Panel from 'app/src/components/panel'
import Page from 'app/src/components/page'
import styles from 'app/src/pages/styles'

import Cardiovascular from 'app/src/pages/exercise/detail/cardiovascular'
import Diabetes from 'app/src/pages/exercise/detail/diabetes'
import Obesity from 'app/src/pages/exercise/detail/obesity'
import Nutrition from 'app/src/pages/exercise/detail/nutrition'
import Longevity from 'app/src/pages/exercise/detail/longevity'

import Icon from 'react-native-vector-icons/FontAwesome'

let height = 215

class Index extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { navigation } = this.props
    const currentOrder = navigation.getParam('currentOrder', null)
    let {key} = currentOrder.riskIndex

    let content

    if (key === 'cardiovascular') {
      content = <Cardiovascular data={currentOrder.riskIndex} />
    } else if (key === 'obesity') {
      content = <Obesity data={currentOrder.riskIndex} />
    } else if (key === 'nutrition') {
      content = <Nutrition data={currentOrder.riskIndex} />
    } else if (key === 'longevity') {
      content = <Longevity data={currentOrder.riskIndex} />
    }

    return (<Page>
      {content}
    </Page>)
  }
}

export default Index
