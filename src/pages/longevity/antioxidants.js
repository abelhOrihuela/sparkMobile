import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Panel from 'app/src/components/panel'
import Page from 'app/src/components/page'

import styles from 'app/src/pages/styles'
class Antioxidants extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (<Page>


      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>
        Acciones que podemos llevar a cabo para disminuir el envejecimiento prematuro y aumentar la longevidad.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular]}>

        Beber suficiente agua

- No exponernos al sol más de 10 minutos al día antes de las 10 am o después de las 5 pm.
- Aumentar el consumo de alimentos naturales, vivos. Como la fruta, verdura, germinados.
- Disminuir drásticamente los alimentos procesados, enlatados y con químicos.
- No fumar y tener un consumo limitado de alcohol.
- Incrementar el consumo de antioxidantes.
- Aumenta omegas y ácidos grasos de las nueces. Y el consumo de vitamina E.
- Reduce los pensamientos negativos relacionados a tu edad y condición física.
- Desintoxicar periódicamente nuestro cuerpo para que los órganos sigan eliminando las toxinas de forma
adecuada; por medio de ayunos, jugoterapa, hierbas astringentes.
- Realizar prácticas que incrementen tu energía vital como Chikung, Tai Chi, Yoga y artes marciales.
- El ejercicio y el deporte ayudan a mantener el cuerpo flexible, bien oxigenado y con una adecuada masa
muscular que protege los huesos. Contribuye a la secreción de endorfinas que generan buen humor y un estado
más alerta.
- Dormir bien diariamente es fundamental para los adecuados procesos bioquímicos del cuerpo
- Una vida sexual activa es clave para un envejecimiento saludable debido a la secreción hormonal, la
estimulación de las conexiones neuronales, el aumento en el flujo de sangre y la oxigenación de las células.

      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>
        Alimentos antioxidantes
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Moras, frambuesas, cerezas, capulín, zarzamoras
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Uvas rojas
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Bayas goji
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Granada
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Polvo de camu camu
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Acai
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Vino tinto
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Té verde y matcha
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Cacao
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        El ácido ascórbico, mejor conocido como Vitamina C, actúa como antioxidante para contrarrestar la reacción de
        oxidación de las células.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
      </Text>
    </Page>)
  }
}

export default Antioxidants
