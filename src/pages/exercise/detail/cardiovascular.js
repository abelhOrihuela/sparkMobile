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
      <View style={{flex: 1}}>

        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>
          Ejercicio para área de oportunidad Cardiovascular
        </Text>
        
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Recuerda que los problemas cardiovasculares suelen estar vinculados con una acumulación de grasa en arterías. Por lo
          que es indispensable hacer ejercicio para mantener un peso adecuado.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ENTRENAMIENTO DE INTENSIDAD BAJA-MEDIA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cuando hablamos de intensidad en ejercicio, nos referimos a qué tanto se te dificulta o facilita mantener un ritmo de
            respiración constante y fluido.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Para tu factor de riesgo, lo ideal es que mantengas una intensidad de ejercicio de baja a media. Tu capacidad
            respiratoria no debe de sentirse forzada; tienes que ser capaz de platicar sin dificultad. Así tu cuerpo puede oxigenarse
            adecuadamente, mejorar tu circulación sanguínea y fortalecer tu condición cardiaca.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Con esta intensidad tu frecuencia cardiaca aumentará, pero no de manera exponencial. Mientras más alto sea tu factor
            de riesgo, procura bajar la intensidad de tu entrenamiento y no forzar el trabajo de tu corazón.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Considerando tú edad y tu área de oportunidad, te recomendamos que cuides y mantengas tú frecuencia cardiaca
            mientras haces ejercicio en un rango de XXX a XXX latidos por minuto.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          TIEMPOS Y ENERGÍA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Procura ejercitarte de 5 días a la semana, por lo menos 30 minutosal día, alternando días de descanso y tipos de
            ejercicio. Aunque parezca poco, una caminata o trotar sin interrupciones, durante este tiempo permite que tu cuerpo
            obtenga energía de las reservas de grasa corporal, ayudando a liberar poco a poco la acumulación de grasa en arterias.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Si no prácticas ejercicio, puedes empezar haciendo 10 minutos al día, en una o varías sesiones continuas, e ir
            aumentando hasta alcanzar la meta semanal.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ESTIRAMIENTO Y CIRCULACIÓN
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Los ejercicios de estiramiento ayudan a tonificar músculos, pero también mejoran tu capacidad circulatoria.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Es importante que realices estiramientos después de hacer ejercicio y que dediques por lo menos un día de ejercicio a
            hacer estiramientos profundos. Para esto, tomar una clase de yoga, pilates reformer o streching resulta una gran opción.
          </Text>
        </Panel>

      </View>
    )
  }
}

const stylesExercise = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    marginBottom: 40,
    marginTop: 40
  },
  card: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  isOverlays: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#DC6B18',
    height: height
  },
  isOverlayFooter: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#0D4E78',
    height: 150
  },
  margin: {
    marginTop: 10, marginBottom: 10
  }
})
export default Cardiovascular
