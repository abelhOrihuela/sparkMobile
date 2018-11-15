import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import blood from '../Quimica.png'
import iconBlood from '../iconBlood.png'
import iconNutrition from '../icon-manzana.png'
import iconBalon from '../icon-balon.png'
import iconCapsula from '../icon-capsula.png'
import iconLongevidad from '../icon-longevidad.png'
import iconEstilodeVida from '../icon-estilo-de-vida.png'
import api from '../core/api'
import Panel from '../components/panel'
import ModalContainer from '../components/modal'
import Page from 'app/src/components/page'
import nutritionBg from '../nutricion-fondo.jpg'
import longevidadBg from '../longevidad-fondo.jpg'
import estilodevidaBg from '../estilodevida-fondo.jpg'
import suplementacionBg from '../suplementacion-fondo.png'
import ejercicioBg from '../ejercicio-fondo.jpg'
import styles from 'app/src/pages/styles'
const {width} = Dimensions.get('window')
import { Constants, LinearGradient } from 'expo'
import { get } from 'lodash'
import Conditions from 'app/src/catalogs/conditions'

import diabetesIcon from '../images/diabetes-icon.png'

const takeActions = [
  {title: 'NUTRICIÓN', img: nutritionBg, icon: iconNutrition, style: 'nutritionOverlay', section: 'Nutrition'},
  {title: 'EJERCICIO', img: ejercicioBg, icon: iconBalon, style: 'exerciseOverlay', section: 'Exercise'},
  {title: 'SALUD Y SUPLEMENTACIÓN', img: suplementacionBg, icon: iconCapsula, style: 'suplementationOverlay', section: 'Suplementation'},
  {title: 'LONGEVIDAD', img: longevidadBg, icon: iconLongevidad, style: 'longevityOverlay', section: 'Longevity'},
  {title: 'HÁBITOS DE VIDA', img: estilodevidaBg, icon: iconEstilodeVida, style: 'lifestyleOverlay', section: 'Lifestyle'}
]

