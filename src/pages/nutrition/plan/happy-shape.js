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

export default class SmartDiet extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack16Bold]}>
          Plan de Alimentación HAPPY SHAPE
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Para lograr un estado óptimo de salud es muy importante que encuentres un peso sano de acuerdo a tus características
          personales. Tener sobrepeso incrementa el riesgo de padecer enfermedades metabólicas.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Para perder peso y después mantenerlo, lo más importante es adoptar hábitos alimenticios saludables, que vayan de
          acuerdo a tu bioindividualidad y que sean fáciles de adoptar a tu estilo de vida.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Con el objetivo de que el cambio a este tipo de alimentación sea exitoso, te proponemos que te concentres en todas las
          comidas nuevas que puedes agregar, en lugar de pensar en los alimentos que debes evitar.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Si hacemos una lista de toda la variedad de alimentos que existen en los mercados o supermercados, comeríamos algo
          distinto cada día. Así que tienes muchas opciones que agregar a tu dieta.
        </Text>
        <Text style={[styles.isMarginSmall, styles.isGinoraFontRegular, styles.fontBlack14]}>
          Para que encuentres un peso más saludable, te proponemos la dieta Happy shape, en la que se aumenta el consumo de
          alimentos con bajo nivel calórico y energético, pero con alta densidad nutricional.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          AUMENTA ENSALADAS Y FRUTAS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Inicia la comida y la cena con una ensalada. Los vegetales, hojas verdes y germinados están llenos de nutrimentos, son
            bajos en calorías y contienen mucha fibra. Otra forma de conservar las vitaminas de estos alimentos y variar su
            preparación, es cocerlos al vapor o saltearlos en un sartén.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Las frutas son otra fuente de nutrimentos de maravillosa calidad y bajas en calorías. Lo único que debes considerar es el
            índice glucémico (IG) de las frutas. Es decir, el impacto de glucosa en la sangre que generan los alimentos. Ya que el
            exceso de azúcar en tu cuerpo se convierte en grasa y aumenta tu peso.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            El IG puede ser bajo, medio y alto y los alimentos con alto IG son los que más pueden incrementar los niveles de azúcar.
            Las frutas con menor IG son los frutos del bosque como las fresas, moras, cerezas, zarzamoras, frambuesas. También la
            pera, manzana, ciruelas, durazno, toronja. En tu caso, te recomendamos consumir frutas de BAJO y MEDIO IG. Y evitar
            las de ALTO IG como el kiwi, piña, plátano, sandía, melón, mango, mamey; en especial si se preparan como jugo. Es
            mejor comer la fruta entera con todo y cáscara, ya que la digestión de la fibra ayuda a que se absorba más lento el
            azúcar.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PROTEÍNA ANIMAL DE BUENA CALIDAD
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Agrega proteína de origen animal blanca y magra, de preferencia de animales de libre pastoreo y sin hormonas: pescado
            de mar, salmón salvaje, pollo, pavo. Carne de res magra, máximo una vez a la semana.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Disminuye el consumo de embutidos, que aparte de tener un alto contenido de conservadores y sodio, se caracterizan
            por aportar grandes cantidades de grasas saturadas.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PROTEÍNA VEGETAL
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Te recomendamos aumentar la proteína de origen vegetal como son los frijoles, soya, garbanzos, lentejas, chícharo,
            habas, algas, germinados, quinoa, amaranto, nueces, semillas de cáñamo.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          FIBRA Y CEREALES INTEGRALES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Los alimentos con alto contenido de fibra son muy buenos para bajar de peso ya que mejoran el tránsito intestinal. Otra
            manera indirecta que tiene la fibra de ayudar a perder peso es que al tardarnos más tiempo en masticar estos alimentos
            la sensación de saciedad se produce antes.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La fibra es un alimento prebiótico, es decir, alimenta las bacterias benéficas que forman nuestra microbiota. Una
            microbiota equilibrada, variada y sana se relaciona con adecuados procesos metabólicos y de digestión, por lo tanto, con
            un peso saludable.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Una dieta alta en fibra debe de ir de la mano con una alta ingesta de líquidos. En especial agua. Elige cereales integrales
            como el maíz, el arroz, la quinoa, el amaranto, la avena, centeno, trigo integral; así como panes, tortillas y pastas
            elaboradas a base de estos ingredientes.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            No obstante, para llegar a un peso ideal es importante que sigas los porcentajes de hidratos de carbono que se
            recomiendan en tu <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={[styles.isBold]}>MY</Text>PLATE</Text> y en la lista de equivalencias.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          GRASAS SALUDABLES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Antes se creía que había que evitar todo tipo de grasas si deseamos bajar de peso. Hoy las investigaciones indican que
            las grasas saludables son muy importantes para contrarrestar los efectos nocivos de las grasas malas. Además, que si la
            dieta para reducir peso es baja en hidratos de carbono, las grasas se convierten en la fuente de energía principal y eso
            beneficia mucho a la quema del exceso de grasa.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Aumenta el consumo de grasas saludables como las que tienen el salmón salvaje, los pescados azules, el aceite de oliva
            extra virgen, el aguacate, las nueces y semillas.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          EVITAR PROCESADOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Una alimentación desbalanceada que incluya productos altos en azúcares refinados, grasas saturadas, productos
            industrializados y con ingredientes que no sean naturales, induce al cuerpo a procesos inflamatorios perjudiciales para la
            salud.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ALIMENTOS ANTINFLAMATORIOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            El sobrepeso está directamente relacionado con procesos de inflamación interna. Por lo que te recomendamos agregar a
            tus comidas alimentos antiinflamatorios como: cúrcuma, jengibre, cebolla, cítricos, hierbas aromáticas, alimentos altos
            en omega 3, aceite de oliva extra virgen, linaza, pepita de uva y cáñamo, jitomate, frutos secos y nueces.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Las hojas verdes oscuras, así como las verduras y frutas crudas también son excelentes alimentos antiinflamatorios. Solo
            procura que las frutas que escojas tengan un bajo índice glucémico. Pon atención y vigila la calidad de tus alimentos y
            bebidas: busca que sean productos lo más naturales posible. Recomendamos que leas las etiquetas de lo que compras;
            procura que tus productos tengan la menor cantidad de aditivos, conservadores y colorantes. Evita los alimentos con
            muchas calorías y poco o nada de nutrimentos. Como los refrescos y muchos de los alimentos procesados.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          CANTIDADES Y PORCIONES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Con especial rigor, aconsejamos que controles las cantidades de comida. Busca comer más despacio, masticar más veces
            y degustar tus alimentos. Así podrás darte cuenta cuando te sientas saciado, sin presentar ningún tipo de malestar
            posterior: distención, gases, dolor abdominal, náuseas, movimientos y sonidos intestinales.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Para controlar el tamaño de tus porciones, a continuación, te mostramos <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={[styles.isBold]}>MY</Text>PLATE</Text> donde podrás crear tu propio
            plato de acuerdo al porcentaje recomendado de cada grupo de alimentos.
          </Text>
        </Panel>

      </View>
    )
  }
}
