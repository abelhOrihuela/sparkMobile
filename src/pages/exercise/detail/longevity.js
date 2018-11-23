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

class Longevity extends Component {
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
          Salud Óptima
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Tu salud está en buenas condiciones. Lo que estás haciendo te ha funcionado muy bien.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Lo que hagas hoy por tu cuerpo, repercutirá mañana. Si ya prácticas algún ejercicio o entrenamiento, te recomendamos
          que tomes en cuenta los TIPS de ejercicio para agregar o modificar cualquier información nueva a tus hábitos de
          actividad física.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          De acuerdo con tu edad, toma a consideración la siguiente información. Te permitirá alcanzar un estado de longevidad
          ideal y una calidad de vida extraordinaria.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          TIEMPOS E INTENSIDAD MEDIA-ALTA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Todo va a depender si ya realizas una actividad física constante. Si no, empieza con periodos de 10 minutos diarios de
            actividad física moderada. Lo ideal es que hagas de 30 a 60 minutos por día, de cuatro a cinco días a la semana.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            60 minutos de ejercicio aeróbico moderado (que te permita respirar sin dificultad, pero hablar con ligeras pausas) o 30
            minutos si implementas un entrenamiento más vigoroso. También puedes intercalar una intensidad alta y media en tu
            entrenamiento, por periodos de 10 minutos mínimo.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Tómate por lo menos de dos a tres días de descanso, que te ayuden a una mejor recuperación muscular.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ENTRENAMIENTO HIIT Y TELÓMEROS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Los telómeros son unidades de ADN que se encuentran en los extremos de nuestros cromosomas y ayudan a
            protegerlos. Investigaciones recientes han encontrado que a medida que crecemos los telómeros se van acortando,
            perdiendo su funcionalidad.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Esta condición está vinculada a los procesos de envejecimiento. Mientras más longitud tengan nuestros telómeros
            mayor probabilidad tenemos de ser longevos.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Hay hábitos que permiten cuidar el tamaño de los telómeros. Por ejemplo, los ejercicios de alta intensidad en intervalos,
            conocidos como entrenamientos HIIT (High Intensity Interval Training).
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Por un lado, es un tipo de ejercicio que permite liberar estrés (señalado como una causa del acortamiento de
            telómeros), pero también se asocia con la activación de la telomerasa, enzima que contribuye a regenerar los telómeros.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Te recomendamos implementar este tipo de entrenamientos a tus rutinas de ejercicio.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Se pueden realizar con cualquier tipo de ejercicio, con o sin aparatos. Inclusive se puede tener un entrenamiento HIIT
            caminando y corriendo. Consisten en elevar la frecuencia cardíaca a un esfuerzo máximo durante 20 a 30 segundos y
            después recuperarse por 90 segundos. Y repetir el ciclo hasta alcanzar un periodo de ejercicio de 20 a 30 minutos.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ESTIRAMIENTO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Los ejercicios de estiramiento ayudan a conservar tu motricidad, evitar lesiones y mejorar tu capacidad circulatoria.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Es importante que realices estiramientos después de hacer ejercicio y que dediques por lo menos un día de ejercicio a
            hacer estiramientos profundos. Pero muy importante los movimientos no deben de resultar dolorosos o someterte a
            una posición en la que sientas que alguna parte de tu cuerpo está comprometida. Jamás hagas rebotes al momento de
            estirar.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Si decides tomar una clase de yoga, pilates o stretching, sé muy consciente de tus límites físicos y comunica al instructor
            cualquier postura que sientas muy forzada.
          </Text>
        </Panel>
        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ENFOQUE DEL EJERCICIO: TIPOS RECOMENDADOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La importancia de hacer ejercicio en la edad adulta está relacionada con evitar enfermedades y lesiones; conservar
            habilidades motrices y evitar caídas riesgosas; mejorar la circulación y las condiciones pulmonar y cardiacas.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Te recomendamos tener una rutina de ejercicio balanceada que incluya dos días de fuerza, con especial enfoque en los
            músculos grandes.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          EJERCICIO AL AIRE LIBRE
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cada vez se descubren más beneficios de practicar ejercicio en espacios abiertos y en contacto con la naturaleza. Por eso
            te recomendamos incluir en tu rutina de ejercicio días de entrenamiento al aire libre.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La simple exposición a un entorno natural (no urbano) contribuye a reducir el estrés. Los espacios naturales no nos
            obligan a centrar nuestra atención en algo en específico, por lo que inducen estados de relajación, ayudan a recuperar
            niveles de atención y disminuir fatiga mental.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            También hay investigaciones que indican que la percepción de cansancio es menor cuando se hace ejercicio en
            exteriores. Esto puede ayudar a que tu entrenamiento sea mucho más motivante y aumentes tu rendimiento deportivo.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Considerando tú edad, te recomendamos que cuides y mantengas tú frecuencia cardiaca mientras haces ejercicio en un
            rango de XXX a XXX latidos por minuto, con un máximo de XXXX latidos por minuto.
          </Text>
        </Panel>

      </View>
    )
  }
}

export default Longevity
