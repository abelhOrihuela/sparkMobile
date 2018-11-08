import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import blood from '../Quimica.png'
import iconBlood from '../iconBlood.png'
import api from '../core/api'
import Panel from '../components/panel'
import ModalContainer from '../components/modal'
import Page from 'app/src/components/page'


import nutritionBg from '../nutricion-fondo.jpg'
import longevidadBg from '../longevidad-fondo.jpg'
import estilodevidaBg from '../estilodevida-fondo.jpg'
import suplementacionBg from '../suplementacion-fondo.png'
import ejercicioBg from '../ejercicio-fondo.jpg'

const {width} = Dimensions.get('window')

const takeActions = [
  {title: 'NUTRICIÓN', img: nutritionBg, icon: iconBlood, style: 'nutritionOverlay', section: 'Nutrition'},
  {title: 'EJERCICIO', img: ejercicioBg, icon: iconBlood, style: 'exerciseOverlay', section: 'Exercise'},
  {title: 'SALUD Y SUPLEMENTACIÓN', img: suplementacionBg, icon: iconBlood, style: 'suplementationOverlay', section: 'Suplementation'},
  {title: 'LONGEVIDAD', img: longevidadBg, icon: iconBlood, style: 'longevityOverlay', section: 'Longevity'},
  {title: 'HÁBITOS DE VIDA', img: estilodevidaBg, icon: iconBlood, style: 'lifestyleOverlay', section: 'Lifestyle'}
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
      headerLeft: (<Icon name={'arrow-left'} size={20} color='#2771A2' onPress={ () => {
        navigation.goBack()
        }} />)
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      notifications: [],
      showRiskIndexModal: false,
      reports: []
    }
  }

  componentWillMount () {
    this.loadMyNewMe()
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

  goToSection (item) {
    this.props.navigation.navigate(item.section, {item})
  }

  renderItem ({item, index}) {
    let icon = iconBlood
    return (<TouchableOpacity style={{flex: 1, height: 150, backgroundColor: 'white', margin: 10}}
      onPress={() => this.goToSection(item)}>
      <ImageBackground
        style={[StyleSheet.absoluteFill]}
        source={item.img} />

      <View style={[styles[item.style], {height: 150}]} />
      <View style={[styles.icons]}>
        <Image source={icon} style={{height: 70, width: 60}} />
        <Text style={{color: 'white'}}>{item.title}</Text>
      </View>
    </TouchableOpacity>)
  }

  setModalVisible (visible) {
    this.setState({
      showRiskIndexModal: visible
    })
  }

  render () {
    let { showRiskIndexModal } = this.state

    let title = (<Text style={{color: 'white'}}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        MY
      </Text>
    NEWME
    </Text>)

    let modal = (<ModalContainer
      backgroundColor='black'
      visible={showRiskIndexModal}>
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', margin: 20}}>
        <View style={{flexDirection: 'row', backgroundColor: '#009AA7', alignItems: 'center', height: 70, padding: 20}}>
          <Text style={[{flex: 4, color: 'white', alignItems: 'center'}]}>Factor de riesgo: <Text style={{color: 'white', fontWeight: 'bold'}}>Diabetes</Text></Text>
          <TouchableOpacity
            onPress={() => this.setModalVisible(!showRiskIndexModal)}>
            <Icon name='minus' size={20} color='#FFFFFF' />
          </TouchableOpacity>
        </View>
      </View>
    </ModalContainer>)

    return (<Page>
      {modal}
      <View style={[styles.headerRiskIndex]}>
        <Text style={[styles.title]}>
          Factor de riesgo: <Text style={{color: 'white', fontWeight: 'bold'}}>Diabetes</Text>
        </Text>
        <TouchableOpacity
          style={{flex: 1, height: 70, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.setModalVisible(!showRiskIndexModal)}>
          <Icon name='eye' size={20} color='#FFFFFF' />
        </TouchableOpacity>
      </View>

      <Panel title={title} styleContainerTitle={{backgroundColor: '#2771A2'}} colorIcon='white'>
        <Text>
          En su informe de nutrición aprenderá cómo sus variantes genéticas individuales
          pueden afectar su respuesta nutricional única y cómo tomar las decisiones correctas
          para usted. Tiempo difícil para mantener un peso saludable, incluso cuando nuestra
          motivación es alta (y el suministro de donas de oficina es bajo). Pero he aquí
          algunas buenas noticias: vivir en nuestras entrañas es un surtido de aliados:
          microbios que pueden ayudarnos a alcanzar un peso más saludable
        </Text>
      </Panel>

      <FlatList
        data={takeActions}
        numColumns={2}
        keyExtractor={(x, i) => i}
        renderItem={(item) => this.renderItem(item)} />
    </Page>)
  }
}

const styles = StyleSheet.create({
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
