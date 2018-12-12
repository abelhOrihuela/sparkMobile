import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Dimensions, Image, AsyncStorage, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import BaseForm from 'app/src/components/base-form'
import t from 'tcomb-form-native'
import background from 'app/src/images/textura.png'
import logo from 'app/src/images/logo.png'
import people from 'app/src/people.png'
import api from 'app/src/core/api'
import styles from 'app/src/pages/styles'
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
        email: '',
        password: ''
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
      await AsyncStorage.setItem('me', JSON.stringify(body.data))
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

    let content = loading ? (<ActivityIndicator size='large' />) : (<BaseForm
      type={User}
      label={'Iniciar sesión'}
      options={this.state.options}
      value={this.state.value}
      onChange={(e) => this.handleOnChange(e)}
      onSubmit={(e) => this.handleSubmit(e)}
    />)

    return (<KeyboardAvoidingView
      style={styles.centered}
      behavior='padding'
    >
      <Image source={background} style={[StyleSheet.absoluteFill, stylesLogin.background]} />
      <View style={stylesLogin.section}>
        <Image  source={logo} />
      </View>
      <View style={stylesLogin.section}>
        <Text style={[stylesLogin.fontBlue16, styles.textCentered, styles.isGinoraFontRegular]}>
          Estas por descubrir aspectos de ti que no se creían posibles de explorar.
        </Text>
      </View>
      <View style={stylesLogin.section}>
        <Image source={people} style={stylesLogin.imagePeople} resizeMode='contain' />
      </View>
      <View style={stylesLogin.section}>
        <Text style={[stylesLogin.fontBlack14, styles.isGinoraFontRegular]}>Ingresa tu usuario y contraseña</Text>
      </View>
      <View style={stylesLogin.section}>
        {content}
      </View>
      <TouchableOpacity
        style={stylesLogin.btn}
        onPress={() => this.resetPassword()}>
        <Text style={[stylesLogin.fontBlue16, styles.isGinoraFontRegular]}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>)
  }
}

const stylesLogin = StyleSheet.create({
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
    width: '100%',
    height: 230
  },
  fontBlue16: {
    color: '#2771A2',
    fontSize: 16
  },
  fontBlack14: {
    color: '#000000',
    fontSize: 14
  },
  btn: {
    alignItems: 'center',
    margin: 10
  }
})

export default Login
