import React, { Component } from 'react';
import BaseForm from '../components/base-form'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, ListItem, Button } from 'react-native-elements'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import api from 'app/src/core/api'
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableHighlight, Dimensions, TouchableOpacity, AsyncStorage, Animated, ActivityIndicator } from 'react-native'
import t from 'tcomb-form-native'
import styles from 'app/src/pages/styles'

class FormUser extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name='user' size={20} color='#FFFFFF' />
    ),

    drawerLabel: () => {
      return 'FormUser'
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: null,
      value: null,
      success: false,
      options:{
        fields: {
          email: {
            editable: false,
          },
          name: {
            error: 'Ingresar un nombre valido'
          },
          phone: {
            error: 'Ingresar un numero valido'
          }
        }
      }
    }
  }

  async componentWillMount() {
    await this.load()
  }

  async load () {
    let user = JSON.parse(await AsyncStorage.getItem('me')).user
    let value = {
      email: user.email,
      name: user.name,
      phone: user.phone
    }
    this.setState({
      user,
      value,
      loading: false
    })
  }

  handleOnChange = (e) => {
    this.setState({
      value: e,
      success: false
    })
  }

  onSubmit (e) {
    try {
      let body = api.post('/user/me/update', e)
      this.setState({
        success: true
      })
    } catch (e) {
      alert('Error: no se pudo actualizar la información')
    }

  }

  render() {
    const User = {
      name: t.String,
      email: t.String,
      phone: t.String
    }

    if (this.state.loading) {
      return <ActivityIndicator size='large' />
    }

    return (
      <View style={styles.page}>
        <ScrollView>
          <Card title={this.state.user.name}>
            <BaseForm
              type={User}
              options={this.state.options}
              value={this.state.value}
              onChange={this.handleOnChange}
              onSubmit={(e) => this.onSubmit(e)}
              />
              {
                this.state.success && (<View style={{margin: 10}}>
                  <Text style={{color: 'green', textAlign: 'center'}}>Información actualizada</Text>
                  </View>)
              }
          </Card>
        </ScrollView>
      </View>
    )
  }
}



export default FormUser
