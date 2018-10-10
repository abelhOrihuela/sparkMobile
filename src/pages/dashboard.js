import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import VideoContainer from '../components/video'
import ModalContainer from '../components/modal'
import api from '../core/api'
import logo from '../logoWhite.png'
const {height, width} = Dimensions.get('window')

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: () => (
      <Icon name='home' size={20} color='#2771A2' />
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
      loading: false
    }
  }

  componentWillMount() {
    this.load()
  }

  async load () {
    try {
      let body = await api.get('/customers/orders/active')
      this.setState({
        order: body.data
      }, this.loadView)
    } catch (e) {
      alert('Error', e.message)
    }
  }

  loadView () {
    let {order} = this.state
    if (order.status !== 'delivered') {
      this.setState({
        loading: false,
        modalIntro: true
      })
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

  render () {
    let {loading, modalIntro, modalStatus} = this.state

    let modalOne = (<ModalContainer
      visible={modalIntro}>
      <View style={[styles.section, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite18}>Bienvenido a</Text>
      </View>
      <View style={[styles.section, styles.doubleMarginTopBottom]}>
        <Image source={logo} />
      </View>
      <View style={[styles.section, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>Bienvenido a AlcheMycode, este será tu espacio personal para conocerte y poder cambiar tu vida.</Text>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.doubleMarginTopBottom]}
        onPress={() => this.setModalVisible(!modalIntro)}>
        <Text style={styles.fontWhite16}>Continuar</Text>
      </TouchableOpacity>
    </ModalContainer>)

    let modalTwo = (<ModalContainer
      visible={modalStatus}>
      <View style={[styles.section, styles.doubleMarginTopBottom]}>
        <Image source={logo} />
      </View>
      <View style={[styles.section, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite18}>Estamos preparando tus resultados.</Text>
      </View>

      <View style={[styles.section, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>¡Pronto iniciarás un nuevo estilo de vida!</Text>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.doubleMarginTopBottom]}
        onPress={() => this.setState({modalStatus: false})}>
        <Text style={styles.fontWhite16}>Status</Text>
      </TouchableOpacity>
    </ModalContainer>)

    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View>
        {modalOne}
        {modalTwo}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'transparent'
  },
  background: {
    width: width,
    height: height
  },
  section: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10
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
    padding: 10,
    alignItems: 'center',
    margin: 10
  },
  doubleMarginTopBottom: {
    marginTop: 20,
    marginBottom: 20
  },
  status: {
    backgroundColor: '#2771A2',
  }
})
