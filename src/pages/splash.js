import React from 'react'
import {AsyncStorage, Text, View, StyleSheet} from 'react-native'

class Splash extends React.Component {
  static navigationOptions = {
         header: null,
         drawerLabel: () => null
  }

  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount () {
    this.load()
  }

  async load () {
    let user = await AsyncStorage.getItem('user')
    if (user) {
      setTimeout(() => {
        this.props.navigation.navigate('Dashboard')
      }, 1000)
    } else {
      setTimeout(() => {
        this.props.navigation.navigate('Login')
      }, 1000)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default Splash
