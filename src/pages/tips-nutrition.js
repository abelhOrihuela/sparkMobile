import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Page from 'app/src/components/page'
import styles from './styles'
import api from 'app/src/core/api'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TipsNutrition extends Component {
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
      let body = await api.get('/customers/suggestions/nutrition')
      this.setState({
        items: body.data.data
      })
      console.log('body ====>', body.data.data)
    } catch (e) {
      alert('Error' + e.message)
    }
  }

  renderItem = ({item, index}) => {
    return (<TouchableOpacity
      style={{flex: 1, margin: 10, backgroundColor: 'white'}} >
      
    </TouchableOpacity>)
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
  }
})
