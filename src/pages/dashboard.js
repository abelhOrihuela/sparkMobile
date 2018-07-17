import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import VideoAutoplay from '../components/video-autoplay'

export default class Dashboard extends Component {
  render () {
    // let url = 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761'
    let url = 'https://vimeo.com/245128891'
    return (
      <View style={styles.container}>
        <VideoAutoplay />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
