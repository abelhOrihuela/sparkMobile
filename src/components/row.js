import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch
} from 'react-native'

export default class Row extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Switch
          value={this.props.complete}
          onValueChange={this.props.onComplete} />
        <View style={styles.textWrap}>
          <Text style={[styles.text, this.props.complete && styles.complete]}>
            {
              this.props.text
            }
          </Text>
        </View>
        <TouchableOpacity onPress={this.props.onRemove}>
          <Text style={[styles.destroy]}>
            X
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  complete: {
    textDecorationLine: 'line-through'
  },
  text: {
    fontSize: 24,
    color: '#4D4D4D'
  },
  destroy: {
    fontSize: 24,
    color: '#CC9A9A'
  }
})
