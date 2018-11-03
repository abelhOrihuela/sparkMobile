import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Collapsible from  'app/src/components/collapsible'
import Page from  'app/src/components/page'
import VideoContainer from '../components/video'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: () => (
      <Icon name='home' size={20} color='#000' />
    ),

    drawerLabel: () => {
      return 'Home'
    }
  }

  render () {
    let url = 'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761'
    // let url = 'https://www.google.com/'
    let title = <Text style={{color: 'white'}}>Titulo</Text>
    return (
      <Page>
        <Collapsible
          title={title}
          styleContainerTitle={{backgroundColor: '#E65100'}}
          colorIcon='white'>
          <Text>
            Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y archivos de texto. Lorem Ipsum ha sido el texto
            de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta)
            desconocido usó una galería de textos y
            los mezcló de tal manera que logró hacer un libro de textos
            especimen
          </Text>
        </Collapsible>
        <VideoContainer url={url} style={{marginTop: 10}}/>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
