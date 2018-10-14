/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


    const resizeMode = 'contain';

    // return (
    //   <View style={styles.sectionRow}>
    //     <ImageBackground
    //       style={[StyleSheet.absoluteFill, {
    //         flex: 1,
    //         position: 'absolute',
    //         width: '100%',
    //         height: 200,
    //         justifyContent: 'center',
    //         elevation: 1,
    //         backgroundColor: 'gray'
    //       }]}
    //       source={people}
    //     >
    //       <Text
    //         style={{
    //           backgroundColor: 'transparent',
    //           textAlign: 'center',
    //           fontSize: 30,
    //           padding: 40,
    //         }}
    //       >
    //         hooa
    //       </Text>
    //     </ImageBackground>
    //   </View>
    // );

    // return ( <View style={{
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'stretch',
    //   }}>
    //     <ScrollView>
    //       <View style={{height: 200, backgroundColor: 'powderblue',  marginTop: 10, marginLeft: 10, marginRight: 10}}>
    //         <Image
    //         style={{
    //           flex: 1,
    //           resizeMode
    //         }}
    //         source={people}
    //       />
    //       </View>
    //       <View style={{height: 200, backgroundColor: 'powderblue', marginTop: 10, marginLeft: 10, marginRight: 10}}>
    //         <Image
    //         style={{
    //           flex: 1,
    //           resizeMode
    //         }}
    //         source={people}
    //       />
    //       </View>
    //     </ScrollView>
    //   </View>)
