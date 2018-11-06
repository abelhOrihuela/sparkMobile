import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import icon from 'app/src/iconDna.png'
import Collapsible from 'app/src/components/panel'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Nutrition extends Component {
    static navigationOptions = {
        drawerIcon: () => (
            <Icon name='power-off' size={20} color='#FFFFFF' />
        ),

        drawerLabel: () => {
            return 'Nutrition'
        },
    }
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let title = (<View>
      <Text style={styles.fontWhite18}>¿Qué encontrarás?</Text>
    </View>)
    return (
      <ScrollView style={{flex: 1}}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height, justifyContent: 'center'}]} source={header} />
        <View style={stylesNutrition.nutritionOverlay} />
        <View style={styles.container}>
          <Text style={[{textAlign: 'center'}, styles.fontWhite18, stylesNutrition.title]}>NUTRICIÓN</Text>
          <Collapsible title={title} styleContainerTitle={{backgroundColor: '#B9163B'}} colorIcon='#FFFFFF'>
            <Text>Para conservar o alcanzar un estado óptimo de salud, es indispensable que tu alimentación cumpla con ciertos requerimientos generales, entre los que destacan: incluir todos los macronutrimentos (hidratos de carbono, proteína, grasas) y micronutrimentos (minerales y vitaminas); ser variada y balanceada en cuanto a tipos de alimentos; contar con una adecuada densidad nutricional, y de preferencia, que predominen los alimentos no procesados y de buena calidad. También es importante que comas de acuerdo a tus gustos y bioindividualidad, que considera: tu sexo, etapa de vida, características fisiológicas y creencias personales. Los requerimientos deben adaptarse a situaciones especiales de salud o enfermedad, predisposición genética, perfil de microbiota y sensibilidades alimentarias. Para que puedas alcanzar tu máximo potencial energético, físico y mental, debemos conocer cuáles son las áreas de oportunidad que pueden optimizar tu bienestar. Los take action de alimentación están basados en los factores de riesgo que desciframos y determinamos de acuerdo a la integración de tus análisis. Recuerda que una nutrición adecuada ayudará a mejorar tu estado de salud actual y reducir el riesgo a desarrollar enfermedades. placer y aporta vitalidad.
            </Text>
          </Collapsible>
          <View style={{top: 20, paddingBottom: 20}}>
            <Card containerStyle={stylesNutrition.card}>
              <View style={{flexDirection: 'row'}}>
                <View style={[{flex: 2}, stylesNutrition.flexColumn]}>
                  <Image source={icon} style={{height: 60, width: 60}}/>
                </View>
                <View style={[{flex: 3}, stylesNutrition.flexColumn]}>
                  <Text style={[styles.fontBlack16Bold]}>Plan de alimentación</Text>
                  <Text style={[styles.fontGray12]}>Tu salud, en tus manos.</Text>
                </View>
                <View style={[{flex: 1}, stylesNutrition.flexColumn]}>
                  <Icon name='angle-right' size={20} color='#911E38' />
                </View>
              </View>
            </Card>
            <Card containerStyle={stylesNutrition.card}>
              <View style={{flexDirection: 'row'}}>

                <View style={[{flex: 2}, stylesNutrition.flexColumn]}>
                  <Image source={icon} style={{height: 60, width: 60}}/>
                </View>
                <View style={[{flex: 3}, stylesNutrition.flexColumn]}>
                  <Text style={[styles.fontBlack16Bold]}>Plan de alimentación</Text>
                  <Text style={[styles.fontGray12]}>Tu salud, en tus manos.</Text>
                </View>
                <View style={[{flex: 1}, stylesNutrition.flexColumn]}>
                  <Icon name='angle-right' size={20} color='#911E38' />
                </View>
              </View>
            </Card>

          </View>
        </View>
      </ScrollView>
    );
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
    opacity: 0.5,
    backgroundColor: '#911E38',
    height: height,
    width: 500
  }
})
export default Nutrition
