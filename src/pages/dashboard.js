import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import VideoContainer from '../components/video'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: () => (
      <Icon name='home' size={20} color='#000' />
    ),

    drawerLabel: () => {
      return 'Home'
    }
  }

  render () {
    let url = 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761'
    // let url = 'https://www.google.com/'

    return (
      <View style={styles.container}>
        <VideoContainer url={url} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
