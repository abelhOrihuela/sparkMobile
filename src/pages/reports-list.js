import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TouchableHighlight, FlatList, StyleSheet, Platform, Modal, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
const {height, width} = Dimensions.get('window')

class Reports extends Component {
    static navigationOptions = {
      title: 'Reports',
      drawerIcon: () => (
        <Icon name='bell' size={20} color='#2771A2' />
      ),

      drawerLabel: () => {
        return 'Reports'
      },
    }

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            modalVisible: false
        }
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible})
    }

    componentWillMount () {
        this.loadReports()
    }

    async loadReports () {
        try {
            const body = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setState({
                notifications: body.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    showDetail (e, item) {
        // this.props.navigation.push('NotificationDetail')
        this.setState({
          modalVisible: !this.state.modalVisible
        })
    }

    render () {
        let { notifications } = this.state
        let widthCard = (width / 2) -15
        return (
          <View style={{flex: 1}}>
            <View style={[{margin: 10, flex: 1}]}>
              <View style={{flexDirection: 'row', backgroundColor: '#2771A2', padding: 10}}>
                <View style={{flex: 3, flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Text style={{color: 'white'}}>
                    ALCHE
                  </Text>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    MY
                  </Text>
                  <Text style={{color: 'white'}}>
                    RESULTS
                  </Text>
                </View>
                <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                  <Icon name='plus' size={20} color='white' />
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <View style={{backgroundColor: 'red', flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{flex: 2, height: 150, backgroundColor: 'yellow'}}>
                  </View>
                  <View style={{flex: 2, height: 150, backgroundColor: 'blue'}}>
                  </View>
                </View>
                <View style={{backgroundColor: 'red', flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{flex: 2, height: 150, backgroundColor: 'yellow'}}>
                  </View>
                  <View style={{flex: 2, height: 150, backgroundColor: 'blue'}}>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        opacity: 0.5
    },
    content: {
        flex: 10
    },
    list: {
        backgroundColor: '#FFF'
    }
})

export default Reports