class MyNewMe extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'MYNEWME',
      drawerIcon: () => (
        <Icon name='check' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'MYNEWME'
      },
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
      notifications: [],
      showRiskIndexModal: false,
      currentOrder: {},
      reports: []
    }
  }

  componentWillMount () {
    this.loadMyNewMe()
    this.loadMe()
  }

  async loadMyNewMe () {
    try {
      let body = await api.get('/customers/reports')
      this.setState({
        reports: body.data.data
      })
    } catch (e) {
      alert('Error' + e.message)
    }
  }

  async loadMe () {
    try {
      let me = JSON.parse(await AsyncStorage.getItem('me'))
      this.setState({
        currentOrder: me.currentOrder
      })
    } catch (e) {
      alert('Error' + e.message)
    }
  }

  goToSection (item) {
    this.props.navigation.navigate(item.section, {item})
  }

  renderItem ({item, index}) {
    let icon = item.icon
    return (<TouchableOpacity style={{flex: 1, height: 150, backgroundColor: 'white', margin: 10}}
      onPress={() => this.goToSection(item)}>
      <ImageBackground
        style={[StyleSheet.absoluteFill]}
        source={item.img} />

      <View style={[stylesMyNewMe[item.style], {height: 150}]} />
      <View style={[stylesMyNewMe.icons]}>
        <Image source={icon} style={{height: 70, width: 60}} />
        <Text style={[styles.fontWhite16, styles.textCentered, styles.isGinoraFontRegular, styles.isMarginSmall]}>{item.title}</Text>
      </View>
    </TouchableOpacity>)
  }

  setModalVisible (visible) {
    this.setState({
      showRiskIndexModal: visible
    })
  }

  render () {
    let { showRiskIndexModal, currentOrder } = this.state

    const riskKey = get(currentOrder, 'riskIndex.key')
    const riskIndex = get(currentOrder, 'riskIndex.value', 0.5)

    const condition = Conditions[riskKey] || {}

    let title = (<Text style={[styles.fontWhite18, styles.isAdamFontRegular]}>
      <Text style={[{fontWeight: 'bold'}]}>
        MY
      </Text>
    NEWME
    </Text>)

    let modal = (<ModalContainer
      backgroundColor='black'
      visible={showRiskIndexModal}>
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', margin: 20}}>
        <View style={{flexDirection: 'row', backgroundColor: '#009AA7', alignItems: 'center', height: 70, padding: 20}}>
          <Text style={[stylesMyNewMe.title, styles.isGinoraFontRegular, styles.fontWhite18]}>Factor de riesgo:
            <Text style={{color: 'white', fontWeight: 'bold'}}> {condition.label}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => this.setModalVisible(!showRiskIndexModal)}>
            <Icon name='minus' size={20} color='#FFFFFF' />
          </TouchableOpacity>
        </View>

        <View style={[styles.isFlex1, styles.isMargin]}>
          <View style={[styles.isLineHeight20, styles.centered]}>
            <Image style={[{ width: 50, height: 57 }, styles.isMargin]} source={condition.icon} />
            <Text style={[styles.fontBlack18, styles.isGinoraFontBold, styles.textCenter]}>
            Déjanos tus datos , tu mensaje y nuestros asesores se encargarán de comunicarse contigo para responder todas tus dudas.
            </Text>
          </View>
          <View style={styles.isMargin}>
            <Text style={[styles.textCenter, styles.isGinoraFontBold, {color:'#009AA7', fontSize: 18}]}>NIVEL</Text>
            <Text style={[styles.textCenter, styles.isGinoraFontBold, {color:'#009AA7', fontSize: 48}]}>{(riskIndex * 10).toFixed(2)}%</Text>
          </View>

          <LinearGradient
            colors={['#d12134', '#7B6F94', '#2be1f1']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            locations={[0, riskIndex, 1]}
            style={{ height: 10}}
          />

          <View style={[styles.isFlex, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text>En riesgo</Text>
            <Text>Saludable</Text>
          </View>
        </View>
      </View>
    </ModalContainer>)

    return (<Page>
      {modal}
      <View style={[stylesMyNewMe.headerRiskIndex]}>
        <Text style={[stylesMyNewMe.title, styles.isGinoraFontRegular, styles.fontWhite18]}>
          Factor de riesgo: <Text style={{color: 'white', fontWeight: 'bold'}}>{condition.label}</Text>
        </Text>
        <TouchableOpacity
          style={{flex: 1, height: 70, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.setModalVisible(!showRiskIndexModal)}>
          <Icon name='eye' size={20} color='#FFFFFF' />
        </TouchableOpacity>
      </View>

      <Panel
        style={styles.isMarginSmall}
        title={title}
        styleContainerTitle={{backgroundColor: '#16314E'}}
        borderColor='#16314E' colorIcon='white'>
        <Text style={styles.isGinoraFontRegular}>
          En su informe de nutrición aprenderá cómo sus variantes genéticas individuales
          pueden afectar su respuesta nutricional única y cómo tomar las decisiones correctas
          para usted. Tiempo difícil para mantener un peso saludable, incluso cuando nuestra
          motivación es alta (y el suministro de donas de oficina es bajo). Pero he aquí
          algunas buenas noticias: vivir en nuestras entrañas es un surtido de aliados:
          microbios que pueden ayudarnos a alcanzar un peso más saludable
        </Text>
      </Panel>

      <View style={styles.isMarginSmallBottom}>
        <FlatList
          data={takeActions}
          numColumns={2}
          keyExtractor={(x, i) => i}
          renderItem={(item) => this.renderItem(item)} />
      </View>
    </Page>)
  }
}

const stylesMyNewMe = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    flex: 1,
    overflow: 'hidden'
  },
  icons: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  headerRiskIndex: {
    flexDirection: 'row',
    backgroundColor: '#009AA7',
    alignItems: 'center',
    height: 70,
    margin: 10
  },
  title: {
    flex: 4,
    color: 'white',
    alignItems: 'center',
    marginLeft: 20
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    opacity: 0.75,
    backgroundColor: '#16314E'
  },
  nutritionOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#911E38',
    right: 0
  },
  exerciseOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#DC6B18',
    right: 0,
  },
  suplementationOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#1E1B5D',
    right: 0,
  },
  longevityOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#715200',
    right: 0,
  },
  lifestyleOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#535B06',
    right: 0,
  }
})

export default MyNewMe
