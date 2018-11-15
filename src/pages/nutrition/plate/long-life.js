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

export default class LongLife extends Component {
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
            Porcentajes de nutrimentos para Long Life
          </Text>

          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            Hidratos de carbono: <Text style={[styles.isBold]}>40%</Text>
          </Text>
          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            Proteína: <Text style={[styles.isBold]}>30%</Text>
          </Text>
          <Text style={[styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            Lípidos: <Text style={[styles.isBold]}>30%</Text>
          </Text>
          <View style={[styles.centered, styles.isMargin]}>
            <Image resizeMode='contain' style={[{ width: 400, height: 400 }]} source={condition.plate} />
          </View>
        </View>
      </View>
    )
  }
}
