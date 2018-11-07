import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

export default class CardTips extends Component {
  goToSection () {
    this.props.navigation.navigate(this.props.to)
  }
  render () {
    return (
      <View style={[styles.card, {backgroundColor: 'white', height: 150}]}>
        <ImageBackground source={this.props.img} style={{width: '100%', height: 150}}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
            <Text style={[styles.fontWhite18]}>Tips de nutrición</Text>
            <TouchableOpacity style={{backgroundColor: '#84ACC8'}} onPress={() => this.goToSection()}>
              <Text style={[styles.fontWhite18, {padding: 10}]}>Conoce más</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.nutritionOverlayFooter} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    marginLeft: 0,
    marginRight: 0
  },
  fontWhite18: {
    color: '#FFFFFF',
    fontSize: 18
  },
  fontWhite16: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  nutritionOverlayFooter: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#0D4E78',
    height: 150
  }
})
