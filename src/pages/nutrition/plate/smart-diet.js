import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'
import styles from 'app/src/pages/styles'
import Page from 'app/src/components/page'
import {get} from 'lodash'

import header from 'app/src/nutricion-fondo.jpg'
import Conditions from 'app/src/catalogs/conditions'

export default class SmartDiet extends Component {
  render () {

    let config = get(this.props, 'data.key', null)

    let condition = Conditions[config]

    return (
      <View style={{flex: 1}}>
        <View style={[styles.isMargin, { borderColor: '#911E38', borderWidth: 1 }]}>
          <View style={styles.flexCentered}>
            <Image style={[{ width: '100%', height: 200 }, styles.flexCentered]} resizeMode={'cover'} source={condition.headerPlate} />
          </View>

          <Text style={[styles.isMargin, styles.isMarginlessBottom, styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            De acuerdo a tus características físicas, te recomendamos consumir una dieta de aproximadamente <Text style={[styles.isBold]}>{this.props.data.kilocalories}</Text> calorías al
            día, que te permitirá cubrir tus necesidades básicas de energía.
          </Text>

          <Text style={[styles.isMargin, styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            El consumo de agua de acuerdo a tú peso deberá de ser de aproximadamente <Text style={styles.isBold}>{this.props.data.water} litros al día</Text>.
          </Text>

          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter, styles.isBold]}>
            Porcentajes de nutrimentos para Smart Diet
          </Text>

          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            Hidratos de carbono: <Text style={[styles.isBold]}>60%</Text>
          </Text>
          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            Proteína: <Text style={[styles.isBold]}>15%</Text>
          </Text>
          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            Lípidos: <Text style={[styles.isBold]}>25%</Text>
          </Text>

          <View style={[styles.centered, styles.isMargin]}>
            <Image resizeMode='contain' style={[{ width: 300, height: 300 }]} source={condition.plate} />
          </View>
        </View>
      </View>
    )
  }
}
