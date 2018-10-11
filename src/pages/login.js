import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, AsyncStorage, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import BaseForm from '../components/base-form'
import t from 'tcomb-form-native'
import background from '../bg.png'
import logo from '../logo.png'
import people from '../people.png'
import api from '../core/api'
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
        email: 'abel+c1@commonsense.io',
        password: 'Abel1991'
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
      this.props.navigation.navigate('Dashboard')
    } catch (error) {
      alert('Error', error.message)
    }
    this.setState({
      loading: false
    })
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

    return (<View style={styles.container}>
      <Image source={background} style={[StyleSheet.absoluteFill, styles.background]} />
        <ScrollView>
          <View style={styles.section}>
            <Image source={logo} />
          </View>
          <View style={styles.section}>
            <Text style={styles.fontBlue16}>Empieza a conocerte y siéntete mejor.</Text>
          </View>
          <View style={styles.section}>
            <Image source={people} style={styles.imagePeople} resizeMode='contain' />
          </View>
          <View style={styles.section}>
            <Text style={styles.fontBlack14}>Para iniciar la experiencia ingresa tu contraseña</Text>
          </View>
          <View style={styles.section}>
            {content}
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.resetPassword()}>
            <Text style={styles.fontBlue16}>¿Olvidaste tu constraseña?</Text>
          </TouchableOpacity>
        </ScrollView>
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
  imagePeople: {
    width: width-80,
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
