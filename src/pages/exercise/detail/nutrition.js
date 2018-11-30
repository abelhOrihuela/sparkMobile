import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import Panel from 'app/src/components/panel'
import styles from 'app/src/pages/styles'

class Nutrition extends Component {
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
          Salud Óptima
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Tu salud está en muy buenas condiciones. Lo que estás haciendo te ha funcionado muy bien.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Recuerda que las consecuencias se manifiestan a largo plazo. Y lo que hagas hoy por tu cuerpo, repercutirá mañana. Así
          que te recomendamos que tomes en cuenta los consejos generales de ejercicio para agregar o modificar cualquier información nueva a
          tus hábitos de actividad física.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          INTENSIDAD
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            El ejercicio lo podemos dividir en dos categorías de acuerdo con nuestra capacidad de oxigenación: ejercicio aeróbico y
            ejercicio anaeróbico. Cada uno cumple con diferentes funciones y alternarlos te puede ayudar a aumentar tu
            rendimiento deportivo y metas de bienestar.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Algunos entrenamientos que puedes hacer como ejercicio aeróbico: correr despacio, caminar, nadar, clases de yoga o
            pilates reformar.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Por otro lado, el ejercicio anaeróbico, se lleva a cabo con una intensidad alta y de poca duración. Disminuye la capacidad
            para oxigenarse, por ejemplo, cuando se realiza un sprint. Ayuda a tonificar músculos, genera velocidad y potencia,
            genera condición (no resistencia).
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Algunos entrenamientos que puedes hacer como ejercicio anaeróbico: pesas, carreras de velocidad, ejercicios
            funcionales, entrenamientos HIIT (High Intensity Interval Training).
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
            rango de {this.props.data.minHeartFrequency || 0} a {this.props.data.maxHeartFrequency} latidos por minuto, con un máximo de {this.props.data.heartFrequency || 0} latidos por minuto.
          </Text>
        </Panel>

      </View>
    )
  }
}

export default Nutrition
