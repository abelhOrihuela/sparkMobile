import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default (props) => <View style={[styles.isFlex1]}>
  <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14, props.style]}>
    {props.children}
  </Text>
</View>

const styles = StyleSheet.create({
  isFlex1: {
    flex: 1
  },
  isMarginSmall: {
    margin: 10
  },
  isGinoraFontRegular: {
    fontFamily: 'ginora-regular',
    fontWeight: 'normal'
  },
  fontBlack14: {
    color: '#000000',
    fontSize: 14
  }
})
