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

const {width} = Dimensions.get('window')
const appHost = 'https://customers.dev.ac.commonsense.io'

class Reports extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Reports',
      drawerIcon: () => (
        <Icon name='file' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'Reports'
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
    const report = navigation.getParam('report', null);
    let {loading, token} = this.state
    let type

    if (report.type === 'dna') {
      type = 'genetics'
    } else if (report.type === 'blood') {
      type = 'blood'
    } else if (report.type === 'sensibilities') {
      type = 'sensibilities'
    }

    let url = `${appHost}/reports/${type}/${report.uuid}?token=${token}&isNative=1`

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

export default Reports

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    margin: 0,
    padding: 0
  }
})
