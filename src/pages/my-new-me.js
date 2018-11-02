import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import blood from '../Quimica.png'
import iconBlood from '../iconBlood.png'
import api from '../core/api'
import Panel from '../components/panel'
import ModalContainer from '../components/modal'

import nutritionBg from '../nutricion-fondo.jpg'
import longevidadBg from '../longevidad-fondo.jpg'
import estilodevidaBg from '../estilodevida-fondo.jpg'
import suplementacionBg from '../suplementacion-fondo.png'
import ejercicioBg from '../ejercicio-fondo.jpg'

const {width} = Dimensions.get('window')

const takeActions = [
  {title: 'NUTRICIÓN', img: nutritionBg, icon: iconBlood, style: 'nutritionOverlay'},
  {title: 'EJERCICIO', img: ejercicioBg, icon: iconBlood, style: 'exerciseOverlay'},
  {title: 'SALUD Y SUPLEMENTACIÓN', img: suplementacionBg, icon: iconBlood, style: 'suplementationOverlay'},
  {title: 'LONGEVIDAD', img: longevidadBg, icon: iconBlood, style: 'longevityOverlay'},
  {title: 'HÁBITOS DE VIDA', img: estilodevidaBg, icon: iconBlood, style: 'lifestyleOverlay'}
]

class MyNewMe extends Component {
  static navigationOptions = {
    title: 'MYNEWME',
    drawerIcon: () => (
      <Icon name='file' size={20} color='#FFFFFF' />
    ),

    drawerLabel: () => {
      return 'MYNEWME'
    },
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

  goToSection (report) {
    this.props.navigation.navigate('ReportDetail', {report})
  }

  renderItem ({item, index}) {
    let icon = iconBlood
    return (<TouchableOpacity style={{flex: 1, height: 150, backgroundColor: 'white'}}
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

    return (<ScrollView style={styles.container}>
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
      <View style={{marginTop: 10, marginBottom: 10}}>
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
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={takeActions}
          numColumns={2}
          keyExtractor={(x, i) => i}
          renderItem={(item) => this.renderItem(item)} />
      </View>
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    paddingLeft: 20,
    paddingRight: 20
  },
  flatList: {
    flex: 1,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10
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
    marginBottom: 5,
    marginTop: 20
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
    opacity: 0.75,
    backgroundColor: '#16314E',
    width: width
  },
  nutritionOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#911E38',
    width: width
  },
  exerciseOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#DC6B18',
    width: width
  },
  suplementationOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#1E1B5D',
    width: width
  },
  longevityOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#715200',
    width: width
  },
  lifestyleOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#535B06',
    width: width
  }
})

export default MyNewMe
