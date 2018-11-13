import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Page from 'app/src/components/page'
import styles from 'app/src/pages/styles'
import api from 'app/src/core/api'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card } from 'react-native-elements'

export default class TipsNutrition extends Component {
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
      items: []
    }
  }
  componentWillMount() {
    this.load()
  }

  async load () {
    try {
      let body = await api.get('/customers/suggestions')
      this.setState({
        items: body.data.data
      })
    } catch (e) {
      alert('Error' + e.message)
    }
  }

  goToReportTip (suggestion) {
    this.props.navigation.navigate('TipsDetail', {suggestion})
  }

  renderItem = ({item, index}) => {
    return (<Card containerStyle={[stylesNutrition.card, this.props.style]}>
            <TouchableOpacity style={{flexDirection: 'row', flex: 1}} onPress={() => this.goToReportTip(item)}>
              <View style={[{ margin: 10}, stylesNutrition.flexColumn]}>
                <Icon name='check' size={20} color='green'/>
              </View>
              <View style={[{flex: 2, margin: 10}, stylesNutrition.flexColumn]}>
                <Text style={[stylesNutrition.fontBlack16Bold]}>{item.title}</Text>
                <Text style={[stylesNutrition.fontGray12]}>{item.description}</Text>
              </View>
              <View style={[{flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-end'}]}>
                <Icon name='chevron-right' size={20} color='#911E38' />
              </View>
            </TouchableOpacity>
          </Card>)
  }

  render () {
    let {items} = this.state
    return (
      <Page>
        <FlatList
          data={items}
          keyExtractor={(x, i) => i}
          renderItem={this.renderItem} />
      </Page>
    )
  }
}

const stylesNutrition = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    margin: 10
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fontBlack16Bold: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  fontGray12: {
    color: '#7A828E',
    fontSize: 12
  }
})
