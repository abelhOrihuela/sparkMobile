import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

export default class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  handleChange (item, index) {
    let center = index * 150
    this.setState({
      index: index
    })
    this.scroller.scrollTo({x: center, y: 0})
    if (this.props.handleChange) {
      this.props.handleChange(item, index)
    }
  }

  render () {
    let {index} = this.state || 0
    let {Content} = this.props.config.routes[index]
    let {styleActive, styleActiveLabel} = this.props.config.routes[index]

    return (
      <View style={[styles.container, {marginLeft: 20, marginRight: 20}]}>
        <ScrollView
          ref={(scroller) => { this.scroller = scroller }}
          horizontal
          style={[styles.container]}>
          {
            this.props.config.routes.map((item, index) => {
              return (<TouchableOpacity onPress={() => this.handleChange(item, index)}
                style={[styles.tab, {...index === this.state.index ? styleActive : {}}]}>
                <Text style={[{...index === this.state.index ? styleActiveLabel : {}}]}>
                  {item.title}
                </Text>
              </TouchableOpacity>)
            })
          }
        </ScrollView>
        <View style={styles.container}>
          <Content />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
