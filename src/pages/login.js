import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, AsyncStorage } from 'react-native'
import BaseForm from '../components/base-form'
import t from 'tcomb-form-native'
import background from '../background.jpg'
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
      value: {
        email: 'abel@happy.com',
        password: 'Abel'
      },
      options: {
        fields: {
          email: {
            label: ' ',
            error: 'Insert a valid name'
          },
          password: {
            label: ' ',
            error: 'Insert a valid name',
            secureTextEntry: true
          }
        }
      }
    }
  }

  handleOnChange = (e) => {
    this.setState({
      value: e
    })
  }

  handleSucces = (data) => {
    try {
      AsyncStorage.setItem('user', JSON.stringify(data))
      this.props.navigation.navigate('Dashboard')
    } catch (error) {
      alert('Error', error)
    }
  }

  render () {
    const User = {
      email: t.String,
      password: t.String
    }

    return (
      <View style={styles.container}>
        <Image source={background}
          style={[StyleSheet.absoluteFill, {width: width, height: height}]} />
        <View style={{height: height}}>
          <BaseForm
            textButton='Iniciar sesion'
            type={User}
            options={this.state.options}
            value={this.state.value}
            onChange={this.handleOnChange}
            onSuccess={this.handleSucces}
          />
        </View>
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
  }
})

export default Login
