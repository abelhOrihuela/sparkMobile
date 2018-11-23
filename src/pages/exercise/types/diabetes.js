import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
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
import { Card } from 'react-native-elements'
import styles from 'app/src/pages/styles'

let height = 215

class Diabetes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
    return (
      <View style={styles.isMarginSmall}>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>
          Tipos de ejercicio
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Para tu condición los ejercicios cardiovasculares pueden resultar muy positivos. Este tipo de ejercicio ayuda a tu cuerpo
          a utilizar mejor la insulina. Sobre todo, cuando logras aumentar la intensidad de tu entrenamiento a un nivel medio –
          alto, en el que permites que tu cuerpo aproveche la glucosa de tu sangre como fuente de energía.
        </Text>
      </View>
    )
  }
}

export default Diabetes
