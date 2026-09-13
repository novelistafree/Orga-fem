import { ChapterItem, OrgasmTypeItem, PricingPlan, Testimonial } from '../types';

export const DEFAULT_HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/";

export const BOOK_DETAILS = {
  title: "El ABC dario del Orgasmo Femenino",
  subtitle: "Explorando los misterios y el verdadero potencial del Orgasmo femenino",
  author: "Héctor D.M.S.",
  authorTitle: "Investigador empírico en sexualidad consciente, hipnosis erótica y métodos de autoconocimiento",
  totalPages: 195,
  publicationYear: 2025,
  formats: ["PDF de Alta Calidad", "EPUB para lectores digitales", "Compatible con móvil, tablet y PC"],
  rating: 4.95,
  reviewsCount: 1480,
  tagline: "El único y más completo libro sobre los orgasmos femeninos",
};

export const CHAPTERS_DATA: ChapterItem[] = [
  {
    id: 1,
    number: 1,
    title: "Breve historia y contexto de la sexualidad femenina",
    pages: "Páginas 1 - 13",
    summary: "Un recorrido revelador desde las civilizaciones antiguas de Egipto y Grecia (donde el placer femenino era honrado como divino) hasta la represión de la Edad Media y la era victoriana, culminando con la revolución científica del siglo XX.",
    keyTakeaways: [
      "El culto a Isis e Inanna: el placer sexual como símbolo de regeneración y poder femenino sagrado.",
      "Cómo la era victoriana intentó silenciar la naturaleza orgásmica de la mujer.",
      "Las investigaciones pioneras de Alfred Kinsey (1953) y Masters & Johnson (1966) que cambiaron la historia médica.",
      "El impacto de la educación sexual moderna con investigadoras como la Dra. Emily Nagoski."
    ],
    scientificReferences: ["Alfred Kinsey (1953)", "Masters & Johnson (1966)", "Shere Hite (1976)", "Emily Nagoski (2015)"],
    sampleQuote: "El placer es un derecho y el conocimiento, un puente hacia la libertad y la dignidad de lo femenino."
  },
  {
    id: 2,
    number: 2,
    title: "La función del orgasmo",
    pages: "Páginas 14 - 19",
    summary: "Análisis exhaustivo sobre si el orgasmo femenino es un mecanismo adaptativo evolutivo, una feliz coincidencia biológica o una poderosa herramienta de vinculación afectiva y salud integral.",
    keyTakeaways: [
      "Teorías adaptativas vs. la teoría del subproducto de Stephen Jay Gould y Elisabeth Lloyd.",
      "El papel de la oxitocina ('la hormona del amor') en el apego y la consolidación de parejas estables.",
      "Beneficios para la salud física: tono del suelo pélvico, sistema inmunológico y bienestar cardiovascular.",
      "La dimensión sociocultural: el placer femenino como derecho fundamental según el movimiento 'Our Bodies, Ourselves'."
    ],
    scientificReferences: ["Donald Symons (1979)", "Elisabeth Lloyd (2005)", "Beverly Whipple", "Journal of Women's Health"]
  },
  {
    id: 3,
    number: 3,
    title: "Algunos mitos y verdades del orgasmo femenino",
    pages: "Páginas 20 - 25",
    summary: "Desmontando con rigor científico las falacias culturales sobre el deseo femenino, las hormonas sexuales y la idea errónea de que la mujer es un ser pasivo o hipersexual.",
    keyTakeaways: [
      "Mito de los niveles hormonales: el deseo femenino es contextual y relacional (estudios de UCLA).",
      "Zonas erógenas: la verdad sobre la sensibilidad y su variabilidad individual.",
      "El clítoris: el único órgano humano diseñado exclusivamente para el placer (con más de 8,000 terminaciones nerviosas).",
      "El modelo circular de respuesta sexual propuesto por la Dra. Rosemary Basson."
    ],
    scientificReferences: ["Dra. Helen O'Connell (1998)", "Rebecca Chalker (2002)", "Dra. Rosemary Basson"]
  },
  {
    id: 4,
    number: 4,
    title: "Influencia de los medios de comunicación y la cultura popular",
    pages: "Páginas 26 - 33",
    summary: "Cómo el cine, la publicidad y las redes sociales han condicionado la autoimagen de las mujeres y generado expectativas poco realistas en el dormitorio.",
    keyTakeaways: [
      "El fenómeno de la auto-objetivación y su impacto en la ansiedad y autoestima femenina.",
      "Desarmando los estereotipos de 'la mujer fatal' o 'la mujer pura' (Jessica Valenti).",
      "La importancia de la alfabetización mediática y las narrativas inclusivas como 'Real Beauty'."
    ],
    scientificReferences: ["Dra. Jean Kilbourne", "Dra. Renee Engeln (Beauty Sick)", "Dra. Barbara Fredrickson"]
  },
  {
    id: 5,
    number: 5,
    title: "Fantasías femeninas: Románticas, Eróticas y Tabúes",
    pages: "Páginas 34 - 41",
    summary: "El poder liberador de la imaginación en la excitación femenina y estrategias respetuosas para compartirlas con la pareja sin juicios.",
    keyTakeaways: [
      "El legado de Nancy Friday ('My Secret Garden') y la normalización de los deseos íntimos.",
      "Diferenciación entre fantasías románticas, sensoriales-eróticas y tabúes.",
      "Cómo las fantasías activan zonas cerebrales específicas y superan bloqueos psicológicos.",
      "Guía práctica de comunicación: hablar de fantasías en un entorno seguro y con consentimiento pleno."
    ],
    scientificReferences: ["Nancy Friday (1973)", "Universidad de Montreal", "Dra. Marta Meana", "Dra. Kristen Mark"]
  },
  {
    id: 6,
    number: 6,
    title: "Anatomía y fisiología femenina completa",
    pages: "Páginas 42 - 52",
    summary: "Guía anatómica minuciosa de las estructuras externas e internas: monte de venus, labios, bulbos vestibulares, cérvix y las 4 fases del ciclo de respuesta sexual de Masters & Johnson.",
    keyTakeaways: [
      "Estructuras externas de la vulva y la anatomía tridimensional completa del clítoris.",
      "Estructuras internas: vagina, cérvix, útero y trompas.",
      "Fases del ciclo sexual: Excitación, Meseta, Orgasmo y Resolución.",
      "Respuestas fisiológicas: contracciones rítmicas del suelo pélvico (cada 0.8s) y liberación masiva de endorfinas."
    ],
    scientificReferences: ["Masters & Johnson", "Dra. Helen O'Connell (Anatomía del Clítoris)"]
  },
  {
    id: 7,
    number: 7,
    title: "Circuitos del placer y el mapa del placer femenino",
    pages: "Páginas 53 - 61",
    summary: "Neurobiología pura: cómo el cerebro orquesta el clímax a través de la dopamina, el núcleo accumbens, la desconexión de la corteza prefrontal y el mapeo erógeno del cuerpo.",
    keyTakeaways: [
      "El circuito de recompensa cerebral: VTA, núcleo accumbens y amígdala.",
      "Por qué durante el orgasmo se desactiva temporalmente la corteza prefrontal (pérdida del autocontrol analítico).",
      "Zonas erógenas primarias (clítoris, punto G, labios) y secundarias (cuello, senos, orejas, periné).",
      "La neuroquímica de la felicidad: cóctel de dopamina, oxitocina y endorfinas."
    ],
    scientificReferences: ["Universidad de Groningen", "Barry Komisaruk (Rutgers University)", "Nature Reviews Neuroscience"]
  },
  {
    id: 8,
    number: 8,
    title: "El papel de la mente en la sexualidad femenina",
    pages: "Páginas 62 - 68",
    summary: "El cerebro es el órgano sexual más poderoso: cómo el mindfulness, la meditación y el alivio del estrés desbloquean respuestas sensoriales bloqueadas.",
    keyTakeaways: [
      "La sincronización mente-cuerpo según las investigaciones de la Dra. Lori Brotto.",
      "El cortisol como enemigo del deseo: cómo desactivar la respuesta de estrés.",
      "Estudios de resonancia magnética funcional (fMRI) que demuestran el poder de la atención plena.",
      "Técnicas de presencia para multiplicar las sensaciones corporales."
    ],
    scientificReferences: ["Dra. Lori Brotto (Better Sex Through Mindfulness)", "Universidad de Brown", "Archives of Sexual Behavior"]
  },
  {
    id: 9,
    number: 9,
    title: "Relación entre orgasmos y salud femenina",
    pages: "Páginas 69 - 77",
    summary: "Los profundos beneficios médicos del clímax femenino y la historia de la orgasmoterapia de Wilhelm Reich frente a las tesis de Sigmund Freud.",
    keyTakeaways: [
      "Alivio natural de migrañas y dolores menstruales gracias a la descarga neuroquímica.",
      "Impacto positivo en el sueño, sistema inmune y longevidad celular.",
      "La teoría del 'orgón' y la carga/descarga bioenergética de Wilhelm Reich.",
      "Consecuencias a largo plazo de la represión e insatisfacción sexual en la salud integral."
    ],
    scientificReferences: ["Wilhelm Reich (The Function of the Orgasm)", "Dra. Beverly Whipple", "The American Journal of Medicine"]
  },
  {
    id: 10,
    number: 10,
    title: "Tipos de orgasmos femeninos: La Gran Clasificación",
    pages: "Páginas 78 - 103",
    summary: "El núcleo del libro: clasificación por frecuencia, por nivel de intensidad (localizado, cuerpo completo, orgasmo del alma) y por dinámica energética (implosivos vs. explosivos).",
    keyTakeaways: [
      "Los 3 niveles: Orgasmo Localizado, Orgasmo de Cuerpo Completo y Orgasmo del Alma.",
      "Orgasmos Múltiples y Orgasmos Continuos o en Cadena (sin periodo refractario).",
      "Orgasmos Explosivos (descarga externa rápida) vs. Orgasmos Implosivos (nutren órganos internos y glándulas con profunda calma).",
      "Diferencias médicas fundamentales entre Squirting (líquido claro y abundante de vejiga/uretra) y Eyaculación Femenina (glándulas de Skene, rico en fosfatasa ácida prostática)."
    ],
    scientificReferences: ["Masters & Johnson", "Beverly Whipple & Alice Ladas", "Mantak Chia", "Barbara Carrellas"]
  },
  {
    id: 11,
    number: 11,
    title: "Explorando a fondo cada tipo de orgasmo",
    pages: "Páginas 104 - 165",
    summary: "Detalle minucioso de 14 variantes de clímax: Clitoridiano interno y externo, Vaginal, Punto G, Punto A, Cervical, Anal, Uterino, Mental por hipnosis, Senos, Garganta, Oral, Punto U, Mixto y Fenómenos no convencionales.",
    keyTakeaways: [
      "Punto A (zona más profunda que el punto G) y el Orgasmo Cervical cargado de emocionalidad.",
      "El Orgasmo Uterino: contracciones profundas que duran varios minutos con liberación emocional catártica.",
      "La Respuesta Sexual Expandida (RSE / status orgasmus: de 10 a 15 minutos con hasta 30 micro-orgasmos).",
      "El Parto Orgásmico: estudios del Dr. Michel Odent y Frédérick Leboyer sobre la oxitocina natural en el alumbramiento.",
      "Orgasmos Sinestésicos: ver explosiones de colores, escuchar sinfonías o percibir fragancias florales durante el clímax.",
      "El Orgasmo de Chakras y el Orgasmo Telepático: conexiones que trascienden el plano puramente mecánico."
    ],
    scientificReferences: ["Dr. Ernst Gräfenberg", "Chua Chee Ann (1997)", "Prof. H. Ümit Sayin", "Dr. Michel Odent", "Dr. Dean Radin"]
  },
  {
    id: 12,
    number: 12,
    title: "Métodos alternativos para alcanzar el placer femenino",
    pages: "Páginas 166 - 180",
    summary: "Técnicas prácticas y avanzadas: Hipnosis erótica recreativa, método Carezza, meditación orgásmica, respiración controlada, juguetes sexuales de última generación y coregasmo.",
    keyTakeaways: [
      "Hipnosis erótica: creación de nuevas zonas erógenas mediante sugestión y anclajes.",
      "El método Carezza: caricias suaves y contacto íntimo prolongado sin prisa hacia el clímax.",
      "Respiración orgásmica guiada (técnica de 6 pasos para movilizar la energía pélvica a todo el cuerpo).",
      "La historia del Orgasmatrón (estimulación neuroeléctrica medular del Dr. Stuart Meloy) y el coregasmo por ejercicio físico."
    ],
    scientificReferences: ["Dra. Erika Fromm & Dr. Ronald Shor", "Barbara Carrellas", "Dr. Stuart Meloy", "Lou Paget"]
  },
  {
    id: 13,
    number: 13,
    title: "El placer femenino en las prácticas esotéricas",
    pages: "Páginas 181 - 195",
    summary: "La dimensión sagrada y mística: los misterios de Eleusis, el culto a Isis, el Tantra oriental, el Taoísmo sexual (cultivo del Chi/Qi) y la magia sexual como catalizador espiritual.",
    keyTakeaways: [
      "Las sacerdotisas antiguas y el éxtasis como portal de conexión con lo divino.",
      "Tantra y Taoísmo: conservación de la energía sexual y activación de los 7 chakras.",
      "Santa Teresa de Ávila y las experiencias místicas extáticas documentadas en la historia.",
      "Conclusión y despedida del autor: un llamado a celebrar y honrar el placer como sabiduría viva."
    ],
    scientificReferences: ["Marguerite Rigoglioso", "Mantak Chia (The Multi-Orgasmic Woman)", "Barbara Carrellas (Urban Tantra)", "Georg Feuerstein"]
  }
];

