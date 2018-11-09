import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/iconFish.png'
import iconMyPlate from 'app/src/iconMyPlate.png'
import Collapsible from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Nutrition extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Nutrition',
      drawerIcon: () => (
        <Icon name='power-off' size={20} color='#FFFFFF' />
      ),
      drawerLabel: () => {
        return 'Nutrition'
      },
      headerLeft: (<Icon name={'arrow-left'} size={20} color='#2771A2' onPress={ () => {
        navigation.goBack()
        }} />)
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
      <ScrollView style={{flex: 1}}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={header} />
        <View style={stylesNutrition.nutritionOverlay} />
        <Page>
          <Text style={[styles.textCentered, styles.fontWhite18, stylesNutrition.title]}>NUTRICIÓN</Text>
          <Collapsible
            title={title}
            styleContainerTitle={{backgroundColor: '#B9163B'}}
            colorIcon='#FFFFFF'>
            <Text>Para conservar o alcanzar un estado óptimo de salud, es indispensable que tu alimentación cumpla con ciertos requerimientos generales, entre los que destacan: incluir todos los macronutrimentos (hidratos de carbono, proteína, grasas) y micronutrimentos (minerales y vitaminas); ser variada y balanceada en cuanto a tipos de alimentos; contar con una adecuada densidad nutricional, y de preferencia, que predominen los alimentos no procesados y de buena calidad. También es importante que comas de acuerdo a tus gustos y bioindividualidad, que considera: tu sexo, etapa de vida, características fisiológicas y creencias personales. Los requerimientos deben adaptarse a situaciones especiales de salud o enfermedad, predisposición genética, perfil de microbiota y sensibilidades alimentarias. Para que puedas alcanzar tu máximo potencial energético, físico y mental, debemos conocer cuáles son las áreas de oportunidad que pueden optimizar tu bienestar. Los take action de alimentación están basados en los factores de riesgo que desciframos y determinamos de acuerdo a la integración de tus análisis. Recuerda que una nutrición adecuada ayudará a mejorar tu estado de salud actual y reducir el riesgo a desarrollar enfermedades. placer y aporta vitalidad.
            </Text>
          </Collapsible>


          <CardItemSection
            style={[stylesNutrition.margin, {marginTop: 30}]}
            {...this.props}
            icon={iconFish}
            title='Plan de alimentación'
            subtitle='Tu salud, en tus manos.'
            to='PlanAlimentation' />

          <CardItemSection
            style={stylesNutrition.margin}
            {...this.props}
            icon={iconFish}
            title='ALCHEMYPLATE'
            subtitle='Crea tus comidas.'
            to='AlchemyPlate' />

          <CardTips
            style={stylesNutrition.margin}
            {...this.props}
            img={header}
            to='TipsNutrition' />

        </Page>
      </ScrollView>
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
  nutritionOverlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#911E38',
    height: height
  },
  nutritionOverlayFooter: {
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
    marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10
  }
})
export default Nutrition
