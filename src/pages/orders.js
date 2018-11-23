import React, { Component } from 'react';
import BaseForm from '../components/base-form'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, ListItem, Button, Divider } from 'react-native-elements'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import api from 'app/src/core/api'
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableHighlight, Image, Dimensions, TouchableOpacity, AsyncStorage, Animated, ActivityIndicator } from 'react-native'
import t from 'tcomb-form-native'
import styles from 'app/src/pages/styles'
import logo from '../logo.png'

class Orders extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name='user' size={20} color='#FFFFFF' />
    ),

    drawerLabel: () => {
      return 'Orders'
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: null,
      value: null,
      success: false,
      orders: null,
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
    try {
      let body =await api.get('/customers/orders/active')
      console.log('body.data', body.data);
      this.setState({
        orders: body.data,
        loading: false
      })
    } catch (e) {
      alert('Error: ' + e.message)
    }
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
          <Card>
            <View>
              <Text style={[styles.textCenter, styles.fontBlack16, styles.isBold]}>
                ALCHEMY ADVISOR
              </Text>
            </View>
            <Divider style={{ backgroundColor: '#000000' }} />

            <View>
              <View>
                <Text style={[styles.textCenter, styles.fontBlue16]}>
                  Detalle de tu programa:
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={logo}/>
              </View>
              <View>
                <Text style={[styles.textCenter, styles.fontBlack16, styles.isBold]}>
                  Nombre del producto:
                </Text>
                <Text style={[styles.textCenter]}>
                  {this.state.orders.metaData.product.name}
                </Text>

                <Text style={[styles.textCenter, styles.fontBlack16, styles.isBold]}>
                  Status
                </Text>

                <Text style={[styles.textCenter]}>
                  Activa <Icon name='check' size={20} color='green' />
                </Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    )
  }
}



export default Orders
