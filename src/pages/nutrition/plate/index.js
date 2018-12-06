import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native'
import styles from 'app/src/pages/styles'
import Page from 'app/src/components/page'
import Tabs from 'app/src/components/tabs'
import bgMyPlate from 'app/src/images/bg-my-plate.jpg'
import SmartDiet from 'app/src/pages/nutrition/plate/smart-diet'
import HealtyHeart from 'app/src/pages/nutrition/plate/healty-heart'
import SweetCare from 'app/src/pages/nutrition/plate/sweet-care'
import HappyShape from 'app/src/pages/nutrition/plate/happy-shape'
import LongLife from 'app/src/pages/nutrition/plate/long-life'
import Icon from 'react-native-vector-icons/FontAwesome'
import equivalents from '../equivalents_by_diet.json';
import { Card } from 'react-native-elements'

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

  renderItem = ({item, index}) => {
    return (<View style={[{flex: 1, margin: 10}]} key={index}>
    <Text style={[styles.isGinoraFontRegular]}>{item}</Text>
  </View>)
  }

  getContent (type) {
    let {currentOrder} = this.state
    if (currentOrder) {
      return (
          <FlatList
            numColumns={2}
            data={equivalents[currentOrder.riskIndex.diet][type]}
            keyExtractor={(x, i) => i}
            renderItem={this.renderItem} />
      )
    }
    return <View />

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

    if (riskIndex.key === 'optimal_wellness') {
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


    let routes = [
      {
        title: 'Verduras',
        styleActive: {backgroundColor: '#90A94D'},
        styleActiveLabel: {color: 'white'},
        Content: () => this.getContent('verduras')
    },
      {
        title: 'Cereales',
        styleActive: {backgroundColor: '#6E3C65'},
        styleActiveLabel: {color: 'white'},
        Content: () => this.getContent('cereales')
    },
      {
        title: 'Proteinas',
        styleActive: {backgroundColor: '#F04E53'},
        styleActiveLabel: {color: 'white'},
        Content: () => this.getContent('proteinas')
      },
      {
        title: 'Grasas',
        styleActive: {backgroundColor: '#FFBC40'},
        styleActiveLabel: {color: 'white'},
        Content: () => this.getContent('grasas')
      },
      {
        title: 'Frutas',
        styleActive: {backgroundColor: '#B75A74'},
        styleActiveLabel: {color: 'white', fontFamily: 'ginora-regular', fontWeight: 'normal'},
        Content: () => this.getContent('frutas')
      }
    ]

    return (
      <Page style={[styles.isMarginless, styles.isPaddingless]}>
        <ImageBackground style={[{height: 85}, styles.flexCentered, styles.hasShadow1]} source={bgMyPlate}>
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
              La guía para diseñar tus comidas.
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
            Los ingredientes de las listas fueron seleccionados por su calidad y variedad. Ahora tienes muchas opciones para crear
            tus comidas diarias, por lo que va a resultarte muy fácil probar cosas nuevas. Con la alimentación que se te recomienda
            estamos seguros de que vas a lograr un estado óptimo de bienestar.
          </Text>
        </View>
        {content}

        <Tabs config={{routes: routes}}/>
      </Page>
    )
  }
}
