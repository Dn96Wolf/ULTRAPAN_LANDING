import main1 from "@/assets/images/pan-1.png";
import main2 from "@/assets/images/pan-2.png";
import { MainCarouselItem } from "@/components/carousel/MainCarousel";
import { CarouselItem } from "@/components/carousel/ProductCarousel";
import { ProductDetailInterface } from "@/interfaces/Product";

export const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" as const },
  // { href: "/ultrapan", labelKey: "nav.ultrapanLine" as const },
  { href: "/services", labelKey: "nav.services" as const },
  { href: "/bread-in-home", labelKey: "nav.breadInHome" as const },
];

export const mainImages: MainCarouselItem[] = [
  {
    image: main1,
    alt: "Imagen 1",
  },
  {
    image: main2,
    alt: "Imagen 2",
  },
];

export const HOME_SLIDES = [
  {
    title: "ULTRAPAN",
    subtitle:
      " Tecnología enzimática diseñada para estandarizar tu calidad, mejorar el volumen y optimizar tus costos, desde el panadero artesano hasta la línea industrial.",
    backgroundImage: "/assets/images/mesaPan.png",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: false,
  },
  {
    title: "ULTRAPAN",
    subtitle:
      " Tecnología enzimática diseñada para estandarizar tu calidad, mejorar el volumen y optimizar tus costos, desde el panadero artesano hasta la línea industrial.",
    backgroundImage: "/assets/images/mesaIndustrial.png",
    ribbonClass: "page-module___8aEwW__bg-neutral-overlay",
    action: false,
  },
];

export const CAROUSEL_PRODUCT_LIST: CarouselItem[] = [
  {
    id: 1,
    title: "Ultrapan Emulsoft H",
    descripcion:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    path: "/productos/pan-dulce",
    image: main1,
  },
  {
    id: 2,
    title: "Ultrapan C",
    descripcion:
      " Un sobrecito de 10 g para 44 kg de harina (bulto).	Para su uso en menos de 44 kg, basta con mezclar un sobre con 430 g de harina y usar 10 g de esta mezcla por kilo de harina. ",
    presentation: "Presentación: Caja de 100 sobres con 10 g c/u.",
    path: "/productos/bolleria",
    image: main1,
  },
  {
    id: 3,
    title: "ULTRAPAN 2,000",
    descripcion:
      "Mejorante para pan blanco, formulado especialmente para potenciar las características sensoriales del producto, tales como aroma, sabor y color. Proporciona excelente greñado y miga suave. Se recomienda su uso en procesos tradicionales e industriales. ",
    presentation: "Presentación: Bultos de 5 y 25 kg.",

    path: "/productos/pan-blanco",
    image: main1,
  },
  {
    id: 4,
    title: "ULTRAPAN 3,000",
    descripcion:
      "Mejorante completo recomendado para la elaboración de especialidades de pan tipo francés como baguette, pistolet o panes tipo europeo como chapata, pan integral, de centeno o con hierbas finas. ",
    presentation: "Presentación: Bultos de 5 kg y 25 kg.",

    path: "/productos/especialidades",
    image: main1,
  },
];

