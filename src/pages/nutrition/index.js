import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import bgTipsNutrition from 'app/src/bg-tips-nutrition.png'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/iconFish.png'
import iconMyPlate from 'app/src/iconMyPlate.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Nutrition extends Component {
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
      <Text style={[styles.fontWhite18, styles.isGinoraFontRegular]}>
        ¿Qué encontrarás?
      </Text>
    </View>)

    return (
      <Page style={[styles.isMarginless, styles.isPaddingless]}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={header} />
        <View style={[{ height: height, backgroundColor: '#911E38'}, styles.isOverlay, styles.isOpacity50]} />

        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, styles.isMarginDoubleTopBottom, styles.isGinoraFontBold]}>
            NUTRICIÓN
          </Text>
          <Panel
            title={title}
            style={styles.isMarginSmallTopBottom}
            styleContainerTitle={{backgroundColor: '#B9163B'}}
            borderColor='#B9163B'
            colorIcon='#FFFFFF'>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Para conservar o alcanzar un estado óptimo de salud, es indispensable que tu alimentación cumpla con ciertos
              requerimientos generales, entre los que destacan: incluir todos los macronutrimentos (hidratos de carbono, proteína,
              grasas) y micronutrimentos (minerales y vitaminas); ser variada y balanceada en cuanto a tipos de alimentos; contar con
              una adecuada densidad nutricional, y de preferencia, que predominen los alimentos no procesados y de buena calidad.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              También es importante que comas de acuerdo a tus propios gustos y a tu bioindividualidad, la cual contempla: tu sexo,
              etapa de vida, características fisiológicas y creencias personales. Los requerimientos deben adaptarse a situaciones
              especiales de salud o enfermedad, predisposición genética, perfil de microbiota y sensibilidades alimentarias. Para que
              puedas alcanzar tu máximo potencial energético, físico y mental.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Por lo anterior, los take action de alimentación están basados en el área de oportunidad que desciframos y
              determinamos de acuerdo a la integración de tus análisis.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Recuerda que una nutrición adecuada ayudará a mejorar tu estado de salud actual y reducir el riesgo a desarrollar
              enfermedades.
            </Text>
          </Panel>


          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconFish}
            title='Plan de alimentación'
            colorIcon='#911E38'
            subtitle='Nutrición personalizada.'
            to='PlanAlimentation' />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconMyPlate}
            title='ALCHEMYPLATE'
            colorIcon='#911E38'
            subtitle='Crea tus comidas.'
            to='AlchemyPlate' />

          <CardTips
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            img={bgTipsNutrition}
            params={{section: 'nutrition'}}
            title='Tips de nutrición'
            to='TipsSection' />

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
    marginTop: 10, marginBottom: 10
  }
})
export default Nutrition
