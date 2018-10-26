import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Collapsible extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

   showContent () {
     console.log(this.state.show);
     this.setState({show: !this.state.show})
     // this.setState((prevState) => {
     //   return !prevState.show
     // })

     // this.setState(prevState => {
     //     show: !prevState.show
     // });

   }

  render() {
    let icon = this.state.show ? 'minus' : 'plus'
    let flex = this.state.show ? 1 : 0
    return (
      <View style={{flex: flex}}>
        <View style={{flexDirection: 'row', backgroundColor: '#2771A2', padding: 10, margin: 10}}>
          {
            this.props.title
          }
          <TouchableOpacity style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.showContent()}>
            <Icon name='plus' size={20} color='#FFFFFF' />
          </TouchableOpacity>
        </View>
        {
          this.state.show && this.props.children
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
