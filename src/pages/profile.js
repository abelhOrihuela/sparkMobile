'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';
const Form = t.form.Form;

const stylesheet = {...t.form.Form.stylesheet}

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: 'abel@happy.com',
        name: 'Abel',
        telephone: '7224666201'
      },
      options:{
        stylesheet: stylesheet,
        fields: {
          email: {
            editable: false,
          },
          name: {
            error: 'Insert a valid name'
          },
          telephone: {
            error: 'Insert a valid name'
          }
        }
      }
    };
  }

  onChange = (e) => {
    /*
    console.log('e', e);
    const value = this._form.getValue();
    console.log('value: ', this._form);
    */
    this.setState({
      value: e
    })
  }

  onPress = () => {
    const value = this._form.getValue();
    console.log('value', value);

  }

  render() {
    const User = t.struct({
      name: t.String,
      email: t.String,
      telephone: t.String,
      address: t.maybe(t.String)
    });
    return (
      <View style={styles.container}>
        <ScrollView>
        <Form type={User}
          ref={c => this._form = c}
          options={this.state.options}
          value={this.state.value}
          onChange={this.onChange}/>
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginTop: 50,
    padding: 20,
    backgroundColor: '#FFF',
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
});

export default Profile;
