import React, { Component } from 'react'
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions, StackActions } from 'react-navigation'
import header from 'app/src/nutricion-fondo.jpg'
import ejercicioBg from 'app/src/ejercicio-fondo.jpg'

import bgTipsExercise from 'app/src/images/bg-tips-exercise.png'
import icon from 'app/src/iconDna.png'
import iconExercise from 'app/src/icon-exercise.png'
import iconExerciseRun from 'app/src/icon-exercise-run.png'
import iconMyPlate from 'app/src/iconMyPlate.png'
import Panel from 'app/src/components/panel'
import CardItemSection from 'app/src/components/card-item-section'
import CardTips from 'app/src/components/card-tips'
import Page from 'app/src/components/page'
let height = 215
import { Card } from 'react-native-elements'

import styles from 'app/src/pages/styles'
class Intestinal extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Exercise',
      drawerIcon: () => (
        <Icon name='file' size={20} color='#FFFFFF' />
      ),

      drawerLabel: () => {
        return 'Exercise'
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
      <Page style={{flex: 1}}>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Cuando se dice la frase “somos lo que comemos”, podemos agregar y “lo que comen los trillones de bacterias que viven
          en el cuerpo”. Una adecuada nutrición, también alimenta a todos los microorganismos que viven en nosotros.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Lo que ingerimos impacta la composición y la diversidad de las bacterias que no solo nos habitan, sino también ayudan a
          mantenernos saludables. Por esto, es muy importante darle prioridad a los alimentos que las nutren, fortalecen y
          aumentan su población.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Por ejemplo, una alimentación procesada, con harinas y azúcares refinados y poca fibra puede desequilibrar
          drásticamente tu microbiota y afectar tu salud.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Las investigaciones demuestran que la grasa y el azúcar fomentan el crecimiento de las bacterias malas, en
          consecuencia, aumenta su prevalencia provocando enfermedades. Asimismo, algunos estudios sugieren que las dietas
          con alto contenido de proteínas de origen animal están relacionadas con una formación desfavorable de bacterias.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Para fomentar una microbiota intestinal saludable, es importante limitar el consumo tanto de alimentos procesados,
          dado que generalmente poseen un alto contenido de azúcares y de grasas. Por otro lado, la ingesta excesiva de bebidas
          alcohólicas también repercute sobre la salud la flora intestinal.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Junto con la alimentación, el otro factor que afecta la salud de tu microbiota es el consumo de medicamentos.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Muchos de los medicamentos, incluidos los antibióticos, esteroides, antiinflamatorios, anticonceptivos, laxantes y
          antiácidos afectan el equilibrio de las bacterias. Con buenos hábitos, este, se puede volver a restablecer; sin embargo,
          es recomendable reducir el consumo de estos fármacos al máximo y que únicamente se tomen cuando el doctor lo
          considere indispensable.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Después de un tratamiento con antibióticos es necesaria una suplementación adecuada de probióticos (ver a
          continuación). Todo dependiendo del estado en el que se encuentre tu microbiota intestinal.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Hay 4 tipos de alimentos que ayudan a que las bacterias buenas proliferen.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          1.- Alimentos fermentados
          Son productos que se transformaron debido a la acción de los microorganismos. Entre los que se encuentran el yogurt
          de búlgaros, la kombucha de hongo manchuriano, el agua de tíbicos, el sauerkraut de col, el kimchi de col, el vinagre de
          manzana de piloncillo, el pozol de cacao y maíz, el cacao fermentado con Acetobacter y café con bacterias de mucílago.
          Todos estos productos fueron creados a partir de la fermentación por medio de bacterias y levaduras, pero solo algunos
          contienen los microorganismos vivos que ayudarán a colonizar la microbiota.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Desafortunadamente los productos fermentados que después pasaron por un proceso de pasteurización ya no
          contienen microorganismos, debido a que no sobreviven las altas temperaturas del proceso.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          2.- Prebióticos
          Prebióticos – son sustancias metabolizadas por las bacterias. Inulina, fructooligosacáridos (FOS) y galacto-
          oligosacáridos (GOS), entre otros.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          GOS - son polvos derivados de la lactosa que alimentan a las bacterias que apoyan el fortalecimiento del sistema
          inmune, mejoran la absorción del calcio y contrarrestan los procesos inflamatorios. Los GOS se encuentran en la leche
          materna y en suplementos.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          FOS – es fibra soluble que contiene fructosa y se encuentra en una gran variedad de plantas y frutas como la cebolla, ajo,
          espárrago, alcachofa, jitomate, alfalfa, plátano, entre otros.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La mayoría de las bacterias del colon utilizan hidratos de carbono como fuente de energía para reproducirse.
          Especialmente abundante es el género Bifidobacterium, que constituye aproximadamente el 25% de la población
          bacteriana del adulto, y se alimenta principalmente de la fibra que contiene fructosa.
          Inulina – es un oligosacárido natural. Es un hidrato de carbono con fibra clasificado como almidón. Ya que no es
          absorbida por el tracto intestinal, llega al intestino grueso donde las bacterias la utilizan para alimentarse y reproducirse,
          apoyando así, los procesos de absorción de nutrimentos. Se encuentra en verduras, frutas y hierbas. Alimentos con
          inulina: papa, espárragos, cebolla, plátano, ajo y trigo, cebada y centeno integral. En México se encuentra la inulina de
          agave en polvo.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Otros alimentos prebióticos son la cerveza artesanal, la miel de abeja cruda y la miel maple natural.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          3.- Probióticos
          Se encuentran como suplementos alimenticios o en la comida que contienen bacterias buenas. Los probióticos
          pueden ser de origen bacteriano y de levadura.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Los bacterianos forman parte la flora bacteriana intestinal y se les ha denominado flora bacteriana transitoria, ya que
          permanecen en el intestino por poco tiempo, multiplicándose sin colonizar.
          El otro tipo de flora bacteriana se denomina residente, es el tipo de microorganismos que han vivido desde la
          implantación inicial de la biota bacteriana, esto ocurre a partir de las cuatro primeras semanas de vida y predomina en el
          intestino.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Los probióticos pueden atravesar el aparato digestivo y recuperarse vivos en los excrementos, pero también se adhieren
          a la mucosa intestinal.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Se encuentran en alimentos fermentados que contienen bacterias como parte de su composición alimenticia.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Miso
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Queso, Yogurt (especialmente hecho con búlgaros). Jocoque.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Kefir
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Sauerkraut
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Pepinillos
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Cacao
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Tofu
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Tempeh – soya fermentada
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Micro algas
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Kimchi – conserva de col y verduras
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Kombucha
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          También se pueden adquirir en forma de suplementos en cápsulas, píldoras o polvos
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          3.- Postbióticos
          Son los metabolitos que las bacterias producen. Estos microorganismos sintetizan multitud de compuestos en los
          procesos de transformación de los alimentos en energía. Se han identificado más de 800 compuestos bioquímicos
          producidos por los microorganismos e investigaciones recientes indican que se puede influir en la producción de
          metabolitos a través de los alimentos que ingerimos. Por ejemplo, existen metabolitos postbióticos que ayudan al
          cuerpo a procesar las grasas, por lo tanto, a apoyar los esfuerzos para contrarrestar el sobrepeso y la obesidad.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          También el consumo de alimentos ricos en omega 3 tales como la semilla de linaza, frutas, verduras, frutos secos, avena
          y leguminosas, estimulan la producción de postbióticos.
        </Text>
      </Page>
    )
  }
}

export default Intestinal
