import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Page from 'app/src/components/page'
import styles from 'app/src/pages/styles'
import api from 'app/src/core/api'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'

import SmartDiet from 'app/src/pages/nutrition/plan/smart-diet'
import HealtyHeart from 'app/src/pages/nutrition/plan/healty-heart'
import SweetCare from 'app/src/pages/nutrition/plan/sweet-care'
import HappyShape from 'app/src/pages/nutrition/plan/happy-shape'
import LongLife from 'app/src/pages/nutrition/plan/long-life'

export default class PlanAlimentation extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Nutrition',
      drawerIcon: () => (
        <Icon name='power-off' size={20} color='#FFFFFF' />
      ),
      drawerLabel: () => {
        return 'Nutrition'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      currentOrder: null
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

    content = <HealtyHeart data={riskIndex} />

    return (
      <Page style={[styles.isPaddingless]}>
        {content}
      </Page>
    )
  }
}
