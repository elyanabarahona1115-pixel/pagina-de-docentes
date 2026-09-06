/**
 * DATOS DE LOS TALLERES - Sistema Dinámico
 * Contiene toda la información estructurada para cada taller
 */

const TALLERES_DATA = {
    belleza: {
        id: 'belleza',
        titulo: 'Taller de Belleza y Cosmetología',
        subtitulo: 'Una historia de dedicación, innovación y transformación',
        descripcion: 'Descubre cómo iniciamos desde cero para convertir la belleza en una herramienta de empoderamiento estudiantil',
        icon: 'fas fa-spa',
        secciones: [
            {
                numero: 1,
                titulo: 'Origen del Taller',
                contenido: 'La historia del Taller de Belleza y Cosmetología surge a partir de una circunstancia laboral que llevó a la docente responsable del área a asumir el desafío de impartir clases de belleza y cosmetología, a pesar de que inicialmente no contaba con conocimientos especializados en esta área.\n\nAntes de comenzar con el taller, la docente había trabajado durante aproximadamente un año y medio bajo la modalidad de crecimiento vegetativo. Debido a una situación relacionada con el pago de sus horas de trabajo, acudió a la instancia distrital correspondiente en busca de una solución. Durante este proceso, surgió la posibilidad de que se le asignaran horas para impartir clases de belleza y cosmetología.\n\nAl día siguiente de recibir la asignación, comenzó su proceso de capacitación mediante cursos impartidos por INFOP, relacionados con belleza y cosmetología. De esta manera comenzó a formarse el Taller de Belleza y Cosmetología. En sus primeros momentos, el taller prácticamente no contaba con herramientas ni equipo especializado.\n\nLa docente tuvo entonces que buscar diferentes alternativas para obtener los recursos necesarios. Entre las actividades que realizó se encontraba la venta de confites, empanadas, donas y panqueques. Con los fondos obtenidos mediante estas actividades comenzó poco a poco a adquirir los primeros equipos para el taller, incluyendo una plancha para el cabello de color rosado que aún conserva y que continúa funcionando.',
                imagen: 'fotos de maestros/imagenes taller cosmetologia/WhatsApp Image 2026-09-02 at 8.32.14 AM.jpeg',
                layout: 'text-image' // texto a la izquierda, imagen a la derecha
            },
            {
                numero: 2,
                titulo: 'Los Primeros Años del Taller',
                contenido: 'Durante sus primeros años, el Taller de Belleza y Cosmetología comenzó a desarrollarse con recursos muy limitados. Después de adquirir la primera plancha, se fueron incorporando poco a poco otros materiales necesarios para el aprendizaje de los estudiantes, entre ellos peines, ganchos y herramientas para el cabello.\n\nTambién se contó con una encolochadora, utilizada para realizar diferentes tipos de peinados y rizos. La adquisición de cada herramienta representaba un avance importante, ya que permitía ampliar las actividades prácticas realizadas dentro del taller.\n\nSu jornada laboral facilitaba la aplicación práctica. Mientras impartía sus clases durante la tarde (aproximadamente 2:00 p.m. a 7:00 p.m.), recibía formación en cosmetología durante la mañana. De esta manera, podía trasladar al taller parte de los conocimientos que iba adquiriendo en sus capacitaciones, incluyendo técnicas de planchado y secado del cabello, manicure, pedicure y tratamientos faciales.\n\nAdemás de los cursos recibidos en INFOP, la docente continuó buscando oportunidades de capacitación en diferentes lugares y realizó cursos de maquillaje a través de internet.',
                imagen: 'fotos de maestros/imagenes taller cosmetologia/WhatsApp Image 2026-09-02 at 8.32.14 AM (1).jpeg',
                layout: 'image-text' // imagen a la izquierda, texto a la derecha
            },
            {
                numero: 3,
                titulo: 'Crecimiento y Desarrollo del Taller',
                contenido: 'Con el paso del tiempo, el Taller de Belleza y Cosmetología fue adquiriendo una mayor cantidad de herramientas y equipos. Lo que comenzó con una sola plancha para el cabello fue creciendo hasta contar con diferentes instrumentos destinados a las prácticas de los estudiantes.\n\nActualmente, el taller dispone de varias planchas, secadoras, herramientas para realizar rizos y diferentes materiales utilizados en los procesos de formación. También se incorporaron muñecas para realizar prácticas de peinado, aunque su utilización requiere control debido al deterioro del cabello durante las prácticas.\n\nEl espacio físico también ha experimentado cambios significativos. Inicialmente se contaba con recursos muy limitados y fue necesario ir acondicionando progresivamente el área de trabajo. Con el tiempo se incorporaron espejos, mesas y otros elementos que permitieron organizar mejor el taller. Algunas de las mesas pequeñas utilizadas para realizar prácticas de uñas fueron obtenidas de un colegio llamado Aldebarán.\n\nEl crecimiento del taller ha sido resultado de un proceso gradual, basado en el esfuerzo, las actividades de recaudación y la adquisición progresiva de herramientas y materiales necesarios para la formación de las estudiantes.',
                imagen: 'fotos de maestros/imagenes taller cosmetologia/WhatsApp Image 2026-09-02 at 8.32.14 AM (2).jpeg',
                layout: 'text-image'
            },
            {
                numero: 4,
                titulo: 'Ampliación de las Áreas de Formación',
                contenido: 'A medida que el Taller de Belleza y Cosmetología fue desarrollándose, también fueron ampliándose las actividades y conocimientos ofrecidos a las estudiantes. Además de las prácticas relacionadas con el cabello, el taller incorporó áreas como manicure, pedicure, maquillaje y tratamientos faciales.\n\nLa capacitación constante de la docente permitió que estos conocimientos fueran integrándose progresivamente al proceso de enseñanza. Posteriormente también se incorporó el área de barbería para hombres, con la colaboración de Henry Moncada, originario de Zambrano, quien acudía al taller para realizar cortes de cabello y contribuir con la enseñanza de esta área.\n\nDe esta manera, el taller fue ampliando sus posibilidades de formación y ofreciendo a las estudiantes conocimientos que podían ser utilizados posteriormente tanto en el ámbito personal como laboral. El propósito no se ha limitado únicamente a enseñar técnicas de belleza, sino también a proporcionar conocimientos prácticos que puedan ser aprovechados por las estudiantes en diferentes situaciones y, eventualmente, convertirse en una fuente de ingresos.',
                imagen: 'fotos de maestros/imagenes taller cosmetologia/WhatsApp Image 2026-09-02 at 8.39.02 AM.jpeg',
                layout: 'image-text'
            },
            {
                numero: 5,
                titulo: 'Principales Logros del Taller',
                contenido: 'Uno de los principales logros del Taller de Belleza y Cosmetología ha sido que las estudiantes puedan adquirir conocimientos prácticos y posteriormente aplicarlos fuera del aula. Las habilidades aprendidas durante las clases pueden ser utilizadas para realizar diferentes servicios de belleza, entre ellos planchados, secados y maquillaje.\n\nAlgunas estudiantes han llegado a cobrar por estos servicios, obteniendo así un beneficio económico a partir de los conocimientos adquiridos en el taller. Varias estudiantes que han pasado por el taller han continuado desarrollándose en el área de la cosmetología. Algunas de ellas incluso han llegado posteriormente a impartir clases relacionadas con esta área, demostrando que los conocimientos obtenidos durante su formación pueden convertirse en una base para continuar desarrollándose profesionalmente.\n\nEl taller representa un espacio de aprendizaje práctico en el que las estudiantes no solamente reciben conocimientos técnicos, sino que también tienen la oportunidad de desarrollar habilidades que pueden ser útiles para su futuro.',
                tipo: 'card-grid',
                items: [
                    {
                        icon: 'fas fa-graduation-cap',
                        titulo: 'Aplicación Práctica',
                        texto: 'Las estudiantes adquieren conocimientos prácticos que pueden aplicar en servicios de belleza.'
                    },
                    {
                        icon: 'fas fa-coins',
                        titulo: 'Beneficio Económico',
                        texto: 'Estudiantes han generado ingresos mediante la prestación de servicios de belleza.'
                    },
                    {
                        icon: 'fas fa-chalkboard-user',
                        titulo: 'Formación de Docentes',
                        texto: 'Egresadas han continuado como docentes en el área de cosmetología.'
                    },
                    {
                        icon: 'fas fa-lightbulb',
                        titulo: 'Aprendizaje Integral',
                        texto: 'Desarrollo de habilidades técnicas y personales para el futuro profesional.'
                    }
                ]
            },
            {
                numero: 6,
                titulo: 'Dificultades y Retos',
                contenido: 'A lo largo de su historia, el Taller de Belleza y Cosmetología también ha tenido que enfrentar diferentes dificultades. Una de las principales situaciones mencionadas son las pérdidas de productos y materiales. Según el testimonio de la docente, en algunas ocasiones se han producido robos dentro del taller, especialmente durante las actividades de venta de confites y otros productos.\n\nOtro de los retos actuales está relacionado con las restricciones existentes para algunas prácticas de belleza. La docente señala que, particularmente durante las actividades de maquillaje, existe supervisión por parte de los consejeros y algunas de estas prácticas deben realizarse bajo determinadas condiciones.\n\nLos productos utilizados en cosmetología requieren reposición constante, ya que materiales como champú y otros productos se consumen durante las prácticas. Por esta razón, las actividades de venta y recaudación continúan siendo importantes para poder innovar, adquirir nuevos productos y mantener los recursos disponibles.',
                tipo: 'challenge-grid',
                items: [
                    {
                        numero: '1',
                        titulo: 'Pérdidas y Robos',
                        texto: 'Pérdidas de materiales durante actividades de venta y recaudación.'
                    },
                    {
                        numero: '2',
                        titulo: 'Restricciones en Prácticas',
                        texto: 'Supervisión en actividades de maquillaje y otras prácticas de belleza.'
                    },
                    {
                        numero: '3',
                        titulo: 'Reposición de Productos',
                        texto: 'Necesidad constante de reponer materiales consumibles.'
                    },
                    {
                        numero: '4',
                        titulo: 'Cuidado de Equipos',
                        texto: 'Deterioro de equipos como muñecas de práctica requiere control.'
                    }
                ]
            },
            {
                numero: 7,
                titulo: 'Actividades y Proyección del Taller',
                contenido: 'Las propias estudiantes cumplen un papel importante en la promoción del Taller de Belleza y Cosmetología. Una de las principales formas de dar a conocer el trabajo realizado consiste en los servicios de peinado y otras actividades de belleza desarrolladas durante las prácticas.\n\nSe han incorporado nuevas actividades, como la colocación de pestañas, aunque su realización se encuentra condicionada por las disposiciones y supervisión de los consejeros. La venta de alimentos, confites y otros productos sigue siendo importante para recaudar fondos.\n\nEntre las herramientas utilizadas con mayor frecuencia se encuentran las planchas, secadoras, encolochadoras de rizos y diferentes accesorios para el cabello. Además, se han adquirido lámparas destinadas a la realización de uñas acrílicas, cuyo contenido se tiene previsto incorporar al curso posteriormente.\n\nLa necesidad de reponer constantemente productos de cosmetología hace que estas actividades sean una herramienta importante para mantener el taller funcionando y permitir la adquisición de nuevos recursos.',
                imagen: 'fotos de maestros/imagenes taller cosmetologia/WhatsApp Image 2026-09-02 at 8.39.41 AM.jpeg',
                layout: 'text-image'
            },
            {
                numero: 8,
                titulo: 'Visión y Futuro del Taller',
                contenido: 'La principal meta expresada para el futuro del Taller de Belleza y Cosmetología es contar con un aula propia. Esta aspiración representa un paso importante dentro del proceso de crecimiento del taller, ya que permitiría disponer de un espacio destinado específicamente al desarrollo de las actividades de belleza y cosmetología.\n\nLa intención de continuar innovando también forma parte de la visión del taller. La incorporación progresiva de nuevas herramientas, productos y técnicas permite que las estudiantes tengan acceso a diferentes áreas de formación y puedan prepararse mejor para el futuro.\n\nPara la docente, formar parte de la historia del taller representa una nueva experiencia y, al mismo tiempo, una oportunidad de continuar trabajando en un área que se encuentra en constante evolución.\n\nEl propósito fundamental es que las estudiantes se preparen para el futuro mediante conocimientos prácticos que puedan utilizar posteriormente en diferentes ámbitos de su vida.',
                imagen: 'fotos de maestros/imagenes taller cosmetologia/WhatsApp Image 2026-09-02 at 8.32.14 AM.jpeg',
                layout: 'image-text'
            },
            {
                numero: 9,
                titulo: 'Cualidades del Estudiante de Cosmetología',
                contenido: 'De acuerdo con la experiencia de la docente, una de las principales cualidades que debe tener un estudiante de cosmetología es la disposición para atender correctamente a las personas. El trabajo de belleza no consiste únicamente en aplicar una técnica, sino también en brindar una buena atención.\n\nLas estudiantes deben realizar sus actividades con entusiasmo, dedicación y disposición para ofrecer un buen servicio. El objetivo es que las personas que acuden al taller puedan retirarse satisfechas con el trabajo realizado. Esta forma de trabajar permite que las estudiantes desarrollen no solamente habilidades técnicas, sino también responsabilidad y compromiso en la atención de quienes reciben sus servicios.',
                tipo: 'quality-grid',
                items: [
                    {
                        icon: 'fas fa-hands-helping',
                        titulo: 'Disposición para Atender',
                        texto: 'Capacidad de atender correctamente y brindar buena atención al cliente.'
                    },
                    {
                        icon: 'fas fa-fire',
                        titulo: 'Entusiasmo y Dedicación',
                        texto: 'Realizar actividades con entusiasmo, dedicación y disposición de servicio.'
                    },
                    {
                        icon: 'fas fa-clipboard-check',
                        titulo: 'Responsabilidad',
                        texto: 'Compromiso en la atención y creación de relaciones duraderas con clientes.'
                    },
                    {
                        icon: 'fas fa-star',
                        titulo: 'Habilidades Técnicas',
                        texto: 'Dominio de técnicas especializadas en peinado, maquillaje y tratamientos.'
                    }
                ]
            }
        ]
    },
    deportes: {
        id: 'deportes',
        titulo: 'Área de Deportes',
        subtitulo: 'Disciplina, compañerismo y pasión por el deporte',
        descripcion: 'Un espacio para descubrir talentos, fortalecer valores y representar con orgullo al Instituto Técnico General Francisco Miranda.',
        icon: 'fas fa-futbol',
        secciones: [
            {
                numero: 1,
                titulo: 'Fútbol masculino y femenino',
                contenido: 'El Área de Deportes del Instituto Técnico General Francisco Miranda es un espacio fundamental para la formación integral de los estudiantes. A través de diferentes actividades y competencias, se promueve la disciplina, el trabajo en equipo, la responsabilidad, el compañerismo y el bienestar físico y emocional.\n\nLa actividad deportiva comenzó a organizarse formalmente alrededor del año 2010, y desde aproximadamente 2015 el instituto ha participado de manera más constante en competencias externas, representando a la institución en diferentes eventos.\n\nEl fútbol masculino y femenino es la disciplina con mayor participación, pero también se practican baloncesto, voleibol y atletismo, además de actividades como ajedrez y tenis de mesa dentro de las clases de Educación Física. Actualmente, alrededor de 200 estudiantes participan en actividades deportivas, mientras que aproximadamente 60 forman parte de los equipos que representan al instituto en competencias externas.\n\nA lo largo de los años, el instituto ha obtenido importantes participaciones y reconocimientos, incluyendo subcampeonatos, semifinales y campeonatos en torneos interinstitucionales. Destaca especialmente el fútbol femenino, que ha logrado posicionarse en los primeros lugares en competencias frente a centros educativos públicos y privados.\n\nMás que una actividad competitiva, el deporte representa para el Instituto Técnico General Francisco Miranda una oportunidad para descubrir talentos, fortalecer valores y brindar a los jóvenes experiencias que contribuyen a su desarrollo personal y académico.',
                imagenes: [
                    'fotos de maestros/770609167_1650598493743515_8933238635894113469_n.jpg',
                    'fotos de maestros/558062269_1370435878426446_2279646507352163466_n.jpg'
                ],
                layout: 'text-image'
            }
        ]
    },
    banda: {
        id: 'banda',
        titulo: 'Banda Latina Francisco Miranda',
        subtitulo: 'Tradición, disciplina y arte en cada presentación',
        descripcion: 'Reseña histórica, cuadros musicales, presentaciones destacadas y el legado artístico de la banda institucional.',
        icon: 'fas fa-music',
        secciones: [
            {
                numero: 1,
                titulo: 'Historia y Trayectoria',
                contenido: 'La Banda Latina Francisco Miranda es una expresión cultural y artística de la institución, creada como un espacio para fortalecer el sentido de identidad, disciplina y trabajo en equipo entre estudiantes y docentes.\n\nA lo largo de los años, la banda ha evolucionado, consolidándose como una de las agrupaciones más representativas del instituto, con una historia marcada por la dedicación de sus directores, músicos, estudiantes y la comunidad educativa.\n\nSu trayectoria refleja la importancia de la música como herramienta de formación integral, promoviendo valores como la responsabilidad, la puntualidad, el respeto y la pasión por el arte.',
                imagen: 'fotos de maestros/791849022_1354575423325959_8293929378069427322_n.jpg',
                layout: 'text-image'
            },
            {
                numero: 2,
                titulo: 'Integrantes y Cuadros de Presentación',
                contenido: 'La banda institucional está integrada por diferentes secciones que aportan riqueza y equilibrio musical. Entre ellas se encuentran la percusión, los vientos, las liras, el cuerpo de palillonas, las pomponeras y la marcha.\n\nCada formación cumple una función específica dentro del conjunto, fortaleciendo la armonía y la disciplina que exige la interpretación musical en escenarios institucionales, desfiles, ceremonias y actividades culturales.',
                tipo: 'quality-grid',
                items: [
                    {
                        icon: 'fas fa-drum',
                        titulo: 'Percusión',
                        texto: 'Base rítmica y fuerza expresiva del conjunto musical.'
                    },
                    {
                        icon: 'fas fa-wind',
                        titulo: 'Vientos',
                        texto: 'Melodías y matices que dan brillo a la interpretación.'
                    },
                    {
                        icon: 'fas fa-guitar',
                        titulo: 'Liras',
                        texto: 'Armonías y acompañamientos con identidad cultural.'
                    },
                    {
                        icon: 'fas fa-star',
                        titulo: 'Palillonas y Pomponeras',
                        texto: 'Componentes visuales y de energía que acompañan la presentación.'
                    }
                ]
            },
            {
                numero: 3,
                titulo: 'Logros y Presentaciones Destacadas',
                contenido: 'La Banda Latina Francisco Miranda ha participado en diversas actividades institucionales y comunitarias, destacándose en desfiles patrios, celebraciones escolares, festivales culturales y presentaciones representativas del instituto.\n\nSus logros no solo se reflejan en la música, sino también en la constancia, el trabajo en equipo y el orgullo de representar a la comunidad educativa. Cada participación fortalece su legado y proyecta la imagen del instituto en el ámbito cultural.',
                tipo: 'challenge-grid',
                items: [
                    {
                        numero: '1',
                        titulo: 'Desfiles Patrios',
                        texto: 'Participaciones destacadas en actos cívicos y conmemoraciones nacionales.'
                    },
                    {
                        numero: '2',
                        titulo: 'Festivales Culturales',
                        texto: 'Presentaciones en eventos institucionales y comunitarios.'
                    },
                    {
                        numero: '3',
                        titulo: 'Competencias y Reconocimientos',
                        texto: 'Logros y menciones por su disciplina, calidad y ejecución musical.'
                    },
                    {
                        numero: '4',
                        titulo: 'Legado Institucional',
                        texto: 'Un símbolo del arte, la identidad y el orgullo estudiantil.'
                    }
                ]
            }
        ]
    },
    carpinteria: {
        id: 'carpinteria',
        titulo: 'Taller de Carpintería y Ebanistería',
        subtitulo: 'Transformando madera en obras maestras',
        descripcion: 'Desde sus inicios hasta convertirse en un taller de clase mundial con equipamiento industrial moderno',
        icon: 'fas fa-hammer',
        secciones: [
            {
                numero: 1,
                titulo: 'Fundación del Taller',
                contenido: 'El Taller de Carpintería y Ebanistería nació con la transformación del colegio cuando pasó a su modalidad técnica. Inicialmente, los talleres que comenzaron fueron únicamente el taller de estructuras metálicas y el taller de madera (existía también un taller agropecuario que posteriormente desapareció, manteniéndose actualmente junto con el taller de electricidad).\n\nEl taller fue concebido como una respuesta a la necesidad de ofrecer formación técnica práctica en el área de la carpintería, combinando técnicas tradicionales con posibilidades de modernización. Esta visión inicial sentó las bases para lo que hoy es un centro de excelencia en la formación de técnicos en madera.',
                imagen: 'fotos de maestros/WhatsApp Image 2026-09-05 at 9.58.49 PM.jpeg',
                imagenClase: 'imagen-fundacion',
                layout: 'text-image'
            },
            {
                numero: 2,
                titulo: 'Fundador e Impulsor',
                contenido: 'El fundador fue el profesor Dino, un maestro jubilado de gran trayectoria y experiencia en el área de carpintería. Su dedicación y pasión por la enseñanza del oficio fueron fundamentales para establecer los cimientos del taller.\n\nPosteriormente, el equipo docente asumió el seguimiento como asistentes técnicos para impulsar el desarrollo del taller tanto en el área de madera como en estructuras y electricidad. Esta continuidad garantizó que la visión original del profesor Dino se mantuviera viva y evolucionara con las necesidades del mercado laboral.\n\nSu legado perdura en la formación de cientos de estudiantes que han adquirido habilidades prácticas en carpintería y que hoy son profesionales exitosos en el sector.',
                imagen: 'fotos de maestros/Profe Dino Merino.jpeg',
                layout: 'image-text'
            },
            {
                numero: 3,
                titulo: 'Primeros Años y Dificultades Iniciales',
                contenido: 'Los inicios fueron complejos. En el espacio donde funciona actualmente el taller de madera, compartían área de trabajo tanto el taller de estructuras metálicas como el de madera, generando una situación de hacinamiento debido a la alta cantidad de estudiantes.\n\nLas máquinas y soldadoras debían trasladarse periódicamente hasta la subdirección, lo que limitaba la continuidad de los procesos de aprendizaje. Con el paso del tiempo, el taller de estructuras metálicas se independizó, permitiendo que el taller de madera contara con un espacio más dedicado.\n\nEn esa etapa inicial, casi todos los trabajos se realizaban de forma manual con herramientas básicas (como peines, ganchos y cepillos manuales), ya que no se contaba con maquinaria especializada como cepilladoras o rosters. A pesar de estas limitaciones, la calidad del trabajo y el compromiso del equipo docente permitieron que los estudiantes adquirieran sólidos conocimientos en técnicas fundamentales de carpintería.',
                imagen: 'fotos de maestros/WhatsApp Image 2026-09-05 at 10.10.40 PM.jpeg',
                layout: 'text-image'
            },
            {
                numero: 4,
                titulo: 'Evolución del Taller',
                contenido: 'Gracias al esfuerzo de los alumnos, padres de familia y personal docente, el taller ha logrado adquirir maquinaria industrial moderna. Hoy en día se elabora cualquier tipo de mueble de madera de alta calidad, desde piezas sencillas hasta proyectos complejos de ebanistería.\n\nLa institución cuenta con personal altamente capacitado para formar técnicos en las áreas de estructuras, electricidad y madera. El equipamiento actual permite que los estudiantes aprendan con estándares profesionales, preparándose adecuadamente para el mercado laboral.\n\nEsta evolución no ha sido casual, sino resultado de una inversión consciente en infraestructura y capacitación del personal docente, demostrando que la educación técnica puede alcanzar niveles de excelencia cuando existe compromiso institucional.',
                imagen: 'placeholder-4-evolucion.jpg',
                layout: 'image-text'
            },
            {
                numero: 5,
                titulo: 'Habilidades y Formación de los Estudiantes',
                contenido: 'El taller promueve la filosofía de "enseñar para la vida". El aprendizaje adquirido por los alumnos está diseñado para su inserción laboral directa o el emprendimiento. Muchos egresados de noveno grado han logrado vincularse exitosamente a empresas del rubro de la madera (como Noven o empresas palilleras), demostrando una preparación técnica sólida.\n\nLos estudiantes aprenden no solo a utilizar las herramientas y máquinas, sino también a comprender los procesos de selección de materiales, diseño de muebles, acabados finos y control de calidad. Estos conocimientos los convierten en personas productivas o futuros dueños de sus propias empresas.\n\nLa formación integral que reciben permite que los egresados sean competitivos en el mercado laboral, con capacidades técnicas que les permiten adaptarse a diferentes tipos de trabajos en el sector de la carpintería y la ebanistería.',
                tipo: 'card-grid',
                items: [
                    {
                        icon: 'fas fa-briefcase',
                        titulo: 'Inserción Laboral',
                        texto: 'Egresados vinculados exitosamente a empresas del sector maderero.'
                    },
                    {
                        icon: 'fas fa-hammer-head',
                        titulo: 'Técnicas Especializadas',
                        texto: 'Dominio de técnicas de carpintería, ebanistería y acabados de calidad.'
                    },
                    {
                        icon: 'fas fa-building',
                        titulo: 'Emprendimiento',
                        texto: 'Muchos egresados crean sus propias empresas en el sector.'
                    },
                    {
                        icon: 'fas fa-star',
                        titulo: 'Calidad Profesional',
                        texto: 'Formación con estándares profesionales e industriales.'
                    }
                ]
            },
            {
                numero: 6,
                titulo: 'Medidas de Seguridad y Normas',
                contenido: 'El 100% de los estudiantes debe utilizar gabacha dentro del taller como norma fundamental de seguridad. Al operar maquinaria, es obligatorio el uso de dispositivos de protección personal, incluyendo gafas de seguridad, guantes protectores y protección auditiva cuando sea necesario.\n\nExiste una supervisión docente permanente para prevenir accidentes graves inherentes al uso de herramientas de corte y discos. Todas las máquinas cuentan con sistemas de seguridad actualizado y los estudiantes reciben capacitación exhaustiva sobre el manejo seguro de equipos antes de utilizarlos.\n\nEstas medidas de seguridad son no negociables y forman parte fundamental de la formación, inculcando en los estudiantes la importancia de trabajar de manera responsable y protegida, hábito que llevarán a su vida profesional.',
                tipo: 'challenge-grid',
                items: [
                    {
                        numero: '1',
                        titulo: 'Equipo Protector Obligatorio',
                        texto: 'Uso de gabacha, gafas, guantes y protección auditiva en todo momento.'
                    },
                    {
                        numero: '2',
                        titulo: 'Supervisión Docente',
                        texto: 'Vigilancia permanente durante operación de máquinas y herramientas.'
                    },
                    {
                        numero: '3',
                        titulo: 'Sistemas de Seguridad',
                        texto: 'Máquinas equipadas con sistemas de seguridad modernos y actualizados.'
                    },
                    {
                        numero: '4',
                        titulo: 'Capacitación Exhaustiva',
                        texto: 'Entrenamientos obligatorios antes de operar cualquier equipo.'
                    }
                ]
            },
            {
                numero: 7,
                titulo: 'Principales Logros',
                contenido: 'Con el apoyo del estudiantado, docentes y administración, el taller ha sido equipado con prensas, canteadoras, cepilladoras, cepillos de mano, lijadoras y toda la maquinaria necesaria para garantizar un proceso de enseñanza-aprendizaje de estándar profesional.\n\nEl taller cuenta actualmente con equipos de última generación que permiten a los estudiantes trabajar con tecnología de punta. Esta inversión en infraestructura ha resultado en mejores egresados, con habilidades competitivas en el mercado laboral.\n\nLos proyectos realizados en el taller han ganado reconocimiento tanto dentro como fuera de la institución, demostrando la calidad del trabajo y la dedicación del equipo. Cada año se producen muebles y piezas de arte que reflejan el aprendizaje y la creatividad de los estudiantes.',
                imagen: 'placeholder-7-logros.jpg',
                layout: 'text-image'
            },
            {
                numero: 8,
                titulo: 'Planes a Futuro y Retos',
                contenido: 'El objetivo primordial del área es asegurar que cada estudiante que egrese del Instituto Técnico Francisco Miranda obtenga una formación técnica sólida para valerse en la vida. A diferencia de otros materiales, la madera exige máxima precisión, ya que un corte erróneo no se puede soldar ni corregir fácilmente, requiriendo altos estándares de disciplina y arte.\n\nFuturos planes incluyen la expansión del taller con equipos aún más especializados, la incorporación de nuevas técnicas de diseño asistido por computadora (CAD), y la ampliación de las áreas de aprendizaje para que los estudiantes puedan especializarse en diferentes aspectos de la carpintería.\n\nSe busca mantener la excelencia del taller y consolidarlo como referencia regional en la formación de técnicos en carpintería y ebanistería, asegurando que cada egresado sea un profesional íntegro, competente y con valores que lo distingan en el mercado laboral.',
                imagen: 'placeholder-8-futuro.jpg',
                layout: 'image-text'
            }
        ]
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TALLERES_DATA;
}
