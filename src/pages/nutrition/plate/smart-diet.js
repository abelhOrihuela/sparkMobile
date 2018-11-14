import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'
import styles from 'app/src/pages/styles'
import Page from 'app/src/components/page'

import header from 'app/src/nutricion-fondo.jpg'

export default class SmartDiet extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <ImageBackground style={[{height: 85}, styles.flexCentered, styles.hasShadow1]} source={header}>
          <View style={[{ height: 85, backgroundColor: '#911E38'}, styles.isOverlay, styles.isOpacity50]} />
          <Text style={[styles.textCentered, styles.fontWhite20]}>
            <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text>
          </Text>
        </ImageBackground>

        <View style={[styles.isMarginSmall]}>
          <Text style={[styles.isMarginSmall, styles.isMarginlessBottom, styles.isLineHeight20, styles.isGinoraFontRegular, styles.fontBlack18Bold]}>
            ¿Qué es <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text>?
          </Text>

          <View style={[styles.isMarginSmall, styles.isMarginlessTop, { borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }]}>
            <Text style={[styles.doubleMarginTopBottom, styles.isLineHeight20, styles.fontGray16, styles.isGinoraFontRegular]}>
              Una herramienta que te sirve en el día a día.
            </Text>
          </View>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            En <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>CODE</Text> te queremos acompañar para que puedas aplicar las recomendaciones de manera fácil y práctica a tu vida diaria.
          </Text>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            Te presentamos un gráfico personalizado que, basándose en tu factor de riesgo más alto, te indica la distribución de nutrimentos (proteínas, hidratos de carbono y lípidos) ideal para tu dieta.
          </Text>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            Con <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text> y la lista de alimentos recomendados, ahora tienes muchas opciones para crear tus comidas diarias.
          </Text>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            Las listas de equivalencias están ordenadas de acuerdo a sus propiedades nutrimentales. De tal forma que los alimentos de una misma lista son equivalentes; es decir, puedes sustituirlos entre ellos. Sólo cambia la porción.
          </Text>

          <Text style={[styles.isMarginSmall, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            Los ingredientes de las listas fueron seleccionados por su calidad y variedad. Va a resultarte muy fácil probar cosas nuevas todos los días y con la alimentación que se te recomienda, lograr un estado óptimo de bienestar.
          </Text>
        </View>

        <View style={[styles.isMargin, { borderColor: '#911E38', borderWidth: 1 }]}>
          <View style={styles.flexCentered}>
            <Image style={[{ width: '100%', height: 200 }, styles.flexCentered]} resizeMode={'cover'} source={require('app/src/images/longevidad.png')} />
          </View>

          <Text style={[styles.isMargin, styles.isMarginlessBottom, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            De acuerdo a tus características personales, te recomendamos la alimentación <Text style={{ color: '#911E38' }}>Long Life</Text>. Este régimen alimenticio es ideal, tanto para mantener como para impulsar, el bienestar de personas sanas, fuertes y que tienen 50 años o más.
          </Text>

          <Text style={[styles.isMargin, styles.isLineHeight20, styles.isGinoraFontRegular]}>
            <Text style={{ color: '#911E38' }}>La dieta Long Life</Text> consta de los mismos principios de una alimentación saludable; no obstante, es importante tener en cuenta que toda etapa de la vida exige de requerimientos específicos. Por eso, aparte de recomendarte un régimen de comidas equilibrado y variado queremos enfatizar en la importancia de otro tipo de nutrimentos necesarios para tu edad.
          </Text>

          <Text style={[styles.isMargin, styles.isLineHeight20, styles.isGinoraFontRegular, styles.textCenter]}>
            El consumo de agua de acuerdo a tú peso deberá de ser de aproximadamente <Text style={styles.isBold}>XX litros al día</Text>.
          </Text>

          <View style={[styles.centered, styles.isMargin]}>
            <Image style={[{ width: 200, height: 230 }]} source={require('app/src/images/plate.png')} />
          </View>
        </View>
      </View>
    )
  }
}
