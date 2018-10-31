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




    //
    // <TouchableOpacity style={[styles.sectionRow, {height: 150}]} onPress={() => this.goToMynewMe()}>
    //   <ImageBackground
    //     style={[StyleSheet.absoluteFill, {
    //       flex: 1,
    //       position: 'absolute',
    //       width: '100%',
    //       height: '100%',
    //       justifyContent: 'center',
    //       backgroundColor: 'gray'
    //     }]}
    //     source={myNewMeBg}
    //   >
    //   <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
    //     <View style={{flex: 1}}>
    //       <Image source={mynewmeIcon} style={{width: '100%', height: '100%'}} />
    //     </View>
    //     <View style={{flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
    //       <Text
    //         style={{
    //           backgroundColor: 'transparent',
    //           textAlign: 'center',
    //           fontSize: 20,
    //           color: 'white'
    //         }}
    //       >
    //         Reportes
    //       </Text>
    //       <Text
    //         style={{
    //           backgroundColor: 'transparent',
    //           textAlign: 'center',
    //           fontSize: 10,
    //           elevation: 1
    //         }}
    //       >
    //         4 reportes disponibles
    //       </Text>
    //     </View>
    //   </View>
    //   <View style={[styles.overlay, { height: 150}]} />
    //   </ImageBackground>
    //
    // </TouchableOpacity>
