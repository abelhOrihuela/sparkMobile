import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form

const stylesheet = {...t.form.Form.stylesheet}

// stylesheet.textbox.normal.borderWidth = 0
// stylesheet.textbox.error.borderWidth = 0
// stylesheet.textbox.normal.marginBottom = 0
// stylesheet.textbox.error.marginBottom = 0
// stylesheet.textboxView.normal.borderWidth = 0
// stylesheet.textboxView.error.borderWidth = 0
// stylesheet.textboxView.normal.borderRadius = 0
// stylesheet.textboxView.error.borderRadius = 0
// stylesheet.textboxView.normal.borderBottomWidth = 1
// stylesheet.textboxView.error.borderBottomWidth = 1

// stylesheet.textbox.normal.margin = 2
// stylesheet.textboxView.normal.margin = 2
// stylesheet.textbox.normal.padding = 2
// stylesheet.textboxView.normal.padding = 2
// stylesheet.textbox.normal.marginTop = 2
// stylesheet.textboxView.normal.marginTop = 2
// stylesheet.textbox.normal.paddingHorizontal = 2
// stylesheet.textboxView.normal.paddingHorizontal = 2

// stylesheet.textbox.error.marginBottom = 5
let normal = {
  height: 45,
  backgroundColor: '#ECECEC',
  color: 'gray',
  fontSize: 14,
  borderColor: '#c2c2c2',
  borderWidth: 1,
  borderRadius: 0,
  textAlign: 'center',
  fontFamily: 'ginora-regular',
  fontWeight: 'normal'
}

stylesheet.textbox.normal = normal


class BaseForm extends Component {
  onSubmit (e) {
    const value = this._form.getValue()
    if (value) {
      this.props.onSubmit(value)
    }
  }

  onChange (e) {
    this.props.onChange(e)
  }

  render () {
    const Model = t.struct(this.props.type)

    let label = this.props.label ? this.props.label : 'Guardar'
    
    return (
      <View style={styles.container}>
        <Form type={Model}
          ref={c => (this._form = c)}
          options={{...this.props.options, ...stylesheet}}
          value={this.props.value}
          onChange={(e) => this.onChange(e)} />
        {
          <TouchableHighlight style={styles.button}
            onPress={(e) => this.onSubmit(e)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableHighlight>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'ginora-regular',
    fontWeight: 'normal'
  },
  button: {
    height: 45,
    backgroundColor: '#2771A2',
    borderColor: '#2771A2',
    borderWidth: 1,
    // borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

BaseForm.propTypes = {
  type: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default BaseForm
