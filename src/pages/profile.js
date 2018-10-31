import React, { Component } from 'react';
import BaseForm from '../components/base-form'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, ListItem, Button } from 'react-native-elements'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Animated
} from 'react-native'
import t from 'tcomb-form-native'
import FormUser from './formUser'
import Orders from './orders'

const {height, width} = Dimensions.get('window')
import styles from './styles'
class Profile extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name='user' size={20} color='#FFFFFF' />
    ),

    drawerLabel: () => {
      return 'Profile'
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      user: null,
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
      },
      tabs: {
       index: 0,
       routes: [
         { key: 'first', title: 'Información personal' },
         { key: 'second', title: 'Pedidos' },
       ],
     }
    }
  }

  async componentWillMount() {
    await this.load()
  }

  async load () {
    let user = JSON.parse(await AsyncStorage.getItem('user'))
    this.setState({user})
    console.log('User ===>', user)
  }

  handleOnChange = (e) => {
    this.setState({
      value: e
    })
  }

  handleSucces = (e) => {

  }

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#2771A2' : '#000000')
            ),
          });
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({tabs: {
                ...this.state.tabs,
                index: i
              }})}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  render() {
    const User = {
      name: t.String,
      email: t.String,
      telephone: t.String,
      address: t.maybe(t.String)
    }

    return (
      <View style={styles.page}>
        <TabView
          navigationState={this.state.tabs}
          renderScene={SceneMap({
            first: FormUser,
            second: Orders,
          })}
          renderTabBar={this._renderTabBar}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width, height }}
        />
      </View>
    )
  }
}

export default Profile
