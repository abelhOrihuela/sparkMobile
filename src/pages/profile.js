import React, { Component } from 'react';
import BaseForm from '../components/base-form'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import t from 'tcomb-form-native'

class Profile extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name='user' size={20} color='#000' />
    ),

    drawerLabel: () => {
      return 'Profile'
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: 'abel@happy.com',
        name: 'Abel',
        telephone: '7224666201'
      },
      options:{
        fields: {
          email: {
            editable: false,
          },
          name: {
            error: 'Insert a valid name'
          },
          telephone: {
            error: 'Insert a valid name'
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

  handleSucces = (e) => {

  }

  render() {
    const User = {
      name: t.String,
      email: t.String,
      telephone: t.String,
      address: t.maybe(t.String)
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <BaseForm
            type={User}
            options={this.state.options}
            value={this.state.value}
            onChange={this.handleOnChange}
            onSuccess={this.handleSucces}
            />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  }
})

export default Profile
