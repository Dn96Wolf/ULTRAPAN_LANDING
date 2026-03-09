import { HomeSlide } from "@/interfaces/HomeSlides.interface";
import { ProductDetailInterface } from "@/interfaces/Product";
import { FAQSection } from "@/interfaces/Questions";

export const EMAIL_CONTACT = "ventas@enziquim.com";
export const SLOGAN = "En Enziquim, catalizamos el éxito de nuestros clientes";

export const EMAILREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

export const SOCIAL_MEDIA = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/enziquim/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Enziquim",
  }
];

export const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "#", labelKey: "nav.Industrias" as const },
  { href: "/contacto", labelKey: "nav.contact" as const },
  // { href: "/FAQ", labelKey: "nav.fqa" as const },
];

export const INDUSTRIAS_SUBMENU = [
  { href: "/artesanal", label: "Artesanal" },
  { href: "/industrial", label: "Industrial" },
];

export const NAME_PRODUCTS = [
  "Ultrapan",
  "Ultrapan 10,000",
  "Ultrapan Emulsoft Extender",
  "Ultrapan Emulsoft Plus",
  "Ultrapan Congelado",
  "Ultra Mill Tortilla M1",
  "Ultrapan C+",
  "Ultrapan G+",
  "Ultrapan Dulce Plus",
  "Ultrapan Emulsoft H",
];

export const HOME_SLIDES: HomeSlide[] = [
  {
    title: "ULTRAPAN",
    idProduct: 0,
    subtitle: "Conoce la linea completa de mejorantes para panificación",
    subtitle2: "",
    backgroundImage: "/assets/images/linea-ultrapan.webp",
    backgroundImageResponsive: "/assets/images/ultrapan-line-responsive.png",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: true,
    colorPalette: "SOFTBLUE",
    secondColorPalette: "GRAY",
    primaryButtonText: "Línea artesanal",
    secondButtonText: "Línea Industrial",
    primaryRoute: "artesanal",
    secondRoute: "industrial",
    backgroundColor: "#613924",
  },

  {
    title: "ULTRAPAN C+",
    idProduct: 6,
    subtitle: "Estandariza tu producción con",
    subtitle2:
      "Nuestro mejorante ultra concentrado. Obten una excelente relación costo beneficio.",
    backgroundImage: "/assets/images/ultrapan-c-portada.webp",
    backgroundImageResponsive: "/assets/images/ultrapan-c-sobre.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: false,
    colorPalette: "SOFTBLUE",
    secondColorPalette: "GRAY",
    primaryButtonText: "¡Compruébalo!",
    secondButtonText: "",
    primaryRoute: "productos/ultrapan-c-plus",
    secondRoute: "",
    backgroundColor: "#0c4a5a",
  },
  {
    title: "ULTRAPAN G+",
    idProduct: 7,
    subtitle: "La formulación de",
    subtitle2:
      "Permite estandarizar la producción y reducir la estructura de costos de la receta tradicional, sin cambiar el proceso.",
    backgroundImage: "/assets/images/ultrapan-g-portada.webp",
    backgroundImageResponsive: "/assets/images/ultrapan-g-sobre.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: false,
    colorPalette: "MUSTARD",
    secondColorPalette: "GRAY",
    primaryButtonText: "Conocer más",
    secondButtonText: "",
    primaryRoute: "productos/ultrapan-g-plus",
    secondRoute: "",
    backgroundColor: "#a0a468",
  },
  {
    title: "DULCE PLUS",
    idProduct: 8,
    subtitle: "Reduce hasta 2.5kg de huevo por saco de harina con",
    specialTitle: "ULTRAPAN",
    subtitle2:
      "El mejorante desarrollado para mantener la suavidad, humedad y frescura de la miga durante periodos largos.",
    backgroundImage: "/assets/images/ultrapan-dulce-portada.webp",
    backgroundImageResponsive: "/assets/images/ultrapandulceplus.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: false,
    colorPalette: "BROWN",
    secondColorPalette: "GRAY",
    primaryButtonText: "Me interesa",
    secondButtonText: "",
    primaryRoute: "productos/ultrapan-dulce-plus",
    secondRoute: "",
    backgroundColor: "#183270",
  },
];

