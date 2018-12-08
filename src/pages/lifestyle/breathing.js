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
        <Text>Respiración</Text>
      </Paragraph>

      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Respiración y energía:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Gracias al oxígeno que obtienes con tu respiración tus células pueden producir energía. Mientras más consciente y profundo respires, más energía tendrás para sentirte bien.
      </Text>

      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Respiración y atención:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Tu cerebro es un órgano que utiliza mucho oxígeno para funcionar. Una respiración adecuada mejora tus capacidades cognitivas.
      </Text>

      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Respiración y relajación:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        A través de una respiración profunda, fluida y consciente, es posible alcanzar estados de relajación que equilibran el funcionamiento de tu cuerpo.
      </Text>

      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Respiración y calorías:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        La quema de calorías y tu respiración son proporcionales. Para quemar calorías necesitas oxígeno. Por eso cuando haces ejercicio tus respiraciones se vuelven más profundas. En consecuencia, una buena respiración es fundamental para que alcances tus metas físicas y/o deportivas.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isBold]}>
        Respiración y emociones:
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Nuestra respiración es la única función involuntaria que se puede también controlar de forma voluntaria.
      </Text>
      <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
        Su relación con nuestras emociones es muy estrecha. Así como reflejan inmediatamente un cambio de estado de ánimo, como cuando nos sentimos ansiosos, estresados o enojados, también mediante técnicas de respiración consciente puedes aprender a controlar e inducir estados emocionales positivos.
      </Text>
    </Page>)
  }
}

export default Hidratation
