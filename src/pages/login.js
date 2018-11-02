import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, AsyncStorage, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import BaseForm from '../components/base-form'
import t from 'tcomb-form-native'
import background from '../bg.png'
import logo from '../logo.png'
import people from '../people.png'
import api from '../core/api'
import styles from './styles'
const {height, width} = Dimensions.get('window')

export class Login extends Component {
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
        email: 'abel+c2@commonsense.io',
        password: 'abel1991'
      },
      options: {
        auto: 'none',
        fields: {
          email: {
            label: null,
            placeholder: 'Correo electrónico',
            error: 'Correo electrónico no valido'
          },
          password: {
            label: null,
            placeholder: 'Contraseña',
            error: 'Contraseña no valida',
            secureTextEntry: true
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

  resetPassword (e) {
    this.props.navigation.navigate('ResetPassword')
  }

  async handleSubmit (data) {
    this.setState({
      loading: true
    })
    try {
      let body = await api.post('/user/login', data)
      await AsyncStorage.setItem('user', JSON.stringify(body.data.user))
      await AsyncStorage.setItem('jwt', body.data.jwt)
      await this.me()
    } catch (error) {
      alert('Error', error.message)
    }
    this.setState({
      loading: false
    })
  }

  async me () {
    try {
      let body = await api.get('/user/me')
      await AsyncStorage.setItem('me', JSON.stringify(body.data.user))
      this.props.navigation.navigate('Dashboard')
    } catch (error) {
      alert('Error', error.message)
    }
  }

  render () {
    const User = {
      email: t.String,
      password: t.String
    }
    let {loading} = this.state

    let content = loading ? (<ActivityIndicator />) : (<BaseForm
      type={User}
      label={'Iniciar sesión'}
      options={this.state.options}
      value={this.state.value}
      onChange={(e) => this.handleOnChange(e)}
      onSubmit={(e) => this.handleSubmit(e)}
    />)

    return (<View style={styles.login.container}>
      <Image source={background} style={[StyleSheet.absoluteFill, styles.login.background]} />
        <ScrollView>
          <View style={styles.login.section}>
            <Image source={logo} />
          </View>
          <View style={styles.login.section}>
            <Text style={styles.login.fontBlue16}>Empieza a conocerte y siéntete mejor.</Text>
          </View>
          <View style={styles.login.section}>
            <Image source={people} style={styles.login.imagePeople} resizeMode='contain' />
          </View>
          <View style={styles.login.section}>
            <Text style={styles.login.fontBlack14}>Para iniciar la experiencia ingresa tu contraseña</Text>
          </View>
          <View style={styles.login.section}>
            {content}
          </View>
          <TouchableOpacity
            style={styles.login.btn}
            onPress={() => this.resetPassword()}>
            <Text style={styles.login.fontBlue16}>¿Olvidaste tu constraseña?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>)
  }
}

export default Login
