import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import Panel from 'app/src/components/panel'
import styles from 'app/src/pages/styles'

class Cardiovascular extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  goToSection (section) {
    this.props.navigation.navigate(section)
  }

  render () {
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
            mientras haces ejercicio en un rango de {this.props.data.minHeartFrequency || 0} a {this.props.data.maxHeartFrequency} latidos por minuto.
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

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          TIPOS DE EJERCICIO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            En cuanto a ejercicios de fuerza y cardiovasculares, todo depende de qué tan elevado sea tu factor de riesgo. Pero una
            de las recomendaciones principales es que tu respiración sea continua y tu ritmo cardiaco controlado.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Alterna los tipos de ejercicio que realices, un día fuerza, otro día cardiovascular (cuidando tu ritmo cardiaco y
            respiración), y otro estiramiento profundo.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cuando hagas fuerza, alterna los grupos de músculos que trabajes por día (ver tabla de grupos de músculos). Lo mejor es
            que descanses entre cada serie de ejercicio de 2 a 3 minutos, cuidando que no se aumente mucho tu frecuencia
            cardiaca.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            No te recomendamos los entrenamientos HIIT, ya que consisten en aumentar el ritmo cardiaco intensamente. Práctica
            actividades que te permitan controlar tu frecuencia cardiaca, así como oxigenarte adecuadamente.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Algunos ejercicios cardiovasculares recomendados para tu área de oportunidad: caminatas, nadar, subir escaleras y
            andar en bici. Todo con una intensidad de baja a media y sin hacer picos de esfuerzo.
          </Text>
        </Panel>

      </View>
    )
  }
}

export default Cardiovascular
