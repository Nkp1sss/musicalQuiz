const musicData = [
    [
        {
            id: 1,
            name: 'Прощай',
            performer: 'Майот',
            description: {
                ['en']: '"Farewell" is Artem\'s third track in 2022, dedicated to his now ex-girlfriend Irina. Recently, the audience that follows Artem and Rinna began to notice that the couple stopped being active together. There was speculation about their breakup, which was confirmed by Irina herself in her Telegram channel.',
                ['ru']: '«Прощай» — третий трек Артёма в 2022 году, посвящённый его уже бывшей девушке Ирине. В последнее время следящая за Артёмом и Ринной аудитория стала замечать, что пара перестала вести совместную активность. Выдвинулись предположения о их расставании, которые подтвердила сама Ирина в своём Телеграм-канале.'
            },
            image: './assets/images/lyrics/goodbye.webp',
            audio: './assets/audio/lyrics/goodbye.mp3'
        },
        {
            id: 2,
            name: 'По крышам',
            performer: 'Feduk, OG BUDA',
            description: {
                ['en']: 'On October 7, 2022, Feduk releases an album of which the track "On the Roofs" is a part.',
                ['ru']: '7 октября 2022 года Feduk выпускает альбом частью которого становится трек «По крышам».'
            },
            image: './assets/images/lyrics/overRoofs.png',
            audio: './assets/audio/lyrics/overRoofs.mp3'
        },
        {
            id: 3,
            name: 'Не теряя',
            performer: 'Miyagi, Эндшпиль',
            description: {
                ['en']: '"Not Losing" is a track by Miyagi and Endshpil from the album "Hattori". In this composition musicians express their attitude towards things that are impossible not to talk about in 2022 being a native of CIS - it is the topic of the war that is going on in Ukraine. there is no place for evil and hatred in the song, on the contrary, only vibe of goodness, which Miyagi and Andy always were and will be drowning people\'s hearts with.',
                ['ru']: '«Не теряя» - трек Miyagi и Эндшпиля из альбома «Hattori». В этой композиции музыканты высказывают свое отношение к вещам, о которых невозможно не высказаться в 2022 году, будучи уроженцем СНГ - это тема войны, которая идет на Украине. в песне нет места злу и ненависти, наоборот, только вайб добра, которым Мияги и Энди всегда топили и будут топить людские сердца.'
            },
            image: './assets/images/lyrics/dontLose.jpg',
            audio: './assets/audio/lyrics/dontLose.mp3'
        },
        {
            id: 4,
            name: 'Сектор приз',
            performer: 'ЛСП',
            description: {
                ['en']: 'LSP\'s single, released in early September 2022. It was first presented at the LASTE SUMMEET 2022 festival in early June of the same year.The track tells a sad story of disadvantage, drugs, betrayal and prison, with Oleg incorporating references and metaphors that refer to the famous capital show Field of Wonder.Interestingly, the famous Russian TV host Ivan Urgant is responsible for the guitar on this track.',
                ['ru']: 'Сингл ЛСП, выпущенный в начале сентября 2022 года. Впервые был представлен на фестивале ЛАСТОЧКА SUMMEET 2022 в начале июня этого же года. В треке рассказывается печальная история, связанная с неблагополучием, наркотиками, предательством и тюрьмой, в которую Олег включил отсылки и метафоры, отсылающие к знаменитому капитал-шоу «Поле чудес». Интересно, что за гитару на этом треке отвечает известный российский телеведущий Иван Ургант.'
            },
            image: './assets/images/lyrics/sectorPriz.jpg',
            audio: './assets/audio/lyrics/sectorPriz.mp3'
        },
        {
            id: 5,
            name: 'Конечная станция',
            performer: 'Markul',
            description: {
                ['en']: 'Markul\'s first single, released after the release of his solo album Sense Of Human and the rescheduling of his concerts in Russia.It is a lyrical track in which Mark lends himself to melancholic musings about life, death and the place of man in a vast world.Some lines suggest that these thoughts are caused by sad events of 2022 and the artist is less and less optimistic.',
                ['ru']: 'Первый сингл Маркула, выпущенный после релиза сольного альбома Sense Of Human и переноса им концертов в России. Это лиричный трек, в котором Марк поддаётся меланхоличным рассуждениям о жизни, смерти и месте человека в огромном мире. По некоторым строкам можно понять, что эти мысли навеяны именно печальными событиями 2022 года и оптимизма в артисте остаётся всё меньше.'
            },
            image: './assets/images/lyrics/lastStation.jpg',
            audio: './assets/audio/lyrics/lastStation.mp3'
        },
        {
            id: 6,
            name: 'Имаго',
            performer: 'КУОК',
            description: {
                ['en']: 'Imago is the final stage of metamorphosis, in which an object acquires wings. The final stage of evolution. IMAGO album outro, which was released as the album\'s first single on February 18.',
                ['ru']: 'Имаго — финальная стадия метаморфоз, в которой объект обретает крылья. Финальная стадия эволюции. Аутро альбома IMAGO, которое вышло как первый сингл альбома 18 февраля.'
            },
            image: './assets/images/lyrics/imago.png',
            audio: './assets/audio/lyrics/imago.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Соната ей',
            performer: 'PHARAOH',
            description: {
                ['en']: '"Sonata to Her" is the warm-up mixtape with which PHARAOH "opens a new chapter." "I\'ve always been afraid to stay still.I\'ve always been afraid of the lack of movement of life, like one more second and death. I never thought I was smart, but I always wanted to be," Gleb announced the forthcoming album "Philharmonia" with these words.',
                ['ru']: '«Соната ей» - разогревочный микс-сингл, которым PHARAOH «открывает новую главу». «Я всегда боялся оставаться на месте. Я всегда испытывал страх перед отсутствием движения жизни, будто еще секунда и смерть. Я никогда не считал себя умным, но я всегда хотел им быть», — такими словами Глеб анонсировал грядущий альбом «Филармония».'
            },
            image: './assets/images/releasesOnNovember18/sonataHer.jpg',
            audio: './assets/audio/releasesOnNovember18/sonataHer.mp3'
        },
        {
            id: 2,
            name: 'Времени нет',
            performer: 'Баста, Feduk',
            description: {
                ['en']: 'A truly fatherly fit, both literally and figuratively! This is the duo\'s first, officially released track.They already met once on one beat in the track "Mama", but that was a cypher with Skriptonite, Niman\a and Truwer\a.',
                ['ru']: 'По-настоящему отцовский фит как в прямом, так и в переносном смысле! Это первый, официально выпущенный трек дуэта. Однажды они уже встречались на одном бите в треке «Мама», но то был сайфер при участии Скриптонита, Niman\'a и Truwer\'a.'
            },
            image: './assets/images/releasesOnNovember18/noTime.jpg',
            audio: './assets/audio/releasesOnNovember18/noTime.mp3'
        },
        {
            id: 3,
            name: 'Два выстрела',
            performer: 'Mary Gu, MAYOT',
            description: {
                ['en']: '"2 SHOTS" is a track in which Mayot once again confirms his versatility by demonstrating his vocal skills. In it, he sings about the pain of distance and reflects on the long-worn but true phrase: "While you have it, you don\'t appreciate it.',
                ['ru']: '«2 ВЫСТРЕЛА» — это трек, в котором Майот в очередной раз подтверждает свою универсальность, демонстрируя вокальные данные. В нём он поёт о боли расстояния и размышляет над давно избитой, но верной фразой: «Пока имеешь — не ценишь».'
            },
            image: './assets/images/releasesOnNovember18/twoShots.jpg',
            audio: './assets/audio/releasesOnNovember18/twoShots.mp3'
        },
        {
            id: 4,
            name: 'Down in atalanta',
            performer: 'TRAVIS SCOTT',
            description: {
                ['en']: 'Fans who missed the new material of Pharrell Williams and Travis Scott have a celebration today: the artists presented their third track together, "DOWN IN ATLANTA" under the production of Williams. The track was expected to be a single for Travis\' "Utopia" album, but Pharrell wrote the track, so it\'s likely to be on his upcoming album.',
                ['ru']: 'У фанатов, соскучившихся по новому материалу Pharrell Williams и Travis Scott, сегодня праздник: артисты представили третий совместный трек «DOWN IN ATLANTA» под продакшен Уиллиамса. Ожидалось, что композиция станет синглом к альбому Трэвиса «Utopia», но трек стоит за авторством Фаррелла, так что, вероятнее всего, он попадёт на его предстоящий альбом.'
            },
            image: './assets/images/releasesOnNovember18/downInAtalanta.jpg',
            audio: './assets/audio/releasesOnNovember18/downInAtalanta.mp3'
        },
        {
            id: 5,
            name: 'Мне это не нужно',
            performer: 'KIZARU',
            description: {
                ['en']: 'The track, a snippet of which went all over the Runet and became one of the most anticipated from Oleg, was released on the new album! "I don\'t need this" is a lyrical story about Oleg not looking for fame on the Internet, but only \"warming the souls\" of his listeners.',
                ['ru']: 'Трек, отрывок которого разошёлся по всему рунету, став одним из самых ожидаемых от Олега, вышел на новом альбоме! «МНЕ ЭТО НЕ НУЖНО» — лирическая история о том, что Олег вовсе не ищет славы в Интернете, а всего лишь «согревает души» своих слушателей.'
            },
            image: './assets/images/releasesOnNovember18/iDontNeedIt.jpg',
            audio: './assets/audio/releasesOnNovember18/iDontNeedIt.mp3'
        },
        {
            id: 6,
            name: 'Космических снов',
            performer: 'Космонавтов нет',
            description: {
                ['en']: 'The pop-rock trio, which successfully burst onto every possible chart and playlist in early 2020, continues to capture the attention of new listeners. "Cosmic Dreams" is a track done at its best: teen love, dreams and just a little bit of childish fanaticism.',
                ['ru']: 'Поп-рок трио, успешно ворвавшееся во все возможные чарты и плейлисты в начале 2020 года, продолжает покорять внимание новых слушателей. «Космических снов» — это трек, выполненный в лучших традициях: подростковая любовь, мечты и совсем немного детского фанатизма.'
            },
            image: './assets/images/releasesOnNovember18/6.png',
            audio: './assets/audio/releasesOnNovember18/6.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Natural',
            performer: 'Imagine Dragons',
            description: {
                ['en']: '"Natural" is Imagine Dragons\' third single since the release of the Evolve album, following their collaboration with Kygo on "Born to Be Yours"; it is the lead single of their fourth studio album Origins.The cover of the single features the same artist from Evolve, Beeple.According to Dan Reynolds, the song is about getting a little ruthless and stale as time goes on, when you realize you have to fight and stand up for yourself.',
                ['ru']: '«Natural» - третий сингл Imagine Dragons после выхода альбома Evolve, следующий за их совместной работой с Kygo над «Born to Be Yours»; это ведущий сингл их четвертого студийного альбома Origins. На обложке сингла изображен тот же художник из Evolve, Beeple. По словам Дэна Рейнольдса, песня о том, что со временем ты становишься немного безжалостным и черствым, когда понимаешь, что должен бороться и постоять за себя.'
            },
            image: './assets/images/rock/natural.jpg',
            audio: './assets/audio/rock/natural.mp3'
        },
        {
            id: 2,
            name: 'Smells Like Teen Spirit',
            performer: 'Nirvana',
            description: {
                ['en']: 'Considered by many to be the anthem of grunge, "Smells Like Teen Spirit" was the lead single of Nirvana\'s second studio album and their major label debut, released in September 1991 as Nevermind.The song\'s success and ubiquity in the early \'90s brought the band unrivaled popularity.Eventually, Kurt Cobain grew tired of it and removed it from his concert programs as often as possible.',
                ['ru']: 'Считающаяся многими гимном гранжа, песня «Smells Like Teen Spirit» стала лид-синглом второго студийного альбома Nirvana и дебютом на крупном лейбле, вышедшим в сентябре 1991 года под названием Nevermind. Успех и вездесущность песни в начале 90-х принесли группе непревзойденную популярность. В конце концов, Курт Кобейн устал от нее и как можно чаще убирал ее из своих концертных программ.'
            },
            image: './assets/images/rock/smellsLike.png',
            audio: './assets/audio/rock/smellsLike.mp3'
        },
        {
            id: 3,
            name: 'Back In Black',
            performer: 'AC/DC',
            description: {
                ['en']: '"Back In Black" is the title track from AC/DC\'s first album with Brian Johnson, becoming its third single.The song is a tribute to deceased frontman Bon Scott.When Brian Johnson was told to write the song, the band members said, "It shouldn\'t be somber - it should be for Bon and it should be a celebration." And they wrote it from Bon\'s point of view. Since then, the song has been a staple at their concerts, and the riff is one of the most iconic songs in rock music - for example, it was the first song Kurt Cobain learned to play at the age of 14.',
                ['ru']: '«Back In Black» - заглавная композиция с первого альбома AC/DC с Брайаном Джонсоном, ставшая его третьим синглом. Песня является данью уважения умершему фронтмену Бону Скотту. Когда Брайану Джонсону сказали написать песню, участники группы ответили: "Она не должна быть мрачной - она должна быть для Бона и должна быть праздником". И они написали ее с точки зрения Бона. С тех пор эта песня стала главной на их концертах, а рифф является одним из самых знаковых в рок-музыке - например, это была первая песня, которую Курт Кобейн научился играть в возрасте 14 лет.'
            },
            image: './assets/images/rock/back.jpg',
            audio: './assets/audio/rock/back.mp3'
        },
        {
            id: 4,
            name: 'Someone That I ...',
            performer: 'Gotye',
            description: {
                ['en']: 'After hitting the Australian charts in late 2011, Gotye\'s sad tale of lost love continued to climb the charts across the U.S.in 2012 and 2013. The emotional song "Somebody That I Used To Know" is about a mutually ended relationship in which one person feels pain that the other refuses to feel.',
                ['ru']: 'Попав в австралийские чарты в конце 2011 года, грустная история Gotye о потерянной любви продолжала подниматься в чартах на территории США в 2012 и 2013 годах. Эмоциональная песня «Somebody That I Used To Know» рассказывает о взаимно прекращенных отношениях, в которых один человек чувствует боль, которую другой отказывается чувствовать.'
            },
            image: './assets/images/rock/somebody.jpg',
            audio: './assets/audio/rock/somebody.mp3'
        },
        {
            id: 5,
            name: 'Fed Up',
            performer: 'Ghostemane',
            description: {
                ['en']: 'The album\'s sixth song, "Fed Up," expresses Ghostemane\'s disagreement with drugs, lies, fame and many other things. Basically he expresses his discomfort with people who don\'t understand his art, lyrics and music, a common thing he has always struggled with.',
                ['ru']: 'Шестая песня альбома, «Fed Up», выражает несогласие Ghostemane с наркотиками, ложью, славой и многими другими вещами. В основном он выражает свой дискомфорт по отношению к людям, которые не понимают его творчество, тексты и музыку - обычная вещь, с которой он всегда боролся.'
            },
            image: './assets/images/rock/fedUp.jpg',
            audio: './assets/audio/rock/fedUp.mp3'
        },
        {
            id: 6,
            name: 'Enemy',
            performer: 'Imagine Dragons, LOL',
            description: {
                ['en']: 'Swifts can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
                ['ru']: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.'
            },
            image: './assets/images/rock/enemy.png',
            audio: './assets/audio/rock/enemy.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Дор Блю',
            performer: 'MORGENSHTERN, ЛСП',
            description: {
                ['en']: 'Another fit with LSP, which is part of the sixth studio album by Russian rap singer and musician Morgenstern.',
                ['ru']: 'Очередной фит с ЛСП, являющийся частью шестого студийного альбома российского рэп-исполнителя и музыканта Моргенштерна.'
            },
            image: './assets/images/rap/dorblu.jpg',
            audio: './assets/audio/rap/dorblu.mp3'
        },
        {
            id: 2,
            name: '2 типа людей',
            performer: 'Макс Корж',
            description: {
                ['en']: 'The Belarusian artist presented his third track after a two-year break since "Little Grew Up". This time Max Korzh came out with lyrics and arguments about loyal friends and traitors. His two types of people are complete opposites.',
                ['ru']: 'Белорусский артист представил третий трек после двухлетнего перерыва со времён «Малый повзрослел». На сей раз Макс Корж выступил с лирикой и рассуждениями о верных друзьях и предателях. Его два типа людей ― полные противоположности.'
            },
            image: './assets/images/rap/2types.jpg',
            audio: './assets/audio/rap/2types.mp3'
        },
        {
            id: 3,
            name: 'Хлопья летят наверх',
            performer: 'Feduk',
            description: {
                ['en']: 'Six months later, the charming hitmaker decided to film his main ballad about love. Feduk\'s "Flakes Are Flying Upstairs\" has already been danced to by thousands of slow dances, many first kisses and confessions have happened.',
                ['ru']: 'Спустя полгода обаятельный хитмейкер решил экранизировать свою главную балладу о любви. Под «Хлопья летят наверх» Feduk’a уже станцевали тысячи медляков, случилось множество первых поцелуев и признаний.'
            },
            image: './assets/images/rap/fly.jpg',
            audio: './assets/audio/rap/fly.mp3'
        },
        {
            id: 4,
            name: 'Еще час',
            performer: 'LOVV66, АНИ ЧЕМИ',
            description: {
                ['en']: 'Just the other day, Vanya announced a mysterious joint track with a certain girl? Who is she? She turned out to be pop singer Ani Chemi, who merged into one with LOVV66 in the new track. In the track, the guy and girl play a couple in love who are trying to figure out their relationship: "One last tear is all I gave you"/ "Last chance seems very necessary for us," Ani sings.',
                ['ru']: 'Буквально на днях Ваня анонсировал загадочный совместный трек с некой девушкой? Кто же она? Ей оказалась поп-певица Ани Чеми, которая слилась в одно единое с LOVV66 в новом треке. В треке парень и девушка играют влюблённую пару, которая пытается разобраться в отношениях: «Последняя слеза — всё, что я тебе дала» / «Последний шанс кажется очень нужным для нас», — поёт Ани.'
            },
            image: './assets/images/rap/hour.jpg',
            audio: './assets/audio/rap/hour.mp3'
        },
        {
            id: 5,
            name: 'Водила',
            performer: 'BUSHIDO ZHO',
            description: {
                ['en']: '"vodila" is a relaxed track made with an eye on the traditional West Coast sound. In the lyrics, BUSHIDO ZHO talks about non-stop work and growing in popularity. So BUSHIDO ZHO gets in a cab, turns on his music and the driver immediately changes his mood: "The driver feels my vibe, he starts shuffling.',
                ['ru']: '«vodila» — расслабленный трек, сделанный с оглядкой на традиционное звучание Западного побережья. В тексте BUSHIDO ZHO рассказывает о беспрерывной работе и росте популярности. Так BUSHIDO ZHO садится в такси, включает свою музыку и водитель сразу меняется в настроении: «Водила чувствует мой вайб, он начинает шашковать».'
            },
            image: './assets/images/rap/vodila.jpg',
            audio: './assets/audio/rap/vodila.mp3'
        },
        {
            id: 6,
            name: 'Не догонят',
            performer: 'White Punk',
            description: {
                ['en']: 'White Punk returns to a visceral, electrifying rap sound on the new single "Can\'t Catch Up," a precursor to his next solo release.',
                ['ru']: 'White Punk возвращается к вязкому наэлектризованному трэп-звучанию в новом сингле «Не догонят», предваряющим его следующий сольный релиз.'
            },
            image: './assets/images/rap/wontCatch.jpg',
            audio: './assets/audio/rap/wontCatch.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Mockingbird ',
            performer: 'Eminem',
            description: {
                ['en']: 'Perhaps the least offensive of all the songs, this composition is addressed and dedicated to his daughters. Eminem admits that his media image and Kim\'s drug problems have caused a difficult upbringing, not to mention their impoverished existence.',
                ['ru']: 'Возможно, наименее оскорбительная из всех песен, эта композиция адресована и посвящена его дочерям. Эминем признает, что его медийный имидж и проблемы с наркотиками Ким стали причиной трудного воспитания, не говоря уже об их нищенском существовании.'
            },
            image: './assets/images/foreignRap/Mockingbird.jpg',
            audio: './assets/audio/foreignRap/Mockingbird.mp3'
        },
        {
            id: 2,
            name: 'Smack That',
            performer: 'Akon',
            description: {
                ['en']: 'Smack that is the first single of Akon\'s second studio album, Konvicted.The song was released on September 26, 2006. There is also a music video for the song, which is a remake of the short clip from the movie 48Hrs.This video is Eminem\'s first video in which he shows the "PROOF" tattoo on his arm.',
                ['ru']: 'Smack that - первый сингл второго студийного альбома Akon «Konvicted». Песня была выпущена 26 сентября 2006 года. На песню также есть музыкальное видео, которое представляет собой ремейк короткого клипа из фильма 48Hrs.Это видео - первый клип Эминема, в котором он демонстрирует татуировку "PROOF" на руке.'
            },
            image: './assets/images/foreignRap/SMAKDAK.png',
            audio: './assets/audio/foreignRap/SMAKDAK.mp3'
        },
        {
            id: 3,
            name: 'Hope',
            performer: 'Xxxtentacion',
            description: {
                ['en']: '"Hope" is the 16th track from XXXTENTACION\'s album, ? (Question Mark).It was released on X\'s SoundCloud page on February 21, 2018. The song is dedicated to the children who were killed in the school shooting in Parkland, Florida, which occurred on February 14, 2018. X released the song to motivate and uplift other children, as he described the song in its description on SoundCloud.',
                ['ru']: '«Hope» - 16-й трек с альбома XXXTENTACION, ? (Question Mark). Он был выпущен 21 февраля 2018 года на странице Икса в SoundCloud. Песня посвящена детям, которые погибли во время стрельбы в школе в Паркленде, штат Флорида, которая произошла 14 февраля 2018 года. Икс выпустил эту песню, чтобы мотивировать и поднять настроение другим детям, как он описал эту песню в ее описании на SoundCloud.'
            },
            image: './assets/images/foreignRap/hope.png',
            audio: './assets/audio/foreignRap/hope.mp3'
        },
        {
            id: 4,
            name: 'God\'s Plan',
            performer: 'Drake',
            description: {
                ['en']: '"God\'s Plan" is a feel-good track that discusses Drake\'s future.Being who he is in the industry, he knows that people want him to fail; however, God\'s not going to let him do that. The official music video shared a different sentiment as Drake took the video\'s budget of $996, 631.90 and gave it away to families, schools, charities and more.The music video was directed by Karena Evans, who also hails from Toronto and is a protégé of director X.',
                ['ru']: '«God\'s Plan» - это трек с хорошим настроением, в котором обсуждается будущее Дрейка. Будучи тем, кем он является в индустрии, он знает, что люди хотят, чтобы он потерпел неудачу; однако Бог не позволит ему этого сделать. Официальное музыкальное видео разделило другое настроение, так как Дрейк взял бюджет видео, составляющий 996 631,90 долларов, и раздал его семьям, школам, благотворительным организациям и многим другим. Режиссером клипа выступила Карена Эванс, которая также родом из Торонто и является протеже режиссера Икс.'
            },
            image: './assets/images/foreignRap/plan.png',
            audio: './assets/audio/foreignRap/plan.mp3'
        },
        {
            id: 5,
            name: 'Still D.R.E.',
            performer: 'Snoop Dogg, Dr. Dre',
            description: {
                ['en']: 'The song was the first single released from Dr. Dre\'s second album in 2001. Although it is considered a classic West Coast anthem, the song was written entirely by an East Coast MC from Brooklyn, New York, named Jay- Z.',
                ['ru']: 'Песня была первым синглом, выпущенным со второго альбома Dr. Dre 2001 года. Хотя она считается классическим гимном Западного побережья, песня была полностью написана MC с Восточного побережья из Бруклина, Нью-Йорк, по имени Jay-Z.'
            },
            image: './assets/images/foreignRap/still.jpg',
            audio: './assets/audio/foreignRap/still.mp3'
        },
        {
            id: 6,
            name: 'Star Shopping',
            performer: 'Lil Peep',
            description: {
                ['en']: 'In the song "Star Shopping," Lil Peep talks about his feelings about his relationship with Emma Harris, who gradually begins to show impatience with him. He understands why she feels this way and tries to let her know how much he cares about her. He informs her that he just needs time to work things out.',
                ['ru']: 'В песне «Star Shopping» Lil Peep рассказывает о своих чувствах в отношениях с Эммой Харрис, которая постепенно начинает проявлять к нему нетерпение. Он понимает, почему она так себя чувствует, и пытается дать ей понять, насколько она ему дорога. Он сообщает ей, что ему просто нужно время, чтобы все уладить.'
            },
            image: './assets/images/foreignRap/starShopping.png',
            audio: './assets/audio/foreignRap/starShopping.mp3'
        }
    ],
    [
        {
            id: 1,
            name: 'Jingle Bell Rock',
            performer: 'Bobby Helms',
            description: {
                ['en']: 'It was first recorded and released by young country singer Bobby Helms. The single with it was released two days before Christmas 1957. The song was an instant hit, reaching No. 6 on Billboard\'s Hot 100. At that time Helms was a new face on the music scene, but he was already quite famous - earlier that year two of his songs, "Fraulein" and "My Special Angel", had been at number 1 on the American country charts.',
                ['ru']: 'Впервые была записана и издана молодым кантри-певцом Бобби Хелмсом. Сингл с ней вышел за два дня до Рождества 1957 года. Песня сразу стала хитом, достигнув 6-го места в Горячей сотне «Билборда». На тот момент Хелмс был новым лицом на музыкальной сцене, но уже был достаточно известен — ранее в том же году две его песни, «Fraulein» и «My Special Angel», побывали на 1-м месте американских кантри-чартов.'
            },
            image: './assets/images/jazz/JBR.jpg',
            audio: './assets/audio/jazz/JBR.mp3'
        },
        {
            id: 2,
            name: 'Let It Snow!',
            performer: 'Frank Sinatra',
            description: {
                ['en']: '"Let It Snow!" - is one of the most famous Christmas songs in the English language. Written on a very sultry July day in 1945 by poet Sammy Kahn and composer Jules Stein, it has been sung by a great many musicians over the years. At least twenty versions of it are known.',
                ['ru']: '«Let It Snow!» — одна из самых известных рождественских песен на английском языке. Написана в очень знойный июльский день 1945 года поэтом Сэмми Каном и композитором Жюлем Стайном, и за годы своего существования была исполнена огромным количеством музыкантов. Известно не менее двадцати её перепевок.'
            },
            image: './assets/images/jazz/letItSnow.jpg',
            audio: './assets/audio/jazz/letItSnow.mp3'
        },
        {
            id: 3,
            name: 'Smooth Operaor',
            performer: 'Sade',
            description: {
                ['en']: '"Smooth Operator" is the 4th and last single from the debut album Diamond Life (1984) by the English band Sade. It was released in 1984 in England on Epic Records and in 1985 in the USA (Portrait Records). The single reached #1 on the American Adult Contemporary chart and #5 on the Billboard Hot 100.',
                ['ru']: '«Smooth Operator» — 4-й и последний сингл с дебютного альбома Diamond Life (1984) английской группы Sade. Он был выпущен в 1984 году в Англии на студии Epic Records и в 1985 — в США (Portrait Records). Сингл достиг первого места в американском чарте Adult Contemporary и №5 в Billboard Hot 100.'
            },
            image: './assets/images/jazz/SO.png',
            audio: './assets/audio/jazz/SO.mp3'
        },
        {
            id: 4,
            name: 'What A Wonderful World',
            performer: 'Louis Armstrong',
            description: {
                ['en']: '"What a Wonderful World!" was a song written by Bob Thiel and George Weiss in 1967. It was first recorded and became world famous as performed by Louis Armstrong. In 1999, "What a Wonderful World" sung by Armstrong was inducted into the Grammy Hall of Fame as the best song of the 20th century. It is often cited as one of Louis Armstrong\'s most famous songs and the most beloved of all songs in general.',
                ['ru']: '«What a Wonderful World!» (с англ. — «Как прекрасен мир!») — песня, написанная Бобом Тиэлом и Джорджем Вайсом в 1967 году. Впервые была записана и получила мировую известность в исполнении Луи Армстронга. В 1999 году «What a Wonderful World» в исполнении Армстронга была введена в Зал славы «Грэмми», как лучшая песня XX века. Часто называется в числе самых известных песен Луи Армстронга и самых любимых вообще среди всех песен.'
            },
            image: './assets/images/jazz/WaWW.jpg',
            audio: './assets/audio/jazz/WaWW.mp3'
        },
        {
            id: 5,
            name: 'Feeling Good',
            performer: 'Nina Simone',
            description: {
                ['en']: '"Feeling Good" is a song in English, one of the most famous songs in American singer Nina Simone\'s repertoire.The song was written by British composers Anthony Newley and Leslie Brickass(also known as the authors of the 1961 theater play Stop The World - I Want To Get Off and music for the 1971 movie Willy Wonka And The Chocolate Factory) for their musical The Roar Of The Greasepaint - The Smell Of The Crowd.',
                ['ru']: '«Feeling Good» — песня на английском языке, одна из самых известных песен в репертуаре американской певицы Нины Симон. Песня была написана британскими композиторами Энтони Ньюли и Лесли Брикассом(известными также в качестве авторов театральной пьесы 1961 года Stop The World — I Want To Get Off и музыки для кинофильма 1971 года «Вилли Вонка и шоколадная фабрика») для их мюзикла The Roar Of The Greasepaint — The Smell Of The Crowd.'
            },
            image: './assets/images/jazz/FG.jpg',
            audio: './assets/audio/jazz/FG.mp3'
        },
        {
            id: 6,
            name: 'L O V E',
            performer: 'Michael Buble',
            description: {
                ['en']: 'The song was originally included as an instrumental song on the album Blue Midnight in 1964. It was first recorded by Nat King Cole for his album of the same name. It was one of the last songs by Cole, who died 7 months after recording it. The song has been heard in a dozen other movies.',
                ['ru']: 'Первоначально песня была включена в качестве инструментальной композиции в альбом Blue Midnight в 1964 году. Была впервые записана Натом Кингом Коулом для его одноименного альбома. Это была одна из последних песен Коула, который умер через 7 месяцев после ее записи. Песня прозвучала еще в дюжине фильмов.'
            },
            image: './assets/images/jazz/love.jpg',
            audio: './assets/audio/jazz/love.mp3'
        }
    ]
];

export default musicData;


// «»