import React, { Component } from 'react';
import { View, Text, AsyncStorage, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
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
import { Card } from 'react-native-elements'
import styles from 'app/src/pages/styles'
import {Divider} from 'react-native-elements'

let height = 215

class Cardiovascular extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
    return (
      <View style={styles.isMarginSmall}>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>
          Te compartimos estos tips generales para hacer ejercicio.
          Es importante que tomes en cuenta las recomendaciones
          personalizadas que hacemos de acuerdo a tu factor de riesgo o área de oportunidad principal.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          COMIDAS E HIDRATACIÓN PARA HACER EJERCICIO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            A continuación, te damos recomendaciones de alimentos y líquidos que debes de consumir de acuerdo con la duración y
            tipo de ejercicio que realices.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Por duración de ejercicio
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isBold]}>
            Antes:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  Dos horas ante del ejercicio consume una mezcla de hidratos de carbono, grasas de buena calidad, con muy poco de proteína. Esto puede ser un licuado de fruta con nueces, almendras o alguna otra oleaginosa.

    \u2022  Sí eres diabético, procura comer algo adicional 30 minutos antes del entrenamiento. Procura hidratarte bien.
    `
            }
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isBold]}>
            Durante:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  No es necesario consumir alimentos durante los primeros 30 minutos de la actividad física, solo cuida tu hidratación con agua.

    \u2022  Si tu actividad dura más de 1 hora, consume una bebida hidratante como el agua de coco.

    \u2022  Cuando realices actividad física por más de 2 horas, hidrátate con agua de coco o bebida deportiva y consume una fuente de hidratos de carbono de fácil digestión, por ejemplo: fruta.
    `
            }
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isBold]}>
            Después:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  Te recomendamos consumir alimentos inmediatamente después de terminar el ejercicio (primeras 2 horas). La cantidad de alimentos consumidos dependerá de la duración, intensidad y tipo de ejercicio. Lo óptimo es consumir una mezcla de hidratos de carbono, grasas de buena calidad y de proteína.
    `
            }
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Después de cardio:
          </Text>

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            De 1 a 2 horas de cardio: hidratos de carbono de fácil digestión y grasas esenciales. Puedes prepárate un Trail mix casero con nueces, almendras, chocolate (con por lo menos 70% de cacao), arándanos o pasas.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Después de fuerza:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Es ideal consumir proteína durante los 15 minutos posteriores a tu entrenamiento. Esto puede ser un alimento con alto contenido proteico o un licuado con lechada de almendras y proteína vegana orgánica.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          EQUIVALENCIAS Y TIPOS DE EJERCICIO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Cardio
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Todo lo que implique elevar tu frecuencia cardiaca de forma sostenida.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Entrenamientos equivalentes
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Correr, nadar, brincar la cuerda, elíptica, baile, caminadora, bicicleta, remar, trampolín, entre otros.
          </Text>
          <Divider style={{ backgroundColor: 'black' }} />

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Fuerza (pesas)
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Trabajas
            músculos
            aislados o
            grupos de
            músculos
            específicos,
            utilizando
            aparatos o
            levantando
            objetos.          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Entrenamientos equivalentes
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Levantamiento
            de pesas.
          </Text>
          <Divider style={{ backgroundColor: 'black' }} />

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Fuerza funcional
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Se trabajan
            conjuntos de
            músculos al
            mismo tiempo,
            utilizando tu
            propio peso o
            herramientas
            como cuerdas o
            ligas.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Entrenamientos equivalentes
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Lagartijas,
            sentadillas,
            desplantes,
            barras, ejercicios
            abdominales,
            pilates, ligas,
            crossfit, TRX
          </Text>
          <Divider style={{ backgroundColor: 'black' }} />

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Estiramiento
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Consiste en
            elongar grupos
            de músculos o
            músculos
            aislados. Se
            pueden utilizar
            objetos como
            cintas para
            profundizar el
            estiramiento.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Entrenamientos equivalentes
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Yoga, pilates,
            stretching.
          </Text>

          <Divider style={{ backgroundColor: 'black' }} />

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Consideraciones
          </Text>

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Una rutina de ejercicio debe cumplir con las siguientes características:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  Variar el tipo de ejercicio cada día.

    \u2022  No hacer dos días de fuerza seguidos.

    \u2022  No repetir el mismo ejercicio cardiovascular por más de tres días.

    \u2022  No repetir el mismo ejercicio cardiovascular por más de tres días.

    \u2022  Descansar de 1 a 2 días a la semana, para mejorar tu recuperación muscular.

    \u2022  Hacer mínimo un día de estiramientos profundos. Yoga, pilates, reformer o stretching.
    `
            }
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ESTIRAMIENTOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Estirar no es exclusivo de deportistas de alto rendimiento.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Resulta un hábito indispensable para mantener en buen
            estado tu motricidad, el funcionamiento de tus articulaciones y tu circulación sanguínea.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La falta de estiramientos diarios va generando rigidez en tus músculos y articulaciones; entonces, cuando realizas
            movimientos repentinos y que requieren más fuerza que lo habitual, el riesgo de lastimarte es muy alto.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La flexibilidad se va formando poco a poco, no te desesperes. Necesitas implementar estiramientos diarios que permitan
            la elongación paulatina de tus músculos.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Beneficios de estirar regularmente:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  Mejora tu circulación.

    \u2022  Previenes lesiones.

    \u2022  Optimizas tu motricidad.

    \u2022  Liberas tensiones musculares.
    `
            }
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            Estiramientos adecuados:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  No hagas estiramientos sin antes calentar tus músculos. Una actividad suave de 10 minutos previos a estirar es ideal para que tu circulación se active y tu cuerpo esté preparado para estirarse.

    \u2022  Estira siempre que termines de hacer ejercicio.

    \u2022  Mantén la posición de estiramiento de 25 a 30 segundos, por postura.

    \u2022  Cuando estés en una posición de estiramiento, no hagas movimientos de rebote. Esto incrementa el riesgo de
    sufrir lesiones.

    \u2022  Cuando estiras se siente tensión, pero no debes de sentir dolor.
    `
            }
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          SOBREENTRENAMIENTO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            El sobreentrenamiento se da cuando no se descansa ningún día con el afán de alcanzar resultados rápidos. Las
            consecuencias:
          </Text>

          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  Debilitación del sistema inmunológico.

    \u2022  Fatiga constante.

    \u2022  Falta de constancia o deserción.

    \u2022  Alta propensión a lesiones musculares.
    `
            }
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          SUBENTRENAMIENTO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom, styles.isBold]}>
            El subentrenamiento se da cuando se deja de hacer ejercicio por varios días, se entrena muy poco tiempo y cuando se
            práctica un ejercicio inadecuado a tu individualidad. Las consecuencias:
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            {
    `
    \u2022  No percibir mejoras en tu cuerpo ni en tu condición.

    \u2022  Falta de energía.

    \u2022  Mala circulación en sangre.

    \u2022  Deficiente agilidad mental.

    \u2022  Retención de líquidos y sobrepeso.
    `
            }
          </Text>
        </Panel>

      </View>
    )
  }
}

export default Cardiovascular
