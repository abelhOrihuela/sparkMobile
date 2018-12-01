import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Panel from 'app/src/components/panel'
import Page from 'app/src/components/page'
import Paragraph from 'app/src/components/paragraph'

import styles from 'app/src/pages/styles'
class Stress extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
    }
  }

  render () {
    return (<Page>
      <Paragraph style={styles.isBold}>
        <Text>Estrés</Text>
      </Paragraph>

      <Paragraph>
        <Text>
          El estrés ocasiona la secreción de cortisol. El cortisol es la hormona que le indica a tu cuerpo cómo actuar en momentos de estrés para defenderse del peligro, pero los niveles altos pueden causar lesiones a nivel celular y de los tejidos, acelerando el envejecimiento, debilitando el sistema inmune e incrementando la predisposición a padecer ciertas enfermedades.
        </Text>
      </Paragraph>

      <Paragraph>
        <Text>
          De igual forma, los altos niveles de cortisol ocasionan un aumento de peso y el almacenamiento de grasa abdominal, debido a que el cortisol necesita insulina para regularse. Hasta que llega un punto en el que el cuerpo se vuelve resistente a la insulina y afecta al procesamiento de azúcar en la sangre.
        </Text>
      </Paragraph>

      <Paragraph>
        <Text>
          El estrés tampoco es bueno para el cerebro. Puede ocasionar constantes dolores de cabeza y hasta migrañas.  También puede reducir la memoria y dificultar el procesamiento de las emociones y el control personal sobre situaciones difíciles.
        </Text>
      </Paragraph>

      <Paragraph>
        <Text>El estrés tiene fuerte consecuencias a nuestra salud, como:</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`\u2022  Debilitar nuestro sistema inmunológico.

\u2022  Desbalancear las bacterias de nuestra microbiota.

\u2022  Aumentar la presión sanguínea.

\u2022  Incrementar los problemas del corazón.

\u2022  Desequilibrar la forma en la que nos alimentamos, generando antojos.`
        }</Text>
      </Paragraph>

      <Paragraph style={[styles.isBold]}>
        <Text>Buenos hábitos para liberar el estrés del día:</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`Realizar ejercicio

Hacer respiración profunda

\u2022  La respiración ayuda a generar una adecuada oxigenación celular, regula los ritmos de inhalación y exhalación y tiene un impacto directo en el sistema nervioso.

Momento de silencio o meditación

\u2022  Un espacio diario de mínimo 10 minutos sin distracciones para observar cómo se sienten nuestras sensaciones corporales, las emociones y los pensamientos, nos ayuda a conocernos y a entrar a estados de conexión interior más profunda. Si al principio necesitas apoyarte de música tranquila, relajaciones guiadas, meditaciones grabadas o mantras, es un buen comienzo para entrar en estados de relajación.

Disfrutar de la naturaleza y de momentos al aire libre

\u2022  Está comprobado que el contacto con la naturaleza ayuda a reducir el estrés y calma el sistema nervioso ya que libera oxcitocina y endorfinas, que son las hormonas de la felicidad.

Pasatiempos o actividades que den placer o servicio a los demás

Escuchar música

\u2022  En especial escuchar música clásica y de sonidos naturales es una herramienta terapéutica para el manejo del estrés, ya que las vibraciones de las notas musicales ayudan a equilibrar los ritmos cardíacos, a reducir los niveles de cortisol y a crear mayor armonía física, emocional y mental.
`
        }</Text>
      </Paragraph>

      <Paragraph>
        <Text>{
`Alimentos antiestrés

\u2022  Maca – aumenta la energía y la vitalidad considerablemente y mejora la concentración.

\u2022  Cacao – al ser rico en magnesio y triptófano aumenta la serotonina, causando mayor sensación de bienestar.

\u2022  Semillas de girasol – tienen efectos relajantes.

\u2022  Naranjas, kiwi, guayaba, acai – aportan vitamina C que ayuda a nivelar el estrés y balancear la hormona cortisol.

\u2022  Matcha – por su elevada concentración del aminoácido L-teanina estimula la producción de ondas alfa en el cerebro generando un estado de claridad mental y tranquilidad.`
        }</Text>
      </Paragraph>
    </Page>)
  }
}

export default Stress
