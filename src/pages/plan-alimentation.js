import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Page from 'app/src/components/page'
import styles from './styles'
import api from 'app/src/core/api'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class PlanAlimentation extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Nutrition',
      drawerIcon: () => (
        <Icon name='power-off' size={20} color='#FFFFFF' />
      ),
      drawerLabel: () => {
        return 'Nutrition'
      },
      headerLeft: (<TouchableOpacity style={{padding: 10}}onPress={ () => {
        navigation.goBack()
        }}>
        <Icon name={'arrow-left'} size={20} color='#2771A2' />
      </TouchableOpacity>)
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render () {
    let {items} = this.state
    return (
      <Page>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>Plan de Alimentación SMART DIET</Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>La Smart Diet es perfecta para impulsar el bienestar de personas sanas y sin ninguna enfermedad o condición especial, ¡cómo tú! </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>Este tipo de alimentación es equilibrada, variada y contiene una elevada dosis de antioxidantes.</Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>PRODUCTOS NATURALES Y FRESCOS.</Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Cuida la calidad de los productos que eliges: inclínate por comprar y consumir alimentos naturales, frescos, sin aditivos ni conservadores; evita comer o tomar productos procesados y con ingredientes refinados como azúcar, edulcorantes, harinas.
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14Bold]}>
          CUIDADO CON AZÚCAR DE MALA CALIDAD
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Evita o disminuye al mínimo el consumo de azúcar blanca (azúcar de caña en general), y todos los productos que contengan jarabe de alta fructuosa y jarabe de maíz. Así como los endulcorantes artificiales. Es mejor endulzar con poca cantidad de miel de abeja cruda, miel de agave orgánica, azúcar de coco y stevia natural.
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Disminuye el consumo de frutas altas en contenido de azúcar (plátano, mango, mamey, etc.) y de jugos industrializados o naturales ya que estas bebidas tienen una gran cantidad de azúcar y no contienen fibra. Al mismo tiempo, haz lo posible por no comer cereales y harinas refinados como arroz blanco, pan de caja blanco, pastas, cereales industrializados.
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14Bold]}>
          ALTA EN ANTIOXIDANTES
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Es importante agregar antioxidantes a tu alimentación diaria como el cacao, té verde, té rojo, cúrcuma, vino tinto con moderación, frutas y verduras moradas (acai, uvas, moras, zarzamoras, cebolla morada, col, betabel) y rojas (granada, fresas, frambuesa, arándanos, rábanos, jitomate).
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La vitamina E y C son excelentes antioxidantes. Aumenta el consumo de kiwi, fresas, naranja, limón, guayaba, pimiento rojo, jitomate, fresa, grosella, perejil, col de bruselas, brócoli y cereales integrales.
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14Bold]}>
          EQUILIBRADA Y VARIADA
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Una dieta saludable debe de ser equilibrada, adecuada a tus características personales y estilo de vida. Te recomendamos que elijas cereales integrales, alimentos altos en fibra, variedad de leguminosas, proteína animal magra -sin hormonas añadidas y de libre pastoreo-, huevo orgánico, frutas y vegetales de diversos colores, una gran cantidad de hojas verdes y grasas de buena calidad como las nueces y las semillas. También puedes agregar a tu alimentación germinados, brotes y algas ya que contienen una alta fuente de vitaminas y minerales.
Lo ideal es variar y rotar los productos que consumes para tener una mayor gama de vitaminas, minerales, fibra, antioxidantes, en tu cuerpo. Y para que no desarrolles ninguna sensibilidad alimentaria.
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Tu alimentación tiene que proveer la energía necesaria para que tu cuerpo funcione adecuadamente y para que cumplas con todas las actividades que te propongas. Pero sumamente importante, no olvides que debes disfrutar lo que comes y que se adapte a tu estilo de vida, así podrás seguir tu dieta fácilmente.
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14Bold]}>
          PORCIONES
        </Text>
        <Text style={[{margin: 10}, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La cantidad de lo que comes, es tan importante como la calidad y el equilibrio de tus alimentos.
Para controlar el tamaño de tus porciones, te mostramos el Alchemy Plate. En él podrás crear tu propio plato de acuerdo con el porcentaje recomendado de cada grupo de alimentos.
        </Text>
      </Page>
    )
  }
}

const stylesNutrition = StyleSheet.create({
  container: {
    flex: 1
  }
})
