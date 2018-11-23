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
let height = 215
import { Card } from 'react-native-elements'
import _ from 'lodash'

import styles from 'app/src/pages/styles'
class Exercise extends Component {
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
      currentOrder: null,
      user: null,
      loading: false
    }
  }

  componentDidMount () {
    this.load()
  }

  async load () {
    let me = JSON.parse(await AsyncStorage.getItem('me'))
    this.setState({
      currentOrder: me.currentOrder,
      user: me.user,
      loading: false
    })
  }

  goToSection (section) {
    this.props.navigation.navigate(section)
  }

  render() {
    let {currentOrder} = this.state
    let title = (<View>
      <Text style={[styles.fontWhite18, styles.isGinoraFontRegular]}>
        ¿Qué encontrarás?
      </Text>
    </View>)

    let content
    // .key === 'diabetes'

    let {key} = _.get(this.state, 'currentOrder.riskIndex', {})


    return (
      <Page style={[styles.isMarginless, styles.isPaddingless]}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={ejercicioBg} />
        <View style={[{ height: height, backgroundColor: '#DC6B18'}, styles.isOverlay, styles.isOpacity50]} />

        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, styles.isMarginDoubleTopBottom, styles.isGinoraFontBold]}>
            EJERCICIO
          </Text>

          <Panel
            title={title}
            style={{marginBottom: 30}}
            styleContainerTitle={{backgroundColor: '#FF974A'}}
            borderColor='#FF974A'
            colorIcon='#FFFFFF'>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              Hacer ejercicio representa un factor diferencial entre vivir propenso a desarrollar enfermedades o alcanzar un estado
              ideal de bienestar.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              Debes enfocar tu actividad física en función de tu estilo de vida, gustos, necesidades y genética. Acuérdate que existen
              muchos tipos de entrenamientos, clases y estilos de ejercicio. No te cierres solo a una forma y encuentra tu
              entrenamiento perfecto.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              Realizar ejercicio de manera habitual mantiene nuestro sistema inmunológico fuerte, contribuye a metabolizar nuestros
              alimentos, disminuye la acumulación excesiva de grasa, mejora las condiciones cardiacas y hace más efectiva la
              oxigenación del cuerpo. Produce hormonas asociadas a estados de placer y bienestar y sirve para canalizar emociones;
              por lo que ayuda a manejar mejor los niveles de estrés. Inclusive impacta sobre nuestra autopercepción física.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              De forma más específica, el ejercicio ayuda a establecer un equilibrio en la microbiota, contribuye a regular la energía,
              reduce los mediadores inflamatorios, aumenta las enzimas antioxidantes, ayuda a evitar cambios en las vellosidades
              intestinales, apoya en la prevención de enfermedades crónico-degenerativas, aumenta las proteínas relacionadas con el
              control en los procesos de muerte celular y disminuye funciones proinflamatorios.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              De acuerdo al área de oportunidad determinada, generamos los siguientes take actions para que puedas sacarle el
              máximo provecho al ejercicio que realices.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              Las notas de ejercicio están orientadas a tiempos, intensidad, frecuencia y variedad de actividades físicas. Están
              pensadas tanto para mantener como paramejorar tus aptitudes físicas.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
              Ten presente que hacer ejercicio no debe de ser una actividad cansada ni desagradable, por lo contrario, si lo haces
              adecuadamente produce placer y aporta vitalidad.
            </Text>
          </Panel>

          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconExercise}
            title='Entrenamiento'
            colorIcon='#FF974A'
            subtitle='Basado en tus resultados.'
            to='ExerciseDetail'
            params={{currentOrder}} />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconExerciseRun}
            title='Generales'
            subtitle='Complementa tu actividad física.'
            colorIcon='#FF974A'
            to='ExerciseTypes'
            params={{currentOrder}} />

          <CardTips
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            img={bgTipsExercise}
            title='Tips de ejercicio'
            to='TipsExercise' />

        </View>
      </Page>
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
export default Exercise
