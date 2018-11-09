import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  StyleSheet,
  Dimensions,
  WebView,
  Animated,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'

const {width} = Dimensions.get('window')
const appHost = 'https://customers.dev.ac.commonsense.io'

class TipsDetail extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name='file' size={20} color='#FFFFFF' />
    ),

    drawerLabel: () => {
      return 'Reportes'
    },
  }
  constructor (props) {
    super(props)
    this.state = {
      token: null,
      loading: true
    }
  }

  async componentWillMount() {
    await this.getToken()
  }

  async getToken () {
    let token = await AsyncStorage.getItem('jwt')
    this.setState({
      token: token,
      loading: false
    })
  }

  render () {
    const { navigation } = this.props
    const suggestion = navigation.getParam('suggestion', null);
    let {loading, token} = this.state

    let url = `${appHost}/suggestions/${suggestion.uuid}?token=${token}&isNative=1`

    if (loading) {
      return <ActivityIndicator />
    }
    return (<View style={[styles.container]}>
      <WebView
        style={{width: width, height: 200, margin: 0}}
        ref={(ref) => {
          this.myWebView = ref
        }}
        initialScale={100}
        scalesPageToFit
        javaScriptEnabled
        source={{uri: url}} />
    </View>)
  }
}

export default TipsDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    margin: 0,
    padding: 0
  }
})
