import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form

const stylesheet = {...t.form.Form.stylesheet}

stylesheet.textbox.normal.borderWidth = 0
stylesheet.textbox.error.borderWidth = 0
stylesheet.textbox.normal.marginBottom = 0
stylesheet.textbox.error.marginBottom = 0

stylesheet.textboxView.normal.borderWidth = 0
stylesheet.textboxView.error.borderWidth = 0
stylesheet.textboxView.normal.borderRadius = 0
stylesheet.textboxView.error.borderRadius = 0
stylesheet.textboxView.normal.borderBottomWidth = 1
stylesheet.textboxView.error.borderBottomWidth = 1
stylesheet.textbox.normal.marginBottom = 5
stylesheet.textbox.error.marginBottom = 5

class BaseForm extends Component {
  onPress = (e) => {
    const value = this._form.getValue();
    if (value) {
      this.props.onSuccess(value)
    }
  }

  onChange = (e) => {
    this.props.onChange(e)
  }

  render () {

    const Object = t.struct(this.props.type)
    return (
      <View style={styles.container}>
        <Form type={Object}
          ref={c => (this._form = c)}
          options={{...this.props.options, ...stylesheet}}
          value={this.props.value}
          onChange={this.props.onChange} />
          { 
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
            
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})


BaseForm.propTypes = {
  type: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
}

export default BaseForm