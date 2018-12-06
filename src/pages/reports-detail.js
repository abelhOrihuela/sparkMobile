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
  TouchableOpacity,
  Text
} from 'react-native'

const {width} = Dimensions.get('window')
const appHost = 'https://customers.dev.ac.commonsense.io'
import styles from 'app/src/pages/styles'

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
      token: token
    })
  }
  onLoadEnd () {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 7000)
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
    } else if (report.type === 'microbiome') {
      type = 'microbiome'
    } else if (report.type === 'risk-index') {
      type = 'integrator'
    }

    let url = `${appHost}/reports/${type}/${report.uuid}?token=${token}&isNative=1`
    let height = 5000

    return (<View style={[styles.isFlex1]}>
      {
        loading && (<View style={[{flex: 5000}, {justifyContent: 'center'}]}>
           <ActivityIndicator size='large' />
             <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14, styles.textCentered]}>
               Preparando información...
             </Text>
        </View>)
      }

        <WebView
          style={{height: height, padding: 20}}
          ref={(ref) => {
            this.myWebView = ref
          }}
          onLoad={() => this.onLoadEnd()}
          startOn
          initialScale={100}
          scalesPageToFit
          javaScriptEnabled
          startInLoadingState
          source={{uri: url}} />
    </View>)
  }
}

export default Reports
