import React, { Component } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Logout extends Component {
    static navigationOptions = {
        drawerIcon: () => (
            <Icon name='power-off' size={20} color='#2771A2' />
        ),

        drawerLabel: () => {
            return 'Logout'
        },
    }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
      this.logout()
  }

  async logout () {
      await AsyncStorage.removeItem('user')
      this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}

export default Logout
