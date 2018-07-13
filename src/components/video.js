import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import Video from 'react-native-video'
const {width} = Dimensions.get('window')

export default class VideoContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      errorMessage: ''
    }
  }

  handleError = (meta) => {
    console.log('meta', meta);
    const {error: { code }} = meta

    let errorMessage = 'An error ocurred playing this video'

    switch (code) {
      case -11800:
        errorMessage = 'Could not load video from URL'
        break;
    }

    this.setState({
      error: true,
      errorMessage
    });
  }

  render () {
    const {error, errorMessage} = this.state
    const height = width * 0.5625
    return (
      <View style={styles.container}>
        <View style={error ? styles.error : undefined }>
          <Video source={{uri: this.props.url}}
            resizeMode='contain'
            onError={this.handleError}
            style={{height: height, width: '100%'}} />
          {
            error && (<View style={[styles.videoCover]}>
                <Text>{errorMessage}</Text>
            </View>)
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoCover: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  error: {
    backgroundColor: "#000",
  }
})
