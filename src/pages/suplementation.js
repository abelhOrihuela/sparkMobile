import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/icon-exercise.png'
import iconSuplementation from 'app/src/icon-suplementacion.png'
import iconIntestinal from 'app/src/icon-salud-intestinal.png'
import iconHealthSuplementation from 'app/src/icon-salud-suplementación.png'
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
        <View style={[{ height: height, backgroundColor: '#1E1B5D'}, styles.isOverlay, styles.isOpacity50]} />
        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, stylesNutrition.title]}>SALUD PREVENTIVA</Text>
          <Panel
            title={title}
            style={styles.isMarginSmallTopBottom}
            styleContainerTitle={{backgroundColor: '#6865A1'}}
            borderColor='#6865A1'
            colorIcon='#FFFFFF'>
            <Text>
              Recordemos que tus hábitos de vida pueden modificar la expresión de tus genes, regular el equilibrio de tu microbiota y cambiar las proporciones de tu química sanguínea. De igual forma, tus hábitos reflejan decisiones que has tomado en diferentes etapas y que están impactando tu salud actual y la de tu futuro. Los take actions de hábitos saludables están basados en todos los resultados de los estudios y cuestionario que te pedimos. Te presentamos notas y recomendaciones hechas en función de aspectos clave para tu salud integral: calidad de sueño, relajación, hidratación, niveles de energía, manejo de estrés, estado anímico, técnicas de cocina… Tenemos la intención de que a partir de estos take actions puedas sumarle a tu vida un significado de bienestar basado en el conocimiento de tu bio-individualidad y en las necesidades metabólicas que todo ser humano experimenta.
            </Text>
          </Panel>


          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconHealthSuplementation}
            title='Actividades y estudios'
            colorIcon='#1E1B5D'
            subtitle='Recomendados para tu factor de riesgo'
            to='PlanAlimentation' />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconSuplementation}
            title='Suplementación'
            subtitle='Lo que te hace bien el tu día a día.'
            colorIcon='#1E1B5D'
            to='AlchemyPlate' />

        <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconIntestinal}
            title='Salud intestinal'
            subtitle='Lo que te hace bien el tu día a día.'
            colorIcon='#1E1B5D'
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
export default Suplementation
