/* ZEMTRAK Catalog Data - Auto-generated source of truth */
export const ZEMTRAK_DATA = {
  "equipmentGroups": [
    {
      "id": "earthmoving",
      "title": "Землеройная техника",
      "slug": "zemleroynaya-tehnika",
      "icon": "🚜",
      "description": "Гусеничные, колёсные и мини-экскаваторы, погрузчики и траншеекопатели для земляных работ любого масштаба.",
      "categories": [
        {
          "id": "tracked-excavators",
          "title": "Гусеничные экскаваторы",
          "slug": "gusenichnye-ekskavatory",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": true,
          "priceFrom": "от 3 500 ₽/час",
          "priceShift": "от 28 000 ₽/смена",
          "specs": [
            {
              "label": "Объем ковша",
              "value": "0.8 – 2.5 м³"
            },
            {
              "label": "Глубина копания",
              "value": "до 7.5 м"
            },
            {
              "label": "Эксплуатационная масса",
              "value": "14 – 36 тонн"
            }
          ],
          "shortDesc": "Тяжелая землеройная техника для разработки котлованов, выемки скального грунта и погрузки самосвалов в тяжелых грунтовых условиях.",
          "relatedServices": [
            "razrabotka-kotlovanov",
            "vyemka-grunta",
            "ustroystvo-nasypey",
            "snos-zdaniy-sooruzheniy"
          ],
          "models": [
            {
              "slug": "hitachi-zx200",
              "title": "Hitachi ZX 200LC-5G",
              "price": "от 28 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "В наличии на базе",
              "image": "/assets/images/excavators/hitachi-zx200.jpg",
              "specs": {
                "Объем ковша": "1.2 м³",
                "Глубина копания": "6 670 мм",
                "Радиус копания": "9 920 мм",
                "Эксплуатационная масса": "20 500 кг",
                "Мощность двигателя": "125 кВт / 170 л.с.",
                "Ширина гусениц": "600 / 800 мм"
              },
              "attachments": [
                "Стандартный ковш 1.2 м³",
                "Планировочный ковш 2.0 м",
                "Гидромолот 4500 Дж",
                "Узкий траншейный ковш 400 мм"
              ],
              "suitableTasks": [
                "Разработка глубоких строительных котлованов",
                "Послойная выемка грунта с погрузкой в самосвалы",
                "Рытьё траншей под магистральные трубопроводы",
                "Вскрышные работы и планировка стройплощадок"
              ],
              "relatedServices": [
                "razrabotka-kotlovanov",
                "vyemka-grunta",
                "rytyo-transhey",
                "demontazh-fundamentov"
              ]
            }
          ]
        },
        {
          "id": "wheel-excavators",
          "title": "Колёсные экскаваторы",
          "slug": "kolyosnye-ekskavatory",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 3 200 ₽/час",
          "priceShift": "от 25 600 ₽/смена",
          "specs": [
            {
              "label": "Объем ковша",
              "value": "0.6 – 1.1 м³"
            },
            {
              "label": "Глубина копания",
              "value": "до 6.2 м"
            },
            {
              "label": "Скорость хода",
              "value": "до 35 км/ч"
            }
          ],
          "shortDesc": "Мобильные полноповоротные экскаваторы для городских условий, самостоятельного перемещения между объектами без вызова трала.",
          "relatedServices": [
            "rytyo-transhey",
            "razrabotka-kotlovanov",
            "blagoustroystvo-territorii",
            "prokladka-vodoprovoda"
          ]
        },
        {
          "id": "mini-excavators",
          "title": "Мини-экскаваторы",
          "slug": "mini-ekskavatory",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 2 200 ₽/час",
          "priceShift": "от 17 600 ₽/смена",
          "specs": [
            {
              "label": "Объем ковша",
              "value": "0.05 – 0.35 м³"
            },
            {
              "label": "Глубина копания",
              "value": "до 3.2 м"
            },
            {
              "label": "Масса",
              "value": "1.5 – 5.5 тонн"
            }
          ],
          "shortDesc": "Компактная техника на резиновых гусеницах для стесненных пространств, работы внутри зданий, прокладки кабелей и ландшафтных работ.",
          "relatedServices": [
            "rytyo-transhey",
            "prokladka-kabelya",
            "blagoustroystvo-territorii",
            "ustroystvo-drenazha"
          ]
        },
        {
          "id": "backhoe-loaders",
          "title": "Экскаваторы-погрузчики",
          "slug": "ekskavatory-pogruzchiki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 2 700 ₽/час",
          "priceShift": "от 21 600 ₽/смена",
          "specs": [
            {
              "label": "Фронтальный ковш",
              "value": "1.0 – 1.3 м³ (челюстной)"
            },
            {
              "label": "Экскаваторный ковш",
              "value": "0.25 – 0.4 м³"
            },
            {
              "label": "Глубина копания",
              "value": "до 5.8 м (телескоп)"
            }
          ],
          "shortDesc": "Универсальная машина «два в одном» (JCB 3CX/4CX, MST): копает траншеи, планирует грунт, грузит самосвалы и расчищает территорию.",
          "relatedServices": [
            "rytyo-transhey",
            "obratnaya-zasypka",
            "pogruzka-sypuchih",
            "uborka-snega"
          ]
        },
        {
          "id": "trencher-machines",
          "title": "Траншеекопатели и грунторезы",
          "slug": "transheekopateli-gruntorezy",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 3 000 ₽/час",
          "priceShift": "от 24 000 ₽/смена",
          "specs": [
            {
              "label": "Ширина щели",
              "value": "140 – 400 мм"
            },
            {
              "label": "Глубина пропила",
              "value": "до 2.0 м"
            },
            {
              "label": "Грунты",
              "value": "I – IV категория, мерзлый грунт"
            }
          ],
          "shortDesc": "Баровые установки для скоростной нарезки траншей правильной геометрии под кабели, оптоволокно, газопровод и водопровод.",
          "relatedServices": [
            "rytyo-transhey",
            "prokladka-kabelya",
            "prokladka-vodoprovoda"
          ]
        }
      ]
    },
    {
      "id": "loading",
      "title": "Погрузочная техника",
      "slug": "pogruzochnaya-tehnika",
      "icon": "🚜",
      "description": "Фронтальные, телескопические, вилочные и компактные мини-погрузчики для перемещения сыпучих и штучных грузов.",
      "categories": [
        {
          "id": "wheel-loaders",
          "title": "Фронтальные погрузчики",
          "slug": "frontalnye-pogruzchiki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 2 800 ₽/час",
          "priceShift": "от 22 400 ₽/смена",
          "specs": [
            {
              "label": "Объем ковша",
              "value": "2.0 – 4.5 м³"
            },
            {
              "label": "Грузоподъемность",
              "value": "3 – 6 тонн"
            },
            {
              "label": "Высота выгрузки",
              "value": "до 3.8 м"
            }
          ],
          "shortDesc": "Мощные ковшовые погрузчики для быстрой погрузки песка, щебня, грунта, снега и перемещения сыпучих материалов на базах и стройках.",
          "relatedServices": [
            "pogruzka-sypuchih",
            "vyvoz-snega",
            "dobycha-peska-shchebnya",
            "peregruzka-materialov"
          ]
        },
        {
          "id": "telescopic-handlers",
          "title": "Телескопические погрузчики",
          "slug": "teleskopicheskie-pogruzchiki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 3 400 ₽/час",
          "priceShift": "от 27 200 ₽/смена",
          "specs": [
            {
              "label": "Высота подъема",
              "value": "от 7 до 18 м"
            },
            {
              "label": "Грузоподъемность",
              "value": "3.5 – 5.0 тонн"
            },
            {
              "label": "Навески",
              "value": "Вилы, ковш, люлька, крюк"
            }
          ],
          "shortDesc": "Маневренная техника Manitou/JCB для подачи стройматериалов на этажи, работы на складах и монтажных высотных задач.",
          "relatedServices": [
            "podem-montazh-konstruktsiy",
            "razgruzka-negabarita",
            "fasadnye-raboty"
          ]
        },
        {
          "id": "skid-steer-loaders",
          "title": "Мини-погрузчики (Bobcat)",
          "slug": "mini-pogruzchiki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 2 000 ₽/час",
          "priceShift": "от 16 000 ₽/смена",
          "specs": [
            {
              "label": "Грузоподъемность",
              "value": "800 – 1 400 кг"
            },
            {
              "label": "Ковш",
              "value": "0.4 – 0.6 м³"
            },
            {
              "label": "Навески",
              "value": "Щетка, гидромолот, бур, вилы"
            }
          ],
          "shortDesc": "Компактные колесные и гусеничные мини-погрузчики для благоустройства, уборки снега, подметания щеткой и работы в паркингах.",
          "relatedServices": [
            "blagoustroystvo-territorii",
            "uborka-snega",
            "moyka-podmetanie",
            "obratnaya-zasypka"
          ]
        },
        {
          "id": "forklifts",
          "title": "Вилочные погрузчики",
          "slug": "vilochnye-pogruzchiki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 1 800 ₽/час",
          "priceShift": "от 14 400 ₽/смена",
          "specs": [
            {
              "label": "Грузоподъемность",
              "value": "1.5 – 10 тонн"
            },
            {
              "label": "Высота подъема",
              "value": "до 6.0 м"
            },
            {
              "label": "Привод",
              "value": "Дизель / газ / электро"
            }
          ],
          "shortDesc": "Складские и внедорожные вилочные кары для разгрузки фур, поддонов с кирпичом, плиткой, металлопрокатом и оборудованием.",
          "relatedServices": [
            "razgruzka-negabarita",
            "peregruzka-materialov",
            "takelazh-oborudovaniya"
          ]
        }
      ]
    },
    {
      "id": "grading-earth",
      "title": "Планировочная и грунтовая техника",
      "slug": "planirovochnaya-i-gruntovaya-tehnika",
      "icon": "🚜",
      "description": "Бульдозеры различных тяговых классов, автогрейдеры с 3D-нивелированием и тяжелые грунтовые катки.",
      "categories": [
        {
          "id": "bulldozers",
          "title": "Бульдозеры",
          "slug": "buldozery",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 3 300 ₽/час",
          "priceShift": "от 26 400 ₽/смена",
          "specs": [
            {
              "label": "Масса",
              "value": "16 – 38 тонн (Shantui, CAT, ЧТЗ)"
            },
            {
              "label": "Ширина отвала",
              "value": "3.4 – 4.2 м"
            },
            {
              "label": "Оснащение",
              "value": "Прямой/поворотный отвал, рыхлитель"
            }
          ],
          "shortDesc": "Гусеничные бульдозеры для послойного срезания и перемещения грунта, расчистки участков, снятия ПРС и профилирования откосов.",
          "relatedServices": [
            "vertikalnaya-planirovka",
            "srezka-rastitelnogo-sloya",
            "ustroystvo-nasypey",
            "rekultivaciya-karyerov"
          ]
        },
        {
          "id": "motor-graders",
          "title": "Автогрейдеры",
          "slug": "avtogreydery",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 3 600 ₽/час",
          "priceShift": "от 28 800 ₽/смена",
          "specs": [
            {
              "label": "Эксплуатационная масса",
              "value": "14 – 20 тонн"
            },
            {
              "label": "Длина грейдерного ножа",
              "value": "3.7 – 4.3 м"
            },
            {
              "label": "Точность планировки",
              "value": "Система 3D-нивелирования"
            }
          ],
          "shortDesc": "Точное профилирование дорожных оснований, планировка откосов, устройство песчано-щебеночной подушки под асфальт.",
          "relatedServices": [
            "ustroystvo-osnovaniya",
            "ustroystvo-obochin-kyuvetov",
            "vertikalnaya-planirovka",
            "zimnee-soderzhanie-dorog"
          ]
        },
        {
          "id": "soil-compactors",
          "title": "Грунтовые катки",
          "slug": "gruntovye-katki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 2 900 ₽/час",
          "priceShift": "от 23 200 ₽/смена",
          "specs": [
            {
              "label": "Масса",
              "value": "12 – 22 тонны"
            },
            {
              "label": "Тип вальца",
              "value": "Гладкий / кулачковый бандаж"
            },
            {
              "label": "Амплитуда вибрации",
              "value": "до 2.1 мм"
            }
          ],
          "shortDesc": "Вибрационные грунтовые катки для глубинного послойного уплотнения песка, глины, гравия и насыпных грунтов до проектного коэффициента.",
          "relatedServices": [
            "obratnaya-zasypka",
            "ustroystvo-osnovaniya",
            "ustroystvo-nasypey"
          ]
        }
      ]
    },
    {
      "id": "road-construction",
      "title": "Дорожно-строительная техника",
      "slug": "dorozhno-stroitelnaya-tehnika",
      "icon": "🛣️",
      "description": "Специализированный парк дорожных фрез Wirtgen, асфальтовых кохеров для литого асфальта, асфальтоукладчиков и катков.",
      "categories": [
        {
          "id": "road-milling",
          "title": "Дорожные фрезы",
          "slug": "dorozhnye-frezy",
          "image": "/assets/images/freza/wirtgen-w130-cf-yard.webp",
          "verified": true,
          "priceFrom": "от 5 000 ₽/час",
          "priceShift": "от 40 000 ₽/смена",
          "specs": [
            {
              "label": "Ширина фрезерования",
              "value": "1 000 – 2 000 мм"
            },
            {
              "label": "Глубина фрезерования",
              "value": "до 330 мм"
            },
            {
              "label": "Производительность",
              "value": "до 12 000 м²/смена"
            }
          ],
          "shortDesc": "Высокоточные немецкие фрезы Wirtgen W 130 CF и W 2000 для срезки изношенного асфальта, устранения колейности и выравнивания дорог.",
          "relatedServices": [
            "holodnoe-frezerovanie",
            "yamochniy-remont",
            "razborka-dorozhnyh-pokrytiy"
          ],
          "models": [
            {
              "slug": "wirtgen-w130-cf",
              "title": "Wirtgen W 130 CF",
              "price": "от 45 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "Собственный парк компании",
              "image": "/assets/images/freza/wirtgen-w130-cf-yard.webp",
              "specs": {
                "Ширина фрезерования": "1 300 мм",
                "Глубина фрезерования": "до 330 мм",
                "Мощность двигателя": "283 кВт / 385 л.с.",
                "Эксплуатационная масса": "20 900 кг",
                "Система нивелирования": "LEVEL PRO PLUS",
                "Погрузочный конвейер": "Складывающийся, поворотный 60°"
              },
              "attachments": [
                "Фрезерный барабан HT22",
                "Мелкозернистый барабан для чистового реза",
                "Система датчиков нивелирования Level Pro Plus"
              ],
              "suitableTasks": [
                "Послойное холодное фрезерование автодорог и магистралей",
                "Снятие асфальтобетона вокруг люков, бордюров и колодцев",
                "Устранение продольной и поперечной колейности",
                "Подготовка дорожного полотна под укладку нового асфальта"
              ],
              "relatedServices": [
                "holodnoe-frezerovanie",
                "yamochniy-remont",
                "razborka-dorozhnyh-pokrytiy"
              ]
            }
          ]
        },
        {
          "id": "asphalt-cookers",
          "title": "Кохеры литого асфальта",
          "slug": "asfaltovye-kohery",
          "image": "/assets/images/koher/koher-kamaz-orange.webp",
          "verified": true,
          "priceFrom": "от 4 500 ₽/час",
          "priceShift": "от 36 000 ₽/смена",
          "specs": [
            {
              "label": "Вместимость котла",
              "value": "4.5 – 10 м³ (до 15 тонн)"
            },
            {
              "label": "Температура смеси",
              "value": "до 250 °C"
            },
            {
              "label": "Обогрев и перемешивание",
              "value": "Автоматическая дизельная горелка + лопастная мешалка"
            }
          ],
          "shortDesc": "Передвижные термосы-смесители на шасси КамАЗ для доставки и укладки литого асфальтобетона при ремонте дорог и мостов круглый год.",
          "relatedServices": [
            "ukladka-litogo-asfalta",
            "yamochniy-remont",
            "germetizaciya-shvov"
          ],
          "models": [
            {
              "slug": "koher-kamaz",
              "title": "Кохер литого асфальта на шасси КамАЗ",
              "price": "от 36 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "В наличии (оранжевый / синий)",
              "image": "/assets/images/koher/koher-kamaz-orange.webp",
              "specs": {
                "Объем термоса": "8.0 м³",
                "Масса смеси": "до 14 тонн",
                "Рабочая температура": "200 – 240 °C",
                "Шасси": "КамАЗ 65115 / 6520",
                "Горелка": "Автоматическая Riello (дизель)",
                "Скорость выгрузки": "Регулируемый шибер и рукав"
              },
              "attachments": [
                "Поворотный лоток для слива",
                "Газовые подогреватели кромок",
                "Ручные гладилки литого асфальта"
              ],
              "suitableTasks": [
                "Круглогодичный ямочный ремонт дорог при температурах до -15°C",
                "Укладка гидроизолирующего и защитного слоя мостового полотна",
                "Заделка штроб после прокладки кабелей и инженерных коммуникаций",
                "Асфальтирование трамвайных путей и прирельсовых зон"
              ],
              "relatedServices": [
                "ukladka-litogo-asfalta",
                "yamochniy-remont",
                "germetizaciya-shvov"
              ]
            }
          ]
        },
        {
          "id": "asphalt-pavers",
          "title": "Асфальтоукладчики",
          "slug": "asfaltoukladchiki",
          "image": "/assets/images/freza/wirtgen-w130-cf-yard.webp",
          "verified": false,
          "priceFrom": "от 5 500 ₽/час",
          "priceShift": "от 44 000 ₽/смена",
          "specs": [
            {
              "label": "Ширина укладки",
              "value": "от 2.0 до 9.0 м"
            },
            {
              "label": "Бункер",
              "value": "10 – 16 тонн"
            },
            {
              "label": "Плита",
              "value": "Электроподогрев, трамбующий брус, вибраторы"
            }
          ],
          "shortDesc": "Колёсные и гусеничные укладчики Vögele / Dynapac для устройства бесшовного покрытия автомобильных дорог, стоянок и трасс.",
          "relatedServices": [
            "ukladka-goryachego-asfalta",
            "yamochniy-remont",
            "ustroystvo-vremennyh-dorog"
          ]
        },
        {
          "id": "asphalt-rollers",
          "title": "Дорожные асфальтовые катки",
          "slug": "dorozhnye-katki",
          "image": "/assets/images/freza/wirtgen-w130-cf-yard.webp",
          "verified": false,
          "priceFrom": "от 2 400 ₽/час",
          "priceShift": "от 19 200 ₽/смена",
          "specs": [
            {
              "label": "Масса",
              "value": "от 2.5 до 14 тонн"
            },
            {
              "label": "Тип",
              "value": "Тандемные двухвальцовые и комбинированные"
            },
            {
              "label": "Система орошения",
              "value": "Форсуночная под давлением с баком воды"
            }
          ],
          "shortDesc": "Тротуарные и магистральные гладковальцовые катки Hamm, Bomag для послойного уплотнения горячих асфальтовых смесей.",
          "relatedServices": [
            "ukladka-goryachego-asfalta",
            "yamochniy-remont",
            "ustroystvo-osnovaniya"
          ]
        },
        {
          "id": "bitumen-sprayers",
          "title": "Автогудронаторы",
          "slug": "avtogudronatory",
          "image": "/assets/images/koher/koher-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 2 800 ₽/час",
          "priceShift": "от 22 400 ₽/смена",
          "specs": [
            {
              "label": "Емкость цистерны",
              "value": "4 000 – 8 000 л"
            },
            {
              "label": "Ширина распределения",
              "value": "до 4.0 м"
            },
            {
              "label": "Материал",
              "value": "Битумная эмульсия, горячий битум"
            }
          ],
          "shortDesc": "Равномерное распыление вяжущих битумных эмульсий для подгрунтовки перед укладкой асфальтобетона.",
          "relatedServices": [
            "ukladka-goryachego-asfalta",
            "yamochniy-remont",
            "germetizaciya-shvov"
          ]
        },
        {
          "id": "joint-sealers",
          "title": "Заливщики швов",
          "slug": "zalivshchiki-shvov",
          "image": "/assets/images/koher/koher-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 2 500 ₽/час",
          "priceShift": "от 20 000 ₽/смена",
          "specs": [
            {
              "label": "Емкость котла",
              "value": "500 – 1 000 л"
            },
            {
              "label": "Температура мастики",
              "value": "до 200 °C"
            },
            {
              "label": "Оснащение",
              "value": "Обогреваемый шланг и компрессор"
            }
          ],
          "shortDesc": "Оборудование для разогрева и подачи мастики под давлением в дорожные швы, трещины и деформационные стыки мостов.",
          "relatedServices": [
            "germetizaciya-shvov",
            "yamochniy-remont",
            "remont-ograzhdeniy"
          ]
        },
        {
          "id": "road-marking-machines",
          "title": "Дорожные разметочные машины",
          "slug": "dorozhnye-razmetochnye-mashiny",
          "image": "/assets/images/freza/wirtgen-w130-cf-yard.webp",
          "verified": false,
          "priceFrom": "от 3 000 ₽/час",
          "priceShift": "от 24 000 ₽/смена",
          "specs": [
            {
              "label": "Материал",
              "value": "Термопластик, холодный пластик, краска"
            },
            {
              "label": "Производительность",
              "value": "до 30 км разметки в смену"
            },
            {
              "label": "Оснащение",
              "value": "Стеклошарикоподаватель"
            }
          ],
          "shortDesc": "Машины для нанесения продольной и поперечной разметки, пешеходных переходов и стрел термопластиком со световозвращающими шариками.",
          "relatedServices": [
            "nanesenie-razmetki",
            "blagoustroystvo-territorii"
          ]
        }
      ]
    },
    {
      "id": "trucks-dump",
      "title": "Грузовая и самосвальная техника",
      "slug": "gruzovaya-i-samosvalnaya-tehnika",
      "icon": "🚛",
      "description": "Самосвалы 6x4, 6x6, 8x4, тонары, бортовые грузовики и длинномеры грузоподъемностью до 45 тонн.",
      "categories": [
        {
          "id": "dump-trucks",
          "title": "Самосвалы",
          "slug": "samosvaly",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": true,
          "priceFrom": "от 1 800 ₽/час",
          "priceShift": "от 14 400 ₽/смена",
          "specs": [
            {
              "label": "Объем кузова",
              "value": "от 12 до 25 м³"
            },
            {
              "label": "Грузоподъемность",
              "value": "15 – 35 тонн"
            },
            {
              "label": "Колесная формула",
              "value": "6x4, 6x6 (вездеходы), 8x4"
            }
          ],
          "shortDesc": "Самосвалы КамАЗ, Shacman, Scania для вывоза строительного грунта из котлованов, доставки песка, щебня и вывоза снега.",
          "relatedServices": [
            "vyvoz-grunta-musora",
            "perevozka-sypuchih",
            "vyvoz-snega",
            "razrabotka-kotlovanov"
          ]
        },
        {
          "id": "tipper-trailers",
          "title": "Самосвальные полуприцепы (Тонары)",
          "slug": "tonary",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 2 400 ₽/час",
          "priceShift": "от 19 200 ₽/смена",
          "specs": [
            {
              "label": "Объем кузова",
              "value": "30 – 45 м³"
            },
            {
              "label": "Грузоподъемность",
              "value": "до 45 тонн"
            },
            {
              "label": "Назначение",
              "value": "Магистральная перевозка сыпучих грузов"
            }
          ],
          "shortDesc": "Сверхвместительные автопоезда для крупнооптовой доставки инертных материалов на асфальтобетонные заводы и масштабные стройки.",
          "relatedServices": [
            "perevozka-sypuchih",
            "vyvoz-grunta-musora",
            "dobycha-peska-shchebnya"
          ]
        },
        {
          "id": "flatbed-trucks",
          "title": "Бортовые грузовики и шаланды (длинномеры)",
          "slug": "bortovye-gruzoviki-shalandy",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 2 000 ₽/час",
          "priceShift": "от 16 000 ₽/смена",
          "specs": [
            {
              "label": "Длина платформы",
              "value": "6.0 – 13.6 м"
            },
            {
              "label": "Грузоподъемность",
              "value": "до 25 тонн"
            },
            {
              "label": "Тип кузова",
              "value": "Открытый борт, коники для труб"
            }
          ],
          "shortDesc": "Перевозка дорожных плит, ЖБИ изделий, арматуры, труб большого диаметра, кирпича и бытовок.",
          "relatedServices": [
            "perevozka-zhbi-metall",
            "dostavka-ograzhdeniy",
            "blagoustroystvo-territorii"
          ]
        }
      ]
    },
    {
      "id": "lifting",
      "title": "Подъёмная техника",
      "slug": "podyomnaya-tehnika",
      "icon": "🏗️",
      "description": "Автомобильные краны Zoomlion грузоподъемностью 25–600 тонн, краны-манипуляторы КМУ и автогидроподъемники.",
      "categories": [
        {
          "id": "truck-cranes",
          "title": "Автокраны",
          "slug": "avtokrany",
          "image": "/assets/images/cranes/zoomlion-zat.jpg",
          "verified": true,
          "priceFrom": "от 3 500 ₽/час",
          "priceShift": "от 28 000 ₽/смена",
          "specs": [
            {
              "label": "Грузоподъемность",
              "value": "от 25 до 600 тонн"
            },
            {
              "label": "Длина стрелы",
              "value": "от 28 до 90 м (+ гусек до 45 м)"
            },
            {
              "label": "Тип крана",
              "value": "Шоссейные ZTC, короткобазные ZRT, вездеходные ZAT"
            }
          ],
          "shortDesc": "Парк мощных мобильных кранов Zoomlion для монтажа металлоконструкций, балок мостов, башенных кранов и трансформаторов.",
          "relatedServices": [
            "podem-montazh-konstruktsiy",
            "ustanovka-balok-ferm",
            "takelazh-oborudovaniya"
          ],
          "models": [
            {
              "slug": "zoomlion-zat-series",
              "title": "Автокраны вездеходные Zoomlion ZAT (80 – 600 тонн)",
              "price": "от 55 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "В наличии (ZAT3000, ZAT6000)",
              "image": "/assets/images/cranes/zoomlion-zat.jpg",
              "specs": {
                "Грузоподъемность": "до 600 тонн",
                "Длина телескопической стрелы": "до 90.0 м",
                "Высота подъема с гуськом": "до 135 м",
                "Шасси": "Многоосное спецшасси с приводом на все колеса (All-Terrain)",
                "Противовес": "до 180 тонн",
                "Компьютерная система": "Hirschmann, контроль перегруза и ветровых нагрузок"
              },
              "attachments": [
                "Решетчатый гусек с регулируемым углом",
                "Дополнительные секции противовесов",
                "Такелажные стропы и траверсы грузоподъемностью до 200 тонн"
              ],
              "suitableTasks": [
                "Монтаж тяжелых пролетных строений мостов и эстакад",
                "Установка заводских технологических колонн и ректификационных башен",
                "Монтаж и демонтаж башенных кранов на высотном строительстве",
                "Погрузка и разгрузка негабаритных трансформаторов и турбин"
              ],
              "relatedServices": [
                "podem-montazh-konstruktsiy",
                "ustanovka-balok-ferm",
                "takelazh-oborudovaniya"
              ]
            },
            {
              "slug": "zoomlion-ztc-series",
              "title": "Автокраны шоссейные Zoomlion ZTC (25 – 100 тонн)",
              "price": "от 28 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "Быстрая подача от 2 часов",
              "image": "/assets/images/cranes/zoomlion-ztc.jpg",
              "specs": {
                "Грузоподъемность": "25 / 50 / 80 / 100 тонн",
                "Длина стрелы": "от 32 до 64 м",
                "Длина гуська": "от 8 до 16 м",
                "Шасси": "Шоссейное Euro 5, высокая маневренность",
                "Опорный контур": "X-образные аутригеры увеличенного размаха"
              },
              "attachments": [
                "Удлинитель стрелы (гусек)",
                "Стропы 4СК, текстильные петлевые стропы",
                "Такелажная паутина и скобы"
              ],
              "suitableTasks": [
                "Монтаж сэндвич-панелей и каркасов зданий",
                "Разгрузка железобетонных плит перекрытия и блоков",
                "Подача кровельных материалов и вентиляционных установок",
                "Монтаж рекламных щитов, вышек сотовой связи и опор"
              ],
              "relatedServices": [
                "podem-montazh-konstruktsiy",
                "razgruzka-negabarita",
                "fasadnye-raboty"
              ]
            }
          ]
        },
        {
          "id": "crane-manipulators",
          "title": "Краны-манипуляторы (КМУ)",
          "slug": "kmu-manipulyatory",
          "image": "/assets/images/manipulator/kmu-7t.jpg",
          "verified": true,
          "priceFrom": "от 2 300 ₽/час",
          "priceShift": "от 18 400 ₽/смена",
          "specs": [
            {
              "label": "Грузоподъемность стрелы",
              "value": "от 3 до 10 тонн"
            },
            {
              "label": "Вылет стрелы",
              "value": "от 8 до 22 м"
            },
            {
              "label": "Грузоподъемность борта",
              "value": "от 5 до 15 тонн"
            }
          ],
          "shortDesc": "Универсальный автомобиль: сам загружает, перевозит и монтирует. Доставка стройматериалов, бытовок, колец ЖБИ и оборудования.",
          "relatedServices": [
            "perevozka-zhbi-metall",
            "takelazh-oborudovaniya",
            "montazh-barernogo-ograzhdeniya"
          ],
          "models": [
            {
              "slug": "kmu-7t",
              "title": "Кран-манипулятор 7 тонн на базе КамАЗ",
              "price": "от 20 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "В наличии на базе",
              "image": "/assets/images/manipulator/kmu-7t.jpg",
              "specs": {
                "Грузоподъемность стрелы": "7.0 тонн (на мин. вылете)",
                "Грузоподъемность на макс. вылете": "1 200 кг (19.0 м)",
                "Длина борта": "6.8 м",
                "Грузоподъемность борта": "10 тонн",
                "Оснащение": "Монтажная корзина-люлька для 2 человек"
              },
              "attachments": [
                "Стропы текстильные и цепные",
                "Траверса для эвакуации и погрузки техники",
                "Монтажная поворотная люлька"
              ],
              "suitableTasks": [
                "Доставка и установка бытовок, блок-контейнеров и постов охраны",
                "Погрузка и разгрузка кирпича, блоков, сухих смесей на поддонах",
                "Монтаж колодезных колец, столбов освещения и опор",
                "Высотные монтажные работы с использованием сертифицированной люльки"
              ],
              "relatedServices": [
                "perevozka-zhbi-metall",
                "takelazh-oborudovaniya",
                "fasadnye-raboty",
                "montazh-barernogo-ograzhdeniya"
              ]
            }
          ]
        },
        {
          "id": "aerial-platforms",
          "title": "Автовышки (АГП)",
          "slug": "avtovyshki",
          "image": "/assets/images/manipulator/kmu-7t.jpg",
          "verified": false,
          "priceFrom": "от 2 000 ₽/час",
          "priceShift": "от 16 000 ₽/смена",
          "specs": [
            {
              "label": "Высота подъема",
              "value": "от 16 до 45 м"
            },
            {
              "label": "Грузоподъемность корзины",
              "value": "250 – 400 кг"
            },
            {
              "label": "Конструкция стрелы",
              "value": "Телескопическая / коленчатая"
            }
          ],
          "shortDesc": "Безопасный подъем персонала и инструмента для фасадных, кровельных, климатических и рекламных работ на высоте.",
          "relatedServices": [
            "fasadnye-raboty",
            "podem-montazh-konstruktsiy"
          ]
        }
      ]
    },
    {
      "id": "heavy-transport",
      "title": "Транспортировка спецтехники",
      "slug": "transportirovka-spetstehniki",
      "icon": "🚛",
      "description": "Низкорамные тралы, полуприцепы-тяжеловозы и эвакуаторы спецтехники для перевозки негабаритных грузов.",
      "categories": [
        {
          "id": "lowbed-trailers",
          "title": "Низкорамные тралы",
          "slug": "nizkoramnye-traly",
          "image": "/assets/images/tral/wirtgen-w130-cf-on-tral.webp",
          "verified": true,
          "priceFrom": "от 3 500 ₽/час",
          "priceShift": "по километражу / сменам",
          "specs": [
            {
              "label": "Грузоподъемность",
              "value": "от 25 до 90 тонн"
            },
            {
              "label": "Погрузочная высота",
              "value": "0.5 – 0.9 м (передний / задний заезд)"
            },
            {
              "label": "Длина площадки",
              "value": "от 9 до 16 м (с раздвижкой)"
            }
          ],
          "shortDesc": "Перевозка экскаваторов, дорожных фрез, буровых, катков и тяжелых негабаритных станков с оформлением спецразрешений.",
          "relatedServices": [
            "perevozka-negabaritnoy-tehniki"
          ],
          "models": [
            {
              "slug": "tral-heavy-lowbed",
              "title": "Низкорамный тяжеловоз 40–60 тонн с аппарелями",
              "price": "от 28 000 ₽ / рейс по Москве и МО",
              "isVerifiedFleet": true,
              "badge": "В наличии",
              "image": "/assets/images/tral/wirtgen-w130-cf-on-tral.webp",
              "specs": {
                "Грузоподъемность": "до 60 тонн",
                "Высота платформы": "650 мм",
                "Ширина платформы": "2.5 м (с уширителями до 3.0 м)",
                "Заезд": "Гидравлические аппарели с малым углом въезда",
                "Тягач": "Scania / MAN 6x4"
              },
              "attachments": [
                "Уширители платформы",
                "Стяжные цепи и талрепы 12 тонн",
                "Проблесковые маяки и знаки негабарита"
              ],
              "suitableTasks": [
                "Перебазировка гусеничных экскаваторов и бульдозеров",
                "Транспортировка дорожных фрез Wirtgen и асфальтоукладчиков",
                "Перевозка дробильно-сортировочных установок и буровых комплексов"
              ],
              "relatedServices": [
                "perevozka-negabaritnoy-tehniki"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "drilling-piling",
      "title": "Буровая и свайная техника",
      "slug": "burovaya-i-svaynaya-tehnika",
      "icon": "⚙️",
      "description": "Сваебойные копровые машины, установки для забивки стоек дорожных барьеров, буровые комплексы и вибропогружатели.",
      "categories": [
        {
          "id": "guardrail-post-drivers",
          "title": "Сваебойные машины для дорожных ограждений",
          "slug": "svaeboynye-mashiny-ograzhdeniy",
          "image": "/assets/images/barrier/barrier-installation.jpg",
          "verified": true,
          "priceFrom": "от 4 000 ₽/час",
          "priceShift": "от 32 000 ₽/смена",
          "specs": [
            {
              "label": "Энергия удара",
              "value": "от 950 до 1 500 Дж"
            },
            {
              "label": "Глубина забивки",
              "value": "до 3.0 м"
            },
            {
              "label": "Профиль стойки",
              "value": "С-образный, двутавр № 10–14, швеллер, трубы"
            }
          ],
          "shortDesc": "Специализированные самоходные копровые установки на гусеничном ходу (Orteco, Pauselli) для скоростной забивки стоек ограждений.",
          "relatedServices": [
            "montazh-barernogo-ograzhdeniya",
            "zabivka-stoek-ograzhdeniya",
            "remont-ograzhdeniy"
          ],
          "models": [
            {
              "slug": "post-driver-orteco",
              "title": "Самоходная сваебойная установка для барьерных ограждений",
              "price": "от 35 000 ₽/смена",
              "isVerifiedFleet": true,
              "badge": "В наличии с бригадой монтажников",
              "image": "/assets/images/barrier/barrier-installation.jpg",
              "specs": {
                "Энергия удара гидромолота": "1 200 Дж",
                "Частота ударов": "680 – 1 150 уд/мин",
                "Максимальная высота стойки": "2 800 мм",
                "Шасси": "Самоходное резиновое гусеничное",
                "Лазерная система": "Контроль вертикальности и линии установки"
              },
              "attachments": [
                "Бойки под стойку С-100, С-120",
                "Бойки под двутавр 10–14",
                "Экстрактор для извлечения поврежденных стоек"
              ],
              "suitableTasks": [
                "Монтаж дорожного барьерного ограждения на скоростных трассах и мостах",
                "Забивка стоек в плотный грунт, асфальт и обочину",
                "Оперативный ремонт барьерки после ДТП",
                "Установка стоек под шумозащитные экраны и пешеходные перила"
              ],
              "relatedServices": [
                "montazh-barernogo-ograzhdeniya",
                "zabivka-stoek-ograzhdeniya",
                "remont-ograzhdeniy",
                "shumozashchitnye-ekrany"
              ]
            }
          ]
        },
        {
          "id": "drilling-rigs",
          "title": "Буровые установки и буроямы (БКМ)",
          "slug": "burovye-ustanovki-buroyamy",
          "image": "/assets/images/barrier/barrier-installation.jpg",
          "verified": false,
          "priceFrom": "от 3 200 ₽/час",
          "priceShift": "от 25 600 ₽/смена",
          "specs": [
            {
              "label": "Диаметр бурения",
              "value": "от 200 до 1 200 мм"
            },
            {
              "label": "Глубина бурения",
              "value": "до 15 м (шнек / телескоп)"
            },
            {
              "label": "Шасси",
              "value": "Вездеход 4x4 / 6x6"
            }
          ],
          "shortDesc": "Бурильно-крановые машины для бурения скважин под буронабивные сваи, опоры ЛЭП, фундаменты заборов и столбы освещения.",
          "relatedServices": [
            "burenie-skvazhin-svai",
            "lidernoe-burenie"
          ]
        },
        {
          "id": "piling-rigs",
          "title": "Сваебойные копровые установки",
          "slug": "svaeboynye-ustanovki",
          "image": "/assets/images/barrier/barrier-installation.jpg",
          "verified": false,
          "priceFrom": "от 4 500 ₽/час",
          "priceShift": "от 36 000 ₽/смена",
          "specs": [
            {
              "label": "Длина сваи",
              "value": "до 16 м (цельная) / составные"
            },
            {
              "label": "Сечение свай",
              "value": "300x300, 350x350, 400x400 мм"
            },
            {
              "label": "Тип молота",
              "value": "Дизельный / гидравлический"
            }
          ],
          "shortDesc": "Забивка железобетонных свай для фундаментов многоквартирных домов, промышленных зданий, мостовых опор и складов.",
          "relatedServices": [
            "zabivka-zhb-svay",
            "lidernoe-burenie",
            "vibropogruzhenie-shpunta"
          ]
        },
        {
          "id": "vibro-drivers",
          "title": "Вибропогружатели",
          "slug": "vibropogruzhateli",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 4 000 ₽/час",
          "priceShift": "от 32 000 ₽/смена",
          "specs": [
            {
              "label": "Элементы",
              "value": "Шпунт Ларсена (Л4, Л5, VL), стальные трубы"
            },
            {
              "label": "Установка",
              "value": "Навесной на экскаватор / крановый подвесной"
            },
            {
              "label": "Центробежная сила",
              "value": "до 600 кН"
            }
          ],
          "shortDesc": "Погружение и извлечение шпунта Ларсена при устройстве ограждений котлованов, укреплении берегов и траншей.",
          "relatedServices": [
            "vibropogruzhenie-shpunta",
            "razrabotka-kotlovanov",
            "ustroystvo-drenazha"
          ]
        }
      ]
    },
    {
      "id": "demolition",
      "title": "Демонтажная техника",
      "slug": "demontazhnaya-tehnika",
      "icon": "💥",
      "description": "Экскаваторы-разрушители с удлиненной стрелой, навесные гидроножницы, мощные гидромолоты и дробильные ковши.",
      "categories": [
        {
          "id": "demolition-excavators",
          "title": "Экскаваторы с гидроножницами и бетоноломами",
          "slug": "ekskavatory-s-gidronozhnicami",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 4 200 ₽/час",
          "priceShift": "от 33 600 ₽/смена",
          "specs": [
            {
              "label": "Масса экскаватора",
              "value": "22 – 45 тонн"
            },
            {
              "label": "Усилие сжатия ножниц",
              "value": "до 350 тонн на зубьях"
            },
            {
              "label": "Функция",
              "value": "Резка арматуры и дробление бетона в порошок"
            }
          ],
          "shortDesc": "Безопасный механизированный снос монолитных железобетонных конструкций, промышленных цехов, дымовых труб и мостов.",
          "relatedServices": [
            "snos-zdaniy-sooruzheniy",
            "demontazh-fundamentov",
            "pererabotka-stroitelnogo-loma"
          ]
        },
        {
          "id": "hydraulic-hammers",
          "title": "Гидромолоты на базе экскаваторов",
          "slug": "gidromoloty",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 3 600 ₽/час",
          "priceShift": "от 28 800 ₽/смена",
          "specs": [
            {
              "label": "Энергия удара",
              "value": "от 3 500 до 12 000 Дж"
            },
            {
              "label": "Масса молота",
              "value": "1.5 – 4.5 тонны"
            },
            {
              "label": "Диаметр пики",
              "value": "135 – 180 мм"
            }
          ],
          "shortDesc": "Разрушение армированных монолитных фундаментов, скальных пород, мерзлого грунта и дорожных бетонных плит.",
          "relatedServices": [
            "demontazh-fundamentov",
            "vyemka-skalnogo-grunta",
            "razborka-dorozhnyh-pokrytiy"
          ]
        },
        {
          "id": "crushing-buckets",
          "title": "Дробильные ковши и мобильные дробилки",
          "slug": "drobilnye-kovshi-i-drobilki",
          "image": "/assets/images/excavators/hitachi-zx200.jpg",
          "verified": false,
          "priceFrom": "от 4 500 ₽/час",
          "priceShift": "от 36 000 ₽/смена",
          "specs": [
            {
              "label": "Фракция на выходе",
              "value": "20–40, 40–70, 70–120 мм"
            },
            {
              "label": "Производительность",
              "value": "до 150 м³/час"
            },
            {
              "label": "Тип",
              "value": "Щековые и роторные дробильные комплексы"
            }
          ],
          "shortDesc": "Переработка кирпичного и бетонного лома прямо на строительной площадке во вторичный щебень для отсыпки дорог.",
          "relatedServices": [
            "pererabotka-stroitelnogo-loma",
            "ustroystvo-vremennyh-dorog",
            "snos-zdaniy-sooruzheniy"
          ]
        }
      ]
    },
    {
      "id": "municipal-cleaning",
      "title": "Коммунальная и уборочная техника",
      "slug": "kommunalnaya-i-uborochnaya-tehnika",
      "icon": "🧹",
      "description": "КДМ на шасси КамАЗ, вакуумные подметальные машины, поливомоечные комплексы, илососы и каналопромывочные машины.",
      "categories": [
        {
          "id": "kdm-cleaning",
          "title": "Комбинированные дорожные машины (КДМ)",
          "slug": "kombinirovannye-dorozhnye-mashiny",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 2 400 ₽/час",
          "priceShift": "от 19 200 ₽/смена",
          "specs": [
            {
              "label": "Летнее оснащение",
              "value": "Цистерна 8–10 м³, мойка под давлением, рейка, средняя щетка"
            },
            {
              "label": "Зимнее оснащение",
              "value": "Пескосолераспределитель, поворотный отвал, скоростной отвал"
            },
            {
              "label": "Базовое шасси",
              "value": "КамАЗ 65115"
            }
          ],
          "shortDesc": "Круглогодичное обслуживание автодорог, автомагистралей и заводских территорий: мойка, посыпка ПГМ, очистка от снега.",
          "relatedServices": [
            "moyka-podmetanie",
            "uborka-snega"
          ]
        },
        {
          "id": "suction-trucks",
          "title": "Илососные и каналопромывочные машины",
          "slug": "ilososnye-i-kanalopromyvochnye-mashiny",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 3 000 ₽/час",
          "priceShift": "от 24 000 ₽/смена",
          "specs": [
            {
              "label": "Объем цистерны",
              "value": "от 7 до 14 м³"
            },
            {
              "label": "Глубина всасывания",
              "value": "до 15 м"
            },
            {
              "label": "Давление гидродинамики",
              "value": "до 200 бар"
            }
          ],
          "shortDesc": "Гидродинамическая прочистка ливневой канализации, откачка бурового шлама, очистка колодцев, жироуловителей и отстойников.",
          "relatedServices": [
            "promyvka-kanalizatsii",
            "otkachka-zhidkih-othodov",
            "prokladka-vodoprovoda"
          ]
        }
      ]
    },
    {
      "id": "quarry",
      "title": "Карьерная техника",
      "slug": "karyernaya-tehnika",
      "icon": "⛰️",
      "description": "Карьерные гусеничные экскаваторы, сочлененные самосвалы, мобильные грохоты и дробильно-сортировочные комплексы.",
      "categories": [
        {
          "id": "articulated-dumpers",
          "title": "Сочленённые самосвалы (вездеходы)",
          "slug": "sochlenyonnye-samosvaly",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 4 200 ₽/час",
          "priceShift": "от 33 600 ₽/смена",
          "specs": [
            {
              "label": "Грузоподъемность",
              "value": "от 25 до 40 тонн"
            },
            {
              "label": "Колесная формула",
              "value": "6x6 с сочлененной рамой"
            },
            {
              "label": "Проходимость",
              "value": "Глубокая грязь, глина, песчаные карьеры, бездорожье"
            }
          ],
          "shortDesc": "Перевозка грунта и горной массы в условиях абсолютного бездорожья, где обычные шоссейные самосвалы вязнут.",
          "relatedServices": [
            "dobycha-peska-shchebnya",
            "vyemka-grunta",
            "rekultivaciya-karyerov"
          ]
        },
        {
          "id": "mobile-screens",
          "title": "Мобильные грохоты и сортировочные установки",
          "slug": "mobilnye-grohoty",
          "image": "/assets/images/freza/wirtgen-w130-cf-yard.webp",
          "verified": false,
          "priceFrom": "от 5 000 ₽/час",
          "priceShift": "от 40 000 ₽/смена",
          "specs": [
            {
              "label": "Количество дек",
              "value": "2 или 3 деки (до 4 готовых фракций)"
            },
            {
              "label": "Производительность",
              "value": "до 300 тонн/час"
            },
            {
              "label": "Шасси",
              "value": "Самоходное гусеничное"
            }
          ],
          "shortDesc": "Разделение песка, гравия, щебня и грунта по фракциям на карьерах и строительных площадках.",
          "relatedServices": [
            "dobycha-peska-shchebnya",
            "droblenie-sortirovka",
            "pererabotka-stroitelnogo-loma"
          ]
        }
      ]
    },
    {
      "id": "concrete",
      "title": "Бетонные работы и доставка бетона",
      "slug": "betonnye-raboty-i-tehnika",
      "icon": "🏢",
      "description": "Автобетононасосы со стрелой до 56 м, автобетоносмесители 7–12 м³ и стационарные насосы высокого давления.",
      "categories": [
        {
          "id": "concrete-pumps",
          "title": "Автобетононасосы (АБН)",
          "slug": "avtobetononasosy",
          "image": "/assets/images/cranes/zoomlion-ztc.jpg",
          "verified": false,
          "priceFrom": "от 4 000 ₽/час",
          "priceShift": "от 32 000 ₽/смена",
          "specs": [
            {
              "label": "Длина стрелы",
              "value": "от 24 до 56 м"
            },
            {
              "label": "Производительность",
              "value": "до 160 м³/час"
            },
            {
              "label": "Тип складывания",
              "value": "Z-образное и R-образное складывание"
            }
          ],
          "shortDesc": "Подача товарного бетона на высоту многоэтажных зданий, заливка фундаментных плит, перекрытий, колонн и чаш бассейнов.",
          "relatedServices": [
            "burenie-skvazhin-svai",
            "podem-montazh-konstruktsiy"
          ]
        },
        {
          "id": "concrete-mixers",
          "title": "Автобетоносмесители (миксеры)",
          "slug": "avtobetonosmesiteli",
          "image": "/assets/images/works/samosval-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 2 000 ₽/час",
          "priceShift": "от 16 000 ₽/смена",
          "specs": [
            {
              "label": "Объем барабана",
              "value": "от 7 до 12 м³"
            },
            {
              "label": "Дополнительно",
              "value": "Труба для слива до 4.5 м, лента подачи"
            }
          ],
          "shortDesc": "Доставка готового товарного бетона и раствора с сохранением подвижности смеси непосредственно к месту укладки.",
          "relatedServices": [
            "ustroystvo-osnovaniya"
          ]
        }
      ]
    },
    {
      "id": "special-equipment",
      "title": "Специальная техника и оборудование",
      "slug": "spetsialnaya-tehnika-i-oborudovanie",
      "icon": "⚡",
      "description": "Установки горизонтально-направленного бурения (ГНБ), дизельные генераторы, компрессоры и спецоборудование.",
      "categories": [
        {
          "id": "hdd-drilling",
          "title": "Установки ГНБ (прокол грунта)",
          "slug": "ustanovki-gnb",
          "image": "/assets/images/barrier/barrier-installation.jpg",
          "verified": false,
          "priceFrom": "от 4 500 ₽/час",
          "priceShift": "от 36 000 ₽/смена",
          "specs": [
            {
              "label": "Тяговое усилие",
              "value": "от 15 до 60 тонн (Vermeer, Ditch Witch)"
            },
            {
              "label": "Длина бурения",
              "value": "до 600 м"
            },
            {
              "label": "Диаметр протаскиваемой трубы",
              "value": "до 800 мм"
            }
          ],
          "shortDesc": "Бестраншейная прокладка коммуникаций под автомобильными трассами, железными дорогами и водными преградами без вскрытия грунта.",
          "relatedServices": [
            "bestransheynaya-prokladka-gnb",
            "prokladka-vodoprovoda",
            "prokladka-kabelya"
          ]
        },
        {
          "id": "mobile-generators",
          "title": "Мобильные дизельные генераторы и компрессоры",
          "slug": "mobilnye-generatory-kompressory",
          "image": "/assets/images/koher/koher-kamaz-blue.webp",
          "verified": false,
          "priceFrom": "от 1 500 ₽/час",
          "priceShift": "от 12 000 ₽/смена",
          "specs": [
            {
              "label": "Мощность ДГУ",
              "value": "от 30 до 500 кВт"
            },
            {
              "label": "Производительность компрессоров",
              "value": "от 5 до 25 м³/мин (до 12 бар)"
            },
            {
              "label": "Исполнение",
              "value": "Шумозащитный всепогодный кожух на шасси"
            }
          ],
          "shortDesc": "Автономное электроснабжение строительных городков, прогрев бетона, питание сварочных постов и отбойных молотков.",
          "relatedServices": [
            "podem-montazh-konstruktsiy",
            "prokladka-vodoprovoda"
          ]
        }
      ]
    }
  ],
  "servicesDirections": [
    {
      "id": "earthworks",
      "title": "Земляные работы",
      "slug": "zemlyanye-raboty",
      "icon": "🚜",
      "description": "Полный цикл нулевого цикла: разработка котлованов, рытье траншей, послойная выемка и вертикальная планировка грунта.",
      "services": [
        {
          "id": "razrabotka-kotlovanov",
          "title": "Разработка котлованов",
          "slug": "razrabotka-kotlovanov",
          "priceFrom": "от 250 ₽/м³",
          "shortDesc": "Механизированная разработка строительных котлованов под жилые дома, склады, торговые центры и подземные паркинги.",
          "includes": [
            "Геодезическая разбивка осей и контроль отметок нивелиром",
            "Послойная экскавация грунта тяжелыми гусеничными экскаваторами",
            "Формирование устойчивых откосов и берм",
            "Погрузка грунта в самосвалы с вывозом и утилизацией на полигоне",
            "Финальная зачистка дна котлована под проектную отметку"
          ],
          "stages": [
            "Ознакомление с геоподосновой и согласование графика работ",
            "Мобилизация гусеничных экскаваторов и колонны самосвалов",
            "Срезка растительного слоя и послойная разработка грунта",
            "Вывоз и размещение грунта на специализированных полигонах",
            "Сдача исполнительной геодезической съемки заказчику"
          ],
          "suitableObjects": [
            "Многоэтажное жилое и коммерческое строительство",
            "Строительство логистических парков и промышленных цехов",
            "Подземные автостоянки и инженерные резервуары"
          ],
          "costFactors": [
            "Общий объем грунта и категория плотности (I–IV категории)",
            "Глубина выемки и необходимость шпунтового ограждения",
            "Плечо вывоза самосвалами и дальность полигона размещения"
          ],
          "relatedEquipment": [
            "gusenichnye-ekskavatory",
            "kolyosnye-ekskavatory",
            "samosvaly",
            "buldozery",
            "tracked-excavators",
            "wheel-excavators",
            "dump-trucks",
            "vibro-drivers"
          ]
        },
        {
          "id": "rytyo-transhey",
          "title": "Рытьё траншей под коммуникации",
          "slug": "rytyo-transhey",
          "priceFrom": "от 180 ₽/п.м.",
          "shortDesc": "Рытье траншей любой глубины и ширины под водопровод, канализацию, газопровод, силовые кабели и теплотрассы.",
          "includes": [
            "Разбивка трассы траншеи по геодезическим координатам",
            "Копка колесными и мини-экскаваторами с узкими ковшами",
            "Складирование грунта в отвал или вывоз самосвалами",
            "Устройство песчаной подушки под трубопроводы"
          ],
          "stages": [
            "Вынос отметок в натуру",
            "Экскавация грунта экскаватором или грунторезом",
            "Подчистка дна траншеи",
            "Обратная засыпка после укладки коммуникаций с трамбовкой"
          ],
          "suitableObjects": [
            "Магистральные трубопроводы",
            "Инженерные сети поселков и микрорайонов",
            "Кабельные трассы"
          ],
          "costFactors": [
            "Глубина копания",
            "Наличие грунтовых вод",
            "Стесненность условий и тип грунта"
          ],
          "relatedEquipment": [
            "kolyosnye-ekskavatory",
            "mini-ekskavatory",
            "ekskavatory-pogruzchiki",
            "transheekopateli-gruntorezy",
            "wheel-excavators",
            "mini-excavators",
            "backhoe-loaders",
            "trencher-machines"
          ]
        },
        {
          "id": "vyemka-grunta",
          "title": "Выемка и перемещение грунта",
          "slug": "vyemka-grunta",
          "priceFrom": "от 200 ₽/м³",
          "shortDesc": "Масштабное срезание возвышенностей, выемка грунта в насыпи и перемещение по строительной площадке.",
          "includes": [
            "Послойное срезание отвалами бульдозеров",
            "Погрузка в сочлененные самосвалы",
            "Перемещение на расстояние до 3 км"
          ],
          "stages": [
            "Расчет картограммы земляных масс",
            "Срезание и транспортировка",
            "Формирование кавальеров"
          ],
          "suitableObjects": [
            "Дорожное строительство",
            "Аэродромы",
            "Коттеджные поселки"
          ],
          "costFactors": [
            "Расстояние перемещения",
            "Объем земляных масс",
            "Тип техники"
          ],
          "relatedEquipment": [
            "buldozery",
            "gusenichnye-ekskavatory",
            "samosvaly",
            "sochlenyonnye-samosvaly",
            "tracked-excavators",
            "articulated-dumpers"
          ]
        },
        {
          "id": "obratnaya-zasypka",
          "title": "Обратная засыпка и уплотнение",
          "slug": "obratnaya-zasypka",
          "priceFrom": "от 220 ₽/м³",
          "shortDesc": "Послойная засыпка пазух котлованов, траншей и фундаментов с виброуплотнением катками до проектного коэффициента.",
          "includes": [
            "Подача песка или грунта в пазухи",
            "Послойная проливка и разравнивание",
            "Уплотнение грунтовыми катками и трамбовками"
          ],
          "stages": [
            "Очистка пазух",
            "Засыпка слоями по 20–40 см",
            "Проверка плотности динамическим плотномером"
          ],
          "suitableObjects": [
            "Фундаменты зданий",
            "Траншеи коммуникаций",
            "Подпорные стены"
          ],
          "costFactors": [
            "Тип уплотняющего материала (песок, глина, ЩПС)",
            "Требуемый коэффициент уплотнения (Ку >= 0.95–0.98)"
          ],
          "relatedEquipment": [
            "gruntovye-katki",
            "ekskavatory-pogruzchiki",
            "mini-pogruzchiki",
            "buldozery",
            "backhoe-loaders",
            "skid-steer-loaders",
            "soil-compactors"
          ]
        },
        {
          "id": "vertikalnaya-planirovka",
          "title": "Вертикальная планировка участков",
          "slug": "vertikalnaya-planirovka",
          "priceFrom": "от 45 ₽/м²",
          "shortDesc": "Точное профилирование поверхности площадки бульдозерами и автогрейдерами с 3D-нивелированием.",
          "includes": [
            "Срезка бугров и засыпка впадин",
            "Формирование проектных уклонов для отвода ливневых вод",
            "Чистовое профилирование"
          ],
          "stages": [
            "Геодезическая съемка",
            "Грубая планировка бульдозером",
            "Финишное грейдирование"
          ],
          "suitableObjects": [
            "Логистические терминалы",
            "Промышленные территории",
            "Коттеджные массивы"
          ],
          "costFactors": [
            "Площадь участка",
            "Сложность рельефа",
            "Требуемая точность отметок"
          ],
          "relatedEquipment": [
            "avtogreydery",
            "buldozery",
            "gruntovye-katki",
            "bulldozers",
            "motor-graders"
          ]
        },
        {
          "id": "srezka-rastitelnogo-sloya",
          "title": "Срезка растительного слоя (ПРС)",
          "slug": "srezka-rastitelnogo-sloya",
          "priceFrom": "от 50 ₽/м²",
          "shortDesc": "Снятие плодородного слоя почвы толщиной 15–40 см со складированием в бурты для последующего озеленения.",
          "includes": [
            "Срезание почвенного слоя бульдозерами",
            "Перемещение в бурты временного хранения",
            "Погрузка излишков в самосвалы"
          ],
          "stages": [
            "Определение границы участка",
            "Послойное срезание",
            "Формирование организованных кавальеров"
          ],
          "suitableObjects": [
            "Новые стройплощадки",
            "Трассы строящихся автодорог",
            "Карьеры перед вскрышей"
          ],
          "costFactors": [
            "Толщина слоя",
            "Засоренность корнями и камнями"
          ],
          "relatedEquipment": [
            "buldozery",
            "gusenichnye-ekskavatory",
            "samosvaly",
            "bulldozers"
          ]
        },
        {
          "id": "ustroystvo-nasypey",
          "title": "Устройство насыпей и дамб",
          "slug": "ustroystvo-nasypey",
          "priceFrom": "от 260 ₽/м³",
          "shortDesc": "Отсыпка устойчивых земляных насыпей дорожного полотна, дамб, противопаводковых валов и мостовых переходов.",
          "includes": [
            "Послойная отсыпка привозного грунта",
            "Разравнивание и профилирование откосов",
            "Укатка виброкатками"
          ],
          "stages": [
            "Подготовка основания",
            "Отсыпка ярусов насыпи",
            "Укрепление откосов георешеткой"
          ],
          "suitableObjects": [
            "Автодорожные насыпи",
            "Гидротехнические дамбы",
            "Ж/д переезды"
          ],
          "costFactors": [
            "Высота насыпи",
            "Объем привозного материала"
          ],
          "relatedEquipment": [
            "samosvaly",
            "buldozery",
            "avtogreydery",
            "gruntovye-katki",
            "tracked-excavators",
            "bulldozers",
            "soil-compactors"
          ]
        },
        {
          "id": "vyemka-skalnogo-grunta",
          "title": "Выемка и разработка скального грунта",
          "slug": "vyemka-skalnogo-grunta",
          "priceFrom": "от 650 ₽/м³",
          "shortDesc": "Рыхление и разработка скальных пород, мерзлоты и валунов гидромолотами и тяжелыми экскаваторами.",
          "includes": [
            "Дробление монолитной скалы гидромолотами 7000–10000 Дж",
            "Выемка усиленными скальными ковшами",
            "Погрузка в самосвалы"
          ],
          "stages": [
            "Оценка прочности породы",
            "Механическое рыхление гидромолотом",
            "Погрузка и вывоз"
          ],
          "suitableObjects": [
            "Горные участки дорог",
            "Котлованы в скале",
            "Карьеры"
          ],
          "costFactors": [
            "Крепость породы по шкале Протодъяконова",
            "Объем монолита"
          ],
          "relatedEquipment": [
            "gidromoloty",
            "gusenichnye-ekskavatory",
            "sochlenyonnye-samosvaly",
            "hydraulic-hammers"
          ]
        }
      ]
    },
    {
      "id": "roadworks",
      "title": "Дорожные работы",
      "slug": "dorozhnye-raboty",
      "icon": "🛣️",
      "description": "Холодное фрезерование покрытия, укладка литого и горячего асфальта, ямочный ремонт, заливка швов и нанесение разметки.",
      "services": [
        {
          "id": "holodnoe-frezerovanie",
          "title": "Холодное фрезерование асфальтобетона",
          "slug": "holodnoe-frezerovanie",
          "priceFrom": "от 45 ₽/м²",
          "shortDesc": "Послойная срезка старого деформированного асфальта высокопроизводительными фрезами Wirtgen W 130 CF.",
          "includes": [
            "Срезка асфальта на заданную глубину (от 1 до 30 см)",
            "Автоматический контроль поперечного уклона системой LEVEL PRO",
            "Погрузка асфальтовой крошки в самосвалы через конвейер",
            "Очистка отфрезерованной поверхности под укладку нового слоя"
          ],
          "stages": [
            "Выезд специалиста и замер площади/глубины колеи",
            "Доставка фрезы тралом на объект",
            "Фрезерование дорожного покрытия с погрузкой гранулята",
            "Подметание щетками и сдача ровного основания"
          ],
          "suitableObjects": [
            "Автомагистрали, городские улицы и проспекты",
            "Территории заводов, ТРЦ и логистических комплексов",
            "Взлетно-посадочные полосы и рулежные дорожки"
          ],
          "costFactors": [
            "Глубина фрезерования",
            "Общая площадь работ",
            "Ночной/дневной режим проведения"
          ],
          "relatedEquipment": [
            "dorozhnye-frezy",
            "samosvaly",
            "nizkoramnye-traly",
            "kombinirovannye-dorozhnye-mashiny",
            "road-milling"
          ]
        },
        {
          "id": "ukladka-litogo-asfalta",
          "title": "Укладка литого асфальта (кохеры)",
          "slug": "ukladka-litogo-asfalta",
          "priceFrom": "от 1 100 ₽/м²",
          "shortDesc": "Круглосуточный ремонт дорожного полотна и устройство гидроизоляционного слоя мостов литым асфальтом при t до -15°C.",
          "includes": [
            "Доставка горячей литой смеси (200–240°C) в специализированных кохерах-термосах",
            "Постоянное лопастное перемешивание при транспортировке",
            "Ручная или механизированная заливка карты без необходимости укатки катками",
            "Распределение черного щебня с последующей прикаткой ручным катком"
          ],
          "stages": [
            "Разделка краев поврежденного участка фрезой",
            "Очистка и продувка сжатым воздухом",
            "Слив литого асфальта из кохера через желоб",
            "Разравнивание зубчатыми раклями и распределение фракционного щебня"
          ],
          "suitableObjects": [
            "Мостовые сооружения, путепроводы и эстакады",
            "Аварийный зимний ямочный ремонт магистралей",
            "Трамвайные пути и примыкания к рельсам"
          ],
          "costFactors": [
            "Температура окружающего воздуха",
            "Толщина укладываемого слоя (3–5 см)",
            "Объем смеси"
          ],
          "relatedEquipment": [
            "asfaltovye-kohery",
            "dorozhnye-frezy",
            "samosvaly",
            "asphalt-cookers"
          ]
        },
        {
          "id": "ukladka-goryachego-asfalta",
          "title": "Укладка горячего асфальтобетона",
          "slug": "ukladka-goryachego-asfalta",
          "priceFrom": "от 480 ₽/м²",
          "shortDesc": "Механизированная укладка крупнозернистого, мелкозернистого и ЩМА асфальтоукладчиками с виброкатками.",
          "includes": [
            "Обработка основания битумной эмульсией гудронатором",
            "Приемка асфальта из самосвалов в бункер",
            "Укладка с нагревом плиты",
            "Укатка тандемными катками"
          ],
          "stages": [
            "Подготовка и обеспыливание основания",
            "Подгрунтовка битумом",
            "Укладка асфальтоукладчиком",
            "Послойная укатка катками"
          ],
          "suitableObjects": [
            "Автомобильные дороги I–IV категорий",
            "Парковки гипермаркетов",
            "Дворовые территории"
          ],
          "costFactors": [
            "Тип асфальтобетонной смеси (ЩМА, тип А, Б)",
            "Толщина слоя",
            "Общий тоннаж"
          ],
          "relatedEquipment": [
            "asfaltoukladchiki",
            "dorozhnye-katki",
            "avtogudronatory",
            "samosvaly",
            "asphalt-pavers",
            "asphalt-rollers",
            "bitumen-sprayers"
          ]
        },
        {
          "id": "yamochniy-remont",
          "title": "Ямочный ремонт и устранение колейности",
          "slug": "yamochniy-remont",
          "priceFrom": "от 550 ₽/м²",
          "shortDesc": "Локальное восстановление дорожной одежды: нарезка карт, фрезерование, проливка швов и асфальтирование.",
          "includes": [
            "Разметка поврежденных мест",
            "Фрезерование старого слоя",
            "Очистка карты компрессором",
            "Укладка асфальта"
          ],
          "stages": [
            "Дефектовка полотна",
            "Вырезка дефектных зон",
            "Заливка битумной эмульсией",
            "Укладка и уплотнение"
          ],
          "suitableObjects": [
            "Внутриквартальные проезды",
            "Парковки",
            "Городские улицы"
          ],
          "costFactors": [
            "Степень разрушения покрытия",
            "Разброс карт по территории"
          ],
          "relatedEquipment": [
            "dorozhnye-frezy",
            "dorozhnye-katki",
            "asfaltovye-kohery",
            "zalivshchiki-shvov",
            "road-milling",
            "asphalt-cookers",
            "asphalt-pavers",
            "asphalt-rollers",
            "bitumen-sprayers",
            "joint-sealers"
          ]
        },
        {
          "id": "ustroystvo-osnovaniya",
          "title": "Устройство песчаного и щебеночного основания",
          "slug": "ustroystvo-osnovaniya",
          "priceFrom": "от 350 ₽/м²",
          "shortDesc": "Создание надежного дорожного пирога: укладка геотекстиля, отсыпка песка и послойное расклинцовывание щебня.",
          "includes": [
            "Раскатка геотекстиля",
            "Отсыпка песчаного подстилающего слоя",
            "Укладка щебня фракций 40–70 и 20–40 мм",
            "Укатка катками"
          ],
          "stages": [
            "Подготовка корыта",
            "Укладка песка с уплотнением",
            "Распределение щебня автогрейдером",
            "Финальная расклинцовка"
          ],
          "suitableObjects": [
            "Новые автодороги",
            "Стоянки тяжелого грузового транспорта",
            "Складские полы"
          ],
          "costFactors": [
            "Толщина щебеночного слоя",
            "Фракционный состав",
            "Марка прочности щебня"
          ],
          "relatedEquipment": [
            "avtogreydery",
            "gruntovye-katki",
            "samosvaly",
            "frontalnye-pogruzchiki",
            "motor-graders",
            "soil-compactors",
            "asphalt-rollers",
            "concrete-mixers"
          ]
        },
        {
          "id": "nanesenie-razmetki",
          "title": "Нанесение дорожной разметки",
          "slug": "nanesenie-razmetki",
          "priceFrom": "от 65 ₽/п.м.",
          "shortDesc": "Нанесение осевых линий, стрел направления, зебр и стоп-линий долговечным термопластиком со стеклошариками.",
          "includes": [
            "Предварительная демаркировка старой разметки",
            "Геодезическая трассировка",
            "Нанесение термопластика при t=200°C",
            "Посыпка световозвращающими шариками"
          ],
          "stages": [
            "Очистка асфальта",
            "Нанесение направляющих точек",
            "Проход разметочной машины",
            "Контроль коэффициента световозвращения"
          ],
          "suitableObjects": [
            "Федеральные трассы",
            "Паркинги бизнес-центров",
            "Пешеходные зоны"
          ],
          "costFactors": [
            "Материал (эмаль, холодный пластик, термопластик)",
            "Объем погонных метров"
          ],
          "relatedEquipment": [
            "dorozhnye-razmetochnye-mashiny",
            "kombinirovannye-dorozhnye-mashiny",
            "road-marking-machines"
          ]
        },
        {
          "id": "germetizaciya-shvov",
          "title": "Герметизация и заливка швов и трещин",
          "slug": "germetizaciya-shvov",
          "priceFrom": "от 85 ₽/п.м.",
          "shortDesc": "Предотвращение разрушения асфальта путем разделки и заливки трещин полимерно-битумной мастикой.",
          "includes": [
            "Разделка трещин швонарезчиком",
            "Продувка и сушка термокопьем сжатым горячим воздухом",
            "Заливка горячей мастикой из заливщика"
          ],
          "stages": [
            "Осмотр полотна",
            "Очистка швов",
            "Герметизация мастикой под давлением"
          ],
          "suitableObjects": [
            "Взлетно-посадочные полосы",
            "Асфальтовые магистрали",
            "Бетонные покрытия полов"
          ],
          "costFactors": [
            "Глубина и ширина трещин",
            "Температурный режим"
          ],
          "relatedEquipment": [
            "zalivshchiki-shvov",
            "asfaltovye-kohery",
            "asphalt-cookers",
            "bitumen-sprayers",
            "joint-sealers"
          ]
        },
        {
          "id": "ustroystvo-obochin-kyuvetov",
          "title": "Устройство обочин и кюветов",
          "slug": "ustroystvo-obochin-kyuvetov",
          "priceFrom": "от 120 ₽/п.м.",
          "shortDesc": "Отсыпка, профилирование и укрепление обочин асфальтогранулятом или щебнем, нарезка водоотводных кюветов.",
          "includes": [
            "Нарезка водоотводных канав экскаватором со скошенным ковшом",
            "Отсыпка обочин",
            "Грейдирование и уплотнение"
          ],
          "stages": [
            "Профилирование откосов",
            "Отсыпка щебнем",
            "Финальная укатка"
          ],
          "suitableObjects": [
            "Загородные трассы",
            "Подъездные пути к промышленным объектам"
          ],
          "costFactors": [
            "Угол откоса",
            "Материал укрепления"
          ],
          "relatedEquipment": [
            "avtogreydery",
            "dorozhnye-katki",
            "kolyosnye-ekskavatory",
            "samosvaly",
            "motor-graders"
          ]
        }
      ]
    },
    {
      "id": "guardrails",
      "title": "Монтаж дорожных ограждений",
      "slug": "montazh-dorozhnyh-ograzhdeniy",
      "icon": "🛡️",
      "description": "Установка барьерных металлических ограждений (11ДО, 11ДД), забивка стоек копрами, перильные ограждения и экраны.",
      "services": [
        {
          "id": "montazh-barernogo-ograzhdeniya",
          "title": "Установка металлического барьерного ограждения",
          "slug": "montazh-barernogo-ograzhdeniya",
          "priceFrom": "от 450 ₽/п.м.",
          "shortDesc": "Комплексный монтаж односторонних (11ДО) и двусторонних (11ДД) барьерных ограждений волна по ГОСТ Р 52289-2019.",
          "includes": [
            "Геодезическая разбивка линии ограждения с шагом стоек 2, 3 или 4 метра",
            "Механизированная забивка стоек самоходными сваебойными машинами Orteco",
            "Монтаж консолей-амортизаторов и балок волнового профиля",
            "Установка концевых и начальных участков, катафотов и световозвращателей",
            "Контроль удерживающей способности (У1–У10) и высоты барьера"
          ],
          "stages": [
            "Согласование проекта расстановки ограждения и выезд бригады",
            "Доставка комплектующих барьерки бортовыми манипуляторами",
            "Забивка стоек в земляное полотно или обочину сваебойной установкой",
            "Навешивание секций балки, затяжка болтовых соединений динамометрическим ключом",
            "Сдача объекта инспекции заказчика и технадзору"
          ],
          "suitableObjects": [
            "Федеральные и региональные автомагистрали",
            "Мостовые переходы, эстакады и путепроводы",
            "Опасные повороты, крутые насыпи и разделительные полосы"
          ],
          "costFactors": [
            "Шаг стоек (2, 3 или 4 метра) и удерживающая способность конструкции",
            "Тип грунта обочины (наличие скальных включений, плотный асфальт)",
            "Общая протяженность погонных метров на объекте"
          ],
          "relatedEquipment": [
            "svaeboynye-mashiny-ograzhdeniy",
            "kmu-manipulyatory",
            "bortovye-gruzoviki-shalandy",
            "crane-manipulators",
            "guardrail-post-drivers"
          ]
        },
        {
          "id": "zabivka-stoek-ograzhdeniya",
          "title": "Забивка стоек дорожного ограждения",
          "slug": "zabivka-stoek-ograzhdeniya",
          "priceFrom": "от 250 ₽/стойка",
          "shortDesc": "Высокоскоростная забивка металлических стоек (С-образные, двутавр №10–14, швеллер) на глубину до 1.5–2.5 метров.",
          "includes": [
            "Забивка копровой установкой с контролем вертикали",
            "Бурение лидерных скважин при встрече твердых препятствий"
          ],
          "stages": [
            "Разметка шага стоек",
            "Забивка молотом 1200 Дж",
            "Контроль высоты оголовка над землей"
          ],
          "suitableObjects": [
            "Новые участки автодорог",
            "Ограждения парковок",
            "Спортивные трассы"
          ],
          "costFactors": [
            "Плотность грунта",
            "Количество стоек"
          ],
          "relatedEquipment": [
            "svaeboynye-mashiny-ograzhdeniy",
            "guardrail-post-drivers"
          ]
        },
        {
          "id": "perilnye-ograzhdeniya",
          "title": "Монтаж перильных и пешеходных ограждений",
          "slug": "perilnye-ograzhdeniya",
          "priceFrom": "от 500 ₽/п.м.",
          "shortDesc": "Установка металлических удерживающих и ограничивающих пешеходных ограждений крестового и секционного типа.",
          "includes": [
            "Бурение лунок под бетонирование или анкерное крепление",
            "Установка секций",
            "Антикоррозийная защита стыков"
          ],
          "stages": [
            "Разметка",
            "Монтаж стоек",
            "Сборка секций",
            "Бетонирование закладных"
          ],
          "suitableObjects": [
            "Пешеходные зоны у школ и остановок",
            "Мостовые тротуары",
            "Городские парки"
          ],
          "costFactors": [
            "Способ монтажа (бетонирование / фланцы на анкерах)"
          ],
          "relatedEquipment": [
            "kmu-manipulyatory",
            "mini-ekskavatory",
            "bortovye-gruzoviki-shalandy"
          ]
        },
        {
          "id": "shumozashchitnye-ekrany",
          "title": "Установка шумозащитных экранов",
          "slug": "shumozashchitnye-ekrany",
          "priceFrom": "от 1 200 ₽/м²",
          "shortDesc": "Монтаж акустических звукопоглощающих и звукоотражающих экранов вдоль скоростных трасс и ж/д линий.",
          "includes": [
            "Монтаж двутавровых опорных стоек на фундамент",
            "Установка шумозащитных сэндвич-панелей и поликарбоната краном"
          ],
          "stages": [
            "Устройство свайного фундамента",
            "Монтаж стоек",
            "Заполнение акустическими кассетами"
          ],
          "suitableObjects": [
            "Автомагистрали в черте населенных пунктов",
            "Ж/д перегоны",
            "Промышленные предприятия"
          ],
          "costFactors": [
            "Высота экрана (от 2 до 6 м)",
            "Тип фундамента (буронабивные сваи / винтовые)"
          ],
          "relatedEquipment": [
            "avtokrany",
            "kmu-manipulyatory",
            "burovye-ustanovki-buroyamy"
          ]
        },
        {
          "id": "remont-ograzhdeniy",
          "title": "Ремонт и замена поврежденных участков барьерки",
          "slug": "remont-ograzhdeniy",
          "priceFrom": "от 600 ₽/п.м.",
          "shortDesc": "Аварийное восстановление барьерного ограждения после ДТП: демонтаж погнутых стоек экстрактором и установка новых элементов.",
          "includes": [
            "Извлечение деформированных стоек гидравлическим экстрактором",
            "Забивка новых стоек",
            "Замена балок и световозвращателей"
          ],
          "stages": [
            "Выезд дежурной бригады",
            "Демонтаж повреждений",
            "Монтаж новых элементов"
          ],
          "suitableObjects": [
            "Действующие скоростные автодороги",
            "Мосты и транспортные развязки"
          ],
          "costFactors": [
            "Степень повреждения конструкции",
            "Срочность выполнения"
          ],
          "relatedEquipment": [
            "svaeboynye-mashiny-ograzhdeniy",
            "kmu-manipulyatory",
            "joint-sealers",
            "guardrail-post-drivers"
          ]
        }
      ]
    },
    {
      "id": "quarry-services",
      "title": "Карьерные работы и добыча нерудных материалов",
      "slug": "karyernye-raboty",
      "icon": "⛰️",
      "description": "Разработка месторождений открытым способом, добыча песка и гравия, дробление горной массы и рекультивация.",
      "services": [
        {
          "id": "razrabotka-karyerov",
          "title": "Разработка карьеров открытым способом",
          "slug": "razrabotka-karyerov",
          "priceFrom": "от 120 ₽/м³",
          "shortDesc": "Комплексная организация горных работ: вскрыша, добыча полезного ископаемого, формирование уступов и отвалов.",
          "includes": [
            "Снятие вскрышных пород",
            "Формирование транспортных берм",
            "Экскавация полезного пласта"
          ],
          "stages": [
            "Проектирование горных работ",
            "Вскрышные работы бульдозерами",
            "Добыча экскаваторами"
          ],
          "suitableObjects": [
            "Песчаные и гравийные карьеры",
            "Глиняные карьеры для кирпичных заводов"
          ],
          "costFactors": [
            "Коэффициент вскрыши",
            "Глубина залегания пласта"
          ],
          "relatedEquipment": [
            "gusenichnye-ekskavatory",
            "buldozery",
            "sochlenyonnye-samosvaly",
            "mobilnye-grohoty"
          ]
        },
        {
          "id": "dobycha-peska-shchebnya",
          "title": "Добыча и погрузка песка, гравия, щебня",
          "slug": "dobycha-peska-shchebnya",
          "priceFrom": "от 90 ₽/м³",
          "shortDesc": "Экскаваторная добыча инертных стройматериалов с непосредственной погрузкой в карьерные и шоссейные самосвалы.",
          "includes": [
            "Забор материала из забоя",
            "Погрузка фронтальными погрузчиками с ковшом 3–5 м³",
            "Весовой контроль"
          ],
          "stages": [
            "Зачистка забоя",
            "Погрузка автотранспорта",
            "Формирование технологических штабелей"
          ],
          "suitableObjects": [
            "Нерудные месторождения",
            "Перевалочные склады"
          ],
          "costFactors": [
            "Влажность и плотность материала"
          ],
          "relatedEquipment": [
            "frontalnye-pogruzchiki",
            "gusenichnye-ekskavatory",
            "samosvaly",
            "tonary",
            "wheel-loaders",
            "tipper-trailers",
            "articulated-dumpers",
            "mobile-screens"
          ]
        },
        {
          "id": "droblenie-sortirovka",
          "title": "Дробление и сортировка горной массы",
          "slug": "droblenie-sortirovka",
          "priceFrom": "от 250 ₽/м³",
          "shortDesc": "Переработка скальных пород и гравия на фракционированный щебень мобильными дробилками и грохотами.",
          "includes": [
            "Первичное дробление щековой дробилкой",
            "Рассев на фракции вибрационным грохотом"
          ],
          "stages": [
            "Подача сырья погрузчиком",
            "Дробление и сепарация",
            "Складирование готовых фракций"
          ],
          "suitableObjects": [
            "Щебеночные заводы",
            "Горнодобывающие карьеры"
          ],
          "costFactors": [
            "Абразивность породы",
            "Требуемые размеры фракций"
          ],
          "relatedEquipment": [
            "mobilnye-grohoty",
            "drobilnye-kovshi-i-drobilki",
            "frontalnye-pogruzchiki",
            "mobile-screens"
          ]
        },
        {
          "id": "rekultivaciya-karyerov",
          "title": "Техническая рекультивация карьеров",
          "slug": "rekultivaciya-karyerov",
          "priceFrom": "от 80 ₽/м²",
          "shortDesc": "Выполаживание бортов, засыпка выработанного пространства грунтом и нанесение плодородного слоя почвы.",
          "includes": [
            "Срезка крутых откосов бульдозерами",
            "Засыпка котлованов инертным грунтом",
            "Нанесение ПРС"
          ],
          "stages": [
            "Планировка рельефа",
            "Обратная отсыпка",
            "Подготовка под биологическую рекультивацию"
          ],
          "suitableObjects": [
            "Отработанные карьеры",
            "Закрытые полигоны"
          ],
          "costFactors": [
            "Объем перемещаемого грунта"
          ],
          "relatedEquipment": [
            "buldozery",
            "sochlenyonnye-samosvaly",
            "gusenichnye-ekskavatory",
            "bulldozers",
            "articulated-dumpers"
          ]
        }
      ]
    },
    {
      "id": "loading-rigging",
      "title": "Погрузочно-разгрузочные и такелажные работы",
      "slug": "pogruzochno-razgruzochnye-raboty",
      "icon": "📦",
      "description": "Разгрузка негабаритных грузов, промышленного оборудования, сыпучих стройматериалов и перемещение тяжестей.",
      "services": [
        {
          "id": "pogruzka-sypuchih",
          "title": "Погрузка и разгрузка сыпучих стройматериалов",
          "slug": "pogruzka-sypuchih",
          "priceFrom": "от 70 ₽/м³",
          "shortDesc": "Скоростная погрузка песка, гравия, щебня, грунта и асфальтовой крошки фронтальными погрузчиками.",
          "includes": [
            "Зачерпывание материала из штабелей",
            "Погрузка в самосвалы с контролем равномерности развесовки"
          ],
          "stages": [
            "Подъезд самосвала к штабелю",
            "Погрузка за 2–4 цикла ковша",
            "Очистка бортов"
          ],
          "suitableObjects": [
            "АБЗ, РБУ, логистические склады сыпучих грузов"
          ],
          "costFactors": [
            "Объем партии",
            "Фракция материала"
          ],
          "relatedEquipment": [
            "frontalnye-pogruzchiki",
            "ekskavatory-pogruzchiki",
            "samosvaly",
            "backhoe-loaders",
            "wheel-loaders"
          ]
        },
        {
          "id": "razgruzka-negabarita",
          "title": "Разгрузка негабаритных грузов и оборудования",
          "slug": "razgruzka-negabarita",
          "priceFrom": "от 15 000 ₽/смена",
          "shortDesc": "Крановая разгрузка тяжелых станков, трансформаторов, контейнеров, плит и металлоконструкций.",
          "includes": [
            "Подбор сертифицированных строп и траверс",
            "Разгрузка автокраном или КМУ",
            "Установка на фундамент или складскую площадку"
          ],
          "stages": [
            "Осмотр грунта и выставление аутригеров",
            "Строповка аттестованными стропальщиками",
            "Плавный перенос груза"
          ],
          "suitableObjects": [
            "Заводские цеха",
            "Строительные базы",
            "Транспортные узлы"
          ],
          "costFactors": [
            "Масса грунта (до 100+ тонн)",
            "Вылет стрелы крана"
          ],
          "relatedEquipment": [
            "avtokrany",
            "kmu-manipulyatory",
            "teleskopicheskie-pogruzchiki",
            "telescopic-handlers",
            "forklifts"
          ]
        },
        {
          "id": "takelazh-oborudovaniya",
          "title": "Такелаж промышленного оборудования",
          "slug": "takelazh-oborudovaniya",
          "priceFrom": "от 25 000 ₽/услуга",
          "shortDesc": "Перемещение тяжелого оборудования внутри помещений на домкратах, такелажных тележках и роликовых платформах.",
          "includes": [
            "Подъем гидравлическими домкратами",
            "Перемещение на роликах до проема",
            "Выемка краном через кровлю или окно"
          ],
          "stages": [
            "Разработка ППР",
            "Демонтаж с анкеров",
            "Транспортировка к месту погрузки"
          ],
          "suitableObjects": [
            "Типографии, металлообрабатывающие заводы, трансформаторные подстанции"
          ],
          "costFactors": [
            "Габариты проемов",
            "Вес единицы оборудования"
          ],
          "relatedEquipment": [
            "avtokrany",
            "kmu-manipulyatory",
            "vilochnye-pogruzchiki",
            "forklifts",
            "truck-cranes",
            "crane-manipulators"
          ]
        }
      ]
    },
    {
      "id": "demolition-services",
      "title": "Снос и демонтаж",
      "slug": "snos-i-demontazh",
      "icon": "💥",
      "description": "Механизированный снос аварийных зданий, монолитных конструкций, фундаментов и вторичная переработка лома.",
      "services": [
        {
          "id": "snos-zdaniy-sooruzheniy",
          "title": "Механизированный снос зданий и сооружений",
          "slug": "snos-zdaniy-sooruzheniy",
          "priceFrom": "от 350 ₽/м³",
          "shortDesc": "Полный комплекс безопасного сноса кирпичных, панельных и каркасных зданий тяжелыми экскаваторами-разрушителями.",
          "includes": [
            "Разработка проекта производства работ (ППР) и технологических карт сноса",
            "Отключение и согласование демонтажа наружных инженерных сетей",
            "Обрушение надземной части гидроножницами с пылеподавлением водяной пушкой",
            "Сортировка строительных отходов на бой бетона, кирпич и металлолом",
            "Погрузка и вывоз мусора на официальные полигоны с талонами"
          ],
          "stages": [
            "Обследование объекта и ограждение опасной зоны стройплощадки",
            "Демонтаж кровли, оконных блоков и металлоконструкций",
            "Механизированное обрушение несущих стен и перекрытий",
            "Разделка арматуры и дробление крупных фрагментов бетона",
            "Зачистка площадки под будущее строительство"
          ],
          "suitableObjects": [
            "Аварийные жилые дома и производственные корпуса заводов",
            "Ангары, склады, дымовые трубы и железобетонные резервуары",
            "Мостовые пролеты и путепроводы"
          ],
          "costFactors": [
            "Высота здания и материал стен (монолит, сборный ж/б, кирпич)",
            "Стесненность условий и близость соседних эксплуатируемых строений",
            "Объем образующегося строительного мусора и процент армирования"
          ],
          "relatedEquipment": [
            "ekskavatory-s-gidronozhnicami",
            "gidromoloty",
            "gusenichnye-ekskavatory",
            "samosvaly",
            "tracked-excavators",
            "demolition-excavators",
            "crushing-buckets"
          ]
        },
        {
          "id": "demontazh-fundamentov",
          "title": "Демонтаж фундаментов гидромолотами",
          "slug": "demontazh-fundamentov",
          "priceFrom": "от 2 500 ₽/м³",
          "shortDesc": "Разрушение заглубленных монолитных плит, ленточных фундаментов и ростверков экскаваторами с гидромолотами.",
          "includes": [
            "Откапывание фундамента",
            "Дробление монолита гидромолотом 5000–9000 Дж",
            "Перекусывание арматуры"
          ],
          "stages": [
            "Вскрытие периметра",
            "Дробление бетона",
            "Извлечение металлолома",
            "Вывоз боя"
          ],
          "suitableObjects": [
            "Старые заводские цеха",
            "Демонтируемые опоры ЛЭП и мостов"
          ],
          "costFactors": [
            "Марка прочности бетона (М300–М600)",
            "Плотность армирования"
          ],
          "relatedEquipment": [
            "gidromoloty",
            "gusenichnye-ekskavatory",
            "samosvaly",
            "demolition-excavators",
            "hydraulic-hammers"
          ]
        },
        {
          "id": "pererabotka-stroitelnogo-loma",
          "title": "Измельчение и рециклинг строительного лома",
          "slug": "pererabotka-stroitelnogo-loma",
          "priceFrom": "от 220 ₽/м³",
          "shortDesc": "Переработка бетонных и кирпичных отходов во вторичный щебень прямо на стройплощадке для повторного использования.",
          "includes": [
            "Подача лома в бункер мобильной дробилки",
            "Отделение арматуры магнитным сепаратором",
            "Рассев на товарные фракции 20–40, 40–70 мм"
          ],
          "stages": [
            "Складирование лома",
            "Дробление",
            "Отгрузка вторичного щебня на отсыпку дорог"
          ],
          "suitableObjects": [
            "Рекультивируемые промзоны",
            "Крупные площадки реновации"
          ],
          "costFactors": [
            "Общий объем лома",
            "Требования к фракционному составу"
          ],
          "relatedEquipment": [
            "drobilnye-kovshi-i-drobilki",
            "mobilnye-grohoty",
            "gusenichnye-ekskavatory",
            "demolition-excavators",
            "crushing-buckets",
            "mobile-screens"
          ]
        },
        {
          "id": "razborka-dorozhnyh-pokrytiy",
          "title": "Разборка старых дорожных покрытий и мостов",
          "slug": "razborka-dorozhnyh-pokrytiy",
          "priceFrom": "от 180 ₽/м²",
          "shortDesc": "Демонтаж железобетонных дорожных плит (ПАГ, ПДН), монолитных оснований и асфальта.",
          "includes": [
            "Взламывание покрытия гидромолотом",
            "Подъем и погрузка плит краном или погрузчиком",
            "Вывоз боя"
          ],
          "stages": [
            "Нарезка карт",
            "Взламывание",
            "Погрузка в самосвалы"
          ],
          "suitableObjects": [
            "Аэродромные плиты",
            "Временные дороги",
            "Мостовые полотна"
          ],
          "costFactors": [
            "Толщина и тип плит"
          ],
          "relatedEquipment": [
            "gidromoloty",
            "avtokrany",
            "kmu-manipulyatory",
            "samosvaly",
            "road-milling",
            "hydraulic-hammers"
          ]
        }
      ]
    },
    {
      "id": "transportation-services",
      "title": "Вывоз и перевозка",
      "slug": "vyvoz-i-perevozka",
      "icon": "🚛",
      "description": "Вывоз грунта и строительного мусора на полигоны, перевозка спецтехники тралами и доставка сыпучих материалов.",
      "services": [
        {
          "id": "vyvoz-grunta-musora",
          "title": "Вывоз грунта и строительного мусора",
          "slug": "vyvoz-grunta-musora",
          "priceFrom": "от 380 ₽/м³",
          "shortDesc": "Официальный вывоз котлованного грунта и строительных отходов самосвалами 15–35 тонн с выдачей талонов утилизации.",
          "includes": [
            "Подача самосвалов нужной кубатуры (15–25 м³) точно по графику экскавации",
            "Транспортировка по согласованным маршрутам с соблюдением требований ГИБДД",
            "Размещение на лицензированных полигонах и объектах рекультивации",
            "Предоставление закрывающих документов и актов ОСМТУ"
          ],
          "stages": [
            "Определение класса опасности грунта (V класс неопасные)",
            "Заключение договора с официальным полигоном приема",
            "Организация бесперебойного челночного рейса самосвалов",
            "Предоставление заказчику талонов и экологической отчетности"
          ],
          "suitableObjects": [
            "Котлованы жилищного и инфраструктурного строительства",
            "Площадки сноса и демонтажа промышленных предприятий",
            "Дорожные выемки и насыпи"
          ],
          "costFactors": [
            "Расстояние до полигона (плечо доставки в км)",
            "Влажность и засоренность грунта"
          ],
          "relatedEquipment": [
            "samosvaly",
            "tonary",
            "gusenichnye-ekskavatory",
            "frontalnye-pogruzchiki",
            "dump-trucks",
            "tipper-trailers"
          ]
        },
        {
          "id": "perevozka-sypuchih",
          "title": "Перевозка сыпучих строительных материалов",
          "slug": "perevozka-sypuchih",
          "priceFrom": "от 350 ₽/м³",
          "shortDesc": "Доставка песка, щебня, гравия, ЩПС, торфа и асфальтовой крошки тонарами и самосвалами от 20 до 45 тонн.",
          "includes": [
            "Загрузка на карьерах и базах",
            "Транспортировка с пологом",
            "Разгрузка на объекте"
          ],
          "stages": [
            "Взвешивание",
            "Транспортировка",
            "Выгрузка в штабель или корыто дороги"
          ],
          "suitableObjects": [
            "Строящиеся автодороги",
            "Бетонные заводы",
            "Благоустройство"
          ],
          "costFactors": [
            "Плечо перевозки",
            "Объем суточной потребности"
          ],
          "relatedEquipment": [
            "samosvaly",
            "tonary",
            "dump-trucks",
            "tipper-trailers"
          ]
        },
        {
          "id": "perevozka-negabaritnoy-tehniki",
          "title": "Перевозка негабаритной спецтехники тралами",
          "slug": "perevozka-negabaritnoy-tehniki",
          "priceFrom": "от 25 000 ₽/рейс",
          "shortDesc": "Перебазировка гусеничных экскаваторов, буровых, дорожных фрез и кранов низкорамными тралами с сопровождением.",
          "includes": [
            "Оформление специальных разрешений на негабарит в Росавтодоре",
            "Заезд техники на трал по аппарелям и надежная фиксация цепями",
            "Сопровождение автомобилями прикрытия с проблесковыми маяками"
          ],
          "stages": [
            "Согласование маршрута",
            "Погрузка и крепление",
            "Доставка до площадки и съезд"
          ],
          "suitableObjects": [
            "Строительные компании",
            "Дорожно-строительные управления"
          ],
          "costFactors": [
            "Габариты (ширина > 2.55 м, высота > 4.0 м)",
            "Вес автопоезда (> 44 тонн)"
          ],
          "relatedEquipment": [
            "nizkoramnye-traly",
            "lowbed-trailers"
          ]
        },
        {
          "id": "perevozka-zhbi-metall",
          "title": "Доставка тяжелых ЖБИ и металлоконструкций",
          "slug": "perevozka-zhbi-metall",
          "priceFrom": "от 18 000 ₽/смена",
          "shortDesc": "Перевозка дорожных плит, свай, балок перекрытия, труб и металлопроката бортовыми длинномерами и шаландами 13.6 м.",
          "includes": [
            "Погрузка краном",
            "Увязка ремнями и цепями",
            "Транспортировка и выгрузка на объекте"
          ],
          "stages": [
            "Приемка груза на заводе ЖБИ",
            "Перевозка",
            "Выгрузка в зону монтажа"
          ],
          "suitableObjects": [
            "Заводы ЖБИ",
            "Металлобазы",
            "Строящиеся объекты"
          ],
          "costFactors": [
            "Длина конструкций (до 14 м)",
            "Грузоподъемность шасси"
          ],
          "relatedEquipment": [
            "bortovye-gruzoviki-shalandy",
            "kmu-manipulyatory",
            "avtokrany",
            "flatbed-trucks",
            "crane-manipulators"
          ]
        }
      ]
    },
    {
      "id": "landscaping-services",
      "title": "Благоустройство и ландшафтные работы",
      "slug": "blagoustroystvo",
      "icon": "🌳",
      "description": "Расчистка территорий от леса и пней, устройство временных дорог, планировка рельефа и подготовка под застройку.",
      "services": [
        {
          "id": "podgotovka-territorii",
          "title": "Подготовка и планировка территорий под застройку",
          "slug": "podgotovka-territorii",
          "priceFrom": "от 40 ₽/м²",
          "shortDesc": "Комплексная инженерная подготовка земельных участков: срезка бугров, выравнивание, вывоз мусора.",
          "includes": [
            "Геодезическая разбивка границ",
            "Снятие мусора и старых фундаментов",
            "Нивелирование грейдером"
          ],
          "stages": [
            "Обследование",
            "Расчистка",
            "Финишная планировка"
          ],
          "suitableObjects": [
            "Коттеджные поселки",
            "Промзоны",
            "Парковые зоны"
          ],
          "costFactors": [
            "Площадь и замусоренность участка"
          ],
          "relatedEquipment": [
            "buldozery",
            "avtogreydery",
            "frontalnye-pogruzchiki",
            "samosvaly"
          ]
        },
        {
          "id": "korchevanie-pney",
          "title": "Корчевание пней и расчистка от мелколесья",
          "slug": "korchevanie-pney",
          "priceFrom": "от 800 ₽/сотка",
          "shortDesc": "Механизированная валка деревьев, корчевание пней клыком экскаватора и измельчение порубочных остатков.",
          "includes": [
            "Валка аварийных деревьев",
            "Выкорчевывание пней гидроэкскаватором",
            "Погрузка и вывоз древесных остатков"
          ],
          "stages": [
            "Спил стволов",
            "Корчевание корневой системы",
            "Засыпка воронок грунтом"
          ],
          "suitableObjects": [
            "Лесные участки под строительство",
            "Отводы под ЛЭП и газопроводы"
          ],
          "costFactors": [
            "Диаметр пней и плотность древостоя"
          ],
          "relatedEquipment": [
            "gusenichnye-ekskavatory",
            "buldozery",
            "samosvaly"
          ]
        },
        {
          "id": "ustroystvo-vremennyh-dorog",
          "title": "Устройство временных дорог и стройгородков",
          "slug": "ustroystvo-vremennyh-dorog",
          "priceFrom": "от 650 ₽/м²",
          "shortDesc": "Укладка дорожных плит (ПАГ-14, 2П30) на песчаную подушку или отсыпка битым кирпичом и вторичным щебнем.",
          "includes": [
            "Срезка растительного слоя",
            "Отсыпка песком",
            "Монтаж дорожных плит автокраном или манипулятором"
          ],
          "stages": [
            "Разметка трассы",
            "Отсыпка основания",
            "Укладка плит со сваркой монтажных петель"
          ],
          "suitableObjects": [
            "Подъездные пути к стройкам",
            "Вахтовые городки"
          ],
          "costFactors": [
            "Материал покрытия (плиты ЖБИ / вторичный щебень)"
          ],
          "relatedEquipment": [
            "kmu-manipulyatory",
            "avtokrany",
            "avtogreydery",
            "samosvaly",
            "asphalt-pavers",
            "crushing-buckets"
          ]
        }
      ]
    },
    {
      "id": "hoisting-services",
      "title": "Подъёмно-монтажные работы",
      "slug": "podemno-montazhnye-raboty",
      "icon": "🏗️",
      "description": "Монтаж металлоконструкций каркасов, плит перекрытий, тяжелого оборудования и фасадные высотные работы.",
      "services": [
        {
          "id": "podem-montazh-konstruktsiy",
          "title": "Монтаж металлоконструкций и колонн",
          "slug": "podem-montazh-konstruktsiy",
          "priceFrom": "от 6 500 ₽/тонна",
          "shortDesc": "Высокоточный монтаж несущих стальных колонн, балок, ригелей и связей каркасов промышленных и складских зданий.",
          "includes": [
            "Разгрузка металлоконструкций с длинномеров автокранами Zoomlion",
            "Кантование и подъем колонн в проектное вертикальное положение",
            "Выверка пространственного положения геодезическими приборами",
            "Анкерное и болтовое крепление, временное раскрепление расчалками"
          ],
          "stages": [
            "Проверка готовности фундаментов и анкерных болтов",
            "Строповка колонны и пробный подъем на 200 мм",
            "Подача в зону монтажа и совмещение рисок",
            "Затяжка высокопрочных болтов и сдача исполнительной схемы"
          ],
          "suitableObjects": [
            "Быстровозводимые здания и логистические хабы",
            "Торговые центры и спортивные арены",
            "Эстакады технологических трубопроводов"
          ],
          "costFactors": [
            "Высота монтажного горизонта",
            "Вес отдельных элементов",
            "Требуемый вылет стрелы крана"
          ],
          "relatedEquipment": [
            "avtokrany",
            "kmu-manipulyatory",
            "teleskopicheskie-pogruzchiki",
            "avtovyshki",
            "telescopic-handlers",
            "truck-cranes",
            "aerial-platforms",
            "concrete-pumps",
            "mobile-generators"
          ]
        },
        {
          "id": "ustanovka-balok-ferm",
          "title": "Подъем и установка балок перекрытий и ферм",
          "slug": "ustanovka-balok-ferm",
          "priceFrom": "от 7 500 ₽/элемент",
          "shortDesc": "Монтаж тяжелых стропильных ферм пролетом 18–36 м и мостовых балок спаренными автокранами.",
          "includes": [
            "Использование жестких траверс",
            "Синхронный подъем",
            "Сварочные и болтовые соединения на высоте"
          ],
          "stages": [
            "Укрупнительная сборка на земле",
            "Строповка за узлы",
            "Подъем и проектное закрепление"
          ],
          "suitableObjects": [
            "Мостовые сооружения",
            "Заводские пролеты",
            "Ангары для авиатехники"
          ],
          "costFactors": [
            "Пролет фермы и масса балки"
          ],
          "relatedEquipment": [
            "avtokrany",
            "truck-cranes"
          ]
        },
        {
          "id": "fasadnye-raboty",
          "title": "Фасадные и кровельные монтажные работы с автовышек",
          "slug": "fasadnye-raboty",
          "priceFrom": "от 350 ₽/м²",
          "shortDesc": "Монтаж сэндвич-панелей, вентилируемых фасадов, витражного остекления и водосточных систем с люлек автогидроподъемников.",
          "includes": [
            "Подъем монтажников с материалами и инструментом",
            "Установка панелей вакуумными захватами"
          ],
          "stages": [
            "Установка вышки на аутригеры",
            "Подъем на проектную отметку",
            "Монтаж фасадных кассет"
          ],
          "suitableObjects": [
            "Офисные здания",
            "Склады",
            "Жилые комплексы"
          ],
          "costFactors": [
            "Высота фасада (до 45 м)"
          ],
          "relatedEquipment": [
            "avtovyshki",
            "teleskopicheskie-pogruzchiki",
            "kmu-manipulyatory",
            "telescopic-handlers",
            "aerial-platforms"
          ]
        }
      ]
    },
    {
      "id": "utilities-services",
      "title": "Инженерные сети и коммуникации",
      "slug": "inzhenernye-seti",
      "icon": "⚡",
      "description": "Прокладка наружного водопровода, канализации, кабелей, бестраншейный прокол ГНБ и дренажные системы.",
      "services": [
        {
          "id": "prokladka-vodoprovoda",
          "title": "Прокладка водопровода и канализации",
          "slug": "prokladka-vodoprovoda",
          "priceFrom": "от 1 200 ₽/п.м.",
          "shortDesc": "Монтаж наружных сетей ХВС, ГВС, фекальной и ливневой канализации из труб ПНД, чугуна и железобетона.",
          "includes": [
            "Разработка траншеи с уклоном экскаваторами",
            "Устройство песчаной постели и укладка труб",
            "Монтаж сборных железобетонных колодцев манипулятором",
            "Гидравлические испытания трубопроводов на герметичность",
            "Обратная послойная засыпка с трамбованием"
          ],
          "stages": [
            "Геодезическая разбивка профиля",
            "Рытье траншеи и опускание труб",
            "Сварка полиэтиленовых стыков муфтами или встык",
            "Опрессовка давлением и сдача водоканалу"
          ],
          "suitableObjects": [
            "Подключение новых микрорайонов к городским сетям",
            "Внутриплощадочные сети заводов и коттеджных поселков",
            "Ливнеотвод автомагистралей"
          ],
          "costFactors": [
            "Глубина прокладки (ниже глубины промерзания)",
            "Диаметр трубы (110–1200 мм)"
          ],
          "relatedEquipment": [
            "kolyosnye-ekskavatory",
            "mini-ekskavatory",
            "kmu-manipulyatory",
            "gruntovye-katki",
            "wheel-excavators",
            "trencher-machines",
            "suction-trucks",
            "hdd-drilling",
            "mobile-generators"
          ]
        },
        {
          "id": "bestransheynaya-prokladka-gnb",
          "title": "Бестраншейная прокладка труб методом ГНБ",
          "slug": "bestransheynaya-prokladka-gnb",
          "priceFrom": "от 1 800 ₽/п.м.",
          "shortDesc": "Горизонтально-направленное бурение под дорогами, ж/д путями и водоемами без нарушения поверхностного полотна.",
          "includes": [
            "Пилотное бурение по заданной траектории",
            "Расширение скважины риммером",
            "Затягивание плети ПНД труб"
          ],
          "stages": [
            "Подготовка приямков",
            "Бурение пилотной скважины с локацией",
            "Протягивание футляра"
          ],
          "suitableObjects": [
            "Переходы под трассами и реками",
            "Плотная городская застройка"
          ],
          "costFactors": [
            "Диаметр и длина прокола",
            "Категория грунта"
          ],
          "relatedEquipment": [
            "ustanovki-gnb",
            "ilososnye-i-kanalopromyvochnye-mashiny",
            "hdd-drilling"
          ]
        },
        {
          "id": "prokladka-kabelya",
          "title": "Разработка траншей под силовые кабели",
          "slug": "prokladka-kabelya",
          "priceFrom": "от 150 ₽/п.м.",
          "shortDesc": "Скоростная нарезка кабельных траншей баровыми установками и мини-экскаваторами с защитой кирпичом/лентой.",
          "includes": [
            "Нарезка щели глубиной 0.8–1.2 м",
            "Укладка кабеля на песчаную подушку",
            "Укладка сигнальной ленты ЛС"
          ],
          "stages": [
            "Трассировка",
            "Нарезка грунта",
            "Укладка кабеля",
            "Засыпка"
          ],
          "suitableObjects": [
            "Электроснабжение стройплощадок",
            "Освещение автодорог"
          ],
          "costFactors": [
            "Наличие пересекаемых коммуникаций"
          ],
          "relatedEquipment": [
            "transheekopateli-gruntorezy",
            "mini-ekskavatory",
            "ekskavatory-pogruzchiki",
            "mini-excavators",
            "trencher-machines",
            "hdd-drilling"
          ]
        },
        {
          "id": "ustroystvo-drenazha",
          "title": "Устройство дренажных систем и водоотведения",
          "slug": "ustroystvo-drenazha",
          "priceFrom": "от 850 ₽/п.м.",
          "shortDesc": "Монтаж пристенного, пластового и кольцевого дренажа для защиты фундаментов и дорог от грунтовых вод.",
          "includes": [
            "Копка траншей с проектным уклоном",
            "Укладка геотекстиля и перфорированных дренажных труб",
            "Обсыпка гранитным щебнем"
          ],
          "stages": [
            "Выемка грунта",
            "Монтаж дренажного пирога",
            "Вывод в поглощающий колодец"
          ],
          "suitableObjects": [
            "Защита фундаментов зданий",
            "Осушение дорожных выемок"
          ],
          "costFactors": [
            "Уровень грунтовых вод",
            "Тип дренажной системы"
          ],
          "relatedEquipment": [
            "mini-ekskavatory",
            "kolyosnye-ekskavatory",
            "samosvaly",
            "mini-excavators",
            "vibro-drivers"
          ]
        }
      ]
    },
    {
      "id": "piling-services",
      "title": "Свайные и буровые работы",
      "slug": "svaynye-i-burovye-raboty",
      "icon": "⚙️",
      "description": "Забивка ж/б свай копрами, бурение под буронабивные сваи, лидерное бурение и погружение шпунта Ларсена.",
      "services": [
        {
          "id": "zabivka-zhb-svay",
          "title": "Забивка железобетонных свай",
          "slug": "zabivka-zhb-svay",
          "priceFrom": "от 350 ₽/п.м.",
          "shortDesc": "Погружение цельных и составных свай сечением 300x300, 350x350 и 400x400 мм копровыми дизель- и гидромолотами.",
          "includes": [
            "Геодезическая разбивка свайного поля с привязкой к реперам",
            "Подтаскивание и подъем сваи на копер лебедкой",
            "Погружение молотом с фиксацией отказа сваи по нивелиру",
            "Динамические и статические испытания свай под нагрузкой"
          ],
          "stages": [
            "Доставка свай на объект бортовыми длинномерами",
            "Забивка пробных свай для подтверждения несущей способности",
            "Массовое погружение свайного поля по утвержденной сетке",
            "Срубка оголовков свай гидравлическими сваескусывателями"
          ],
          "suitableObjects": [
            "Фундаменты жилых многоэтажных комплексов",
            "Опоры мостов, эстакад и путепроводов",
            "Промышленные цеха с высокими нагрузками на пол"
          ],
          "costFactors": [
            "Длина сваи (от 6 до 16 метров)",
            "Сечение и прочность грунта основания"
          ],
          "relatedEquipment": [
            "svaeboynye-ustanovki",
            "bortovye-gruzoviki-shalandy",
            "avtokrany",
            "piling-rigs"
          ]
        },
        {
          "id": "burenie-skvazhin-svai",
          "title": "Бурение под буронабивные сваи",
          "slug": "burenie-skvazhin-svai",
          "priceFrom": "от 1 200 ₽/п.м.",
          "shortDesc": "Бурение скважин диаметром 300–1200 мм под обсадной трубой или бентонитовым раствором с армированием и бетонированием.",
          "includes": [
            "Бурение вращательным способом",
            "Опускание арматурного каркаса краном",
            "Бетонирование методом ВПТ"
          ],
          "stages": [
            "Бурение",
            "Монтаж каркаса",
            "Заливка бетона автобетононасосом"
          ],
          "suitableObjects": [
            "Строительство в стесненных условиях вблизи существующих зданий"
          ],
          "costFactors": [
            "Диаметр сваи и глубина скважины"
          ],
          "relatedEquipment": [
            "burovye-ustanovki-buroyamy",
            "avtokrany",
            "avtobetononasosy",
            "drilling-rigs",
            "concrete-pumps"
          ]
        },
        {
          "id": "lidernoe-burenie",
          "title": "Лидерное бурение скважин",
          "slug": "lidernoe-burenie",
          "priceFrom": "от 250 ₽/п.м.",
          "shortDesc": "Предварительное бурение направляющих скважин малого диаметра для облегчения забивки свай в плотные грунты.",
          "includes": [
            "Бурение скважины шнеком на глубину проектного погружения сваи",
            "Снижение динамических вибраций на соседние дома"
          ],
          "stages": [
            "Разметка точек",
            "Бурение",
            "Последующая забивка свай копром"
          ],
          "suitableObjects": [
            "Мерзлые грунты, песчаники, плотные глины"
          ],
          "costFactors": [
            "Плотность грунта"
          ],
          "relatedEquipment": [
            "burovye-ustanovki-buroyamy",
            "svaeboynye-ustanovki",
            "drilling-rigs",
            "piling-rigs"
          ]
        },
        {
          "id": "vibropogruzhenie-shpunta",
          "title": "Вибропогружение шпунта Ларсена",
          "slug": "vibropogruzhenie-shpunta",
          "priceFrom": "от 450 ₽/п.м.",
          "shortDesc": "Погружение стального шпунта Ларсена (Л4, Л5, VL) вибропогружателями для ограждения котлованов и набережных.",
          "includes": [
            "Захват шпунтины гидравлическим зажимом",
            "Вибрационное погружение в проектный замок",
            "Последующее извлечение после завершения работ"
          ],
          "stages": [
            "Установка направляющих кондукторов",
            "Погружение секций шпунта с контролем вертикали",
            "Монтаж распорной системы"
          ],
          "suitableObjects": [
            "Глубокие котлованы",
            "Укрепление берегов рек и каналов"
          ],
          "costFactors": [
            "Длина шпунта (до 24 м)",
            "Необходимость извлечения"
          ],
          "relatedEquipment": [
            "vibropogruzhateli",
            "avtokrany",
            "gusenichnye-ekskavatory",
            "piling-rigs",
            "vibro-drivers"
          ]
        }
      ]
    },
    {
      "id": "municipal-services",
      "title": "Коммунальные и сезонные работы",
      "slug": "kommunalnye-raboty",
      "icon": "❄️",
      "description": "Механизированная уборка и вывоз снега, мойка и подметание территорий, промывка ливнестоков и откачка отходов.",
      "services": [
        {
          "id": "uborka-snega",
          "title": "Механизированная уборка снега и наледи",
          "slug": "uborka-snega",
          "priceFrom": "от 25 ₽/м²",
          "shortDesc": "Оперативная расчистка парковок, дорог, дворовых территорий и заводских площадок от снежных заносов и наледи.",
          "includes": [
            "Сгребание снега плужными отвалами тракторов и КДМ",
            "Сметание рыхлого снега подметальными щетками",
            "Скалывание наледи гидромолотами и челюстными ковшами",
            "Сдвигание снега в валы и бурты для последующей погрузки"
          ],
          "stages": [
            "Круглосуточный мониторинг снегопадов",
            "Оперативный выход техники на маршруты (в течение 1 часа)",
            "Сплошная расчистка проезжей части и тротуаров",
            "Обработка противогололедными материалами (ПГМ)"
          ],
          "suitableObjects": [
            "Торговые центры, гипермаркеты и логистические хабы",
            "Автозаправочные станции и автосалоны",
            "Городские улицы, микрорайоны и поселки"
          ],
          "costFactors": [
            "Площадь уборки",
            "Высота снежного покрова",
            "Регулярность (разово или абонентский договор на зиму)"
          ],
          "relatedEquipment": [
            "kombinirovannye-dorozhnye-mashiny",
            "mini-pogruzchiki",
            "ekskavatory-pogruzchiki",
            "frontalnye-pogruzchiki",
            "backhoe-loaders",
            "skid-steer-loaders",
            "kdm-cleaning"
          ]
        },
        {
          "id": "vyvoz-snega",
          "title": "Вывоз снега с погрузкой в самосвалы",
          "slug": "vyvoz-snega",
          "priceFrom": "от 280 ₽/м³",
          "shortDesc": "Погрузка снежных валов погрузчиками и вывоз самосвалами 15–25 м³ на снегоплавильные пункты (ССП) с талонами.",
          "includes": [
            "Погрузка снега фронтальными ковшами 2–4 м³",
            "Транспортировка на городские снегоплавилки",
            "Оформление утилизационных документов"
          ],
          "stages": [
            "Формирование валов",
            "Челночная подача самосвалов",
            "Утилизация на ССП"
          ],
          "suitableObjects": [
            "Снежные завалы на стоянках, складах и дворовых проездах"
          ],
          "costFactors": [
            "Плотность снега",
            "Расстояние до ближайшей снегоплавилки"
          ],
          "relatedEquipment": [
            "frontalnye-pogruzchiki",
            "samosvaly",
            "mini-pogruzchiki",
            "wheel-loaders",
            "dump-trucks"
          ]
        },
        {
          "id": "moyka-podmetanie",
          "title": "Мойка и механическая очистка территорий",
          "slug": "moyka-podmetanie",
          "priceFrom": "от 18 ₽/м²",
          "shortDesc": "Летнее обеспыливание, мойка асфальта под давлением поливомоечными машинами и подметание щетками.",
          "includes": [
            "Смыв грязи и пыли к бордюрам струей воды под давлением",
            "Механическое подметание и вакуумный сбор смета"
          ],
          "stages": [
            "Увлажнение покрытия",
            "Подметание щеткой",
            "Мойка чистовой поверхности"
          ],
          "suitableObjects": [
            "Городские площади, паркинги, автозаводы"
          ],
          "costFactors": [
            "Степень загрязнения"
          ],
          "relatedEquipment": [
            "kombinirovannye-dorozhnye-mashiny",
            "mini-pogruzchiki",
            "skid-steer-loaders",
            "kdm-cleaning"
          ]
        },
        {
          "id": "promyvka-kanalizatsii",
          "title": "Промывка ливневых сетей и колодцев",
          "slug": "promyvka-kanalizatsii",
          "priceFrom": "от 180 ₽/п.м.",
          "shortDesc": "Гидродинамическая пробивка засоров в трубах ливневки и очистка колодцев от ила и песка илососом.",
          "includes": [
            "Размыв плотного ила водой под давлением 150–200 бар",
            "Вакуумное всасывание шлама в цистерну илососа"
          ],
          "stages": [
            "Осмотр колодца",
            "Проход гидродинамической насадки по трубе",
            "Откачка и вывоз ила"
          ],
          "suitableObjects": [
            "Ливневая канализация дорог, дренажные колодцы ТЦ"
          ],
          "costFactors": [
            "Диаметр труб и степень заиливания"
          ],
          "relatedEquipment": [
            "ilososnye-i-kanalopromyvochnye-mashiny",
            "suction-trucks"
          ]
        },
        {
          "id": "otkachka-zhidkih-othodov",
          "title": "Откачка и вывоз жидких отходов илососами",
          "slug": "otkachka-zhidkih-othodov",
          "priceFrom": "от 1 200 ₽/м³",
          "shortDesc": "Откачка бурового шлама при работах ГНБ, очистка жироуловителей, автомоек и септиков с утилизацией.",
          "includes": [
            "Откачка мощным вакуумным насосом с глубины до 15 м",
            "Вывоз на специализированные очистные сооружения"
          ],
          "stages": [
            "Подача рукава к емкости",
            "Вакуумная откачка",
            "Транспортировка и слив"
          ],
          "suitableObjects": [
            "Стройплощадки с ГНБ, автомойки, промышленные отстойники"
          ],
          "costFactors": [
            "Плотность шлама",
            "Объем откачки"
          ],
          "relatedEquipment": [
            "ilososnye-i-kanalopromyvochnye-mashiny",
            "suction-trucks"
          ]
        }
      ]
    }
  ],
  "contacts": {
    "company": "ООО «ЮНАТ»",
    "inn": "2536345868",
    "kpp": "253601001",
    "ogrn": "1242500018859",
    "phone": "+7 (925) 757-78-88",
    "phoneClean": "+79257577888",
    "email": "roman.k@mail.ru",
    "telegram": "https://t.me/romanspes",
    "whatsapp": "https://wa.me/79257577888",
    "schedule": "Круглосуточно 24/7",
    "address": "г. Москва, ул. Рябиновая, д. 43, корп. 2",
    "coverage": "Москва, Новая Москва и вся Московская область (до 150 км от МКАД)"
  }
};
