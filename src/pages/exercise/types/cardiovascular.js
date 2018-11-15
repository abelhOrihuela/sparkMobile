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

class Cardiovascular extends Component {
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
          En cuanto a ejercicios de fuerza y cardiovasculares, todo depende de qué tan elevado sea tu factor de riesgo. Pero una
          de las recomendaciones principales es que tu respiración sea continua y tu ritmo cardiaco controlado.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Alterna los tipos de ejercicio que realices, un día fuerza, otro día cardiovascular (cuidando tu ritmo cardiaco y
          respiración), y otro estiramiento profundo.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Cuando hagas fuerza, alterna los grupos de músculos que trabajes por día (ver tabla de grupos de músculos). Lo mejor es
          que descanses entre cada serie de ejercicio de 2 a 3 minutos, cuidando que no se aumente mucho tu frecuencia
          cardiaca.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          No te recomendamos los entrenamientos HIIT, ya que consisten en aumentar el ritmo cardiaco intensamente. Práctica
          actividades que te permitan controlar tu frecuencia cardiaca, así como oxigenarte adecuadamente.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Algunos ejercicios cardiovasculares recomendados para tu área de oportunidad: caminatas, nadar, subir escaleras y
          andar en bici. Todo con una intensidad de baja a media y sin hacer picos de esfuerzo.
        </Text>

      </View>
    )
  }
}

export default Cardiovascular
