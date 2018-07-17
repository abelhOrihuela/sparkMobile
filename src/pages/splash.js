import React from 'react'
import {ActivityIndicator, AsyncStorage, Text, View, Image, StyleSheet} from 'react-native'
import Video from 'react-native-video'

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
    setTimeout(() => {
          this.props.navigation.navigate('Dashboard')
    }, 500)
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
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
})

export default Splash
