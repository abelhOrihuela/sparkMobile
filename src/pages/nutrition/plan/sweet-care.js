import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native'
import styles from 'app/src/pages/styles'

import header from 'app/src/nutricion-fondo.jpg'
import Panel from 'app/src/components/panel'

export default class SweetCare extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>
          Plan de Alimentación SWEET CARE
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Identificamos tu factor de riesgo en diabetes. Esto significa que a tu cuerpo le podría costar trabajo procesar
          adecuadamente la glucosa o “azúcar” en la sangre. Por ello, te proponemos una alimentación Sweet Care, enfocada en
          controlar los niveles de glucosa.
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La diabetes es una enfermedad que se caracteriza por mantener niveles altos de glucosa en la sangre. Conforme el nivel
          de glucosa en la sangre aumenta por consumo de alimentos altos en hidratos de carbono, el páncreas libera una
          hormona que se llama insulina.
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La insulina es necesaria para trasladar la glucosa del torrente sanguíneo al interior de las células, donde sirve como
          fuente de energía. En las personas con diabetes, el páncreas no produce suficiente insulina o el organismo no es capaz
          de utilizar adecuadamente la insulina que se produce. En ambos casos, aumentan los niveles de glucosa en sangre
          porque el azúcar no puede ingresar a las células de forma eficiente. Los niveles altos de glucosa van dañando órganos y
          tejidos, por lo que se consideran un factor de riesgo para múltiples enfermedades.
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La buena noticia es que los hábitos de vida y alimentación saludables contribuyen a mantener niveles estables de
          glucosa, ayudando al tratamiento o prevención de diabetes y otro tipo de enfermedades metabólicas.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          DIETA BAJA EN AZÚCAR
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Te recomendamos evitar el consumo de azúcar blanca (azúcar de caña en general) y todos los productos que contengan
            jarabe de alta fructuosa y jarabe de maíz. Al mismo tiempo, haz lo posible por no comer ni tomar alimentos refinados (lo
            que lleve harina o azúcar refinada) y bebidas endulzadas.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Sugerimos consumir con moderación edulcorantes como stevia natural, xilitol y muy poca cantidad de jarabe de agave
            orgánico.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cuidado con el consumo de alcohol. Las bebidas alcohólicas generan desbalances considerables en tus niveles de azúcar
            en sangre. En especial, se cauteloso y consulta a tu médico si ya fuiste diagnosticado con diabetes y tomas insulina o
            píldoras para controlarla.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ALIMENTOS DE BAJO ÍNDICE GLUCÉMICO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Todos los alimentos con hidratos de carbono tienen un índice glucémico (IG). El IG hace referencia a la rapidez con la
            que un alimento puede elevar el nivel de glucosa (azúcar) en la sangre.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            El índice glucémico puede ser bajo, medio u alto. El consumo de alimentos con un IG medio y bajo puede ayudarte a
            controlar el nivel de azúcar en tu sangre.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Algunas opciones de alimentos con bajo índice glucémico son: cereales integrales, pasta integral al dente, quinoa,
            levadura de cerveza, nueces, huevo, yogurt sin azúcar, leguminosas, frutas enteras como la naranja, manzana, pera,
            durazno, frambuesas, cerezas, moras, mandarina, toronja, aceitunas, hojas verdes, vegetales, cacao amargo, salsa de
            tomate natural, bebidas de nueces no azucaradas, entre otras.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Los aceites, grasas y carnes no contienen hidratos de carbono, por lo tanto, no tienen IG.
          </Text>
        </Panel>


        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          CONSUME HIDRATOS DE CARBONO COMPLEJOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Tener mayor predisposición a desarrollar diabetes, no significa que no puedas consumir hidratos de carbono, ya que son
            esenciales para el funcionamiento de tu cuerpo. Aproximadamente el 60% de la energía que usas para vivir y hacer tus
            actividades proviene de este nutrimento. Los hidratos de carbono se pueden dividir en simples y complejos. A diferencia
            de los hidratos de carbono simples, los complejos tienen altas cantidades de fibra que disminuyen la velocidad con la
            que los alimentos se absorben en el organismo; es más difícil hacer picos de glucosa en sangre.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Consume alimentos con hidratos de carbono complejos como cereales integrales, verduras crudas, variedad de hojas
            verdes, germinados, algas, leguminosas y frutas con bajo índice glucémico (con moderación).
          </Text>
        </Panel>


        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          BAJA EN GRASAS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cuidado con las grasas. La diabetes provoca mayor acumulación de depósitos grasos en las arterias, evita consumir
            productos industrializados, procesados y fritos.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Aumenta la ingesta de proteína animal magra como el pescado; en especial el salmón salvaje, ya que tiene grasas
            saludables que sí puedes consumir.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Otras fuentes de grasas saludables pueden ser nueces, aceites de oliva extra virgen, aceite de linaza, etc.
          </Text>
        </Panel>


        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          MÁS ANTIOXIDANTES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Aumenta el consumo de vitaminas y antioxidantes. En especial la variedad de hojas verdes y vegetales de diversos
            colores. Los cítricos son una fuente rica en vitamina C, a la cual se le atribuyen propiedades antioxidantes. Aumenta el
            consumo de kiwi, fresas, naranja, limón, guayaba, pimiento rojo, jitomate, fresa, grosella, perejil, col de bruselas,
            brócoli.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          HÁBITOS DIARIOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Complementa la calidad de tu alimentación con hábitos que propicien el adecuado metabolismo de los nutrimentos:
            procura comer de 4 a 6 raciones moderadas de comida al día, incluye en cada comida y colación los 3 macro
            nutrimentos (proteína, lípidos e hidratos de carbono), consume alimentos variados, intenta masticar con calma y
            disfruta al máximo tus alimentos.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PORCIONES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La cantidad de lo que comes, es tan importante como la calidad y el equilibrio de tus alimentos.
            Para controlar el tamaño de tus porciones, a continuación, te mostramos <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={[styles.isBold]}>MY</Text>PLATE</Text> donde tú podrás crear tu propio
            plato de acuerdo al porcentaje recomendado de cada grupo de alimentos.
          </Text>
        </Panel>


      </View>
    )
  }
}
