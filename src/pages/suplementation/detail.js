import React, { Component } from 'react'
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import ejercicioBg from 'app/src/ejercicio-fondo.jpg'

import bgTipsExercise from 'app/src/images/bg-tips-exercise.png'
import icon from 'app/src/iconDna.png'
import iconExercise from 'app/src/icon-exercise.png'
import iconExerciseRun from 'app/src/icon-exercise-run.png'
import iconMyPlate from 'app/src/iconMyPlate.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Detail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Exercise',
      drawerIcon: () => (
        <Icon name='file' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'Exercise'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  goToSection (section) {
    this.props.navigation.navigate(section)
  }

  render() {
    let title = (<View>
      <Text style={styles.fontWhite18}>¿Qué encontrarás?</Text>
    </View>)
    return (
      <Page style={[styles.isPaddingless]}>

      </Page>
    )
  }
}

export default Detail
