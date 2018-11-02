import React, { Component } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'

class Logout extends Component {
    static navigationOptions = {
        drawerIcon: () => (
            <Icon name='power-off' size={20} color='#FFFFFF' />
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
      await AsyncStorage.removeItem('jwt')
      this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
      }))
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
