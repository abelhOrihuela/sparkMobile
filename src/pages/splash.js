import React from 'react'
import {AsyncStorage, Text, View, StyleSheet, ImageBackground, Image} from 'react-native'
import background from 'app/src/bg.png'
import logo from 'app/src/logo.png'

class Splash extends React.Component {
  static navigationOptions = {
         header: null,
         drawerLabel: () => null
  }

  constructor (props) {
    super(props)
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

  me () {
    setTimeout(() => {
      this.props.navigation.navigate('Dashboard')
    }, 500)
  }

  render () {
    return (
      <ImageBackground style={[StyleSheet.absoluteFill]} source={background}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={logo} />
        </View>
    </ImageBackground>
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
