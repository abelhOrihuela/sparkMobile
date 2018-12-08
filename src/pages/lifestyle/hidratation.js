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
      <Paragraph style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>
        <Text>
          Hidratación
        </Text>
      </Paragraph>

      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        La cantidad necesaria de agua es diferente para todos. Varía según el peso corporal, el clima y la actividad física,
        entre otros factores.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Aumenta un poco más de agua de la que tu cuerpo necesita en condiciones normales, si estás en ambientes
        calurosos y/o prácticas actividades físicas demandantes.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Agua y alimentos:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Tomar agua alcalina puede tener grandes beneficios para tu salud, sin embargo, tu estómago
        necesita un pH ácido para poder procesar los alimentos correctamente. Evita tomar agua alcalina durante tus
        comidas.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Agua y atención:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Más del 70% de nuestro cerebro es agua. Mantenerse hidratado permite que sus funciones
        trabajen al máximo y sentirás: mayor claridad, agilidad mental, concentración y creatividad.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Agua purificada en exceso:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Tomar agua purificada libre de minerales en exceso puede deshidratarte. Parece
        contradictorio, pero tu cuerpo necesita de esos minerales para mantener el equilibrio de agua en tus células y
        órganos. Te recomendamos:
      </Text>
      <Paragraph>
        <Text>{
`\u2022  Tomar agua de coco sola. Si es agua de coco cruda y no pasteurizada, ¡mucho mejor!.

\u2022  Comer frutas y verduras hidratantes. Son las que en su estructura contienen mucha agua, como el
pepino, el jitomate, la coliflor, el apio, la manzana, la naranja, la sandía, las fresas.

\u2022  Tomar un suero mineralizante como parte de la cantidad total de tu requerimiento diario de agua: a un litro de agua añade jugo de limón, miel (o Stevia natural si eres diabético), una pizca de bicarbonato de sodio y flor de sal.`
        }</Text>
      </Paragraph>
    </Page>)
  }
}

export default Hidratation
