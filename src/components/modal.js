import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window')

export default class ModalContainer extends Component {
  handleClose () {
    alert('Modal has been closed.')
  }
  render () {
    let styleCustom = {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: this.props.backgroundColor || '#0D4E78',
      height: height
    }
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => this.handleClose()}>
        <View style={[styleCustom]}>
          {
            this.props.children
          }
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
