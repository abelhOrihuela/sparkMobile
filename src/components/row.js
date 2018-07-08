import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput
} from 'react-native'

export default class Row extends Component {
  render () {

    let textComponent = (  <TouchableOpacity style={styles.textWrap} onLongPress={() => this.props.onToggleEdit(true)}>
        <Text style={[styles.text, this.props.complete && styles.complete]} >
          {
            this.props.text
          }
        </Text>
      </TouchableOpacity>)

    let editingComponent = (<View style={[styles.textWrap]}>
        <TextInput
          onChangeText={this.props.onUpdate}
          autoFocus
          value={this.props.text}
          style={[styles.input]}
          multiline />
      </View>
    )
    let removeButton = (<TouchableOpacity onPress={this.props.onRemove}>
      <Text style={[styles.destroy]}>
        X
      </Text>
    </TouchableOpacity>)
    let doneButton = (<TouchableOpacity onPress={() => this.props.onToggleEdit(false)}>
      <Text style={[styles.destroy]}>
        Done
      </Text>
    </TouchableOpacity>)

    return (
      <View style={styles.container}>
        <Switch
          value={this.props.complete}
          onValueChange={this.props.onComplete} />
          {
            this.props.editing ? editingComponent : textComponent
          }
          {
            this.props.editing ? doneButton : removeButton
          }
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
  input: {
    height: 100,
    flex: 1,
    fontSize: 24,
    padding: 0,
    color: '#4D4D4D'
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
