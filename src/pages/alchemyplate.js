import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import styles from './styles'
import Page from 'app/src/components/page'

export default class AlchemyPlate extends Component {
  render () {
    return (
      <Page>
        <Text style={[{ margin: 10, marginBottom: 0 }, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>
          ¿Qué es <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text>?
        </Text>

        <View style={{ margin: 10, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }}>
          <Text style={[{ marginTop: 20, marginBottom: 20 }, styles.isGinoraFontRegular]}>
            Una herramienta que te sirve a en el día a día.
          </Text>
        </View>

        <Text style={[{ margin: 10 }, styles.isGinoraFontRegular]}>
          En <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>CODE</Text> te queremos acompañar para que puedas aplicar las recomendaciones de manera fácil y práctica a tu vida diaria.
        </Text>

        <Text style={[{ margin: 10 }, styles.isGinoraFontRegular]}>
          Te presentamos un gráfico personalizado que, basándose en tu factor de riesgo más alto, te indica la distribución de nutrimentos (proteínas, hidratos de carbono y lípidos) ideal para tu dieta.
        </Text>

        <Text style={[{ margin: 10 }, styles.isGinoraFontRegular]}>
          Con <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={styles.isBold}>MY</Text>PLATE</Text> y la lista de alimentos recomendados, ahora tienes muchas opciones para crear tus comidas diarias.
        </Text>

        <Text style={[{ margin: 10 }, styles.isGinoraFontRegular]}>
          Las listas de equivalencias están ordenadas de acuerdo a sus propiedades nutrimentales. De tal forma que los alimentos de una misma lista son equivalentes; es decir, puedes sustituirlos entre ellos. Sólo cambia la porción.
        </Text>

        <Text style={[{ margin: 10 }, styles.isGinoraFontRegular]}>
          Los ingredientes de las listas fueron seleccionados por su calidad y variedad. Va a resultarte muy fácil probar cosas nuevas todos los días y con la alimentación que se te recomienda, lograr un estado óptimo de bienestar.
        </Text>

        <View style={{ margin: 10, marginBottom: 40, borderColor: '#911E38', borderWidth: 1 }}>
          <Text style={[{ margin: 20, marginBottom: 0 }, styles.isGinoraFontRegular]}>
            De acuerdo a tus características personales, te recomendamos la alimentación <Text style={{ color: '#911E38' }}>Long Life</Text>. Este régimen alimenticio es ideal, tanto para mantener como para impulsar, el bienestar de personas sanas, fuertes y que tienen 50 años o más.
          </Text>

          <Text style={[{ margin: 20, marginBottom: 20 }, styles.isGinoraFontRegular]}>
            <Text style={{ color: '#911E38' }}>La dieta Long Life</Text> consta de los mismos principios de una alimentación saludable; no obstante, es importante tener en cuenta que toda etapa de la vida exige de requerimientos específicos. Por eso, aparte de recomendarte un régimen de comidas equilibrado y variado queremos enfatizar en la importancia de otro tipo de nutrimentos necesarios para tu edad.
          </Text>
        </View>
      </Page>
    )
  }
}
