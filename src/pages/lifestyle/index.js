import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import headerLifeStyle from 'app/src/estilodevida-fondo.jpg'
import icon from 'app/src/iconDna.png'
import iconFish from 'app/src/icon-exercise.png'
import iconLifestyle from 'app/src/icon-suplementacion.png'
import iconIntestinal from 'app/src/icon-salud-intestinal.png'
import iconHealthLifestyle from 'app/src/icon-salud-suplementacion.png'
import iconHidratation from 'app/src/icon-hidratacion.png'
import iconSueno from 'app/src/icon-sueno.png'
import iconRespiracion from 'app/src/icon-respiracion.png'
import iconEstres from 'app/src/icon-estres.png'
import iconBienestar from 'app/src/icon-bienestar.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Lifestyle extends Component {
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

  render() {
    let title = (<View>
      <Text style={[styles.fontWhite18, styles.isGinoraFontRegular]}>¿Qué encontrarás?</Text>
    </View>)
    return (
      <Page style={[styles.isPaddingless]}>
        <ImageBackground style={[StyleSheet.absoluteFill, {height: height}, styles.flexCenter]} source={headerLifeStyle} />
        <View style={[{ height: height, backgroundColor: '#535B06'}, styles.isOverlay, styles.isOpacity50]} />
        <View style={[styles.isMargin]}>
          <Text style={[styles.textCentered, styles.fontWhite18, styles.isMarginDoubleTopBottom, styles.isGinoraFontBold]}>
            HÁBITOS SALUDABLES
          </Text>
          <Panel
            title={title}
            style={styles.isMarginSmallTopBottom}
            styleContainerTitle={{backgroundColor: '#949B55'}}
            borderColor='#949B55'
            colorIcon='#FFFFFF'>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Recordemos que tus hábitos de vida pueden modificar la expresión de tus genes, regular el equilibrio de tu microbiota y
              cambiar las proporciones de tu química sanguínea. De igual forma, reflejan las decisiones que tomas en diferentes
              etapas y que impactan tu salud actual y la de tu futuro.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Te presentamos notas y recomendaciones hechas en función de aspectos clave para tu salud integral: calidad de sueño,
              relajación, hidratación, niveles de energía, manejo de estrés, estado anímico.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Esperamos que estos take actions te sean de gran utilidad para potencializar las distintas áreas de tu vida.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Tus hábitos de vida marcan la diferencia de cómo se van a expresar tus genes, tu microbioma y tu sangre.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              Si mantenemos un estilo de vida saludable podremos desarrollar un sistema inmunológico fuerte, equilibrar los niveles
              de azúcar y colesterol en la sangre, aumentar la masa muscular que protege nuestros huesos, incrementar la producción
              de endorfinas que nos mantienen alerta y de mejor humor, reducir el nivel de cortisol relacionado con el estrés, entre
              muchas cosas más.
            </Text>
            <Text style={[styles.isGinoraFontRegular, styles.isLineHeight18, styles.isMarginSmallTopBottom]}>
              De igual forma, si los hábitos no son saludables, se puede aumentar el riesgo de contraer enfermedades, sentirnos bajos
              de energía, tener obesidad y al mismo tiempo estar desnutridos.
              Por lo tanto, nuestros hábitos de vida son la clave para nuestro bienestar.
            </Text>
          </Panel>

          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconHidratation}
            title='Hidratación'
            colorIcon='#949B55'
            subtitle='Mantente hidratado.'
            to='LifestyleHidratation' />

          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconSueno}
            title='Sueño'
            colorIcon='#949B55'
            subtitle='Incrementa tu descanso.'
            to='LifestyleSleep' />

          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconRespiracion}
            title='Respiración'
            colorIcon='#949B55'
            subtitle='Oxigénate bien.'
            to='LifestyleBreathing' />

          <CardItemSection
            style={[styles.isMarginSmallTopBottom]}
            {...this.props}
            icon={iconEstres}
            title='Estrés'
            colorIcon='#949B55'
            subtitle='Una vida más tranquila.'
            to='LifestylePsychological' />

          <CardItemSection
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            icon={iconBienestar}
            title='Bienestar psicológico'
            subtitle='Para tu cuidado emocional.'
            colorIcon='#949B55'
            to='AlchemyPlate' />

          <CardTips
            style={styles.isMarginSmallTopBottom}
            {...this.props}
            img={header}
            title='Tips de hábitos saludables'
            to='TipsNutrition' />

        </View>
      </Page>
    )
  }
}

export default Lifestyle
