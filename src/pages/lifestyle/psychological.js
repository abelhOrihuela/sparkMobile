import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Panel from 'app/src/components/panel'
import Page from 'app/src/components/page'
import Paragraph from 'app/src/components/paragraph'

import styles from 'app/src/pages/styles'
class Psychological extends Component {
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
        <Text>Bienestar psicológico</Text>
      </Paragraph>

      <Paragraph>
        <Text>Hay ciertos factores que contribuyen a tener un mejor estado de ánimo y a sentirte más feliz.</Text>
      </Paragraph>

      <Paragraph>
        <Text>Algunos de ellos son:</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`\u2022  El control de pensamientos negativos y obsesivos que te impiden enfocar tu atención a lo que te produce mayor bienestar.

\u2022  Tener un propósito personal alineado con lo que te genera gozo en la vida..

\u2022  Fisiológicamente necesario: regulador de los biorritmos.

\u2022  Trabajar en una actividad y ambiente laboral que te permitan alcanzar un sentido de realización personal y lograr sustentabilidad económica.

\u2022  Generar un equilibrio en las distintas áreas de tu vida; integrando tus responsabilidades laborales con el tiempo destinado a actividades recreativas y de saludables.

\u2022  Debido a las hormonas que se liberan, una vida sexual activa, está directamente relacionada a la sensación de vitalidad y bienestar.

\u2022  La calidad tus relaciones interpersonales y de tu vida social son aspectos muy importantes que influyen en tu sentido de plenitud.

\u2022  Un manejo emocional adecuado implica reconocer y tener la capacidad de expresar tus sentimientos con el fin de liberarte de cargas emocionales que drenen tu energía.

\u2022  La capacidad de observar tus pensamientos, acciones y emociones te ayuda a conocerte mejor y saber en qué áreas debes enfocarte para tener un mayor equilibrio físico, mental y emocional.
`
        }</Text>
      </Paragraph>
    </Page>)
  }
}

export default Psychological
