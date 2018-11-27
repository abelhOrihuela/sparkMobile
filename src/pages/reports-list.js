import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TouchableHighlight, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground, Image, ScrollView } from 'react-native'
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
// import risk from '../images/reportes.png'
import risk from '../reportes-fondo.jpg'

import iconRisk from '../icon-risk.png'

import sensibilities from '../Sensibilidades.png'

import api from 'app/src/core/api'
import Panel from '../components/panel'
import Page from 'app/src/components/page'
import styles from 'app/src/pages/styles'
const {height, width} = Dimensions.get('window')

class Reports extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Reports',
      drawerIcon: () => (
        <Icon name='file' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'Reports'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      modalVisible: false,
      reports: []
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  componentWillMount () {
    this.loadReports()
  }

  async loadReports () {
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

  renderItem = ({item, index}) => {
    let backgroundImage = blood
    let icon = iconBlood
    let title = ''
    if (item.type=== 'blood') {
      backgroundImage = blood
      icon = iconBlood
      title = 'MARCADORES SANGUÍNEOS'
    } else if (item.type=== 'dna') {
      backgroundImage = dna
      icon = iconDna
      title = 'GENÉTICA'
    } else if (item.type=== 'sensibilities') {
      backgroundImage = sensibilities
      icon = iconSensibilities
      title = 'SENSIBILIDADES ALIMENTICIAS'
    } else if (item.type=== 'microbiome') {
      backgroundImage = microbiome
      icon = iconMicrobiome
      title = 'MICROBIOMA'
    } else if (item.type=== 'risk') {
      backgroundImage = risk
      icon = iconRisk
      title = 'INTEGRADOR'
    }
    return (<TouchableOpacity
      style={{flex: 1, height: 150, backgroundColor: 'white', margin: 10}}
      onPress={() => this.goToReportDetail(item)}>
      <ImageBackground
        style={[StyleSheet.absoluteFill]}
        source={backgroundImage}
        />

      <View style={[stylesReports[item.type +'Overlay'], { height: 150}]} />
      <View style={{flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <Image source={icon} style={{height: 70, width: 60}}/>
        <Text style={{color: 'white', textAlign: 'center'}}>{title}</Text>
      </View>
    </TouchableOpacity>)
  }

  render () {
    let { reports } = this.state

    let title = ( <Text style={[styles.fontWhite16, styles.isLineHeight18, styles.isAdamFontRegular]}>
    ALCHE
    <Text style={{fontWeight: 'bold'}}>
      MY
    </Text>
    RESULTS
  </Text>)
  return (
      <Page>
        <Panel
          style={styles.isMarginSmall}
          title={title}
          styleContainerTitle={{backgroundColor: '#2771A2'}}
          borderColor='#2771A2' colorIcon='white'>
          <Text style={[styles.isLineHeight18, styles.isGinoraFontRegular, styles.isMarginSmall]}>
            En los siguientes reportes vas a encontrar los resultados de tus estudios y su integración.
          </Text>
          <Text style={[styles.isLineHeight18, styles.isGinoraFontRegular, styles.isMarginSmall]}>
            De cada prueba decodificamos, valoramos y correlacionamos los datos, para poder entender tu estado actual de salud, recopilar información útil para prevenir condiciones a las que
             te podrías enfrentar y generar tu programa personalizado de bienestar.
          </Text>
        </Panel>
        <FlatList
          data={reports}
          numColumns={2}
          keyExtractor={(x, i) => i}
          renderItem={this.renderItem}/>
      </Page>)
}
}



const stylesReports = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    opacity: 0.75,
    backgroundColor: '#16314E',
    right: 0,
  },
  bloodOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#64948A',
    right: 0,
  },
  dnaOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#0070A8',
    right: 0,
  },
  sensibilitiesOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#696E85',
    right: 0,
  },
  microbiomeOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#009AA7',
    right: 0,
  },
  riskOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#0D4E78',
    right: 0
  }
})

export default Reports
