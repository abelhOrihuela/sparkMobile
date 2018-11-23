import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
// import header from 'app/src/nutricion-fondo.jpg'
import header from 'app/src/suplementacion-fondo.png'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/icon-exercise.png'
import iconSuplementation from 'app/src/icon-suplementacion.png'
import iconIntestinal from 'app/src/icon-salud-intestinal.png'
import iconActividades from 'app/src/icon-actividades.png'
import iconMyPlate from 'app/src/iconMyPlate.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Suplementation extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  goToSection (section) {
    this.props.navigation.navigate(section)
  }

  render() {
    let title = (<View>
      <Text style={[styles.fontWhite18, styles.isGinoraFontRegular]}>¿Qué encontrarás?</Text>
    </View>)
    return (
      <Page style={[styles.isPaddingless]}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={header} />
        <View style={[{ height: height, backgroundColor: '#1E1B5D'}, styles.isOverlay, styles.isOpacity50]} />
        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, styles.isMarginDoubleTopBottom, styles.isGinoraFontBold]}>
            SALUD Y SUPLEMENTACIÓN
          </Text>
          <Panel
            title={title}
            style={{marginBottom: 30}}
            styleContainerTitle={{backgroundColor: '#6865A1'}}
            borderColor='#6865A1'
            colorIcon='#FFFFFF'>
            <Text>
              De acuerdo con los resultados de tus distintos análisis y al área de oportunidad determinada, hay diversas acciones que
              puedes llevar a cabo para enriquecer las valoraciones que te hicimos. Por ejemplo, análisis de sangre específicos,
              revisiones médicas, terapias alternativas, suplementación, entre otras.
            </Text>
          </Panel>


          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconActividades}
            title='Actividades y estudios'
            colorIcon='#1E1B5D'
            subtitle='Recomendados para ti.'
            to='SuplementationActivities' />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconSuplementation}
            title='Suplementación'
            subtitle='Fortalece tu salud.'
            colorIcon='#1E1B5D'
            to='SuplementationDetail' />

        <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconIntestinal}
            title='Salud intestinal'
            subtitle='Cuida tu microbiota.'
            colorIcon='#1E1B5D'
            to='SuplementatioIntestinal' />


        <CardTips
          style={styles.isMarginSmallTopBottom}
          {...this.props}
          img={header}
          title='Tips de salud y suplementación'
          to='TipsNutrition' />
        </View>
      </Page>
    )
  }
}

const stylesNutrition = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    marginBottom: 40,
    marginTop: 40
  },
  card: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  isOverlays: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#DC6B18',
    height: height
  },
  isOverlayFooter: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#0D4E78',
    height: 150
  },
  margin: {
    marginTop: 10, marginBottom: 10
  }
})
export default Suplementation
