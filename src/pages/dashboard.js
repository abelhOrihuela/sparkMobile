import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import VideoContainer from '../components/video'
import ModalContainer from '../components/modal'
import api from '../core/api'
import logoWhite from '../logoWhite.png'
import people from '../people.png'
import logo from '../logo.png'
import myNewMeBg from '../my-new-me-fondo.jpg'
import reportesBg from '../reportes-fondo.jpg'
import reportesIcon from '../reportes.png'
import mynewmeIcon from '../mynewme.png'
const {height, width} = Dimensions.get('window')
import Orders from '../core/orders'

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: () => (
      <Icon name='home' size={20} color='#FFFFFF' />
    ),

    drawerLabel: () => {
      return 'Home'
    }
  }

  constructor (props){
    super(props)
    this.state = {
      order: null,
      modalIntro: false,
      modalStatus: false,
      loading: false,
      actions: [],
      reports: []
    }
  }

  async componentWillMount() {
    await this.loadReports()
    await this.load()
  }

  async load () {
    try {
      let body = await api.get('/customers/orders/active')
      this.setState({
        order: body.data
      }, this.loadView)
    } catch (e) {
      alert('Error' + e.message)
    }
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

  loadView () {
    let {order} = this.state
    if (order.status !== 'delivered') {
      this.setState({
        loading: false,
        modalIntro: true
      }, this.getStatusOrder)
    } else {
      this.setState({
        loading: false
      })
    }
  }

  setModalVisible(visible) {
    this.setState({
      modalIntro: visible,
      modalStatus: true
    })
  }

  async getStatusOrder () {
    let {order} = this.state
    try {
      let body = await api.get('/customers/orders/' + order.uuid + '/actions')
      this.setState({
        actions: body.data.data.data.reverse()
      })
    } catch (e) {
      alert('Error' + e.message)
    }
  }

  goToReports () {
    this.props.navigation.navigate('Reports')
  }

  goToMynewMe () {
    this.props.navigation.navigate('MyNewMe')
  }

  render () {
    let {loading, modalIntro, modalStatus, actions} = this.state

    let modalOne = modalIntro ? (<ModalContainer
      visible={modalIntro}>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite18}>Bienvenido a</Text>
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Image source={logoWhite} />
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>Bienvenido a AlcheMycode, este será tu espacio personal para conocerte y poder cambiar tu vida.</Text>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.doubleMarginTopBottom]}
        onPress={() => this.setModalVisible(!modalIntro)}>
        <Text style={styles.fontWhite16}>Continuar</Text>
      </TouchableOpacity>
    </ModalContainer>) : <View />

    let modalTwo = modalTwo ? (<ModalContainer
      visible={modalStatus}>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Image source={logoWhite} />
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite18}>Estamos preparando tus resultados.</Text>
      </View>
      <View style={[styles.sectionColumn, styles.doubleMarginTopBottom]}>
        { actions.length ?
          actions.map((item, index) => {
            return (<View style={[styles.sectionRow]}>
              <Icon name='check' size={20} color='#FFFFFF' />
              <Text style={[styles.fontWhite18, styles.marginSides]}>
                {
                  Orders.find(l => l.key === item.data.status) ? Orders.find(l => l.key === item.data.status).label : 'N/A'
                }
              </Text>
            </View>)
          }) : <View />
        }
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>¡Pronto iniciarás un nuevo estilo de vida!</Text>
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>(Cuando estén tus resultados, podrás acceder)</Text>
      </View>
    </ModalContainer>) : <View />

    if (loading) {
      return <ActivityIndicator />
    }

    let heightSection = 150

    return (<View style={[styles.container]}>
      {modalOne}
      {modalTwo}
      <View style={{marginTop: 20}}>
        <Text style={[styles.fontBlue16, {textAlign: 'center'}]}>¡Bienvenido!</Text>
      </View>
      <View style={styles.sectionColumn}>
        <Text style={[styles.fontBlack14, {textAlign: 'center'}]}>Revisa tus resultados, dietas o referencias médicas.</Text>
      </View>
      <TouchableOpacity style={[{marginTop: 20, marginBottom: 10}, {height: heightSection}]} onPress={() => this.goToReports()}>


        <ImageBackground
          style={[StyleSheet.absoluteFill, styles.bgSection]}
          source={reportesBg}
          />
        <View style={styles.section}>
          <View style={{flex: 1, zIndex: 9999}}>
            <Image source={reportesIcon} style={{width: '100%', height: '100%'}} />
          </View>
          <View style={styles.sectionTitles}>
            <Text
              style={styles.titleSection}
              >
              Reportes
            </Text>
            <Text style={styles.subtitleSection}>
              {this.state.reports.length} reportes disponibles
            </Text>
          </View>
        </View>
        <View style={[styles.overlayReports, { height: heightSection}]} />

      </TouchableOpacity>

      <TouchableOpacity style={[{marginTop: 10, marginBottom: 10}, {height: heightSection}]} onPress={() => this.goToMynewMe()}>
        <ImageBackground
          style={[StyleSheet.absoluteFill, styles.bgSection]}
          source={myNewMeBg}
          />
        <View style={styles.section}>
          <View style={{flex: 1, zIndex: 9999}}>
            <Image source={mynewmeIcon} style={{width: '100%', height: '100%'}} />
          </View>
          <View style={styles.sectionTitles}>
            <Text
              style={styles.titleSection}
              >
              MY NEW ME
            </Text>
            <Text style={styles.subtitleSection}>
              Tu dieta, ejercicios, salud preventiva y hábitos personalizados.
            </Text>
          </View>
        </View>
        <View style={[styles.overlayMyNewMe, { height: heightSection}]} />
      </TouchableOpacity>
    </View>)

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    paddingLeft: 20,
    paddingRight: 20
  },
  background: {
    width: width,
    height: height
  },
  sectionRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10
  },
  sectionColumn: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  imagePeople: {
    width: width-80,
    height: 230
  },
  fontBlue16: {
    color: '#2771A2',
    fontSize: 16
  },
  fontWhite18: {
    color: '#FFFFFF',
    fontSize: 18
  },
  fontWhite16: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  fontBlack14: {
    color: '#000000',
    fontSize: 14
  },
  btn: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    margin: 10
  },
  doubleMarginTopBottom: {
    marginTop: 20,
    marginBottom: 20
  },
  status: {
    backgroundColor: '#2771A2',
  },
  marginSides: {
    marginLeft: 10,
    marginRight: 10
  },
  overlayReports: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#2771A2',
    right: 0
  },
  overlayMyNewMe: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.75,
    backgroundColor: '#16314E',
    right: 0
  },
  section: {
    flex: 1, flexDirection: 'row', padding: 20
  },
  bgSection: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  subtitleSection: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: 10,
    color: 'white'
  },
  titleSection: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: 20,
    color: 'white'
  },
  sectionTitles: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 9999,
    marginLeft: 10
  }
})
