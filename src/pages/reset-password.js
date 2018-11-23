import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, AsyncStorage, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import BaseForm from '../components/base-form'
import t from 'tcomb-form-native'
import background from '../bg.png'
import logo from '../logo.png'
import people from '../people.png'
import api from 'app/src/core/api'
const {height, width} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'

export class ResetPassword extends Component {
  static navigationOptions = {
      header: null,
      gesturesEnabled: false,
      enableNativeAnimation: false,
      swipeEnabled: false,
      drawerLabel: () => null
  }

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      value: {
        email: ''
      },
      options: {
        auto: 'none',
        fields: {
          email: {
            label: null,
            placeholder: 'Correo electrónico',
            error: 'Correo electrónico no valido'
          }
        }
      }
    }
  }

  handleOnChange (e) {
    this.setState({
      value: e
    })
  }

  async handleSubmit (data) {
    this.setState({
      loading: true
    })
    try {
      let body = await api.post('/user/reset-password', {...data, admin: false, type: 'customer'})
      this.props.navigation.navigate('Login')
    } catch (error) {
      alert('Error', error.message)
    }
    this.setState({
      loading: false
    })
  }

  handleBack (data) {
    this.props.navigation.navigate('Login')
  }

  render () {
    const User = {
      email: t.String
    }
    let {loading} = this.state

    let content = loading ? (<ActivityIndicator size='large' />) : (<BaseForm
      type={User}
      label={'Enviar link'}
      options={this.state.options}
      value={this.state.value}
      onChange={(e) => this.handleOnChange(e)}
      onSubmit={(e) => this.handleSubmit(e)}
    />)

    return (<View style={styles.container}>
      <Image source={background} style={[StyleSheet.absoluteFill, styles.background]} />
        <View
          style={styles.sectionSpaceBetween}>
          <TouchableOpacity onPress={() => this.handleBack()}>
            <Icon name='arrow-left' size={20} color='#2771A2' style={[styles.fontBlue18, styles.marginSides]}/>
          </TouchableOpacity>
          <Text style={[styles.fontBlue18, styles.marginSides]}>Recupera tu contraseña</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.fontBlack14]}>Ingresa tu correo electrónico para recibir las instrucciones de recuperación de contraseña.</Text>
        </View>
        <View style={styles.section}>
          {content}
        </View>
      </View>)
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
  sectionSpaceBetween: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
  fontBlue18: {
    color: '#2771A2',
    fontSize: 18
  },
  fontBlack14: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center'
  },
  btn: {
    alignItems: 'center',
    margin: 10
  },
  marginSides: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default ResetPassword
