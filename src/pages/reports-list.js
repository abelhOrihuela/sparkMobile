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
    this.setState({modalVisible: visible});
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
          <View style={[styles.sectionColumn, {margin: 10}]}>
            <View style={{backgroundColor: 'rgba(39, 113, 162, 1)', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
              <Text style={{color: 'white'}}>ALCHEMY RESULTS</Text>
              <TouchableOpacity>
                <Icon name='plus' size={20} color='white' />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: 10}}>
              <View style={{width: widthCard, height: widthCard, backgroundColor: 'powderblue', marginBottom: 10}} />
              <View style={{width: widthCard, height: widthCard, backgroundColor: 'skyblue', marginBottom: 10}} />
              <View style={{width: widthCard, height: widthCard, backgroundColor: 'yellow', marginBottom: 10}} />
              <View style={{width: widthCard, height: widthCard, backgroundColor: 'red', marginBottom: 10}} />
            </View>
            <View>
              <Text style={{color: 'white'}}>ALCHEMY RESULTS</Text>
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
