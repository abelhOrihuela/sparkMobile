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
      <Icon name='check' size={20} color='green' />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>)
  }

  render () {
    let {items} = this.state
    return (
      <Page>
        <Text style={[{margin: 10}, styles.fontBlack16Bold]}>Aprende a vivir mejor para un sano crecimiento</Text>
        <Text style={[{margin: 10}, styles.fontGray12]}>Aprende a vivir mejor para un sano crecimiento</Text>
        <Text style={[{margin: 10}, styles.fontBlack14]}>
          En su informe de nutrición aprenderá cómo sus variantes genéticas
          individuales pueden afectar su respuesta nutricional única y
          cómo tomar las decisiones correctas para usted. Tiempo difícil
          para mantener un peso saludable, incluso cuando nuestra motivación
          es alta (y el suministro de donas de oficina es bajo). Pero he aquí
          algunas buenas noticias: vivir en nuestras entrañas es
          un surtido de aliados: microbios que pueden ayudarnos
          a alcanzar un peso más saludable
        </Text>
        <Text style={[{margin: 10}, styles.fontBlack16Bold]}>
          Sensibilidad en alimentos
        </Text>
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
