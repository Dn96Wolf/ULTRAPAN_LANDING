import { HomeSlide } from "@/interfaces/HomeSlides.interface";
import {
  ProductColorPalette,
  ProductDetailInterface,
} from "@/interfaces/Product";
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
  },
  // {
  //   name: "Instagram",
  //   url: "https://www.instagram.com/enziquim/",
  // },
];

export const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "#", labelKey: "nav.Industrias" as const },
  // { href: "/historia", labelKey: "nav.history" as const },
  { href: "/contacto", labelKey: "nav.contact" as const },
  { href: "/FAQ", labelKey: "nav.fqa" as const },
];

export const INDUSTRIAS_SUBMENU = [
  { href: "/artesanal", label: "Artesanal" },
  { href: "/industrial", label: "Industrial" },
];

export const HOME_SLIDES: HomeSlide[] = [
  {
    title: "ULTRAPAN",
    idProduct: 0,
    subtitle: "Conoce la linea completa de mejorantes para panificación",
    subtitle2: "",
    backgroundImage: "/assets/images/ultrapan-line.jpg",
    backgroundImageResponsive: "/assets/images/main-responsive.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: true,
    colorPalette: "BROWN",
    secondColorPalette: "GRAY",
    primaryButtonText: "Línea artesanal",
    secondButtonText: "Línea Industrial",
    primaryRoute: "artesanal",
    secondRoute: "industrial",
  },

  {
    title: "ULTRAPAN C+",
    idProduct: 6,
    subtitle: "Estandariza tu producción con",
    subtitle2:
      "Nuestro mejorante ultra concentrado. Obten una excelente relación costo beneficio",
    backgroundImage: "/assets/images/ultrapan-c-portada.jpg",
    backgroundImageResponsive: "/assets/images/sobre-ultrapan-c-plus.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: false,
    colorPalette: "SOFTBLUE",
    secondColorPalette: "GRAY",
    primaryButtonText: "¡Compruébalo!",
    secondButtonText: "",
    primaryRoute: "productos/ultrapan-c-plus",
    secondRoute: "",
  },
  {
    title: "ULTRAPAN G+",
    idProduct: 7,
    subtitle: "La formulación de",
    subtitle2:
      "permite estandarizar la producción y reducir la estructura de costos de la receta tradicional, sin cambiar el proceso",
    backgroundImage: "/assets/images/ultrapan-g-portada.jpg",
    backgroundImageResponsive: "/assets/images/sobre-ultrapan-g-plus.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: false,
    colorPalette: "MUSTARD",
    secondColorPalette: "GRAY",
    primaryButtonText: "Conocer más",
    secondButtonText: "",
    primaryRoute: "productos/ultrapan-g-plus",
    secondRoute: "",
  },
  {
    title: "DULCE PLUS",
    idProduct: 8,
    subtitle: "Reduce hasta 2.5kg de huevo por saco de harina con",
    specialTitle: "ULTRAPAN",
    subtitle2:
      "El mejorante desarrollado para mantener la suavidad, humedad y frescura de la miga durante periodos largos",
    backgroundImage: "/assets/images/ultrapan-dulce-plus-portada.jpg",
    backgroundImageResponsive: "/assets/images/sobre-dulce-plus.webp",
    ribbonClass: "page-module___8aEwW__bg-brown-overlay",
    action: true,
    secondAction: false,
    colorPalette: "BLUE",
    secondColorPalette: "GRAY",
    primaryButtonText: "Me interesa",
    secondButtonText: "",
    primaryRoute: "productos/ultrapan-dulce-plus",
    secondRoute: "",
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
      "Ultapan 10,000 es un mejorante diseñado para brindar una mejora sustancial en volumen, resiliencia y rendimiento en pan blanco tipo salado. Su combinanción de enzimas y acondicionadores permite mantener la calidad el pan aún con variaciones en el tipo de harina o condiciones de proceso",
    carouselImage: "/assets/images/ultrapan-10000.webp",
    mainImage: "/assets/images/ultrapan-mil-sobre.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/ultrapan-mil-sobre.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-10000.webp",

        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-10000.webp",

        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-10000.webp",
        alt: "main",
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

        description: "Mayor volumen y rendimeinto por bulto",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/reduce.svg",

        description: "Mejora la eslasticidad de la masa",
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
      "Pan frances artesanal e industrial",
      "Pan blanco en lineas de gran volumen",
      "Procesos con fermentación retardada o controlada",
    ],
    instructions: [
      {
        title: "",
        description: "132 g por  cada 50 kg de harina (2 bultos)",
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
      "Enzima α amilaxa, xilanasa, fosfolipasa, ácido ascórbico y mezcla de emulsificantes",
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
      "Ultrapan Emulsoft Extender e sun mejorante dearrollado para matener la suavidad y frescura de la miga durante periodos prolongados. Su formula especializada ayuda a retardar la retrogradación del almidón, princpal respnsable del endurecimeinto del pan, lo que permite extender significativamente la vida útil comercial del producto terminado sin comprometer su textura ni sabor.",
    carouselImage: "/assets/images/emulsoft-extender.webp",
    mainImage: "/assets/images/ultrapan-emulsoft-extender.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/emulsoft-extender.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-extender.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-extender.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-extender.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-extender.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-extender.webp",
        alt: "Sobre",
      },

      // {
      //   src: "/assets/images/ultrapan-emulsoft-extender.webp",
      //   alt: "main",
      // },
    ],
    benefits: [
      {
        title: "",
        icon: "/icons/recienHorneado.svg",

        description: "Conserva la suavidad de la migra hasta por 90 días*",
        disclaimer: "*Resultados dependen de proceso y almacenamiento",
        bgColor: "#402619",
      },
      {
        title: "",
        icon: "/icons/flechasAbajo.svg",
        description: "Reduce la retrogradación del almidon",
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

        description: "Mayor vida de anaquel sin afectar sabor ni textura.",
        bgColor: "#44bdcb",
      },
    ],
    applications: ["Pan de caja de larga vida", "Pan dulce empacado"],
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
      "Enzima α amilaxa, xilanasa, fosfolipasa, ácido ascórbico y mezcla de emulsificantes",
    advantages: [
      {
        title: "",
        icon: "/icons/reduceDevoluciones.svg",
        description: "Reduce devoluciones por pérdida de frescura.",
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
        description: "Optimiza proceso de distribución nacional o exportación",
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
      "Ultrapan Emulsoft Plus es un mejorante para masas dulces que combina emulsificantes con enzimas funcionales para mejorar la suavidad, frescura y resiliencia del pan. Ideal para procesos artesanales e industriales donde se busca una esperiencia sensorial superior sin cambiar el proceso tradicional.",
    carouselImage: "/assets/images/emulsoftpuls.png",
    mainImage: "/assets/images/ultrapan-emulsoft-plus.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/emulsoftpuls.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoftpuls.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoftpuls.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoftpuls.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoftpuls.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoftpuls.png",
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
      "Bolleria artesanal (conchas, roles, pan de leche)",
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
      "Enzima α amilasa, xilanasa, fosfolipasa y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/facilIncorporación.svg",
        description: "Fácil de incorporación a cualquier receta",
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
      "Ultrapan congelado es un mejorante funcional formulado para garantizar estabiliad, frescura y estructura en productos de panificación sometidos a procesos de congelación. Su mezcla de enzimas y emulsificantes permite conservar la calidad del pan durante el almacenamiento, descongelado y horneado, asegurando un producto final con volumen, miga suave y excelente presentación",
    carouselImage: "/assets/images/congelado.png",
    mainImage: "/assets/images/ultrapan-congelado.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
      {
        src: "/assets/images/congelado.png",
        alt: "Sobre",
      },
    ],
    benefits: [
      {
        title: "",
        icon: "/icons/bolillos.svg",
        description: "Conserva el volumen y fomras del pan tras descongelado",
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
          "Aporta resiliencia y elasticidad a la masa, favoreciendo su recuperación.",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/prolonga.svg",
        description:
          "Prolonga la vida de anaquel del pan terminado, sin uso de conseradores",
        bgColor: "#44bdcb",
      },
      {
        title: "",
        icon: "/icons/optimiza.svg",
        description: "Optimiza",
        bgColor: "#44bdcb",
      },
    ],
    applications: [
      "Pan crudo congelado (baguettes, bollos, panecillos)",
      "Pan precocido congelado para horneado en tienda",
      "Bolleria dulce congelada o productos listos para hornear",
      "Pan de caja para exportación o lineas de foodservice",
    ],
    instructions: [
      {
        title: "",
        description:
          "0.5% a 1% sobre el peso de harina. Equivale a 5 - 10 g/kg, ajustable según tipo de receta y proceso",
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
      "Enzima α amilasa, xilanasa, fosfolipasa, amilasa maltogénica, glucosa oxidasa y mezcla de emulsificantes.",
    advantages: [
      {
        title: "",
        icon: "/icons/evitaPerdidas.svg",
        description:
          "Evita mermas por pérdida de volumen o defomración tras el descongelado",
        bgColor: "#372015",
      },
      {
        title: "",
        icon: "/icons/recienHorneado.svg",

        description:
          "Mejora la calidad sensorial del pan como si fuera recien horneado",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/mejora.svg",

        description:
          "Aumenta la eficienia y versatilidad de las lineas industriales congeladas",
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/copo.svg",
        description:
          "Compatible con IQF, fermetanción controlada y lineas automatizadas",
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
      "Ultra Mil Tortilla M1 es una mezcla optimizada de enzimas y emulsificantes que mejora la textura, elasticidad y vida útil de la tortilla de harina. Ideal para lineas de producción continua donde se requiere estandarización y calidad sensorial superior.",
    carouselImage: "/assets/images/tortilla.png",
    mainImage: "/assets/images/ultrapan-tortilla.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/tortilla.png",
        alt: "Sobre",
      },
       {
        src: "/assets/images/tortilla.png",
        alt: "Sobre",
      },
       {
        src: "/assets/images/tortilla.png",
        alt: "Sobre",
      },
       {
        src: "/assets/images/tortilla.png",
        alt: "Sobre",
      },
       {
        src: "/assets/images/tortilla.png",
        alt: "Sobre",
      },
       {
        src: "/assets/images/tortilla.png",
        alt: "Sobre",
      },
  
      // {
      //   src: "/assets/images/ultrapan-tortilla.webp",
      //   alt: "main",
      // },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/aumentoSuavidad.svg",
        description: "Aumnetar la suavidad de la tortilla",
        disclaimer: "",
        bgColor: "#2e509f",
      },
      {
        title: "",
        icon: "/icons/rolabilidad.svg",
        description: "Mejora la rollabilidad sin romperse",
        bgColor: "",
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
      "Producción industria o maquila de marcas blancas",
    ],
    instructions: [
      {
        title: "",
        description: "0.05% a 0.1% sobre el peso de la harina",
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
      "Enzima α amilasa, xilanasa, fosfolipasa, amilasa maltogénica, glucosa oxidasa y mezcla de emulsificantes.",
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
        bgColor: "",
      },
      {
        title: "",
        icon: "/icons/experiencia.svg",
        description:
          "Aumenta la eficienia y versatilidad de las lineas industriales congeladas",
        bgColor: "",
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
      "Ultapan C+ es un mejorante panario libre de bromato con una formulación altamente concentrada que mejora la tolerancia de la masa durante el amasado y fermentación, además de estandarizar el volumen y la textura del pan. Su acción esta dirigida a procesos artesanales que requieren control sin modificar el proceso base",
    carouselImage: "/assets/images/sobre-ultrapan-c-plus.webp",
    mainImage: "/assets/images/ultrapan-c-sobre.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/sobre-ultrapan-c-plus.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-c-sobre.webp",
        alt: "main",
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
      "Pan frances",
      "Pan blanco artesanal (masas saladas)",
      "Procesos sin cámaras de fermentacion controlada",
    ],

    instructions: [
      {
        title: "",
        description: "Concentrada (10 g por bulto de 25 kg de harina)",
        bgColor: "#37a3b1",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con 100 sobres de 10g.",
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
      "Enzima (α amilaxa, xilanasa, lipasa, glucosa oxidasa), emulsificantes y oxidantes",
    advantages: [
      {
        title: "",
        icon: "/icons/costoBeneficio.svg",
        description: "Excelente relación costo beneficio",
        bgColor: "#37a3b1",
      },
      {
        title: "",
        icon: "/icons/panCaja.svg",
        description: "Estandarización en condiciones artesanals ",
        bgColor: "#37a3b1",
      },
      {
        title: "",
        icon: "/icons/primero.svg",
        description: "Primer mejorante concentrado",
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
      "Mejorante diseñado para pan blanco y masas saladas, que ofrece una eficiencia económica y tecnológica inigualable en el mercado. Su formulación permite estandarizar la produccíon y reduri la estructura de costos de la recta tradicioanl, sin modificar el proceso",
    carouselImage: "/assets/images/sobre-ultrapan-g-plus.webp",
    mainImage: "/assets/images/ultrapan-g-sobre.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/sobre-ultrapan-g-plus.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-g-sobre.webp",
        alt: "main",
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
        description: "Alta tolerancia al proceso",
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
        description: "Caja con 60 sobres de 62.5 g.",
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
      "Enzima α amilaxa, fosfolipasa, amilasa maltogénica y mezcla de emulsificantes",
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
      "Ultrapan Dulce Plus es un mejorante desarrollado para mantener la suavidad, humedad y frescura de la miga durante periodos prolongados. Su formula especializada ayuda a retardar la retrogradación del almidón, principal responsable del endurecimeinto del pan, lo que permite extender significativamente la vida útil comercial del producto terminado sin comprometer su textura ni sabor.",
    carouselImage: "/assets/images/sobre-dulce-plus.webp",
    mainImage: "/assets/images/ultrapan-dulceplus.webp",
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/sobre-dulce-plus.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-dulceplus.webp",
        alt: "main",
      },
    ],

    benefits: [
      {
        title: "",
        icon: "/icons/amaza.svg",

        description: "Ayuda en disminución de tiempos de reposo",
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
      "Pan de botella",
    ],
    ingredients:
      "Enzima α amilaxa, xilanasa, fosfolipasa, amilasa maltogénica y mezcla de emulsificantes",
    instructions: [
      {
        title: "",
        description: "0.5% a 1% sobre el peso de la harina",
        bgColor: "",
        icon: "/icons/bascula.svg",
      },
      {
        title: "",
        description: "Caja con sobres de 250g y bulto de 5 kg",
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
          "Ayuda a reducir el uso de huevo en la receta (panes fermentados)",
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
    image: "",
    imagesRelated: [
      {
        src: "/assets/images/emulsoft-h.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/ultrapan-emulsoft-h.webp",
        alt: "main",
      },
      {
        src: "/assets/images/emulsoft-h.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-h.webp",
        alt: "Sobre",
      },
      {
        src: "/assets/images/emulsoft-h.webp",
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
        description: "Excelente resilienica (rebote tras presion)",
        bgColor: "",
      },
    ],
    applications: [
      "Bolleria artesanal (conchas, roles, pan de leche)",
      "Pan de caja tradicional o tipo brioche",
    ],
    ingredients: "α amilaxa, xilanasa, fosfolipasa y mezcla de emulsificantes",
    instructions: [
      {
        title: "",
        description: "0.5% a 1% sobre el peso de la harina (% a 10 g/kg)",
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
    title: "Sobre el uso y aplicación",
    items: [
      {
        question:
          "¿Necesito modificar mi receta actual o comprar maquinaria nueva para usar sus mejorantes?",
        answer: [
          "Nuestros mejorantes están diseñados para actuar sobre tu proceso base sin modificarlo. Funcionan perfectamente tanto en procesos artesanales directos como en aquellos sin cámaras de fermentación controlada.",
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
