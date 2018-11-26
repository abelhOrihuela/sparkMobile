import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Panel from 'app/src/components/panel'
import Page from 'app/src/components/page'
import Paragraph from 'app/src/components/paragraph'

import styles from 'app/src/pages/styles'
class Hidratation extends Component {
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
      <Paragraph style={styles.isBold}>
        <Text>Sueño</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`\u2022  Es imprescindible, el ser humano no puede vivir sin dormir.

\u2022  Restaurador - “repara” nuestro cuerpo.

\u2022  Fisiológicamente necesario: regulador de los biorritmos.

\u2022  Procesar lo vivido en el día.`
        }</Text>
      </Paragraph>

      <Paragraph style={styles.isBold}>
        <Text>Consecuencias de falta de sueño</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`\u2022  No se procesa eficazmente la glucosa, lo que da como resultado altos niveles de azúcar en la sangre, lo cualpodría incidir en el desarrollo de diabetes o aumento de peso.

\u2022  Baja temperatura corporal, generando el riesgo de afectar el ritmo cardiaco y ocasionar arritmias o paradas cardio-respiratorias nocturnas.

\u2022  El sueño limpia la memoria a corto plazo y deja espacio para más información.  Si pasamos muchas noches sin dormir, se puede reducir la capacidad de asimilar conocimientos en casi un 40%.

\u2022  Se baja el sistema inmunológico y por consiguiente hay más probabilidad de contraer infecciones.

\u2022  Cuando una persona tiene una enfermedad psiquiátrica los problemas para dormir aumentan un gran porcentaje.

\u2022  Fluctuación emocional - cambios repentinos de humor, tristeza, irritabilidad, actitud pesimista y aumento de estrés y ansiedad.`
        }</Text>
      </Paragraph>

      <Paragraph style={styles.isBold}>
        <Text>Tips para mejorar la calidad del sueño</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`\u2022  No se procesa eficazmente la glucosa, lo que da como resultado altos niveles de azúcar en la sangre, lo cualpodría incidir en el desarrollo de diabetes o aumento de peso.

\u2022  Baja temperatura corporal, generando el riesgo de afectar el ritmo cardiaco y ocasionar arritmias o paradas cardio-respiratorias nocturnas.

\u2022  El sueño limpia la memoria a corto plazo y deja espacio para más información.  Si pasamos muchas noches sin dormir, se puede reducir la capacidad de asimilar conocimientos en casi un 40%.

\u2022  Se baja el sistema inmunológico y por consiguiente hay más probabilidad de contraer infecciones.

\u2022  Cuando una persona tiene una enfermedad psiquiátrica los problemas para dormir aumentan un gran porcentaje.

\u2022  Fluctuación emocional - cambios repentinos de humor, tristeza, irritabilidad, actitud pesimista y aumento de estrés y ansiedad.`
        }</Text>
      </Paragraph>
    </Page>)
  }
}

export default Hidratation
