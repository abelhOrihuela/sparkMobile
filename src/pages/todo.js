import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import Header from '../components/header'
import Footer from '../components/footer'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      items: []
    }
  }

  handleAddItem = () => {
    let {value} = this.state

    if (!value) return

    const newItems = [
      ...this.state.items,
      {
        key: Date.now,
        text: value,
        complete: false
      }
    ]

    this.setState({
      items: newItems,
      value: ''
    })
  }

  render () {
    let {value} = this.state
    return (
      <View style={[styles.container]}>
        <Header
          value={value}
          onAddItem={this.handleAddItem}
          onChange={({value}) => this.setState({value})}
          />
        <View style={[styles.content]}>
          <Text>MyComponent component</Text>
        </View>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    opacity: 0.5,
    ...Platform.select({
      ios: {
        paddingTop: 30
      }
    })
  },
  content: {
    flex: 1
  }
})

export default Todo
