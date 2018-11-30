import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import Panel from 'app/src/components/panel'
import styles from 'app/src/pages/styles'

class Obesity extends Component {
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
          Ejercicio para área de oportunidad Sobrepeso y Obesidad
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          En tu caso, el ejercicio se vuelve crucial para mantener tu cuerpo en condiciones óptimas de salud.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          INTENSIDAD MEDIA, ALTA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La cantidad de tiempo depende de cuánto ejercicio ya hagas regularmente. Si no practicas ejercicio, empieza con hacer
            10 minutos diarios, y ve aumentando hasta que llegues a ejercitarte 60 minutos por día, 5 días a la semana. Esto es lo
            más recomendable para personas que necesitan bajar de peso.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Considerando tú edad y tu área de oportunidad, te recomendamos que cuides y mantengas tú frecuencia cardiaca
            mientras haces ejercicio en un rango de {this.props.data.minHeartFrequency || 0} a {this.props.data.heartFrequency || 0} latidos por minuto.

          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          VARIEDAD
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Varia el tipo de ejercicio que practiques cada día. Lo ideal es alternar días de fuerza con días de ejercicio cardiovascular.
            Los entrenamientos de fuerza funcional son sumamente recomendables para tu factor de riesgo, porque permiten tener
            una alta quema de calorías.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            También es muy recomendable el entrenamiento HIIT en el cual se alternan ejercicios de alta intensidad con un ritmo
            cardíaco máximo individual del 85 – 100% con tiempos de recuperación del 45 – 50% en el ritmo cardíaco.
            Debido a que aumenta la capacidad del cuerpo de oxidar tanto la glucosa como la grasa, es una de las formas más
            efectivas que existen para mejorar la resistencia y quemar grasa corporal.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            No descuides estirar después de entrenar y dedicarle por lo menos un día a la semana a realizar estiramientos
            profundos.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          LA CONSTANCIA ES LA CLAVE
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Se constante en tu ejercicio. Es importante que no dejes pasar más de dos días sin hacer alguna actividad física. Para
            lograr esto, busca entrenamientos que disfrutes y en los que te sientas cómodo(a) practicando.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          DESPUÉS DE ENTRENAR
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Te recomendamos tener preparada y a la mano una comida con alto valor nutrimental para cuando termines de hacer
            ejercicio. No dejes pasar mucho tiempo después de entrenar y comer, ya que esto te puede conducir a comer
            excesivamente y escoger alimentos que den saciedad, pero que no te aporten suficientes nutrimentos.
          </Text>
        </Panel>

      </View>
    )
  }
}

export default Obesity
