import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import bg from 'app/src/bg.png'
import background from '../bg.png'

class Exercise extends Component {
    static navigationOptions = {
        drawerIcon: () => (
            <Icon name='power-off' size={20} color='#FFFFFF' />
        ),

        drawerLabel: () => {
            return 'Exercise'
        },
    }
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Hola</Text>
        <ImageBackground style={[StyleSheet.absoluteFill]} source={bg} />
      </View>
    );
  }
}

export default Exercise
