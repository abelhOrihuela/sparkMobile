import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import VideoContainer from '../components/video'
import ModalContainer from '../components/modal'
import api from '../core/api'

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: () => (
      <Icon name='home' size={20} color='#000' />
    ),

    drawerLabel: () => {
      return 'Home'
    }
  }
  constructor (props){
    super(props)
    this.state = {
      order: null,
      modalVisible: false,
      loading: true
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
    console.log('order ===>', order);
    if (order.status !== 'delivered') {
      console.log('Show modal intro');
      this.setState({
        loading: false,
        modalVisible: false
      })
    } else {
      this.setState({
        loading: false
      })
      console.log('Redirect home');
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    let {loading, modalVisible} = this.state

    let content = (<ModalContainer
      visible={modalVisible}
      hideModal={(e) => this.setModalVisible(e)}>
      <View style={styles.section}>
        <Text>Bienvenido a</Text>
      </View>
    </ModalContainer>)

    if (loading) {
      return <ActivityIndicator />
    }


    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10
  }
})