export const PRODUCT_LIST: ProductDetailInterface[] = [
  {
    id: 1,
    title: "Ultrapan 10,000",
    route: "Ultrapan-diez-mill",
    subtitle: "Resiliencia máxima para líneas de alto volumen.",
    category: "INDUSTRIAL",
    description:
      "ULTRAPAN 10,000 es un mejorante diseñado para brindar una mejora sustancial en volumen, resiliencia y rendimiento en pan blanco tipo salado. Su combinación de enzimas y acondicionadores permite mantener la calidad del pan aún con variaciones en el tipo de harina o condiciones de proceso.",
    carouselImage: "/assets/images/ultrapan-10000.webp",
    mainImage: "/assets/images/ultrapan-mil-sobre.webp",
    image: "/assets/images/ultrapan-diez-mil-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-diez-mil-galeria-10.webp",
        alt: "Sobre",
      },
    ],
    benefits: [
      {
        title: "",
        icon: "/icons/mezclado.svg",
        description: "Tolerancia al mezclado intensivo",
        bgColor: "#613924",
      },
      {
        title: "",
        icon: "/icons/uniformidad.svg",

        description: "Mejor uniformidad de la miga y del color",
        bgColor: "#8c633d",
      },
      {
        title: "",
        icon: "/icons/bolillos.svg",
        description: "Mayor volumen y rendimiento por bulto",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/reduce.svg",
        description: "Mejora la elasticidad de la masa",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/resilenciaHorneado.svg",

        description: "Resiliencia al horneado y enfriamiento",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Pan francés artesanal e industrial",
      "Pan blanco en líneas de gran volumen",
      "Procesos con fermentación retardada o controlada",
    ],
    instructions: [
      {
        title: "",
        description: "132 g por cada 50 kg de harina (2 bultos)",
        bgColor: "#8c633d",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 25 sobres de 132 g",
        bgColor: "#8c633d",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title: "",
      bgColor: "#8c633d",
    },
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa, ácido ascórbico y mezcla de emulsificantes",
    advantages: [
      {
        title: "",
        icon: "/icons/desempeño.svg",
        description: "Excelente desempeño con todo tipo de harina",
        bgColor: "#74512b",
      },
      {
        title: "",
        icon: "/icons/herramientas.svg",
        description: "Adaptabilidad a procesos variables",
        bgColor: "#37a3b1",
      },
      {
        title: "",
        icon: "/icons/busqueda.svg",
        description: "Mejora visible desde el primer uso",
        bgColor: "#37a3b1",
      },
    ],

    colorPalette: "BROWN",
    keywords: [],
    backgroundColor: "#e2a865",
    textColor: "#fff",
    titleColor: "#613924",
  },
  {
    id: 2,
    title: "Ultrapan Emulsoft Extender",
    route: "Ultrapan Emulsoft Extender",
    subtitle: "Larga vida, Frescura hasta por 90 días.",
    category: "INDUSTRIAL",
    description:
      "Ultrapan Emulsoft Extender es un mejorante desarrollado para mantener la suavidad, humedad y frescura de la miga durante periodos prolongados. Su fórmula especializada ayuda a retardar la retrogradación del almidón, principal responsable del endurecimiento del pan, lo que permite extender significativamente la vida útil comercial del producto terminado sin comprometer su textura ni sabor",
    carouselImage: "/assets/images/emulsoft-extender.webp",
    mainImage: "/assets/images/ultrapan-emulsoft-extender.webp",
    image: "/assets/images/ultrapan-extender-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-extender-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-extender-detalles-10.webp",
        alt: "Sobre",
      },
    ],
    benefits: [
      {
        title: "",
        icon: "/icons/recienHorneado.svg",
        description: "Conserva la suavidad de la miga hasta por 90 días",
        disclaimer: "*Resultados dependen de proceso y almacenamiento",
        bgColor: "#402619",
      },
      {
        title: "",
        icon: "/icons/flechasAbajo.svg",
        description: "Reduce la retrogradación del almidón",
        bgColor: "#502e14",
      },
      {
        title: "",
        icon: "/icons/resilenciaHorneado.svg",
        description: "Mejora la resistencia al congelado/descongelado",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/prolonga.svg",

        description: "Mayor vida de anaquel sin afectar sabor ni textura",
        bgColor: "#44bdcb",
      },
    ],
    applications: ["Pan de caja de larga vida", "Pan dulce empacado"],
    instructions: [
      {
        title: "",
        description: "0.5% a 1% sobre el peso de la harina",
        bgColor: "#8c633d",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 25 kg.",
        bgColor: "#8c633d",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title: "",
      bgColor: "#8c633d",
    },
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa, amilasa maltogénica y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/reduceDevoluciones.svg",
        description: "Reduce devoluciones por pérdida de frescura",
        bgColor: "#372015",
      },
      {
        title: "",
        icon: "/icons/mejorCalidad.svg",
        description: "Mejora la calidad percibida del producto en anaquel",
        bgColor: "#372015",
      },
      {
        title: "",
        icon: "/icons/optimizarProcesos.svg",
        description: "Optimiza procesos de distribución nacional o exportación",
        bgColor: "#372015",
      },
    ],

    colorPalette: "BROWN",
    keywords: [],
    backgroundColor: "#683c12",
    textColor: "#fff",
    titleColor: "#402619",
  },
  {
    id: 3,
    title: "Ultrapan Emulsoft Plus",
    route: "Ultrapan Emulsoft Plus",
    subtitle: "Suavidad premium para tu pan dulce.",
    category: "INDUSTRIAL",
    description:
      "Ultrapan Emulsoft Plus es un mejorante para masas dulces que combina emulsificantes con enzimas funcionales para mejorar la suavidad, frescura y resiliencia del pan. Ideal para procesos artesanales e industriales donde se busca una experiencia sensorial superior sin cambiar el proceso tradicional.",
    carouselImage: "/assets/images/emulsoftpuls.png",
    mainImage: "/assets/images/ultrapan-emulsoft-plus.webp",
    image: "/assets/images/ultrapan-plus-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-plus-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-plus-detalles-10.webp",
        alt: "Sobre",
      },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/birutas.svg",
        description: "Mayor suavidad y humedad en la miga",
        disclaimer: "*Resultados dependen de proceso y almacenamiento",
        bgColor: "#613924",
      },
      {
        title: "",
        icon: "/icons/bolillos.svg",
        description: "Mejora el volumen sin alterar la receta base",
        bgColor: "#8d725e",
      },
      {
        title: "",
        icon: "/icons/bolillito.svg",
        description: "Estructura uniforme y esponjosa",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/amaza.svg",
        description: "Excelente resiliencia (rebote tras presión)",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/recienHorneado.svg",
        description: "Mejora la percepción de frescura por más tiempo",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Bollería artesanal (conchas, roles, pan de leche)",
      "Pan de caja tradicional o tipo brioche",
      "Procesos con o sin premezcla industrial",
    ],
    instructions: [
      {
        title: "",
        description: "0.5% a 1% sobre el peso de harina",
        bgColor: "#8c633d",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 25 kg.",
        bgColor: "#8c633d",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title: "",
      bgColor: "#8c633d",
    },
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/facilIncorporación.svg",
        description: "Fácil incorporación a cualquier receta",
        bgColor: "#74522b",
      },
      {
        title: "",
        icon: "/icons/compatibleCon.svg",
        description: "Compatible con aditivos existentes",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/percepcion.svg",
        description:
          "Mejora la percepción del producto terminado sin cambiar sabor",
        bgColor: "",
      },
    ],
    colorPalette: "BROWN",
    keywords: [],
    backgroundColor: "#e3c4a7",
    textColor: "#613924",
    titleColor: "#613924",
  },
  {
    id: 4,
    title: "Ultrapan Congelado",
    route: "Ultrapan Congelado",
    subtitle: "Estabilidad total para la cadena de frío.",
    category: "INDUSTRIAL",
    description:
      "Ultrapan Congelado es un mejorante funcional formulado para garantizar estabilidad, frescura y estructura en productos de panificación sometidos a procesos de congelación. Su mezcla de enzimas y emulsificantes permite conservar la calidad del pan durante el almacenamiento, descongelado y horneado, asegurando un producto final con volumen, miga suave y excelente presentación.",
    carouselImage: "/assets/images/congelado.png",
    mainImage: "/assets/images/ultrapan-congelado.webp",
    image: "/assets/images/ultrapan-congelado-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-congelado-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-3.webp",

        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-4.webp",

        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-congelado-detalles-10.webp",
        alt: "Sobre",
      },
    ],
    benefits: [
      {
        title: "",
        icon: "/icons/bolillos.svg",
        description: "Conserva el volumen y forma del pan tras descongelado",
        disclaimer: "",
        bgColor: "#402619",
      },
      {
        title: "",
        icon: "/icons/reduce.svg",
        description:
          "Reduce el daño estructural de la red de gluten durante el congelamiento",
        bgColor: "#684322",
      },
      {
        title: "",
        icon: "/icons/birutas.svg",
        description: "Mejora la suavidad y humedad de la miga",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/amaza.svg",
        description:
          "Aporta resiliencia y elasticidad a la masa, favoreciendo su recuperación",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/prolonga.svg",
        description:
          "Prolonga la vida de anaquel del pan terminado, sin uso de conservadores",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Pan crudo congelado (baguettes, bollos, panecillos)",
      "Pan precocido congelado para horneado en tienda",
      "Bollería dulce congelada o productos listos para hornear",
      "Pan de caja para exportación o líneas de foodservice",
    ],
    instructions: [
      {
        title: "",
        description:
          "0.5% a 1.0% sobre el peso de la harina. Equivalente a 5–10 g/kg, ajustable según tipo de receta y proceso",
        bgColor: "#8c633d",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 25 kg.",
        bgColor: "#8c633d",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title: "",
      bgColor: "#8c633d",
    },
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa, amilasa maltogénica, glucosa oxidasa y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/evitaPerdidas.svg",
        description:
          "Evita mermas por pérdida de volumen o deformación tras el descongelado",
        bgColor: "#372015",
      },
      {
        title: "",
        icon: "/icons/recienHorneado.svg",

        description:
          "Mejora la calidad sensorial del pan como si fuera recién horneado",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/mejora.svg",
        description:
          "Aumenta la eficiencia y versatilidad de las líneas industriales congeladas",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/copo.svg",
        description:
          "Compatible con IQF, fermentación controlada y líneas automatizadas",
        bgColor: "",
      },
    ],
    colorPalette: "BROWN",
    keywords: [],
    backgroundColor: "#9a6a34",
    textColor: "#fff",
    titleColor: "#402619",
  },
  {
    id: 5,
    title: "Ultra Mill Tortilla M1",
    route: "Ultra Mill Tortilla M1",
    subtitle: "La solución para la tortilla de harina perfecta",
    category: "INDUSTRIAL",
    description:
      "Ultra Mill Tortilla M1 es una mezcla optimizada de enzimas y emulsificantes que mejora la textura, elasticidad y vida útil de la tortilla de harina. Ideal para líneas de producción continua donde se requiere estandarización y calidad sensorial superior.",
    carouselImage: "/assets/images/tortilla.png",
    mainImage: "/assets/images/ultrapan-tortilla.webp",
    image: "/assets/images/ultrapan-tortilla-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-tortilla-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-tortilla-detalles-10.webp",
        alt: "Sobre",
      },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/aumentoSuavidad.svg",
        description: "Aumenta la suavidad de la tortilla",
        disclaimer: "",
        bgColor: "#2e509f",
      },
      {
        title: "",
        icon: "/icons/rolabilidad.svg",
        description: "Mejora la rollabilidad sin romperse",
        bgColor: "#2e509f",
      },
      {
        title: "",
        icon: "/icons/uniformidadGrasa.svg",
        description: "Uniformidad en la distribución de grasa",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/copo.svg",
        description: "Mayor frescura en refrigeración o empaque",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/amaza.svg",
        description: "Resiliencia y flexibilidad por más tiempo",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Tortilla de harina empacada",
      "Procesos con laminado o extrusión",
      "Producción industrial o maquila de marcas blancas",
    ],
    instructions: [
      {
        title: "",
        description: "0.05% a 0.1% sobre el peso de la harina (0.5 a 1 g/kg)",
        bgColor: "",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 25 kg.",
        bgColor: "",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title: "",
      bgColor: "#8c633d",
    },
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa, amilasa maltogénica y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/herramientas.svg",
        description:
          "Evita mermas por pérdida de volumen o defomración tras el descongelado",
        bgColor: "#183270",
      },
      {
        title: "",
        icon: "/icons/evitaPerdidas.svg",
        description:
          "Mejora la calidad sensorial del pan como si fuera recien horneado",
        bgColor: "#183270",
      },
      {
        title: "",
        icon: "/icons/experiencia.svg",
        description:
          "Aumenta la eficienia y versatilidad de las lineas industriales congeladas",
        bgColor: "#183270",
      },
    ],
    colorPalette: "BROWN",
    keywords: [],
    backgroundColor: "#e2a865",
    textColor: "#fff",
    titleColor: "#e2a865",
  },
  {
    id: 6,
    title: "Ultrapan C+",
    route: "ultrapan c plus",
    subtitle: "La fórmula concentrada para el volumen perfecto.",
    category: "ARTESANAL",
    description:
      "Ultrapan C+ es un mejorante panario libre de bromato con una formulación altamente concentrada que mejora la tolerancia de la masa durante el amasado y fermentación, además de estandarizar el volumen y la textura del pan. Su acción está dirigida a procesos artesanales que requieren control sin modificar el proceso base.",
    carouselImage: "/assets/images/sobre-ultrapan-c-plus.webp",
    mainImage: "/assets/images/ultrapan-c-sobre.webp",
    image: "/assets/images/ultrapan-c-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-c-galeria-1.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-2.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-3.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-4.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-5.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-6.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-7.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-8.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-9.jpg",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-galeria-10.jpg",
        alt: "Sobre",
      },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/masaMadre.svg",
        description: "Mayor volumen y mejor estructura de la miga",
        bgColor: "#042932",
      },
      {
        title: "",
        icon: "/icons/birotes.svg",
        description: "Textura suave y uniforme",
        bgColor: "#328e98",
      },
      {
        title: "",
        icon: "/icons/tolerancia.svg",
        description: "Tolerancia a fermentaciones cortas o directas",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/prolonga.svg",
        description: "Reducción de variabilidad entre lotes",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/recetario.svg",
        description: "No requiere cambios en la receta o el proceso",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Pan francés",
      "Pan blanco artesanal (masas saladas)",
      "Procesos sin cámaras de fermentación controlada",
    ],

    instructions: [
      {
        title: "",
        description: "Concentrada (10 g por bulto de 25 kg de harina).",
        bgColor: "#37a3b1",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 100 sobres de 10 g.",
        bgColor: "#37a3b1",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title:
        "No necesitas cambiar tu receta ni comprar maquinaria nueva; funciona en procesos directos y sin cámaras de fermentación.",
      bgColor: "#37a3b1",
    },
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa, amilasa maltogénica y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/costoBeneficio.svg",
        description: "Excelente relación costo-beneficio",
        bgColor: "#37a3b1",
      },
      {
        title: "",
        icon: "/icons/panCaja.svg",
        description: "Estandarización en condiciones artesanales",
        bgColor: "#37a3b1",
      },
      {
        title: "",
        icon: "/icons/primero.svg",
        description: "Primer mejorante concentrado sin bromato",
        bgColor: "#37a3b1",
      },
    ],

    colorPalette: "SOFTBLUE",
    keywords: [],
    backgroundColor: "#0c4a5a",
    textColor: "#fff",
    titleColor: "#0c4a5a",
  },
  {
    id: 7,
    title: "Ultrapan G+",
    route: "ultrapan g plus",
    subtitle: "El mejorante todo terreno para tu negocio.",
    category: "ARTESANAL",
    description:
      "Mejorante diseñado para pan blanco y masas saladas, que ofrece una eficiencia económica y tecnológica inigualable en el mercado.",
    description2:
      "Su formulación permite estandarizar la producción y reducir la estructura de costos de la receta tradicional, sin modificar el proceso.",
    carouselImage: "/assets/images/sobre-ultrapan-g-plus.webp",
    mainImage: "/assets/images/ultrapan-g-sobre.webp",
    image: "/assets/images/ultrapan-g-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-g-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-detalles-10.webp",
        alt: "Sobre",
      },
    ],
    benefits: [
      {
        title: "",
        icon: "/icons/birutas.svg",

        description: "Consistencia en el volumen y la estructura de la miga.",
        bgColor: "#777940",
      },
      {
        title: "",
        icon: "/icons/bolillos.svg",

        description: "Mayor rendimiento por bulto.",
        bgColor: "#8b8e54",
      },
      {
        title: "",
        icon: "/icons/recetario.svg",

        description: "No requiere cambios en la receta ni en el proceso.",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/mezclado.svg",
        description: "Alta tolerancia al proceso.",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Ideal para procesos directos",
      "Ideal para todo tipo de masas saladas",
      "Recomendado para todo tipo de pan francés",
    ],
    instructions: [
      {
        title: "",
        description:
          "62.5 g por bulto de harina de 25 kg. 2.5 g por kilo de harina.",
        bgColor: "#37a3b1",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 50 sobres de 62.5 g.",
        bgColor: "#37a3b1",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title:
        "No necesitas cambiar tu receta ni comprar maquinaria nueva; funciona en procesos directos y sin cámaras de fermentación.",
      bgColor: "#777940",
    },
    ingredients:
      "Enzimas (ɑ-amilasa, xilanasa, lipasa, glucosa oxidasa), emulsificantes yoxidantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/costoBeneficio.svg",
        description: "Excelente relación costo beneficio.",
        bgColor: "#777940",
      },
      {
        title: "",
        icon: "/icons/Grasa.svg",
        description: "Permite reducir la cantidad de grasa",
        bgColor: "#777940",
      },
      {
        title: "",
        icon: "/icons/Agua.svg",
        description: "Tolera más agua",
        bgColor: "#777940",
      },
    ],

    colorPalette: "MUSTARD",
    keywords: [],
    backgroundColor: "#a0a468",
    textColor: "#fff",
    titleColor: "#777940",
  },
  {
    id: 8,
    title: "Ultrapan Dulce Plus",
    route: "Ultrapan Dulce Plus",
    subtitle: "",
    category: "ARTESANAL",
    description:
      "Ultrapan Dulce Plus es un mejorante desarrollado para mantener la suavidad, humedad y frescura de la miga durante periodos prolongados. Su fórmula especializada ayuda a retardar la retrogradación del almidón, principal responsable del endurecimiento del pan, ´lo que permite extender significativamente la vida útil comercial del producto terminado sin comprometer su textura ni sabor",
    carouselImage: "/assets/images/sobre-dulce-plus.webp",
    mainImage: "/assets/images/ultrapan-dulceplus.webp",
    image: "/assets/images/ultrapan-dulce-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-dulce-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulce-detalles-10.webp",
        alt: "Sobre",
      },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/amaza.svg",

        description: "Ayuda en disminución de tiempos de reposo.",
        bgColor: "#2e509f",
      },
      {
        title: "",
        icon: "/icons/bolillos.svg",

        description: "Mayor volumen del pan",
        bgColor: "#234188",
      },
      {
        title: "",
        icon: "/icons/birutas.svg",

        description: "Miga más suave",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/prolonga.svg",
        description: "Mayor vidad de anaquel sin afectar sabor ni textura",
        disclaimer: "*Resultados dependen de proceso y almacenamiento",
        bgColor: "",
      },
    ],
    applications: [
      "Concha, cuernitos, rebanadas.",
      "Pan de temporada (rosca de reyes y pan de muerto)",
      "Pan dulce empacado",
      "Pan de bollería",
    ],
    ingredients:
      "Enzima ɑ amilasa, xilanasa, fosfolipasa, amilasa maltogénica y mezcla de emulsificantes.",
    instructions: [
      {
        title: "",
        description: "0.5% a 1% sobre el peso de la harina",
        bgColor: "",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con sobres de 250 g y bulto de 5 kg y 25 kg",
        bgColor: "",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title:
        "No necesitas cambiar tu receta ni comprar maquinaria nueva; funciona en procesos directos y sin cámaras de fermentación.",
      bgColor: "#",
    },

    advantages: [
      {
        title: "",
        icon: "/icons/huevito.svg",
        description:
          "Ayuda a reducirel uso de huevo en la receta (panes fermentados)",
        bgColor: "#2e509f",
      },
      {
        title: "",
        icon: "/icons/herramientas.svg",
        description: "Adaptabilidad a procesos variables",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/panCaja.svg",
        description: "Estandarización en condiciones artesanales",
        bgColor: "",
      },
    ],

    colorPalette: "BLUE",
    keywords: [],
    backgroundColor: "#183270",
    textColor: "#fff",
    titleColor: "#183270",
  },
  {
    id: 9,
    title: "Ultrapan Emulsoft H",
    route: "Ultrapan Emulsoft H",
    subtitle: "Optimización de costos: Suavidad sin huevo.",
    category: "ARTESANAL",
    description:
      "Ultrapan Emulsoft H es un mejorante para masas dulces formulado con emulsificantes y enzimas funcionales para mejorar la suavidad, la frescura y la resiliencia del pan.",
    description2:
      "Su capacidad emulsificante permite sustituir el uso de huevo, optimizando costos sin comprometer la calidad.",
    carouselImage: "/assets/images/emulsoft-h.webp",
    mainImage: "/assets/images/ultrapan-emulsoft-h.webp",
    image: "/assets/images/ultrapan-emulsoft-h-fondo.webp",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-1.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-2.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-3.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-4.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-5.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-6.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-7.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-8.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-9.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h-detalles-10.webp",
        alt: "Sobre",
      },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/birutas.svg",
        description: "Mayor suavidad y humedad en la miga",
        bgColor: "#613924",
      },
      {
        title: "",
        icon: "/icons/bolillos.svg",
        description: "Mejora el volumen sin alterar la receta base",
        bgColor: "#613924",
      },
      {
        title: "",
        icon: "/icons/bolillito.svg",
        description: "Estructura uniforme y esponjosa",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/amaza.svg",
        description: "Excelente resiliencia (rebote tras presión)",
        bgColor: "",
      },
    ],
    applications: [
      "Bollería artesanal (conchas, roles, pan de leche)",
      "Pan de caja tradicional o tipo brioche",
    ],
    ingredients: "ɑ amilasa, xilanasa, fosfolipasa y mezcla de emulsificantes.",
    instructions: [
      {
        title: "",
        description: "0.5% a 1% sobre el peso de harina (5 a 10 g/kg)",
        bgColor: "",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja de 25 kg",
        bgColor: "",
        icon: "/icons/caja.svg",
      },
    ],
    valueProposal: {
      title:
        "No necesitas cambiar tu receta ni comprar maquinaria nueva; funciona en procesos directos y sin cámaras de fermentación.",
      bgColor: "#",
    },
    advantages: [
      {
        title: "",
        icon: "/icons/facilIncorporación.svg",
        description: "Fácil incorporación a cualquier receta",
        bgColor: "#7d521f",
      },
      {
        title: "",
        icon: "/icons/compatibleCon.svg",
        description: "Compatible con aditivos existentes",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/optimizaCostos.svg",
        description: "Permite la optimización de costos",
        bgColor: "",
      },
    ],

    colorPalette: "BLUE",
    keywords: [],
    backgroundColor: "#c4b5ac",
    textColor: "#613924",
    titleColor: "#613924",
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
    title: "Uso y aplicación",
    items: [
      {
        question: "¿Cómo se incorpora el mejorante a mi receta tradicional?",
        answer: [
          "Es muy sencillo. Nuestros mejorantes son de fácil incorporación a cualquier receta. Basta con agregarlos directamente a la harina y mezclar de forma normal.",
        ],
      },
      {
        question:
          "¿Tengo que modificar mis tiempos de amasado o fermentación? ",
        answer: [
          "No, por lo general no requiere cambios en la receta ni en el proceso de elaboración. Al contrario, el uso de nuestros mejorantes te brinda una mayor tolerancia durante el proceso de amasado y fermentación, aportando estabilidad a tu producción.",
        ],
      },
      {
        question:
          "¿Puedo utilizar estos mejorantes si ya empleo otros aditivos en mi panadería?",
        answer: [
          "Sí, nuestros mejorantes son totalmente compatibles con los aditivos existentes que ya utilices en tus formulaciones.",
        ],
      },
      {
        question:
          "¿Qué pasa si mi proveedor de harina cambia o me entrega una calidad diferente?",
        answer: [
          "Ese es uno de los mayores beneficios. El mejorante te ayuda a estandarizar el resultado final de tu producto. Esto te permite mantener la calidad de tu pan incluso si enfrentas variaciones en el tipo de harina, harinas de fuerza media o condiciones cambiantes en tu proceso.",
        ],
      },
    ],
  },
  {
    title: "Ahorro y rentabilidad ",
    items: [
      {
        question:
          "¿De qué manera me ayuda el mejorante a reducir los costos de mi receta? ",
        answer: [
          "Su formulación está diseñada para reducir la estructura de costos de tu receta tradicional. Dependiendo de tu proceso, el poder catalítico y emulsificante te permite optimizar ingredientes costosos; por ejemplo, puedes sustituir el uso de huevo o incluso eliminar la grasa (manteca o margarina) sin que esto afecte el volumen o la suavidad de tu pan.",
        ],
      },
      {
        question: "¿El uso de mejorantes aumenta el rendimiento de mi masa? ",
        answer: [
          "Totalmente. Al utilizarlos, notarás un mayor rendimiento y volumen por cada bulto de harina. Además, ciertas fórmulas permiten que tu masa tolere una mayor absorción de agua sin colapsar, lo que incrementa el peso final de tu masa y tu rentabilidad.",
        ],
      },
    ],
  },
  {
    title: "Ventajas generales del producto ",
    items: [
      {
        question: "¿Qué mejoras notará mi cliente en el pan terminado? ",
        answer: [
          "Tus clientes percibirán una mejora integral en la textura, el volumen y la apariencia del pan. La miga tendrá una estructura más uniforme y esponjosa , con mayor suavidad y humedad. Además, aporta una excelente resiliencia, lo que significa que el pan recupera su forma (rebote) después de ser presionado.",
        ],
      },
      {
        question: "¿Me ayuda a que el pan no se haga duro tan rápido? ",
        answer: [
          "Sí, los mejorantes prolongan significativamente la vida de anaquel de tus productos. Ayudan a mantener la percepción de frescura por más tiempo, lo que reduce tus mermas por devoluciones o pan que pierde su suavidad rápidamente.",
        ],
      },
    ],
  },
];
