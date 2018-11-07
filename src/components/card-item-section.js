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
    this.props.navigation.navigate(this.props.to)
  }
  render () {
    return (
      <Card containerStyle={[styles.card, this.props.style]}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.goToSection()}>
          <View style={[{flex: 2}, styles.flexColumn]}>
            <Image source={this.props.icon} style={{height: 80, width: 80}} />
          </View>
          <View style={[{flex: 3}, styles.flexColumn]}>
            <Text style={[styles.fontBlack16Bold]}>{this.props.title}</Text>
            <Text style={[styles.fontGray12]}>{this.props.subtitle}</Text>
          </View>
          <View style={[{flex: 1}, styles.flexColumn]}>
            <Icon name='angle-right' size={20} color='#911E38' />
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
    marginLeft: 0,
    marginRight: 0
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
  }
})