export const PRODUCT_LIST: ProductDetailInterface[] = [
  {
    id: 1,
    title: "Ultrapan 10,000",
    subtitle: "Resiliencia máxima para líneas de alto volumen.",
    category: "INDUSTRIAL",
    description:
      "Mejorante robusto diseñado para pan blanco tipo salado en líneas industriales o de gran volumen, capaz de soportar el estrés mecánico.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Fuerza y Tolerancia:",
        description:
          "Soporta el mezclado intensivo y variaciones en la harina.",
      },
      {
        title: "Uniformidad:",
        description:
          "Miga y color constantes, ideal para pan de caja o líneas automatizadas.",
      },
    ],
    instructions: [
      {
        title: "Dosis:",
        description: "132 g por cada 50 kg de harina (2 bultos).",
      },
    ],
    valueProposal:
      "Garantiza que tu producción no se detenga por variaciones en la materia prima y mejora la elasticidad de la masa en procesos mecanizados.",
  },
  {
    id: 2,
    title: "Ultrapan Emulsoft Extender",
    subtitle: "Larga vida, Frescura hasta por 90 días.",
    category: "INDUSTRIAL",
    description:
      "Desarrollado para combatir el envejecimiento del pan. Retarda la retrogradación del almidón para mantener el pan suave por meses.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Vida Útil Extendida",
        description:
          " Conserva la suavidad hasta por 90 días (según proceso y empaque).",
      },
      {
        title: "Menos Devoluciones:",
        description: "Reduce drásticamente las mermas por pan duro en anaquel.",
      },
    ],
    instructions: [
      {
        title: "Dosis:",
        description: "0.5% a 1% sobre el peso de la harina.",
      },
    ],
    valueProposal:
      "Es vital para marcas que distribuyen a nivel nacional o exportan, asegurando que el cliente reciba un producto suave como el primer día.",
  },
  {
    id: 3,
    title: "Ultrapan Emulsoft Plus",
    subtitle: "Suavidad premium para tu pan dulce.",
    category: "INDUSTRIAL",
    description:
      "La combinación perfecta de enzimas y emulsificantes para masas dulces (conchas, roles, brioche) que buscan una experiencia sensorial superior.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Suavidad Extrema:",
        description:
          "Miga húmeda y esponjosa que se siente fresca por más tiempo.",
      },
      {
        title: "Resiliencia:",
        description: "El pan recupera su forma (rebote) al presionarlo.",
      },
      {
        title: "Volumen:",
        description:
          "Incrementa el volumen hasta un 23.9% comparado con recetas estándar.",
      },
    ],
    instructions: [
      {
        title: "Dosis:",
        description: "0.5% a 1% sobre el peso de la harina (5 a 10 g por kg).",
      },
    ],
    valueProposal:
      "Mejora la percepción de frescura de tu cliente sin alterar el sabor tradicional de tu pan.",
  },
  {
    id: 4,
    title: "Ultrapan Congelado",
    subtitle: "Estabilidad total para la cadena de frío.",
    category: "INDUSTRIAL",
    description:
      "Formulado para proteger la red de gluten durante la congelación, asegurando que el pan mantenga su estructura al descongelarse y hornearse.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Protección Estructural:",
        description:
          "Evita que el pan se colapse o pierda volumen tras el descongelado.",
      },
      {
        title: "Como Recién Horneado:",
        description:
          "Garantiza suavidad y excelente presentación en el punto de venta final.",
      },
    ],
    instructions: [
      {
        title: "Dosis:",
        description: "0.5% a 1.0% sobre el peso de la harina.",
      },
    ],
    valueProposal:
      "Aumenta la eficiencia de líneas de pan precocido o masas congeladas, compatible con tecnologías IQF y fermentación controlada.",
  },
  {
    id: 5,
    title: "Ultra Mill Tortilla M1",
    subtitle: "La solución para la tortilla de harina perfecta",
    category: "INDUSTRIAL",
    description:
      "Mezcla de enzimas para líneas continuas de tortillas de harina, enfocada en la textura y la 'rollabilidad'",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Cero Roturas:",
        description:
          "Mejora la elasticidad para que la tortilla se enrolle sin romperse.",
      },
      {
        title: "Anti-Pegado:",
        description:
          "Mantiene las tortillas separadas y frescas en el empaque.",
      },
    ],
    instructions: [
      {
        title: "Dosis ultra-concentrada:",
        description: "0.5 a 1 g por kg de harina.",
      },
    ],
    valueProposal:
      "Reduce mermas por tortillas rotas y mejora la experiencia del consumidor final al evitar que se peguen.",
  },
  {
    id: 6,
    title: "Ultrapan C+",
    subtitle: "La fórmula concentrada para el volumen perfecto.",
    category: "ARTESANAL",
    description:
      " Es un mejorante de alto rendimiento libre de bromato. Su fórmula concentrada está diseñada para masas que requieren fuerza y estabilidad sin modificar tu proceso tradicional.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Volumen Superior:",
        description:
          "Estandariza el tamaño de tus piezas y mejora la estructura de la miga.",
      },
      {
        title: "Cero Bromato:",
        description: "Pan más limpio y seguro.",
      },
      {
        title: "Versatilidad:",
        description: "Ideal para pan francés, baguette y masas saladas.",
      },
    ],
    instructions: [
      {
        title: "",
        description:
          "Disuelve 1 sobre de 10g por cada bulto de 25 kg de harina. ¡Así de fácil!",
      },
    ],
    valueProposal:
      "No necesitas cambiar tu receta ni comprar maquinaria nueva; funciona en procesos directos y sin cámaras de fermentación.",
  },
  {
    id: 7,
    title: "Ultrapan G+",
    subtitle: "El mejorante 'Todo Terreno' para tu negocio.",
    category: "ARTESANAL",
    description:
      "Diseñado para pan blanco y masas saladas, ofreciendo el equilibrio perfecto entre tecnología y ahorro económico.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Ahorro Inteligente",
        description: "Reduce tus costos sin sacrificar la calidad",
      },
      {
        title: "Rendimiento",
        description:
          "Obtienes más piezas por bulto gracias a su alta absorción.",
      },
      {
        title: "Consistencia",
        description:
          "Logra siempre la misma textura suave y uniforme, lote tras lote.",
      },
    ],
    instructions: [
      {
        title: "Dosis recomendada",
        description:
          "62.5 g (un sobre) por bulto de 25 kg de harina (o 2.5 g por kilo).",
      },
    ],
    valueProposal:
      "Es ideal para reducir la variabilidad en condiciones artesanales y permite reducir la cantidad de grasa en la receta.",
  },
  {
    id: 8,
    title: "Ultrapan Dulce Plus",
    subtitle:
      "Especializado para pan dulce (roscas, pan de muerto, bollería empacada) que requiere mantenerse fresco en el supermercado.",
    category: "ARTESANAL",
    description:
      "Diseñado para pan blanco y masas saladas, ofreciendo el equilibrio perfecto entre tecnología y ahorro económico.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Frescura Prolongada",
        description: "Evita el endurecimiento prematuro",
      },
      {
        title: "Ideal para Empaque",
        description:
          "Mantiene la humedad dentro del empaque sin perder textura.",
      },
    ],
    instructions: [
      {
        title: "Dosis",
        description: "0.5% a 1% sobre el peso de la harina.",
      },
    ],
    valueProposal:
      "Ayuda a reducir tiempos de reposo y permite disminuir el uso de huevo en panes fermentados, mejorando la logística de distribución.",
  },
  {
    id: 9,
    title: "Ultrapan Emulsoft H",
    subtitle: "Optimización de costos: Suavidad sin huevo.",
    category: "ARTESANAL",
    description:
      "Mejorante para masas dulces con una potente capacidad emulsificante que permite reducir o sustituir el uso de huevo en la receta.",
    image: "/images/pan-integral.jpg",
    benefits: [
      {
        title: "Ahorro Directo",
        description: "Reduce costos de insumos (huevo) manteniendo la calidad",
      },
      {
        title: "Estructura Uniforme",
        description: "Logra una miga suave y esponjosa similar al brioche",
      },
    ],
    instructions: [
      {
        title: "Dosis",
        description: "0.5% a 1% sobre el peso de la harina (5 a 10 g por kg).",
      },
    ],
    valueProposal:
      "Es la herramienta perfecta para optimizar tu receta ante la subida de precios de materias primas, catalizando tu rentabilidad.",
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "Mejorantes para pan ¿qué son?",
    descripton:
      "Es una mezcla de enzimas, agentes oxidantes y emulsificantes que, adicionados en cantidades suficientes, permiten obtener resultados de primera aun cuando haya variaciones durante el proceso de fabricación (temperatura, humedad, tipo de harina).",
    image: "",
    list: [],
    className: "Services-module__A_tMzG__improvers",
  },
  {
    id: 2,
    title: "Enzimas",
    descripton:
      "Son proteínas capaces de acelerar reacciones químicas específicas. Las enzimas más utilizadas en panificación son:",
    image: "",
    list: ["Amilasas", "Oxidasas", "Lipasas", "Hemicelulasas", "Pentosanasas"],
    className: "Services-module__A_tMzG__enzimas",
  },
  {
    id: 3,
    title: "Emulsificantes",
    descripton:
      "Son compuestos que ayudan a la elaboración de productos alimenticios. Su uso en panificación vuelve la masa más tolerante a los esfuerzos a los que se somete hasta su horneado, favoreciendo la retención de gas, y como consecuencia, obteniendo productos de mayor volumen con una miga más fina y uniforme, además de con mayor suavidad y flexibilidad.",
    image: "",
    list: [],
    className: "Services-module__A_tMzG__emul",
  },
  {
    id: 4,
    title: "Agentes oxidantes",
    descripton:
      "El uso de agentes oxidantes mejora las propiedades de la masa y la calidad del pan. Uno de los oxidantes más utilizados en panificación es el ácido ascórbico, también conocido como vitamina C, que ayuda al incremento en la elasticidad de la masa, aumentando así la retención de gas durante la fermentación, y por tanto, brindando un mayor volumen al pan.",
    image: "",
    list: [],
    className: "Services-module__A_tMzG__antiOx",
  },
];

export const BENEFITS = [
  {
    title: "Mejor tolerancia a la fermentación",
    icon: "clock",
  },
  {
    title: "Reducción en el tiempo de amasado",
    icon: "check",
  },
  {
    title: "Aumento en la absorción de agua (mayor rendimiento)",
    icon: "analitics",
  },
];
