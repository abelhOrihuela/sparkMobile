import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  View,
  StyleSheet,
  Dimensions,
  WebView,
  Animated
} from 'react-native'

const {width} = Dimensions.get('window')

class ViewPage extends Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Icon name='file' size={20} color='#2771A2' />
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

  render () {
    // let url = `${APP_HOST}/report-view/${id}/${JSON.parse(token)}`
    // let url = 'https://www.dnafit.com/'
    let url = 'http://e17d1e44.ngrok.io/'

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

export default ViewPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    margin: 0,
    padding: 0
  }
})
