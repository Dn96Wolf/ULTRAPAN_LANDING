import main1 from "@/assets/images/pan-1.png";
import main2 from "@/assets/images/pan-2.png";
import { MainCarouselItem } from "@/components/carousel/MainCarousel";
import { CarouselItem } from "@/components/carousel/ProductCarousel";
import { ProductDetailInterface } from "@/interfaces/Product";

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

export const ProductsItems: CarouselItem[] = [
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
    title: "Ultrapan Emulsoft H",
    description:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    image: "/images/pan-integral.jpg",
    benefits: [
      "Aumenta el volumen del pan.",
      "Mejora la frescura y suavidad de la miga.",
      "Facilita el proceso de amasado y formado.",
      "Prolonga la vida útil del producto final.",
    ],
    advatages: [
      "Fácil de usar y dosificar.",
      "Compatible con diferentes tipos de harinas y recetas.",
      "Mejora la textura y apariencia del pan dulce.",
      "Aumenta la productividad en la panadería.",
    ],
    moreInfo: [
      "Composición: Contiene emulsionantes, enzimas y otros aditivos que mejoran las propiedades del pan.",
      "Modo de uso: Añadir directamente a la harina durante el proceso de mezcla. La dosis recomendada es de 1-2% del peso de la harina.",
      "Almacenamiento: Conservar en un lugar fresco y seco, protegido de la luz solar directa y la humedad.",
    ],
  },
  {
    id: 2,
    title: "Ultrapan Emulsoft H",
    description:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería). Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    image: "/images/pan-integral.jpg",
    benefits: [
      "Aumenta el volumen del pan.",
      "Mejora la frescura y suavidad de la miga.",
      "Facilita el proceso de amasado y formado.",
      "Prolonga la vida útil del producto final.",
    ],
    advatages: [
      "Fácil de usar y dosificar.",
      "Compatible con diferentes tipos de harinas y recetas.",
      "Mejora la textura y apariencia del pan dulce.",
      "Aumenta la productividad en la panadería.",
    ],
    moreInfo: [
      "Composición: Contiene emulsionantes, enzimas y otros aditivos que mejoran las propiedades del pan.",
      "Modo de uso: Añadir directamente a la harina durante el proceso de mezcla. La dosis recomendada es de 1-2% del peso de la harina.",
      "Almacenamiento: Conservar en un lugar fresco y seco, protegido de la luz solar directa y la humedad.",
    ],
  },

  {
    id: 3,
    title: "Ultrapan Emulsoft H",
    description:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    image: "/images/pan-integral.jpg",
    benefits: [
      "Aumenta el volumen del pan.",
      "Mejora la frescura y suavidad de la miga.",
      "Facilita el proceso de amasado y formado.",
      "Prolonga la vida útil del producto final.",
    ],
    advatages: [
      "Fácil de usar y dosificar.",
      "Compatible con diferentes tipos de harinas y recetas.",
      "Mejora la textura y apariencia del pan dulce.",
      "Aumenta la productividad en la panadería.",
    ],
    moreInfo: [
      "Composición: Contiene emulsionantes, enzimas y otros aditivos que mejoran las propiedades del pan.",
      "Modo de uso: Añadir directamente a la harina durante el proceso de mezcla. La dosis recomendada es de 1-2% del peso de la harina.",
      "Almacenamiento: Conservar en un lugar fresco y seco, protegido de la luz solar directa y la humedad.",
    ],
  },

  {
    id: 3,
    title: "Ultrapan Emulsoft H",
    description:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    image: "/images/pan-integral.jpg",
    benefits: [
      "Aumenta el volumen del pan.",
      "Mejora la frescura y suavidad de la miga.",
      "Facilita el proceso de amasado y formado.",
      "Prolonga la vida útil del producto final.",
    ],
    advatages: [
      "Fácil de usar y dosificar.",
      "Compatible con diferentes tipos de harinas y recetas.",
      "Mejora la textura y apariencia del pan dulce.",
      "Aumenta la productividad en la panadería.",
    ],
    moreInfo: [
      "Composición: Contiene emulsionantes, enzimas y otros aditivos que mejoran las propiedades del pan.",
      "Modo de uso: Añadir directamente a la harina durante el proceso de mezcla. La dosis recomendada es de 1-2% del peso de la harina.",
      "Almacenamiento: Conservar en un lugar fresco y seco, protegido de la luz solar directa y la humedad.",
    ],
  },

  {
    id: 3,
    title: "Ultrapan Emulsoft H",
    description:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    image: "/images/pan-integral.jpg",
    benefits: [
      "Aumenta el volumen del pan.",
      "Mejora la frescura y suavidad de la miga.",
      "Facilita el proceso de amasado y formado.",
      "Prolonga la vida útil del producto final.",
    ],
    advatages: [
      "Fácil de usar y dosificar.",
      "Compatible con diferentes tipos de harinas y recetas.",
      "Mejora la textura y apariencia del pan dulce.",
      "Aumenta la productividad en la panadería.",
    ],
    moreInfo: [
      "Composición: Contiene emulsionantes, enzimas y otros aditivos que mejoran las propiedades del pan.",
      "Modo de uso: Añadir directamente a la harina durante el proceso de mezcla. La dosis recomendada es de 1-2% del peso de la harina.",
      "Almacenamiento: Conservar en un lugar fresco y seco, protegido de la luz solar directa y la humedad.",
    ],
  },

  {
    id: 3,
    title: "Ultrapan Emulsoft H",
    description:
      " Mejorante completo que brinda frescura, volumen y suavidad en todo tipo de pan dulce (bizcochería, danés, dona y bollería).",
    presentation: "Presentación: Bultos de 5 y 25 kg.",
    image: "/images/pan-integral.jpg",
    benefits: [
      "Aumenta el volumen del pan.",
      "Mejora la frescura y suavidad de la miga.",
      "Facilita el proceso de amasado y formado.",
      "Prolonga la vida útil del producto final.",
    ],
    advatages: [
      "Fácil de usar y dosificar.",
      "Compatible con diferentes tipos de harinas y recetas.",
      "Mejora la textura y apariencia del pan dulce.",
      "Aumenta la productividad en la panadería.",
    ],
    moreInfo: [
      "Composición: Contiene emulsionantes, enzimas y otros aditivos que mejoran las propiedades del pan.",
      "Modo de uso: Añadir directamente a la harina durante el proceso de mezcla. La dosis recomendada es de 1-2% del peso de la harina.",
      "Almacenamiento: Conservar en un lugar fresco y seco, protegido de la luz solar directa y la humedad.",
    ],
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
