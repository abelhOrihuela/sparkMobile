import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Header from '../components/header'
import Footer from '../components/footer'

class Todo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <View>
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
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1
  }
})

export default Todo
