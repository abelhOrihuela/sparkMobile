import React, { Component } from 'react'
import { View,
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

        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>
          Ejercicio para área de oportunidad Diabetes
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          En tu caso, el tipo de ejercicio que realices debe de contribuir a regular los niveles de azúcar en tu sangre.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          INTENSIDAD MEDIA – ALTA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Dedica un par de días de ejercicio a entrenar con una intensidad de media a alta. Esto lo mides a través de tu
            respiración. Cuando te ejercitas con esta intensidad, tu ritmo cardiaco se acelera, tu respiración se vuelve ligeramente
            pausada y te cuesta más trabajo entablar una conversación.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Sobre todo, haz énfasis en ejercicios cardiovasculares, como correr, spinning, nadar o bailar. De esta forma, ayudas a
            que tu cuerpo aproveche la glucosa en sangre como fuente de energía para tu actividad física.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Considerando tú edad y tu área de oportunidad, te recomendamos que cuides y mantengas tú frecuencia cardiaca
            mientras haces ejercicio en un rango de {this.props.data.minHeartFrequency || 0} a {this.props.data.maxHeartFrequency || 0} latidos por minuto.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          TIEMPOS ADECUADOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Mucho depende de qué tanto ejercicio hagas de manera regular. Si eres una persona que no acostumbra a hacer
            ejercicio, con realizar de 30 minutos diarios es más que suficiente. Si no haces nada de ejercicio, puedes empezar por
            hacer 10 minutos diarios e ir aumentando hasta alcanzar tus metas semanales.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          COMIDAS Y EJERCICIO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Para una persona con predisposición a padecer diabetes, los horarios de comida y ejercicio exigen mucho orden. No
            debes de entrenar si sientes que tu suministro de alimentos no ha sido suficiente durante el día.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cuando haces ejercicio, quemas calorías utilizando principalmente la glucosa de tu sangre. Si tu alimentación no fue
            adecuada puedes provocar una pérdida del balance de azúcar en sangre y corres el riesgo de comer en exceso después
            del entrenamiento. Mientras más alto tu factor de riesgo, este punto se vuelve más crítico.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Es importante que comas un snack previo al entrenamiento que tenga un equilibrio de grasas, proteína y hidratos de
            carbono. Por ejemplo: ½ manzana con 1 ch de mantequilla de almendra sin endulzante.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Y que no dejes pasar mucho tiempo entre tu entrenamiento y tu siguiente comida.
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
            Para tu condición los ejercicios cardiovasculares pueden resultar muy positivos. Este tipo de ejercicio ayuda a tu cuerpo
            a utilizar mejor la insulina. Sobre todo, cuando logras aumentar la intensidad de tu entrenamiento a un nivel medio –
            alto, en el que permites que tu cuerpo aproveche la glucosa de tu sangre como fuente de energía.
          </Text>
        </Panel>

      </View>
    )
  }
}

export default Cardiovascular
