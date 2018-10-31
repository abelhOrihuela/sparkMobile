import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import reportesBg from '../reportes-fondo.jpg'
import myNewMeBg from '../my-new-me-fondo.jpg'
import blood from '../Quimica.png'
import microbiome from '../Microbiota.png'
import dna from '../Genetica.png'
import iconDna from '../iconDna.png'
import iconBlood from '../iconBlood.png'
import iconMicrobiome from '../iconMicrobiome.png'
import iconSensibilities from '../iconSensibilities.png'
import sensibilities from '../Sensibilidades.png'
import api from '../core/api'
import Panel from '../components/panel'
import ModalContainer from '../components/modal'

const {height, width} = Dimensions.get('window')

const takeActions = [
  {title: 'NUTRICIÓN', img: blood, icon: iconBlood},
  {title: 'EJERCICIO', img: blood, icon: iconBlood},
  {title: 'SALUD Y SUPLEMENTACIÓN', img: blood, icon: iconBlood},
  {title: 'LONGEVIDAD', img: blood, icon: iconBlood},
  {title: 'HÁBITOS DE VIDA', img: blood, icon: iconBlood}
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

  setModalVisible (visible) {
    this.setState({modalVisible: visible})
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

  goToReportDetail (report) {
    this.props.navigation.navigate('ReportDetail', {report})
  }

  renderItem ({item, index}) {
    let backgroundImage = blood
    let icon = iconBlood
    return (<TouchableOpacity style={{flex: 1, height: 150, backgroundColor: 'white'}}
    onPress={() => this.goToReportDetail(item)}>
    <ImageBackground
      style={[StyleSheet.absoluteFill]}
      source={backgroundImage} />

    <View style={[styles['bloodOverlay'], {height: 150}]} />
    <View style={{flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
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
  let { reports, showRiskIndexModal } = this.state

  let title = ( <Text style={{color: 'white'}}>
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
  <View style={{flexDirection: 'row', backgroundColor: '#009AA7', alignItems: 'center', height: 70, padding: 20, marginBottom: 5, marginTop: 20}}>
    <Text style={[{flex: 4, color: 'white', alignItems: 'center'}]}>Factor de riesgo: <Text style={{color: 'white', fontWeight: 'bold'}}>Diabetes</Text></Text>
    <TouchableOpacity
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

  <View style={{flex: 1, overflow:'hidden', marginTop: 10, marginBottom: 10}}>
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
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#16314E',
    width: width
  },
  bloodOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#64948A',
    width: width
  },
  dnaOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#0070A8',
    width: width
  },
  sensibilitiesOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#696E85',
    width: width
  },
  microbiomeOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#009AA7',
    width: width
  }
})

export default MyNewMe
