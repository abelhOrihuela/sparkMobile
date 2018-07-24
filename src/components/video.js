import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/FontAwesome'
const {width} = Dimensions.get('window')

export default class VideoContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      errorMessage: '',
      buffering: false,
      animated: new Animated.Value(0)
    }
  }

  handleError = (meta) => {
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

  handleLoadStart = () => {
    this.triggerBufferAnimation()
  }

  triggerBufferAnimation = () => {
    this.loopingAnimation = Animated.loop(
      Animated.timing(this.state.animated, {
        toValue: 1,
        duration: 350
      })
    ).start()
  }

  handleOnBuffer = (meta) => {
    meta.isBuffering && this.triggerBufferAnimation()

    if (this.loopingAnimation && !meta.isBuffering) {
      this.loopingAnimation.stopAnimation()
    }

    this.setState({
      buffering: meta.isBuffering
    })
  }

  render () {
    const {error, errorMessage, buffering} = this.state
    const height = width * 0.5625

    const interpolatedAnimation = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const rotateStyle = {
      transform: [
        {rotate: interpolatedAnimation}
      ]
    }
    return (
      <View style={styles.container}>
        <View style={error ? styles.error : undefined }>
          <Video source={{uri: this.props.url}}
            resizeMode='contain'
            onError={this.handleError}
            style={{height: height, width: '100%'}}
            onLoadStart={this.handleLoadStart}
            onBuffer={this.handleOnBuffer} />
          {
            error && (<View style={[styles.videoCover]}>
                <Icon name='exclamation-triangle' size={30} color='red' />
                <Text>{errorMessage}</Text>
            </View>)
          }
          {
            buffering && (<View style={[styles.videoCover]}>
              <Animated.View style={[rotateStyle]}>
                <Icon name='circle-o-notch' size={30} color='#FFF' />
              </Animated.View>
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
    // backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  error: {
    backgroundColor: '#000',
  }
})
