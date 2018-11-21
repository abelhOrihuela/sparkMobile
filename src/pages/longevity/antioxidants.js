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
    </Page>)
  }
}

export default Antioxidants
