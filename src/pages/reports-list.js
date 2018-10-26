import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TouchableHighlight, FlatList, StyleSheet, Platform, Modal, Dimensions, ImageBackground, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import reportesBg from '../reportes-fondo.jpg'
import myNewMeBg from '../my-new-me-fondo.jpg'
import blood from '../Quimica.png'
import microbiome from '../Microbiota.png'
import dna from '../Genetica.png'
import iconDna from '../iconDna.png'
import iconBlood from '../iconBlood.png'
import iconMicrobiome from '../iconMicrobiome.png'
import iconSensibilities from '../iconSensibilities.png'
import sensibilities from '../Sensibilidades.png'
import api from '../core/api'
import Collapsible from '../components/collapsible'
import Panel from '../components/panel'

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

    renderItem = ({item, index}) => {
        let backgroundImage = blood
        let icon = iconBlood
        let title = ''
        if (item.type=== 'blood') {
            backgroundImage = blood
            icon = iconBlood
            title = 'Marcadores sanguíneos'
        } else if (item.type=== 'dna') {
            backgroundImage = dna
            icon = iconDna
            title = 'Genética'
        } else if (item.type=== 'sensibilities') {
            backgroundImage = sensibilities
            icon = iconSensibilities
            title = 'Sensibilidaes alimenticias'
        } else if (item.type=== 'microbiome') {
            backgroundImage = microbiome
            icon = iconMicrobiome
            title = 'Microbiota'
        }
        return (<TouchableOpacity
            style={{flex: 1, height: 150, backgroundColor: 'white', margin: 10}}
            onPress={() => this.goToReportDetail(item)}>
                <ImageBackground
                  style={[StyleSheet.absoluteFill]}
                  source={backgroundImage}
                />

                <View style={[styles[item.type +'Overlay'], { height: 200}]} />
                <View style={{flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    <Image source={icon} style={{height: 70, width: 60}}/>
                    <Text style={{color: 'white'}}>{title}</Text>
                </View>
            </TouchableOpacity>)
    }

    render () {
        let title = ( <Text style={{color: 'white'}}>
           ALCHE
         <Text style={{fontWeight: 'bold', color: 'white'}}>
           MY
         </Text>
           RESULTS
         </Text>)
      return ( <ScrollView style={styles.container}>
        <Panel title={title}>
          <Text>
              En su informe de nutrición aprenderá cómo sus variantes genéticas individuales
              pueden afectar su respuesta nutricional única y cómo tomar las decisiones correctas
              para usted. Tiempo difícil para mantener un peso saludable, incluso cuando nuestra
              motivación es alta (y el suministro de donas de oficina es bajo). Pero he aquí
              algunas buenas noticias: vivir en nuestras entrañas es un surtido de aliados:
              microbios que pueden ayudarnos a alcanzar un peso más saludable
          </Text>
        </Panel>
      </ScrollView>)
    }

    renders () {
        let { reports } = this.state

        let widthCard = (width / 2) -15

        let titleComposible  = (<View style={{flex: 3, flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Text style={{color: 'white'}}>
            ALCHE
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            MY
          </Text>
            RESULTS
          </Text>
        </View>)

        return (
            <View style={[{flex: 1}]}>
              <Collapsible
                  title={titleComposible}
                  iconColor=''>
                  <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', height: 200}}>
                      <Text>
                          En su informe de nutrición aprenderá cómo sus variantes genéticas individuales
                          pueden afectar su respuesta nutricional única y cómo tomar las decisiones correctas
                          para usted. Tiempo difícil para mantener un peso saludable, incluso cuando nuestra
                          motivación es alta (y el suministro de donas de oficina es bajo). Pero he aquí
                          algunas buenas noticias: vivir en nuestras entrañas es un surtido de aliados:
                          microbios que pueden ayudarnos a alcanzar un peso más saludable
                      </Text>
                  </View>
              </Collapsible>

              <FlatList
                  data={reports}
                  numColumns={2}
                  keyExtractor={(x, i) => i}
                  renderItem={this.renderItem}/>

            </View>
        )
    }
}


var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },

});

// const styles = StyleSheet.create({
//     overlay: {
//         flex: 1,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         opacity: 0.75,
//         backgroundColor: '#16314E',
//         width: width
//     },
//     bloodOverlay: {
//         flex: 1,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         opacity: 0.75,
//         backgroundColor: '#64948A',
//         width: width
//     },
//     dnaOverlay: {
//         flex: 1,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         opacity: 0.75,
//         backgroundColor: '#0070A8',
//         width: width
//     },
//     sensibilitiesOverlay: {
//         flex: 1,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         opacity: 0.75,
//         backgroundColor: '#696E85',
//         width: width
//     },
//     microbiomeOverlay: {
//         flex: 1,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         opacity: 0.75,
//         backgroundColor: '#009AA7',
//         width: width
//     }
// })

export default Reports
