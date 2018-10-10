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
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import VideoContainer from '../components/video'
import ModalContainer from '../components/modal'
import api from '../core/api'
import logo from '../logo.png'
const {height, width} = Dimensions.get('window')
const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
]
import Orders from '../core/orders'

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
      loading: false,
      actions: []
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
      alert('Error', e.message)
    }
  }

  render () {
    let {loading, modalIntro, modalStatus, actions} = this.state

    let modalOne = (<ModalContainer
      visible={modalIntro}>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite18}>Bienvenido a</Text>
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Image source={logo} />
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
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
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Image source={logo} />
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite18}>Estamos preparando tus resultados.</Text>
      </View>
      <View style={[styles.sectionColumn, styles.doubleMarginTopBottom]}>
        {
          actions.map((item, index) => {
            return (<View style={[styles.sectionRow]}>
              <Icon name='check' size={20} color='white' />
              <Text style={[styles.fontWhite18, styles.marginSides]}>
                {
                  Orders.find(l => l.key === item.data.status).label

                }
              </Text>
            </View>)
          })
        }
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>¡Pronto iniciarás un nuevo estilo de vida!</Text>
      </View>
      <View style={[styles.sectionRow, styles.doubleMarginTopBottom]}>
        <Text style={styles.fontWhite16}>(Cuando estén tus resultados, podrás acceder)</Text>
      </View>
    </ModalContainer>)

    if (loading) {
      return <ActivityIndicator />
    }


    return (
      <View>
        {modalOne}
        {modalTwo}
        <Card title="CARD WITH DIVIDER">
          {
            users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })
          }
        </Card>
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
  sectionRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10
  },
  sectionColumn: {
    justifyContent: 'center',
    flexDirection: 'column',
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
  },
  marginSides: {
    marginLeft: 10,
    marginRight: 10
  }
})
