import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import styles from 'app/src/pages/styles'
import Page from 'app/src/components/page'
import header from 'app/src/nutricion-fondo.jpg'
import SmartDiet from 'app/src/pages/nutrition/smart-diet'
import HealtyHeart from 'app/src/pages/nutrition/healty-heart'
import SweetCare from 'app/src/pages/nutrition/sweet-care'
import HappyShape from 'app/src/pages/nutrition/happy-shape'
import LongLife from 'app/src/pages/nutrition/long-life'
import Icon from 'react-native-vector-icons/FontAwesome'

import _ from 'lodash'
export default class AlchemyPlate extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'MYPLATE',
      drawerIcon: () => (
        <Icon name='file' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'MYPLATE'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      currentOrder: null,
      loading: true
    }
  }
  componentDidMount () {
    this.load()
  }

  async load () {
    let me = JSON.parse(await AsyncStorage.getItem('me'))
    this.setState({
      currentOrder: me.currentOrder,
      user: me.user,
      loading: false
    })
  }
  render () {
    let {loading, currentOrder} = this.state
    let riskIndex = _.get(currentOrder, 'riskIndex', null)

    let content
    if (loading || !riskIndex) {
      return <View style={styles.isMargin, {alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    }

    if (riskIndex.key === 'nutrition') {
      content = <SmartDiet data={riskIndex} />
    } else if (riskIndex.key === 'cardiovascular') {
      content = <HealtyHeart data={riskIndex} />
    } else if (riskIndex.key === 'diabetes') {
      content = <SweetCare data={riskIndex} />
    } else if (riskIndex.key === 'obesity') {
      content = <HappyShape data={riskIndex} />
    } else if (riskIndex.key === 'longevity') {
      content = <LongLife data={riskIndex} />
    }

    return (
      <Page style={[styles.isPaddingless]}>
        {content}
      </Page>
    )
  }
}
