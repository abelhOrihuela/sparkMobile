import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={[styles.header]}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text style={[styles.toggleIcon]}>
            {
              String.fromCharCode(10003)
            }
          </Text>
        </TouchableOpacity>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          blurOnSubmit={false}
          returnKeyType='done'
          style={[styles.input]}
          placeholder='Hola' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  toggleIcon: {
    fontSize: 30,
    color: '#CCC'
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16
  }
})
