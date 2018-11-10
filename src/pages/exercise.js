import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/icon-exercise.png'
import iconMyPlate from 'app/src/iconMyPlate.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Exercise extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'MYNEWME',
      drawerIcon: () => (
        <Icon name='check' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'MYNEWME'
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
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={header} />
        <View style={[{ height: height, backgroundColor: '#DC6B18'}, styles.isOverlay, styles.isOpacity50]} />
        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, stylesExercise.title]}>EJERCICIO</Text>
          <Panel
            title={title}
            style={styles.isMarginSmallTopBottom}
            styleContainerTitle={{backgroundColor: '#FF974A'}}
            borderColor='#FF974A'
            colorIcon='#FFFFFF'>
            <Text>
              Hacer ejercicio representa un factor diferencial entre vivir altamente propenso a desarrollar enfermedades o alcanzar un estado ideal de bienestar. Debes enfocar tu actividad física en función de tu estilo de vida, gustos, necesidades y genética. Acuérdate que existen muchos tipos de entrenamientos, clases y estilos de ejercicio. No te cierres solo a una forma y encuentra tu entrenamiento ideal. Realizar ejercicio de manera habitual mantiene nuestro sistema inmunológico fuerte, contribuye a metabolizar nuestros alimentos, disminuye la acumulación excesiva de grasa, mejora las condiciones cardiacas y hace más efectiva la oxigenación del cuerpo. Produce hormonas asociadas a estados de placer y bienestar y sirve para canalizar emociones; por lo que ayuda a que tengamos mejor manejo de estrés. Inclusive impacta sobre nuestra autopercepción física. De acuerdo con la categoría de riesgo que obtuvimos integrando los resultados de tu genética, microbiota, química sanguínea y hábitos de vida, generamos los siguientes take actions para que puedas sacarle el máximo provecho al ejercicio que realices. Las notas de ejercicio están orientadas a tiempos, intensidad, frecuencia y variedad de actividades físicas pensadas para mantener y mejorar tus aptitudes físicas. Ten presente que hacer ejercicio no debe de ser una actividad cansada ni desagradable, por lo contrario, si lo haces adecuadamente produce placer y aporta vitalidad.
            </Text>
          </Panel>


          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconFish}
            title='Ejercicio: '
            colorIcon='#FF974A'
            subtitle='Personalizado por tu factor de riesgo.'
            to='PlanAlimentation' />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconFish}
            title='Tipos de ejercicio'
            subtitle='Personalizado por tu factor de riesgo.'
            colorIcon='#FF974A'
            to='AlchemyPlate' />

          <CardTips
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            img={header}
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
