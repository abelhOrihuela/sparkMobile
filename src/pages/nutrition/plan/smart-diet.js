import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from 'app/src/pages/styles'
import Panel from 'app/src/components/panel'

export default class SmartDiet extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>Plan de Alimentación SMART DIET</Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La Smart Diet es perfecta para impulsar el bienestar de personas sanas y sin ninguna enfermedad o condición especial, ¡cómo tú!
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Este tipo de alimentación es equilibrada, variada y contiene una elevada dosis de antioxidantes.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PRODUCTOS NATURALES Y FRESCOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Cuida la calidad de los productos que eliges: inclínate por comprar y consumir alimentos naturales, frescos, sin aditivos
            ni conservadores; evita comer o tomar productos procesados y con ingredientes refinados como azúcar, edulcorantes,
            harinas.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          CUIDADO CON AZÚCAR DE MALA CALIDAD
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Evita o disminuye al mínimo el consumo de azúcar blanca (azúcar de caña en general), y todos los productos que
            contengan jarabe de alta fructuosa y jarabe de maíz. Así como los endulcorantes artificiales. Es mejor endulzar con poca
            cantidad de miel de abeja cruda, miel de agave orgánica, azúcar de coco y stevia natural.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Disminuye el consumo de frutas altas en contenido de azúcar (plátano, mango, mamey, etc.) y de jugos industrializados
            o naturales ya que estas bebidas tienen una gran cantidad de azúcar y no contienen fibra. Al mismo tiempo, haz lo
            posible por no comer cereales y harinas refinados como arroz blanco, pan de caja blanco, pastas, cereales
            industrializados.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ALTA EN ANTIOXIDANTES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Es importante agregar antioxidantes a tu alimentación diaria como el cacao, té verde, té rojo, cúrcuma, vino tinto con
            moderación, frutas y verduras moradas (acai, uvas, moras, zarzamoras, cebolla morada, col, betabel) y rojas (granada,
            fresas, frambuesa, arándanos, rábanos, jitomate).
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            La vitamina E y C son excelentes antioxidantes. Aumenta el consumo de kiwi, fresas, naranja, limón, guayaba, pimiento
            rojo, jitomate, fresa, grosella, perejil, col de bruselas, brócoli y cereales integrales.
          </Text>
        </Panel>

        <Panel
          style={[styles.isMarginSmall]}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          EQUILIBRADA Y VARIADA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            Una dieta saludable debe de ser equilibrada, adecuada a tus características personales y estilo de vida. Te
            recomendamos que elijas cereales integrales, alimentos altos en fibra, variedad de leguminosas, proteína animal magra -
            sin hormonas añadidas y de libre pastoreo-, huevo orgánico, frutas y vegetales de diversos colores, una gran cantidad de
            hojas verdes y grasas de buena calidad como las nueces y las semillas. También puedes agregar a tu alimentación
            germinados, brotes y algas ya que contienen una alta fuente de vitaminas y minerales.
          </Text>
          <Text style={styles.isGinoraFontRegular}>
            Lo ideal es variar y rotar los productos que consumes para tener una mayor gama de vitaminas, minerales, fibra,
            antioxidantes, en tu cuerpo. Y para que no desarrolles ninguna sensibilidad alimentaria.
          </Text>
        </Panel>

        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Tu alimentación tiene que proveer la energía necesaria para que tu cuerpo funcione adecuadamente y para que cumplas
          con todas las actividades que te propongas. Pero sumamente importante, no olvides que debes disfrutar lo que comes y
          que se adapte a tu estilo de vida, así podrás seguir tu dieta fácilmente.
        </Text>

        <Panel
          style={[styles.isMarginSmall]}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PORCIONES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={styles.isGinoraFontRegular}>
            La cantidad de lo que comes, es tan importante como la calidad y el equilibrio de tus alimentos.
            Para controlar el tamaño de tus porciones, te mostramos el Alchemy Plate. En él podrás crear tu propio plato de
            acuerdo con el porcentaje recomendado de cada grupo de alimentos.
          </Text>
        </Panel>

      </View>
    )
  }
}
