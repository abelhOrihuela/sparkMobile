import React, { Component } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'

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
      <View>
        <Text></Text>
      </View>
    );
  }
}

export default Exercise
