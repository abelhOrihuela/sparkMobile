import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/images/longevidad-tips.png'
import headerLongevidad from 'app/src/images/longevidad-fondo.jpg'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/icon-exercise.png'
import iconIntestinal from 'app/src/icon-salud-intestinal.png'

import iconAntiaging from 'app/src/icon-antiaging.png'
import iconAntioxidants from 'app/src/icon-antioxidantes.png'

import iconMyPlate from 'app/src/iconMyPlate.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Longevity extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'MYNEWME',
      drawerIcon: () => (
        <Icon name='check' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'MYNEWME'
      },
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
      <Page style={[styles.isMarginless, styles.isPaddingless]}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={headerLongevidad} />
        <View style={[{ height: height, backgroundColor: '#715200'}, styles.isOverlay, styles.isOpacity50]} />
        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, styles.isMarginDoubleTopBottom, styles.isGinoraFontBold]}>
            LONGEVIDAD
          </Text>
          <Panel
            title={title}
            style={styles.isMarginSmallTopBottom}
            styleContainerTitle={{backgroundColor: '#A78220'}}
            borderColor='#A78220'
            colorIcon='#FFFFFF'>
            <Text>
              El envejecimiento es el resultado de alteraciones celulares debidas a la acumulación de radicales libres. Los radicales
              libres oxidan nuestras células y ocasionan daños que afectan a nuestros tejidos, en especial en la piel; pero también los
              órganos se ven afectados, originando algunas de las enfermedades crónicas que se asocian a la
              vejez. Los antioxidantes son sustancias químicas que ayudan a detener o limitar el daño causado por los radicales libres,
              protegiendo y en ocasiones contrarrestando algunos de los procesos de oxidación.
            </Text>
            <Text>
              Aunque envejecer es una consecuencia natural de los procesos fisiológicos del organismo, hoy en día los malos hábitos,
              la contaminación, la falta de densidad nutrimental en los alimentos que consumimos y el estrés, están acelerando este
              proceso.
            </Text>
          </Panel>

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconAntioxidants}
            title='Envejecimiento saludable'
            subtitle='Incrementa tu vitalidad.'
            colorIcon='#A78220'
            to='LongevityAntioxidants' />

          <CardTips
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            img={header}
            title='Tips de Longevidad'
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
export default Longevity
