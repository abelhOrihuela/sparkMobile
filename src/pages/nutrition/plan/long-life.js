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

export default class LongLife extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack16Bold, styles.fontGinora]}>
          Plan de alimentación Long Life
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          De acuerdo a tus características personales, te recomendamos la alimentación Long Life. Este régimen alimenticio es
          ideal, tanto para mantener como para impulsar el bienestar de personas sanas, fuertes y que tienen 50 años o más.
        </Text>
        <Text style={[styles.isMargin, styles.isGinoraFontRegular, styles.fontBlack14]}>
          La dieta Long Life consta de los mismos principios de una alimentación saludable; no obstante, es importante tener en
          cuenta que toda etapa de la vida exige de requerimientos específicos. Por eso, aparte de recomendarte un régimen de
          comidas equilibrado y variado queremos enfatizar en la importancia de otro tipo de nutrimentos necesarios para tu
          edad.
        </Text>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          PRODUCTOS NATURALES Y FRESCOS, NO A LO INDUSTRIALIZADO
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Cuida la calidad de los productos que eliges: inclínate por comprar y consumir alimentos naturales, frescos, sin aditivos
            ni conservadores.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Evita comer o tomar productos procesados, azúcar blanca, harinas, grasas trans, saborizantes artificiales y colorantes.
            Aparte de acelerar la oxidación celular inducen al cuerpo a procesos inflamatorios.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          BAJA EN AZÚCAR
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Está comprobado que conforme van pasando los años, la mayoría de las personas tienden a preferir sabores dulces y a
            consumir mayor cantidad de hidratos de carbono, ocasionando una ganancia de peso. Debido a procesos metabólicos
            relacionados con la edad, bajar de peso se vuelve más difícil.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Evita el consumo de azúcar blanca (azúcar de caña en general), y todos los productos que contengan jarabe de alta
            fructuosa y jarabe de maíz. Así como los edulcorantes artificiales.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Si tienes antojo de algo dulce, es mejor endulzar con poca cantidad de miel de abeja cruda, miel de agave orgánica,
            azúcar de coco o stevia natural.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Disminuye el consumo de frutas altas en contenido de azúcar (plátano, mango, mamey, etc.) y de jugos industrializados
            o naturales ya que estas bebidas tienen una gran cantidad de azúcar y no contienen fibra. Al mismo tiempo, haz lo
            posible por no comer cereales y harinas refinados como arroz blanco, pan de caja blanco, pastas, cereales
            industrializados.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          RICA EN PROTEÍNAS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Con el tiempo, como es natural, la capacidad del cuerpo para regenerar su masa muscular se reduce. Un mayor consumo
            de proteínas de buena calidad, tanto animal como vegetal, te va a ayudar a mantener en forma y fuertes todos los
            músculos de tu cuerpo. Lo cual es muy importante para proteger los huesos y para conservar la salud de tu piel, cabello
            y articulaciones.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          AUMENTA GRASAS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Por otro lado, es importante reforzar el consumo de grasas saludables. Esto te va a permitir preservar el adecuado
            funcionamiento de todas las células de tu cuerpo. En especial, contribuyen a mantener tus funciones neuronales.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Las vitaminas liposolubles A, E, D, K (en especial la D), otras vitaminas como la B12 y los ácidos grasos esenciales como el
            Omega 3, son excelentes antioxidantes para los procesos degenerativos del cerebro. La mejor fuente de vitamina D es el
            sol, pero también la puedes encontrar en productos como huevo orgánico, mantequilla y ghee de vacas de libre
            pastoreo.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Aumenta el consumo de productos ricos en Omega 3 como el salmón salvaje y atún rojo (¡ojo! solo una vez a la semana
            por su alto contenido de mercurio). Así como, pollo y res libre de hormonas. Aparte de aportar proteína de alta calidad,
            son la mejor fuente de vitamina B12.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ALTA EN ANTIOXIDANTES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Las células utilizan oxígeno para generar energía, cumplir sus funciones y reproducirse. Este proceso libera radicales
            libres de manera natural, pero el metabolismo tiene forma de compensarlos. Sin embargo, las condiciones actuales de
            vida como la contaminación del aire, el consumo de grasas industrializadas, la ingesta excesiva de ingredientes refinados
            (azúcar y harinas), así como los altos niveles de estrés, incrementan la formación de radicales libres. De tal forma que se
            sobrepasa la capacidad de las células para recuperarse.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Sumado a lo anterior, también con la edad, las células disminuyen su capacidad regenerativa. No obstante, hay
            alimentos ricos en compuestos antioxidantes, que ayudan a alentar y revertir los procesos oxidativos del cuerpo. Siendo
            esta una de las mejores opciones para combatir el envejecimiento prematuro.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Aumenta el consumo de alimentos ricos en antioxidantes como el cacao, cúrcuma, vino tinto (con moderación), frutas y
            verduras moradas (acai, uvas, moras, zarzamoras, cebolla morada, col, betabel) y rojas (granada, fresas, frambuesa,
            arándanos, rábanos, jitomate).
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La vitamina E y C son excelentes antioxidantes. Aumenta el consumo de kiwi, fresas, naranja, limón, guayaba, pimiento
            rojo, jitomate, fresa, grosella, perejil, col de bruselas, brócoli y cereales integrales. Al igual que la ingesta de semillas y
            nueces como almendras, semillas de girasol, cacahuate y avellanas.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          DESINTOXICIÓN CONSTANTE
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Por otra parte, es indispensable consumir alimentos que ayuden al cuerpo a eliminar toxinas presentes en aditivos
            alimenticios, medicamentos y pesticidas. Ingredientes como la cebolla, cúrcuma, ajo, hojas verdes, hierbas astringentes
            (diente de león, hoja de alcachofa) y hojas de té, ayudan al cuerpo a eliminar estos compuestos nocivos.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Con el paso del tiempo, generamos mayor propensión de acumular metales pesados. Por ejemplo el mercurio que se
            encuentra en amalgamas y en pescados de mar grandes como atún, dorado, cazón, huachinango y mariscos. Para
            desintoxicar el cuerpo de metales te recomendamos incluir en tu alimentación: cilantro y chlorella (puede ser en forma
            de polvo o cápsulas).
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          NUTRE TU MICROBIOTA: PROBIÓTICOS Y PREBIÓTICOS
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Es elemental cuidar la salud de tu microbiota a través de la alimentación. Una buena salud de tus bacterias contribuye a
            metabolizar mejor los alimentos y a mantener fuerte tu sistema inmune.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Incluye a tu alimentación diaria productos naturales ricos en fibras como verduras crudas y leguminosas, así como
            fermentados que fortalezcan tu flora intestinal: yogurt, jocoque, kimchi, miso, kombucha, entre otros.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          ACOMPAÑA CON NUTRIMENTOS EMOCIONALES
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Más allá de la densidad nutrimental de tus comidas, uno de los factores que más contribuyen a mantener una
            longevidad próspera es la calidad de tus relaciones interpersonales. Disfruta tus alimentos con gente que te hace sentir
            querido(a) y comparte momentos para cocinar juntos.
          </Text>
        </Panel>

        <Panel
          style={styles.isMarginSmall}
          title={(<Text style={[{color: 'black'}, styles.isGinoraFontRegular]}>
          EQUILIBRADA Y VARIADA
          </Text>)}
          styleContainerTitle={{backgroundColor: 'white'}}
          borderColor='white' colorIcon='black'>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Una dieta saludable debe de ser equilibrada, adecuada a tus características personales y estilo de vida. Te
            recomendamos que elijas cereales integrales, alimentos altos en fibra, variedad de leguminosas, proteína animal magra -
            sin hormonas añadidas y de libre pastoreo-, huevo orgánico, frutas y vegetales de diversos colores, una gran cantidad de
            hojas verdes y grasas de buena calidad como las nueces y las semillas. También puedes agregar a tu alimentación
            germinados, brotes y algas ya que contienen una alta fuente de vitaminas y minerales.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Lo ideal es variar los productos que consumes para tener una mayor gama de vitaminas, minerales, fibra y antioxidantes.
            Intenta tener todos los colores del arcoíris en tu alimentación diaria, de esta forma sabrás que estás recibiendo todas las
            vitaminas necesarias.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Tu alimentación tiene que proveer la energía necesaria para que tu cuerpo funcione adecuadamente y para que logres
            cumplir con todas las actividades que te propongas. Pero sumamente importante, no olvides que debes disfrutar lo que
            comes y que se adapte a tu estilo de vida, así podrás seguir tu dieta fácilmente.
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
            Escucha a tu cuerpo y no te excedas en las comidas.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            La cantidad de lo que comes, es tan importante como la calidad y el equilibrio de tus alimentos.
            Para controlar el tamaño de tus porciones, te mostramos <Text style={[styles.isAdamFontRegular]}>ALCHE<Text style={[styles.isBold]}>MY</Text>PLATE</Text>. En él podrás crear tu propio plato de acuerdo
            con el porcentaje recomendado de cada grupo de alimentos.
          </Text>
          <Text style={[styles.isGinoraFontRegular, styles.isMarginSmallTopBottom]}>
            Después de los 40 años, el cuerpo reduce su capacidad de metabolizar los carbohidratos, por lo que cuesta más trabajo
            sostener el peso ideal o bajar los kilos ganados. Por esta razón, te recomendamos un plan de alimentación de 40%
            carbohidratos, 30% proteínas y 30% grasas.
          </Text>
        </Panel>

      </View>
    )
  }
}
