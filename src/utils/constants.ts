import main1 from "@/assets/images/pan-1.png";
import main2 from "@/assets/images/pan-2.png";
import { MainCarouselItem } from "@/components/carousel/MainCarousel";
import { ProductDetailInterface } from "@/interfaces/Product";
import { FAQSection } from "@/interfaces/Questions";


export const EMAIL_CONTACT = "ventas@enziquim.com"
export const SLOGAN = "En Enziquim, catalizamos el éxito de nuestros clientes";

export const EMAILREGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

export const SOCIAL_MEDIA = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/enziquim/",  
    
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Enziquim",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/enziquim/",
  },
]

export const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "#", labelKey: "nav.Industrias" as const },
  { href: "/historia", labelKey: "nav.history" as const },
  { href: "/contacto", labelKey: "nav.contact" as const },
  { href: "/FAQ", labelKey: "nav.fqa" as const },
];

export const INDUSTRIAS_SUBMENU = [
  { href: "/artesanal", label: "Artesanal" },
  { href: "/industrial", label: "Industrial" },
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
        icon: "force",
        description:
          "Soporta el mezclado intensivo y variaciones en la harina.",
      },
      {
        title: "Uniformidad:",
        icon: "blend",
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
    colorPalette: "BLUE",
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
        icon: "health",
        description:
          " Conserva la suavidad hasta por 90 días (según proceso y empaque).",
      },
      {
        title: "Menos Devoluciones:",
        icon: "down",

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
    colorPalette: "BROWN",
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
        icon: "cloud",

        description:
          "Miga húmeda y esponjosa que se siente fresca por más tiempo.",
      },
      {
        title: "Resiliencia:",
        icon: "resistance",

        description: "El pan recupera su forma (rebote) al presionarlo.",
      },
      {
        title: "Volumen:",
        icon: "boxes",
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
    colorPalette: "BLUE",
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
        icon: "shield",
        description:
          "Evita que el pan se colapse o pierda volumen tras el descongelado.",
      },
      {
        title: "Como Recién Horneado:",
        icon: "oven",
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
    colorPalette: "BLUE",
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
        icon: "resistance",

        description:
          "Mejora la elasticidad para que la tortilla se enrolle sin romperse.",
      },
      {
        title: "Anti-Pegado:",
        icon: "check",

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
    colorPalette: "BLUE",
  },
  {
    id: 6,
    title: "Ultrapan C+",
    subtitle: "La fórmula concentrada para el volumen perfecto.",
    category: "ARTESANAL",
    description:
      " Es un mejorante de alto rendimiento libre de bromato. Su fórmula concentrada está diseñada para masas que requieren fuerza y estabilidad sin modificar tu proceso tradicional.",
    image: "/assets/images/ultrapanc1.webp",
    benefits: [
      {
        title: "Volumen Superior:",
        icon: "boxes",
        description:
          "Estandariza el tamaño de tus piezas y mejora la estructura de la miga.",
      },
      {
        title: "Cero Bromato:",
        icon: "chemistry",

        description: "Pan más limpio y seguro.",
      },
      {
        title: "Versatilidad:",
        icon: "versatility",

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
    colorPalette: "BLUE",
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
        icon: "save",

        description: "Reduce tus costos sin sacrificar la calidad",
      },
      {
        title: "Rendimiento",
        icon: "performance",

        description:
          "Obtienes más piezas por bulto gracias a su alta absorción.",
      },
      {
        title: "Consistencia",
        icon: "consistency",

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
    colorPalette: "BLUE",
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
        icon: "fresh",

        description: "Evita el endurecimiento prematuro",
      },
      {
        title: "Ideal para Empaque",
        icon: "packaging",

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
    colorPalette: "BLUE",
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
        icon: "save",
        description: "Reduce costos de insumos (huevo) manteniendo la calidad",
      },
      {
        title: "Estructura Uniforme",
        icon: "consistency",
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
    colorPalette: "BLUE",
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

export const CONTACT_PAGE_TEXT = {
  title: "¿Tienes dudas sobre qué mejorante es ideal para tu proceso?",
  subtitle:
    "Nuestro equipo técnico está listo para asesorarte y encontrar la solución exacta para tu panadería o planta industrial.",
  additionalText: "En Enziquim, catalizamos el éxito de nuestros clientes.",
};

export const FAQ_SECTIONS: FAQSection[] = [
  {
    title: "Sobre el uso y aplicación",
    items: [
      {
        question:
          "¿Necesito modificar mi receta actual o comprar maquinaria nueva para usar sus mejorantes?",
        answer: [
          "No. La mayoría de nuestros productos, como Ultrapan C+ y Ultrapan G+, están diseñados para actuar sobre tu proceso base sin modificarlo. Funcionan perfectamente tanto en procesos artesanales directos como en aquellos sin cámaras de fermentación controlada.",
        ],
      },
      {
        question:
          "¿Qué producto me recomiendan para pan tipo francés o bolillo?",
        answer: [
          "Para pan francés y masas saladas, recomendamos Ultrapan C+ si buscas un concentrado de alto rendimiento, o Ultrapan G+ si buscas reducir costos en la receta tradicional. Para especialidades rústicas como baguettes o chapatas, Ultrapan Harina Completa MTM ofrece un acabado craquelado en la corteza.",
        ],
      },
      {
        question: "¿Tienen opciones libres de bromato?",
        answer: [
          "Sí. Ultrapan C+ es nuestro primer mejorante concentrado formulado totalmente libre de bromato, garantizando un producto más limpio y seguro.",
        ],
      },
    ],
  },
  {
    title: "Sobre ahorro y rendimiento",
    items: [
      {
        question:
          "¿Cómo puedo reducir mis costos de producción sin bajar la calidad?",
        answer: [
          "Ultrapan Dulce Plus sustituye el uso de huevo en masas dulces.",
          "Ultrapan G+ reduce la cantidad de grasa y mejora el costo-beneficio.",
          "Ultrapan 10,000 mejora el rendimiento por bulto al permitir mayor absorción de agua.",
        ],
      },
      {
        question: "¿Cómo evito que mis tortillas de harina se peguen o rompan?",
        answer: [
          "Para ello desarrollamos Ultra Mill Tortilla M1. Mejora la rollabilidad, evita que las tortillas se peguen en el empaque y reduce mermas y devoluciones.",
        ],
      },
    ],
  },
  {
    title: "Sobre vida de anaquel y conservación",
    items: [
      {
        question: "¿Cuánto tiempo puede durar mi pan suave?",
        answer: [
          "Dependiendo del proceso y almacenamiento, con Ultrapan Emulsoft Extender puedes conservar la suavidad de la miga hasta por 90 días. Ideal para pan de caja y productos de larga vida en anaquel.",
        ],
      },
      {
        question: "¿Tienen soluciones para masa o pan congelado?",
        answer: [
          "Sí. Ultrapan Congelado protege la estructura del pan durante la congelación y el descongelado, evitando deformaciones y pérdida de volumen.",
        ],
      },
    ],
  },
];
