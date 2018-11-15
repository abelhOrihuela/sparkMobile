import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class CardItemSection extends Component {
  goToSection () {
    let {params} = this.props || {}
    this.props.navigation.navigate(this.props.to, params)
  }
  render () {
    return (
      <Card containerStyle={[styles.card, this.props.style]}>
        <TouchableOpacity style={{flexDirection: 'row', flex: 1}} onPress={() => this.goToSection()}>
          <View style={[{flex: 1, margin: 10}, styles.flexColumn]}>
            <Image source={this.props.icon} resizeMode='contain' style={{height: 80, width: 80}} />
          </View>
          <View style={[{flex: 2, margin: 10}, styles.flexColumn]}>
            <Text style={[styles.fontBlack16Bold, styles.isGinoraFontBold]}>{this.props.title}</Text>
            <Text style={[styles.fontGray12, styles.isGinoraFontRegular]}>{this.props.subtitle}</Text>
          </View>
          <View style={[{flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-end'}]}>
            <Icon name='chevron-right' size={20} color={this.props.colorIcon} />
          </View>
        </TouchableOpacity>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    margin: 0
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fontBlack16Bold: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  fontGray12: {
    color: '#7A828E',
    fontSize: 12
  },
  isGinoraFontRegular: {
    fontFamily: 'ginora-regular',
    fontWeight: 'normal'
  },
  isGinoraFontBold: {
    fontFamily: 'ginora-regular',
    fontWeight: 'bold'
  },
})
