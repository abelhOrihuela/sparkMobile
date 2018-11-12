import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Panel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value()
    }
  }

  componentWillMount () {
    setTimeout(() => {
      this.refs.view.measure((ox, oy, width, height) => {
        this.setState({
          initialMinHeight: 70,
          initialMaxHeight: height
        })

        this.state.animation.setValue(
          this.state.expanded ? height + 70 : 70
        )
      })
    })
  }

  toggle () {
    let initialValue = this.state.expanded ? this.state.initialMaxHeight + this.state.initialMinHeight : this.state.initialMinHeight
    let finalValue = this.state.expanded ? this.state.initialMinHeight : this.state.initialMaxHeight + this.state.initialMinHeight

    this.setState({
      expanded: !this.state.expanded
    })

    Animated.spring(this.state.animation, {
      toValue: finalValue,
      speed: 20,
      bounciness: 0
    }).start()
  }

  render () {
    let icon = this.state.expanded ? 'minus' : 'plus'
    let {styleContainerTitle} = this.props || {}
    let {colorIcon} = this.props || '#FFFFFF'

    return (<Animated.View style={[styles.container, { height: this.state.animation, borderWidth: 1, borderColor: this.props.borderColor }]}>
      <View style={[styleContainerTitle, styles.titleContainer]}>
        <View style={[styles.title]}>{this.state.title}</View>
        <TouchableOpacity style={{flex: 1, height: 70, justifyContent: 'center', alignItems: 'center'}}
          onPress={this.toggle.bind(this)}>
          <Icon name={icon} size={20} color={colorIcon} />
        </TouchableOpacity>
      </View>

      <View ref='view' style={[styles.body]}>
        {this.props.children}
      </View>
    </Animated.View>)
  }
}

var styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 4,
    marginLeft: 20
  },
  button: {

  },
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 20
  }
})

export default Panel
