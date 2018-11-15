import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import styles from 'app/src/pages/styles'
import Page from 'app/src/components/page'
import header from 'app/src/nutricion-fondo.jpg'
import SmartDiet from 'app/src/pages/nutrition/plate/smart-diet'
import HealtyHeart from 'app/src/pages/nutrition/plate/healty-heart'
import SweetCare from 'app/src/pages/nutrition/plate/sweet-care'
import HappyShape from 'app/src/pages/nutrition/plate/happy-shape'
import LongLife from 'app/src/pages/nutrition/plate/long-life'
import Icon from 'react-native-vector-icons/FontAwesome'

import _ from 'lodash'
export default class AlchemyPlate extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'MYPLATE',
      drawerIcon: () => (
        <Icon name='file' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'MYPLATE'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      currentOrder: null,
      loading: true
    }
  }
  componentDidMount () {
    this.load()
  }

  async load () {
    let me = JSON.parse(await AsyncStorage.getItem('me'))
    this.setState({
      currentOrder: me.currentOrder,
      user: me.user,
      loading: false
    })
  }

  render () {
    let {loading, currentOrder} = this.state
    let riskIndex = _.get(currentOrder, 'riskIndex', null)

    let content
    if (loading || !riskIndex) {
      return <View style={styles.isMargin, {alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    }

    if (riskIndex.key === 'nutrition') {
      content = <SmartDiet data={riskIndex} />
    } else if (riskIndex.key === 'cardiovascular') {
      content = <HealtyHeart data={riskIndex} />
    } else if (riskIndex.key === 'diabetes') {
      content = <SweetCare data={riskIndex} />
    } else if (riskIndex.key === 'obesity') {
      content = <HappyShape data={riskIndex} />
    } else if (riskIndex.key === 'longevity') {
      content = <LongLife data={riskIndex} />
    }

    return (
      <Page style={[styles.isPaddingless]}>
        <ImageBackground style={[{height: 85}, styles.flexCentered, styles.hasShadow1]} source={header}>
          <View style={[{height: 85, backgroundColor: '#911E38'}, styles.isOverlay, styles.isOpacity50]} />
          <Text style={[styles.textCentered, styles.fontWhite20]}>
            <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text>
          </Text>
        </ImageBackground>
        <View style={[styles.isMarginSmall]}>
          <Text style={[styles.isMarginSmall, styles.isMarginlessBottom, styles.isLineHeight20, styles.isGinoraFontRegular, styles.fontBlack18Bold]}>
            ¿Qué es <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text>?
          </Text>

          <View style={[styles.isMarginSmall, styles.isMarginlessTop, { borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }]}>
            <Text style={[styles.doubleMarginTopBottom, styles.isLineHeight20, styles.fontGray16, styles.isGinoraFontRegular]}>
              Una herramienta que te sirve en el día a día.
            </Text>
          </View>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            En <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>CODE</Text> te queremos acompañar para que puedas aplicar las recomendaciones de manera fácil y práctica a tu vida diaria.
          </Text>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            Te presentamos un gráfico personalizado que, basándose en tu factor de riesgo más alto, te indica la distribución de nutrimentos (proteínas, hidratos de carbono y lípidos) ideal para tu dieta.
          </Text>
          
          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            El plato es orientativo de la combinación y cantidad de alimentos que te sugerimos incluir en cada tiempo de comida.
          </Text>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            Los ingredientes de las listas fueron seleccionados por su calidad y variedad. Va a resultarte muy fácil probar cosas nuevas todos los días y con la alimentación que se te recomienda, lograr un estado óptimo de bienestar.
          </Text>
        </View>
        {content}
      </Page>
    )
  }
}
