import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from 'app/src/pages/styles'
import Panel from 'app/src/components/panel'

export default class HealtyHeart extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>
          Plan de Alimentación HEALTHY HEART
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Identificamos tu área de oportunidad en cardiovascular. Esto significa que tienes predisposición a padecer
          enfermedades cardiacas y vasculares. Por ello, te queremos recomendar una dieta Healthy Heart, enfocada en cuidar tú
          corazón y vasos sanguíneos. En Healthy Heart pondremos especial interés en controlar el consumo de grasas y alimentos
          refinados.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ¡OJO CON LAS GRASAS DE ORIGEN ANIMAL!
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Disminuye al mínimo el consumo de carnes rojas, embutidos, vísceras y mariscos; son productos con alto contenido de
            grasas saturadas. Otros alimentos con alto contenido en grasas que también pueden dañar tú corazón y vasos
            sanguíneos son productos como: panadería dulce, repostería, comida frita,y lácteos o derivados con alto contenido en
            grasas (leche entera, quesos maduros, mantequilla). Puedes consumir yogurt y quesos deslactosados y reducidos en
            grasa.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ¡ADELANTE CON EL CONSUMO DE GRASAS SALUDABLES!
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Las grasas saludables contribuyen a funciones esenciales como el desarrollo del sistema nervioso central y la protección
            de órganos. Son indispensables como precursores de hormonas y transportadores de las vitaminas liposolubles A, D, E y
            K. Se asocian a la reducción del colesterol malo (LDL) y a aumentar el colesterol bueno (HDL). Además, son una fuente
            fundamental de energía para el organismo.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Incluye a tu alimentación aceites vegetales crudos (oliva extra virgen, aguacate, linaza, semilla de uva), salmón salvaje,
            sardinas, aguacate y nueces.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            VITAMINA E
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Las grasas saludables contienen otro nutrimento importante para proteger tu sistema cardiovascular: vitamina
            E. Su principal función es proteger la membrana de las células. Es mejor consumirla a través de los alimentos, ya
            que, si se toma únicamente en cápsulas, el organismo no será capaz de absorberla de forma eficiente.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Te sugerimos consumir alimentos ricos en vitamina E como lo son: espinaca, brócoli, semillas de girasol,
            almendras, piñones, nueces de Brasil, salmón salvaje, albaricoques deshidratados, cereales integrales.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            OMEGA 3
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            ¡No todas las grasas son dañinas! algunos ácidos grasos como los denominados Omega 3 son benéficos para el
            corazón. Los puedes consumir a través de pescados como el salmón, sardina y bacalao, o a través de semillas
            como la chía.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          AGREGA ANTIOXIDANTES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            ¡Incrementa tú consumo de antioxidantes! La ciencia sugiere que el consumo de antioxidantes retrasa el proceso de
            oxidación de las grasas en el organismo, muy perjudicial para los vasos sanguíneos. Alimentos como el cacao, té verde,
            té rojo, cúrcuma, vino tinto (con moderación), frutas y verduras moradas (açai, uvas, moras, zarzamoras, cebolla
            morada, col, betabel) y rojas (granada, fresas, frambuesa, arándanos, rábanos, jitomate) son excelente fuente de
            antioxidantes.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Las vitaminas E y C, además de tener propiedades antioxidantes, contribuyen a prevenir el desarrollo de enfermedades
            cardiovasculares y controlar la concentración de colesterol en sangre.
            Aumenta el consumo de kiwi, fresas, naranja, limón, guayaba, pimiento rojo, jitomate, fresa, grosella, perejil, col de
            bruselas, brócoli.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          MÁS DE ESTOS ALIMENTOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Se recomienda aumentar el consumo de:
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Leguminosas ya que al ser una proteína de excelente calidad con poca grasa favorecen a controlar los niveles de
            colesterol en sangre. Hervidas o cocidas al vapor. No fritas.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Vegetales y hojas verdes frescos por su alto contenido en fibra, vitaminas y minerales.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Granos integrales su contenido rico en fibra ayuda al cuerpo a reducir la absorción de grasas.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            ¡Cuidado! la comida de restaurante tiene muchas calorías, sodio y grasas poco saludables. Elige comida casera y si vas a
            un restaurante es preferible pedir ensalada y proteína magra a la plancha. Otros métodos de cocción, generalmente
            incluyen manteca o margarina para potencializar el sabor de los alimentos, evita estos platillos.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            A pesar de que las frutas y las verduras son muy benéficas para tu corazón, evita consumirlas en las siguientes
            presentaciones:
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Verduras con salsas cremosas
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Verduras fritas o rebozadas
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Frutas enlatadas y conservadas en jarabe
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Frutas congeladas con azúcar agregada
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Disminuye al máximo el consumo de bebidas alcohólicas en especial los digestivos, bebidas con jarabes o altas en azúcar.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PORCIONES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            La cantidad de lo que comes, es tan importante como la calidad y el equilibrio de los alimentos.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Come porciones más grandes de alimentos bajos en calorías y de buena calidad nutrimental, como verduras y frutas;
            come porciones más pequeñas de alimentos con alto contenido de calorías y de sodio, como las comidas rápidas,
            refinadas o procesadas.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Para controlar el tamaño de tus porciones te mostramos Alchemy Plate, una herramienta en donde podrás crear tu
            propio plato de acuerdo al porcentaje recomendado de cada grupo de alimentos.
          </Text>
        </Panel>

      </View>
    )
  }
}
