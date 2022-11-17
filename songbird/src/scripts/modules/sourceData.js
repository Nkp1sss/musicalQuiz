const musicData = [
    [
        {
            id: 1,
            name: 'Прощай',
            performer: 'Майот',
            description: '«Прощай» — третий трек Артёма в 2022 году, посвящённый его уже бывшей девушке Ирине. В последнее время следящая за Артёмом и Ринной аудитория стала замечать, что пара перестала вести совместную активность. Выдвинулись предположения о их расставании, которые подтвердила сама Ирина в своём Телеграм-канале.',
            image: './assets/images/lyrics/goodbye.webp',
            audio: './assets/audio/lyrics/goodbye.mp3'
        },
        {
            id: 2,
            name: 'По крышам',
            performer: 'Feduk, OG BUDA',
            description: "7 октября 2022 года Feduk выпускает альбом частью которого становится трек «По крышам».",
            image: './assets/images/lyrics/overRoofs.png',
            audio: './assets/audio/lyrics/overRoofs.mp3'
        },
        {
            id: 3,
            name: 'Не теряя',
            performer: 'Miyagi, Эндшпиль',
            description: '«Не теряя» - трек Miyagi и Эндшпиля из альбома «Hattori». В этой композиции музыканты высказывают свое отношение к вещам, о которых невозможно не высказаться в 2022 году, будучи уроженцем СНГ - это тема войны, которая идет на Украине. в песне нет места злу и ненависти, наоборот, только вайб добра, которым Мияги и Энди всегда топили и будут топить людские сердца.',
            image: './assets/images/lyrics/dontLose.jpg',
            audio: './assets/audio/lyrics/dontLose.mp3'
        },
        {
            id: 4,
            name: 'Сектор приз',
            performer: 'ЛСП',
            description: 'Сингл ЛСП, выпущенный в начале сентября 2022 года. Впервые был представлен на фестивале ЛАСТОЧКА SUMMEET 2022 в начале июня этого же года. В треке рассказывается печальная история, связанная с неблагополучием, наркотиками, предательством и тюрьмой, в которую Олег включил отсылки и метафоры, отсылающие к знаменитому капитал-шоу «Поле чудес». Интересно, что за гитару на этом треке отвечает известный российский телеведущий Иван Ургант.',
            image: './assets/images/lyrics/sectorPriz.jpg',
            audio: './assets/audio/lyrics/sectorPriz.mp3'
        },
        {
            id: 5,
            name: 'Конечная станция',
            performer: 'Markul',
            description: 'Первый сингл Маркула, выпущенный после релиза сольного альбома Sense Of Human и переноса им концертов в России. Это лиричный трек, в котором Марк поддаётся меланхоличным рассуждениям о жизни, смерти и месте человека в огромном мире. По некоторым строкам можно понять, что эти мысли навеяны именно печальными событиями 2022 года и оптимизма в артисте остаётся всё меньше.',
            image: './assets/images/lyrics/lastStation.jpg',
            audio: './assets/audio/lyrics/lastStation.mp3'
        },
        {
            id: 6,
            name: 'Imago',
            performer: 'КУОК',
            description: 'Имаго — финальная стадия метаморфоз, в которой объект обретает крылья. Финальная стадия эволюции. Аутро альбома IMAGO, которое вышло как первый сингл альбома 18 февраля.',
            image: './assets/images/lyrics/imago.png',
            audio: './assets/audio/lyrics/imago.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Соната ей',
            performer: 'PHARAOH',
            description: '«Соната ей» - разогревочный микс-сингл, которым PHARAOH «открывает новую главу». «Я всегда боялся оставаться на месте. Я всегда испытывал страх перед отсутствием движения жизни, будто еще секунда и смерть. Я никогда не считал себя умным, но я всегда хотел им быть», — такими словами Глеб анонсировал грядущий альбом «Филармония».',
            image: './assets/images/releasesOnNovember18/sonataHer.jpg',
            audio: './assets/audio/releasesOnNovember18/sonataHer.mp3'
        },
        {
            id: 2,
            name: 'Времени нет',
            performer: 'Баста, Feduk',
            description: 'По-настоящему отцовский фит как в прямом, так и в переносном смысле! Это первый, официально выпущенный трек дуэта. Однажды они уже встречались на одном бите в треке «Мама», но то был сайфер при участии Скриптонита, Niman\'a и Truwer\'a.',
            image: './assets/images/releasesOnNovember18/noTime.jpg',
            audio: './assets/audio/releasesOnNovember18/noTime.mp3'
        },
        {
            id: 3,
            name: 'Два выстрела',
            performer: 'Mary Gu, MAYOT',
            description: '«2 ВЫСТРЕЛА» — это трек, в котором Майот в очередной раз подтверждает свою универсальность, демонстрируя вокальные данные. В нём он поёт о боли расстояния и размышляет над давно избитой, но верной фразой: «Пока имеешь — не ценишь».',
            image: './assets/images/releasesOnNovember18/twoShots.jpg',
            audio: './assets/audio/releasesOnNovember18/twoShots.mp3'
        },
        {
            id: 4,
            name: 'Down in atalanta',
            performer: 'TRAVIS SCOTT, PHARRELL WILLIAMS',
            description: 'У фанатов, соскучившихся по новому материалу Pharrell Williams и Travis Scott, сегодня праздник: артисты представили третий совместный трек «DOWN IN ATLANTA» под продакшен Уиллиамса. Ожидалось, что композиция станет синглом к альбому Трэвиса «Utopia», но трек стоит за авторством Фаррелла, так что, вероятнее всего, он попадёт на его предстоящий альбом.',
            image: './assets/images/releasesOnNovember18/downInAtalanta.jpg',
            audio: './assets/audio/releasesOnNovember18/downInAtalanta.mp3'
        },
        {
            id: 5,
            name: 'Мне это не нужно',
            performer: 'KIZARU',
            description: 'Трек, отрывок которого разошёлся по всему рунету, став одним из самых ожидаемых от Олега, вышел на новом альбоме! «МНЕ ЭТО НЕ НУЖНО» — лирическая история о том, что Олег вовсе не ищет славы в Интернете, а всего лишь «согревает души» своих слушателей.',
            image: './assets/images/releasesOnNovember18/iDontNeedIt.jpg',
            audio: './assets/audio/releasesOnNovember18/iDontNeedIt.mp3'
        },
        {
            id: 6,
            name: 'Космических снов',
            performer: 'Космонавтов нет',
            description: 'Поп-рок трио, успешно ворвавшееся во все возможные чарты и плейлисты в начале 2020 года, продолжает покорять внимание новых слушателей. «Космических снов» — это трек, выполненный в лучших традициях: подростковая любовь, мечты и совсем немного детского фанатизма.',
            image: './assets/images/releasesOnNovember18/6.png',
            audio: './assets/audio/releasesOnNovember18/6.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Зяблик',
            species: 'Fringilla coelebs',
            description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
            image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
        },
        {
            id: 2,
            name: 'Клёст',
            species: 'Loxia curvirostra',
            description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
            image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
        },
        {
            id: 3,
            name: 'Горлица',
            species: 'Streptopelia turtur',
            description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
            image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
        },
        {
            id: 4,
            name: 'Дятел',
            species: 'Dendrocopos major',
            description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
            image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
        },
        {
            id: 5,
            name: 'Удод',
            species: 'Upupa epops',
            description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
            image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
        },
        {
            id: 6,
            name: 'Стриж',
            species: 'Apus apus',
            description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
            image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Жаворонок',
            species: 'Alauda arvensis',
            description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
            image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
        },
        {
            id: 2,
            name: 'Соловей',
            species: 'Luscinia luscinia',
            description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
            image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
        },
        {
            id: 3,
            name: 'Скворец',
            species: 'Sturnus vulgaris',
            description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
            image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
        },
        {
            id: 4,
            name: 'Иволга',
            species: 'Oriolus oriolus',
            description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
            image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
        },
        {
            id: 5,
            name: 'Свиристель',
            species: 'Bombycilla garrulus',
            description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
            image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
        },
        {
            id: 6,
            name: 'Щегол',
            species: 'Carduelis carduelis',
            description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
            image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Орёл',
            species: 'Aquila nipalensis',
            description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
            image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
        },
        {
            id: 2,
            name: 'Коршун',
            species: 'Milvus migrans',
            description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
            image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
        },
        {
            id: 3,
            name: 'Лунь',
            species: 'Circus cyaneus',
            description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
            image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
        },
        {
            id: 4,
            name: 'Сокол',
            species: 'Falco peregrinus',
            description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
            image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
        },
        {
            id: 5,
            name: 'Ястреб',
            species: 'Accipiter gentilis',
            description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
            image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
        },
        {
            id: 6,
            name: 'Филин',
            species: 'Bubo bubo',
            description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
            image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Альбатрос',
            species: 'Diomedea exulans',
            description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
            image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
        },
        {
            id: 2,
            name: 'Олуша',
            species: 'Sula nebouxii',
            description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
            image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
        },
        {
            id: 3,
            name: 'Буревестник',
            species: 'Puffinus griseus',
            description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
            image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
        },
        {
            id: 4,
            name: 'Пеликан',
            species: 'Pelecanus',
            description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
            image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
        },
        {
            id: 5,
            name: 'Пингвин',
            species: 'Aptenodytes forsteri',
            description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
            image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
        },
        {
            id: 6,
            name: 'Чайка',
            species: 'Larus argentatus',
            description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
            image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
        }
    ]
];

export default musicData;


// «»