export const ORGASM_TYPES: OrgasmTypeItem[] = [
  {
    id: 'clitoriano-externo',
    name: 'Orgasmo Clitoridiano Externo',
    category: 'Físico / Genital',
    intensity: 'Alta',
    description: 'El orgasmo más común y directo. Producido por la estimulación del glande visible del clítoris, el cual concentra más de 8,000 terminaciones nerviosas altamente sensibles.',
    anatomicalBasis: 'Glande clitoridiano, localizado en la unión superior de los labios menores.',
    recommendedTechnique: 'Estimulación circular suave, uso de vibradores o caricias directas con lubricación adecuada.',
    scientificInsight: 'Descrito por Kinsey (1953) y reafirmado por la Dra. Helen O’Connell como la principal vía de placer para más del 70% de las mujeres.'
  },
  {
    id: 'clitoriano-interno',
    name: 'Orgasmo Clitoridiano Interno',
    category: 'Profundo / Interno',
    intensity: 'Profunda',
    description: 'A diferencia del superficial, este clímax involucra las ramas internas (crura) y los bulbos vestibulares que abrazan la pared vaginal anterior.',
    anatomicalBasis: 'Raíces y cuerpo cavernoso interno del clítoris que se extiende profundamente en la pelvis.',
    recommendedTechnique: 'Penetración con presión anterior (postura vaquera o misionero con ángulo elevado).',
    scientificInsight: 'O’Connell (2005) demostró que el clítoris tiene una estructura tridimensional interna de hasta 10 cm que se activa indirectamente.'
  },
  {
    id: 'punto-g',
    name: 'Orgasmo del Punto G',
    category: 'Profundo / Interno',
    intensity: 'Profunda',
    description: 'Clímax profundo caracterizado por una sensación de presión envolvente y expansiva, con frecuencia acompañado de eyaculación femenina o liberación de fluidos.',
    anatomicalBasis: 'Zona rugosa en la pared frontal anterior de la vagina, a unos 3-5 cm de la entrada.',
    recommendedTechnique: 'Movimiento digital en gancho ("ven aquí") o juguetes curvados diseñados con estimulación continua.',
    scientificInsight: 'Documentado por Beverly Whipple y John Perry en 1982 a partir de las observaciones originales de Ernst Gräfenberg.'
  },
  {
    id: 'punto-a',
    name: 'Orgasmo del Punto A (Zona AFE)',
    category: 'Profundo / Interno',
    intensity: 'Profunda',
    description: 'Ubicado aún más profundo que el punto G. Provoca una respuesta rápida de lubricación vaginal copiosa y sensaciones expansivas en toda la pelvis.',
    anatomicalBasis: 'Zona erógena anterior del fórnix vaginal, a medio camino entre el punto G y el cuello uterino.',
    recommendedTechnique: 'Penetración profunda y pausada con ángulo ascendente.',
    scientificInsight: 'Descubierto en 1997 por el Dr. Chua Chee Ann, asociado a orgasmos múltiples sucesivos.'
  },
  {
    id: 'cervical',
    name: 'Orgasmo Cervical',
    category: 'Profundo / Interno',
    intensity: 'Transformadora',
    description: 'Generado por la estimulación suave del cuello uterino. Es conocido por despertar una respuesta fuertemente emocional, de entrega y conexión profunda.',
    anatomicalBasis: 'Cérvix (cuello del útero) inervado por el nervio vago y plexos pélvicos autónomos.',
    recommendedTechnique: 'Penetración lenta, rítmica y profunda en estados de alta relajación y confianza.',
    scientificInsight: 'Komisaruk y Humphreys confirmaron que activa vías neurales independientes del clítoris que conectan directo con centros emocionales del cerebro.'
  },
  {
    id: 'uterino',
    name: 'Orgasmo Uterino / Catártico',
    category: 'Profundo / Interno',
    intensity: 'Transformadora',
    description: 'Contracciones rítmicas profundas del útero que se prolongan por varios minutos. Suele describirse como una experiencia de catarsis emocional y renovación bioenergética.',
    anatomicalBasis: 'Músculo miometrio y plexos neurovegetativos pélvicos.',
    recommendedTechnique: 'Postura de cucharita o penetración lenta y profunda combinada con respiración tántrica.',
    scientificInsight: 'Analizado en tradiciones tántricas y documentado en investigaciones de Casilda Rodrigañez y Mantak Chia.'
  },
  {
    id: 'implosivo',
    name: 'Orgasmo Implosivo (Tántrico)',
    category: 'Energético / Tántrico',
    intensity: 'Transformadora',
    description: 'A diferencia del orgasmo explosivo que agota la energía hacia afuera, el implosivo viaja hacia los órganos vitales y glándulas internas, dejando una sensación de vitalidad y rejuvenecimiento.',
    anatomicalBasis: 'Glándulas endocrinas, suelo pélvico y circulación energética interna (Chi/Qi).',
    recommendedTechnique: 'Técnicas de contención, respiración consciente y relajación sin forzar la descarga externa.',
    scientificInsight: 'Proviene de la sexología taoísta y tántrica, ratificado en la literatura de Wilhelm Reich sobre circulación bioenergética.'
  },
  {
    id: 'rse',
    name: 'Respuesta Sexual Expandida (RSE)',
    category: 'Mental / No Convencional',
    intensity: 'Trascendental',
    description: 'Status orgasmus: estados orgásmicos sostenidos y continuos que pueden durar entre 10 y 15 minutos, con hasta 30 micro-orgasmos concatenados sin pérdida de excitación.',
    anatomicalBasis: 'Saturación prolongada de neurotransmisores (dopamina, endorfinas) y eliminación del periodo refractario.',
    recommendedTechnique: 'Práctica de Edging (acercarse al clímax y relajar repetidamente) y enfoque mental.',
    scientificInsight: 'Investigado en la Universidad de Estambul por el Prof. H. Ümit Sayin y documentado por Masters & Johnson.'
  },
  {
    id: 'sinestesico',
    name: 'Orgasmo Sinestésico',
    category: 'Mental / No Convencional',
    intensity: 'Trascendental',
    description: 'Cruce neurológico sensorial: en el clímax, la persona visualiza explosiones geométricas de colores brillantes (azules, magentas), escucha sinfonías armónicas o huele aromas florales.',
    anatomicalBasis: 'Interconexión amplificada entre el córtex sensorial, visual y auditivo en el fMRI.',
    recommendedTechnique: 'Visualización guiada, meditación sensorial y sesiones de hipnosis erótica.',
    scientificInsight: 'Estudios de la Universidad de Sussex han comprobado hiperconectividad neural en estados de sinestesia sexual.'
  },
  {
    id: 'parto-orgasmico',
    name: 'Parto Orgásmico',
    category: 'Mental / No Convencional',
    intensity: 'Trascendental',
    description: 'El nacimiento sin dolor traumático: el paso de la cabeza del bebé estimula puntos reflejos mientras el cuerpo inunda el útero con dosis masivas de oxitocina natural.',
    anatomicalBasis: 'Canal de parto, estimulación de ramas vaginales y cervicales, cascada hormonal de oxitocina y endorfinas.',
    recommendedTechnique: 'Parto respetado en agua, apoyo de matronas, técnicas de respiración y eliminación del miedo cultural.',
    scientificInsight: 'Defendido por los obstetras Michel Odent, Frédérick Leboyer y documentado por la Dra. Beverly Whipple.'
  },
  {
    id: 'respiracion',
    name: 'Respiración Orgásmica',
    category: 'Energético / Tántrico',
    intensity: 'Profunda',
    description: 'Alcanzar el clímax de cuerpo entero mediante la respiración rítmica y la focalización consciente, sin necesidad de estimulación genital mecánica obligatoria.',
    anatomicalBasis: 'Oxigenación profunda, activación del sistema nervioso parasimpático y diafragma pélvico.',
    recommendedTechnique: 'Ciclos de inhalación nasal profunda y exhalación bucal distribuyendo la energía pélvica al pecho.',
    scientificInsight: 'Popularizado por Barbara Carrellas en "Urban Tantra" y validado en estudios de respuesta de relajación del Dr. Herbert Benson.'
  },
  {
    id: 'chakras',
    name: 'Orgasmo de Chakras y Kundalini',
    category: 'Energético / Tántrico',
    intensity: 'Trascendental',
    description: 'Ascenso de la energía sexual desde el chakra raíz (Muladhara) y sacro hasta la corona (Sahasrara), provocando una experiencia de unidad cósmica y éxtasis espiritual.',
    anatomicalBasis: 'Eje cerebroespinal, sistema nervioso central y centros ganglionares mayores.',
    recommendedTechnique: 'Unión tántrica consciente, meditación en los 7 chakras y anclajes de hipnosis.',
    scientificInsight: 'Enseñanza milenaria corroborada por estudios de neuroimagen donde se activan áreas asociadas al misticismo.'
  },
  {
    id: 'mental-hipnotico',
    name: 'Orgasmo Mental y Telepático',
    category: 'Mental / No Convencional',
    intensity: 'Trascendental',
    description: 'Clímax generado exclusivamente en la mente mediante sugestión, hipnosis erótica o sincronización emocional a distancia, sin contacto físico directo.',
    anatomicalBasis: 'Corteza somatosensorial estimulada puramente por imaginería cerebral y sugestibilidad profunda.',
    recommendedTechnique: 'Trance hipnótico guiado, role-playing inmersivo y sincronización respiratoria.',
    scientificInsight: 'Dra. Erika Fromm y Talmadge Harper han comprobado cómo el cerebro no distingue un estímulo real de uno vivenciado bajo hipnosis vívida.'
  },
  {
    id: 'pezones-senos',
    name: 'Orgasmo de Pezones y Senos',
    category: 'Físico / Genital',
    intensity: 'Alta',
    description: 'Clímax rápido y concentrado logrado mediante la estimulación delicada de los pezones y senos, los cuales comparten conexiones reflejas con los genitales.',
    anatomicalBasis: 'Receptores táctiles mamarios que estimulan la liberación de oxitocina y activan la misma zona cerebral somatosensorial.',
    recommendedTechnique: 'Caricias suaves, humedad, calor, cambios de ritmo y juguetes de estimulación térmica.',
    scientificInsight: 'Estudio de Komisaruk y Whipple confirmó que la estimulación de pezones activa en fMRI la misma región cortical que el clítoris.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Edición Digital Esencial',
    priceOriginal: 47,
    priceDiscounted: 19,
    currency: 'USD',
    description: 'Ideal para quienes desean empezar a explorar la ciencia, mitos y anatomía del placer femenino hoy mismo.',
    features: [
      'Libro Digital Completo "El ABC dario del Orgasmo Femenino" (195 páginas)',
      'Acceso Inmediato en Formato PDF de Alta Calidad & EPUB',
      'Compatible con Smartphone, Tablet, Kindle y Ordenador',
      'Mapeo anatómico de Zonas Erógenas Primarias y Secundarias',
      'Desmitificación de Mitos Históricos & Científicos',
      'Garantía incondicional de satisfacción Hotmart por 7 días'
    ],
    bonuses: [
      'Garantía de actualización gratuita de futuras ediciones'
    ]
  },
  {
    id: 'premium',
    name: 'Edición Maestra + Bonos Exclusivos',
    badge: 'OFERTA MÁS ELEGIDA - 65% OFF',
    isPopular: true,
    priceOriginal: 87,
    priceDiscounted: 29,
    currency: 'USD',
    description: 'El paquete de maestría definitivo: incluye el libro completo más los bonos prácticos de hipnosis y respiración tántrica.',
    features: [
      'Libro Digital Completo "El ABC dario del Orgasmo Femenino" (195 páginas)',
      'Acceso Inmediato en Formato PDF de Alta Calidad & EPUB',
      'Acceso de por vida en la plataforma Hotmart',
      'Guía Práctica de las 14 Categorías de Orgasmos con Técnicas Paso a Paso',
      'Protocolos de Comunicación en Pareja para Explorar Fantasías sin Vergüenza',
      'Garantía incondicional Hotmart de 7 días (reembolso en 1 clic)'
    ],
    bonuses: [
      'BONO 1: Guía Práctica de Hipnosis Erótica y Anclajes de Placer (PDF Exclusivo)',
      'BONO 2: Guía de Audio de Respiración Orgásmica Tántrica en 6 Fases (MP3 descargable)',
      'BONO 3: Mapa Visual a todo color de Zonas Erógenas y Puntos Clave (Punto G, A, U, Cérvix)',
      'Soporte directo prioritario para consultas sobre el material'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Valeria R.',
    location: 'Madrid, España',
    role: 'Lectora verificada',
    stars: 5,
    comment: 'Siempre pensé que algo estaba mal conmigo porque me costaba llegar al clímax con penetración clásica. Este libro de Héctor me quitó una tonelada de culpas. La explicación de la Dra. Helen O’Connell y los orgasmos implosivos me cambiaron la vida. Toda mujer debería leer esto a los 18 años.',
    verifiedPurchase: true
  },
  {
    id: '2',
    name: 'Carlos & Sofía M.',
    location: 'Buenos Aires, Argentina',
    role: 'Pareja tras 9 años de relación',
    stars: 5,
    comment: 'Lo compramos juntos por recomendación en un taller de parejas. La sección del método Carezza y la respiración tántrica nos llevó a niveles de intimidad que nunca creímos posibles. No es un libro de posturas vacías; es ciencia y sensibilidad pura.',
    verifiedPurchase: true
  },
  {
    id: '3',
    name: 'Dra. Marcela Gómez',
    location: 'Bogotá, Colombia',
    role: 'Psicóloga y terapeuta de parejas',
    stars: 5,
    comment: 'Un trabajo de investigación extraordinario. Héctor combina autores fundamentales como Masters & Johnson, Wilhelm Reich y Beverly Whipple con una calidez humana admirable. Lo recomiendo activamente a mis pacientes en consulta.',
    verifiedPurchase: true
  },
  {
    id: '4',
    name: 'Elena D.',
    location: 'Guadalajara, México',
    role: 'Lectora verificada',
    stars: 5,
    comment: 'El capítulo sobre la Respuesta Sexual Expandida y los orgasmos sinestésicos me dejó maravillada. Por primera vez encontré una explicación coherente a experiencias que nadie más explicaba. La compra en Hotmart fue instantánea y muy discreta.',
    verifiedPurchase: true
  }
];

export const FAQS = [
  {
    q: "¿Cómo y cuándo recibiré el libro tras realizar el pago en Hotmart?",
    a: "El acceso es 100% inmediato y automático. Tan pronto como tu pago sea aprobado en Hotmart, recibirás un correo electrónico oficial con el enlace directo para descargar el libro en formato PDF de alta resolución y EPUB, además de tener acceso permanente en tu biblioteca de Hotmart."
  },
  {
    q: "¿El cobro en mi tarjeta o extracto bancario será discreto?",
    a: "Totalmente discreto y confidencial. En tu estado de cuenta bancario o resumen de tarjeta NO aparecerá ninguna palabra comprometedora ni el nombre del libro. Únicamente figurará 'HOTMART' o 'HTM*PLATFORM', garantizando tu absoluta privacidad."
  },
  {
    q: "¿Qué métodos de pago acepta Hotmart?",
    a: "Hotmart es una de las plataformas de productos digitales más seguras del mundo y acepta múltiples métodos según tu país: Tarjetas de crédito y débito (Visa, Mastercard, American Express, etc.), PayPal, Apple Pay, Google Pay, y pagos en efectivo locales como OXXO (México), Baloto/PSE (Colombia), PagoFácil/RapiPago (Argentina), Sencillito (Chile), Pix/Boleto (Brasil), entre otros."
  },
  {
    q: "¿Este libro es adecuado para hombres o sólo para mujeres?",
    a: "Es una lectura transformadora para ambos. Para las mujeres, representa una revelación y reconciliación con su cuerpo y potencial orgásmico. Para los hombres y parejas, es el mapa definitivo para comprender con empatía, técnica y profundidad el misterio del placer femenino, convirtiéndose en amantes conscientes e incomparables."
  },
  {
    q: "¿Qué garantía tengo si el libro no cumple mis expectativas?",
    a: "Cuentas con la Garantía de Satisfacción 100% de Hotmart durante 7 días continuos. Si por cualquier motivo sientes que el libro no superó tus expectativas, puedes solicitar el reembolso íntegro de tu dinero con un solo clic en la plataforma, sin preguntas ni trámites complicados."
  },
  {
    q: "¿En qué dispositivos puedo leer el libro?",
    a: "En cualquiera. Puedes leerlo en tu teléfono móvil (iOS o Android), tablet, lector de libros electrónicos (Kindle, Kobo) o en tu ordenador personal (Windows o Mac). No requieres software especial."
  }
];
