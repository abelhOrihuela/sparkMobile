import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card } from 'react-native-elements'
import api from 'app/src/core/api'

export default class Suggestions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  async componentWillMount () {
    await this.loadItems()
  }

  async loadItems () {
    let body = await api.get(`/customers/suggestions/${this.props.section}?tags=${this.props.tags}`)

    this.setState({
      items: body.data.data
    })
  }

  goToReportTip (suggestion) {
    this.props.navigation.navigate('TipsDetail', {suggestion, section: this.props.section})
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
    return (<FlatList
      data={this.state.items}
      keyExtractor={(x, i) => i}
      renderItem={this.renderItem} />)
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
