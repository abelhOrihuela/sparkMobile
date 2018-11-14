import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  StyleSheet,
  Dimensions,
  WebView,
  Animated,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'

const {width, height} = Dimensions.get('window')
const appHost = 'https://customers.dev.ac.commonsense.io'

class TipsDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Nutrition',
      drawerIcon: () => (
        <Icon name='power-off' size={20} color='#FFFFFF' />
      ),
      drawerLabel: () => {
        return 'Nutrition'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
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
      return <ActivityIndicator size='large' />
    }
    return (<View style={[styles.container]}>
      <WebView
        style={{width: width, height: height, margin: 0}}
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
    // margin: 0,
    padding: 0
  }
})