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
import Suggestions from 'app/src/components/suggestions'
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
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>
          La suplementación va a servir como una excelente herramienta de apoyo a tu alimentación personalizada.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>
          Para entender la importancia de la suplementación, te explicamos un poco del contexto hoy en día.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>
          Los estilos de vida actuales, en especial los urbanos, con un consumo de alimentos altamente procesados, comida
          rápida, inhalación de aire contaminado y una pobre rutina de horarios, han generado graves deficiencias alimenticias. En
          especial la producción masiva e industrializada de alimentos ha demeritado la calidad de las propiedades nutrimentales
          de estos.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>
          Sumado a lo anterior, los altos y crónicos niveles de estrés suscitan procesos oxidativos acelerados, por lo que nuestro
          cuerpo demanda mayores dosis de antioxidantes; la poca exposición al sol en horas de baja radiación solar ha traído
          como consecuencia una deficiencia común de vitamina D, nutrimento crucial para la fijación de calcio en nuestros
          huesos.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>
          De igual forma, el consumo excesivo de productos empaquetados, antibióticos y laxantes perjudican a nuestra
          microbiota. Más allá de los alimentos de tu dieta, la suplementación ayuda a recuperar la población y mejorar la salud
          de nuestra flora intestinal.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>
          Si nuestro equipo de expertos determina la necesidad de incluir complementos y/o suplementos (vitaminas, minerales,
          antioxidantes, prebióticos y probióticos), se te darán recomendaciones en cuanto a tipo, cantidad y dosis.
        </Text>
        <Suggestions {...this.props} section='health' tags='supplementation' />
      </View>
    )
  }
}

export default Detail
