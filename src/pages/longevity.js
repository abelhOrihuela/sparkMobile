import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/icon-exercise.png'
import iconLongevity from 'app/src/icon-suplementacion.png'
import iconIntestinal from 'app/src/icon-salud-intestinal.png'
import iconHealthLongevity from 'app/src/icon-salud-suplementación.png'
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
      <Text style={styles.fontWhite18}>¿Qué encontrarás?</Text>
    </View>)
    return (
      <Page style={[styles.isPaddingless]}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={header} />
        <View style={[{ height: height, backgroundColor: '#715200'}, styles.isOverlay, styles.isOpacity50]} />
        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, stylesNutrition.title]}>LONGEVIDAD</Text>
          <Panel
            title={title}
            style={styles.isMarginSmallTopBottom}
            styleContainerTitle={{backgroundColor: '#A78220'}}
            borderColor='#A78220'
            colorIcon='#FFFFFF'>
            <Text>
              La Organización Mundial de la Salud (OMS) define al envejecimiento saludable como la capacidad de hacer, durante el mayor tiempo posible, las cosas que disfrutamos. El concepto de vejez saludable incluye tres componentes principales: baja probabilidad de padecer enfermedades, elevada capacidad funcional física y cognitiva y mantener una vida activa en la sociedad.” Es importante considerar que nuestros hábitos actuales influyen en la manera en la que vivimos nuestras últimas décadas de vida. Es por eso que conocer nuestro código genético puede darnos información relevante para tomar decisiones preventivas a favor de nuestra salud. En ALCHEMYCODE medimos las variantes genéticas vinculadas a envejecimiento y longevidad. Tener una vejez sana después de los 75 años está directamente relacionada con el tamaño en los telómeros (extremos de los cromosomas) y la capacidad antioxidante de nuestras células.
            </Text>
          </Panel>


          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconHealthLongevity}
            title='Actividades y estudios'
            colorIcon='#A78220'
            subtitle='Recomendados para tu factor de riesgo'
            to='PlanAlimentation' />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconLongevity}
            title='Suplementación'
            subtitle='Lo que te hace bien el tu día a día.'
            colorIcon='#A78220'
            to='AlchemyPlate' />

        <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconIntestinal}
            title='Salud intestinal'
            subtitle='Lo que te hace bien el tu día a día.'
            colorIcon='#A78220'
            to='AlchemyPlate' />

          <CardTips
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            img={header}
            title='Tips de Salud Preventiva'
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
