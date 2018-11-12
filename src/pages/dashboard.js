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
import reportesIcon from '../images/reportes.png'
import mynewmeIcon from '../mynewme.png'
const {height, width} = Dimensions.get('window')
import Orders from '../core/orders'
import Page from 'app/src/components/page'
import styles from 'app/src/pages/styles'

export default class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      drawerIcon: () => (
        <Icon name='home' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'Home'
      },
      headerLeft: null
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
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Text style={[stylesDashboard.fontWhite18, styles.isGinoraFontRegular]}>Bienvenido a</Text>
      </View>
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Image source={logoWhite} />
      </View>
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Text style={[stylesDashboard.fontWhite16, styles.isGinoraFontRegular]}>
          Bienvenido a AlcheMycode, este será tu espacio personal para conocerte y poder cambiar tu vida.
        </Text>
      </View>
      <TouchableOpacity
        style={[stylesDashboard.btn, stylesDashboard.doubleMarginTopBottom]}
        onPress={() => this.setModalVisible(!modalIntro)}>
        <Text style={[stylesDashboard.fontWhite16, styles.isGinoraFontRegular]}>Continuar</Text>
      </TouchableOpacity>
    </ModalContainer>) : <View />

    let modalTwo = modalTwo ? (<ModalContainer
      visible={modalStatus}>
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Image source={logoWhite} />
      </View>
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Text style={[stylesDashboard.fontWhite18, styles.isGinoraFontBold]}>Estamos preparando tus resultados.</Text>
      </View>
      <View style={[stylesDashboard.sectionColumn, stylesDashboard.doubleMarginTopBottom]}>
        { actions.length ?
          actions.map((item, index) => {
            return (<View style={[stylesDashboard.sectionRow]}>
              <Icon name='check' size={20} color='#FFFFFF' />
              <Text style={[stylesDashboard.fontWhite18, styles.isGinoraFontBold, stylesDashboard.marginSides]}>
                {
                  Orders.find(l => l.key === item.data.status) ? Orders.find(l => l.key === item.data.status).label : 'N/A'
                }
              </Text>
            </View>)
          }) : <View />
        }
      </View>
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Text style={[stylesDashboard.fontWhite16, styles.isGinoraFontRegular]}>¡Pronto iniciarás un nuevo estilo de vida!</Text>
      </View>
      <View style={[stylesDashboard.sectionRow, stylesDashboard.doubleMarginTopBottom]}>
        <Text style={[stylesDashboard.fontWhite16, styles.isGinoraFontRegular]}>(Cuando estén tus resultados, podrás acceder)</Text>
      </View>
    </ModalContainer>) : <View />

    if (loading) {
      return <ActivityIndicator size='large' />
    }

    let heightSection = 150

    let contentVisible = this.state.reports.length > 0 ? true : false

    return (<Page>
      {modalOne}
      {modalTwo}
      <View style={styles.isMarginSmall}>
        <Text style={[styles.fontBlue20, styles.isGinoraFontBold, {textAlign: 'center'}]}>¡Bienvenido!</Text>
      </View>
      <View style={styles.isMarginSmall}>
        <Text style={[stylesDashboard.fontBlack14, {textAlign: 'center'}]}>
          Ingresa a tus reportes y a tu programa personalizado de bienestar.
        </Text>
      </View>

      {
        contentVisible && (<TouchableOpacity style={[styles.isMarginSmall, {height: heightSection}]} onPress={() => this.goToReports()}>
          <ImageBackground
            style={[StyleSheet.absoluteFill, stylesDashboard.bgSection]}
            source={reportesBg}
          >
            <View style={[stylesDashboard.overlayReports, { height: heightSection}]} />
            <View style={stylesDashboard.section}>
              <View style={{flex: 1}}>
                <Image source={reportesIcon} resizeMode='contain' style={{width: '100%', height: '100%'}} />
              </View>
              <View style={stylesDashboard.sectionTitles}>
                <Text
                  style={[stylesDashboard.titleSection, styles.isGinoraFontRegular]}
                  >
                  REPORTES
                </Text>
                <Text style={[stylesDashboard.subtitleSection, styles.isGinoraFontRegular]}>
                  {this.state.reports.length} reportes disponibles
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>)
      }


      {
        contentVisible && (<TouchableOpacity style={[styles.isMarginSmall, {height: heightSection}]} onPress={() => this.goToMynewMe()}>
          <ImageBackground
            style={[StyleSheet.absoluteFill, stylesDashboard.bgSection]}
            source={myNewMeBg}
          >
            <View style={[stylesDashboard.overlayMyNewMe, { height: heightSection}]} />
            <View style={stylesDashboard.section}>
              <View style={{flex: 1}}>
                <Image source={mynewmeIcon} resizeMode='contain' style={{width: '100%', height: '100%'}} />
              </View>
              <View style={stylesDashboard.sectionTitles}>
                <Text
                  style={[stylesDashboard.titleSection, styles.isAdamFontRegular]}
                  >
                  <Text style={[{fontWeight: 'bold'}]}>MY</Text>
                   NEWME
                </Text>
                <Text style={[stylesDashboard.subtitleSection, styles.isGinoraFontRegular]}>
                  Nutrición, ejercicio, longevidad, hábitos de vida, salud y suplementación.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>)
      }
    </Page>)

  }
}

const stylesDashboard = StyleSheet.create({
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
    fontSize: 14,
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
