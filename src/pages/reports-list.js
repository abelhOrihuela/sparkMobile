import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TouchableHighlight, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import reportesBg from '../reportes-fondo.jpg'
import myNewMeBg from '../my-new-me-fondo.jpg'
import api from '../core/api'

const {height, width} = Dimensions.get('window')

class Reports extends Component {
    static navigationOptions = {
      title: 'Reports',
      drawerIcon: () => (
        <Icon name='bell' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'Reports'
      },
    }

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            modalVisible: false,
            reports: []
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
        let body = await api.get('/customers/reports')
        this.setState({
          reports: body.data.data
        })
      } catch (e) {
        alert('Error' + e.message)
      }
    }

    showDetail (e, item) {
        // this.props.navigation.push('NotificationDetail')
        this.setState({
          modalVisible: !this.state.modalVisible
        })
    }

    goToReportDetail (report) {
        this.props.navigation.navigate('ReportDetail', {report})
    }

    render () {
        let { notifications, reports } = this.state

        let dnaReport = reports.find(l => l.type === 'dna')
        let bloodReport = reports.find(l => l.type === 'blood')
        let sensiblitiesReport = reports.find(l => l.type === 'sensibilities')
        let microbiomaReport = reports.find(l => l.type === 'microbioma')

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
                  <Icon name='plus' size={20} color='#FFFFFF' />
                </View>
              </View>

              <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 10}}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        dnaReport && (<TouchableOpacity style={
                                {flex: 2,
                                 height: 150,
                                 backgroundColor: 'white',
                                 marginRight: 5,
                                 marginBottom: 5}
                             }
                             onPress={() => this.goToReportDetail(dnaReport)}>
                            <ImageBackground
                              style={[StyleSheet.absoluteFill]}
                              source={reportesBg}
                            />
                        </TouchableOpacity>)
                    }

                    {
                        bloodReport && (<TouchableOpacity style={
                            {flex: 2,
                             height: 150,
                             backgroundColor: 'white',
                             marginLeft: 5,
                             marginBottom: 5}}
                             onPress={() => this.goToReportDetail(bloodReport)}>
                            <ImageBackground
                              style={[StyleSheet.absoluteFill]}
                              source={reportesBg}
                            />
                        </TouchableOpacity>)
                    }
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        sensiblitiesReport && (<TouchableOpacity style={
                                {flex: 2,
                                 height: 150,
                                 backgroundColor: 'white',
                                 marginRight: microbiomaReport ? 5 : 0,
                                 marginBottom: 5}
                             }
                             onPress={() => this.goToReportDetail(sensiblitiesReport)}>
                            <ImageBackground
                              style={[StyleSheet.absoluteFill]}
                              source={reportesBg}
                            />
                        </TouchableOpacity>)
                    }

                    {
                        microbiomaReport && (<TouchableOpacity style={
                            {flex: 2,
                             height: 150,
                             backgroundColor: 'white',
                             marginLeft: sensiblitiesReport ? 5 : 0,
                             marginBottom: 5}}
                             onPress={() => this.goToReportDetail(microbiomaReport)}>
                            <ImageBackground
                              style={[StyleSheet.absoluteFill]}
                              source={reportesBg}
                            />
                        </TouchableOpacity>)
                    }
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
