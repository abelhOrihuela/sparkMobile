import React, { Component } from 'react'
import { Text, View } from 'react-native'

class NotificationDetail extends Component {
    static navigationOptions = {
        header: null
    }
    
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default NotificationDetail