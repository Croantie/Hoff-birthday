const participantsList = [
    {
        name: 'Тимур Тхайшаов',
        experience: '9 лет в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Кристина Лазарева',
        experience: '7 лет в Hoff',
        department: 'ЕЦО'
    },
    {
        name: 'Анна Тихонова',
        experience: '5 месяцев в Hoff',
        department: 'Управление поддержки бизнеса'
    },
    {
        name: 'Ирина Зеленова',
        experience: '13 лет в Hoff',
        department: '318 ВС Самара'
    },
    {
        name: 'Евгения Кравец',
        experience: '8 лет в Hoff',
        department: '717 Екатеринбург'
    },
    {
        name: 'Виталина Нелюбина',
        experience: '1 год в Hoff',
        department: '823 Пермь Спешилов'
    },
    {
        name: 'Вероника Гаврилова',
        experience: '4 года в Hoff',
        department: '806 Рио Дмитровское шоссе'
    },
    {
        name: 'Дмитрий Матвеев',
        experience: '4 года в Hoff',
        department: '806 Рио Дмитровское шоссе'
    },
    {
        name: 'Иван Хорунжий',
        experience: '5 лет в Hoff',
        department: '806 Рио Дмитровское шоссе'
    },
    {
        name: 'Алена Горбатова',
        experience: '2 года в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Юлия Власова',
        experience: '5 месяцев в Hoff',
        department: '723 Минское шоссе'
    },
    {
        name: 'Светлана Спирина',
        experience: '1 год в Hoff',
        department: '818 Тольятти'
    },
    {
        name: 'Альбина Юдина',
        experience: '2 года в Hoff',
        department: '722 Жулебино'
    },
    {
        name: 'Екатерина Забралова',
        experience: '2 года в Hoff',
        department: 'Департамент по работе с поставщиками'
    },
    {
        name: 'Анна Севастьянова',
        experience: '2 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Юлия Кравцова',
        experience: '2 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Светлана Ященко',
        experience: '1 год в Hoff',
        department: 'Дирекция по персоналу'
    },
    {
        name: 'Анастасия Воробьева',
        experience: '1 год в Hoff',
        department: 'Дирекция по правовым и корпоративным вопросам'
    },
    {
        name: 'Дарья Столинец',
        experience: '6 лет в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Наталья Баркова',
        experience: '8 лет в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Алена Жалцанова',
        experience: '8 лет в Hoff',
        department: 'Финансовая дирекция'
    },
    {
        name: 'Екатерина Гуторка',
        experience: '5 лет в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Даниил Клименченко',
        experience: '5 месяцев в Hoff',
        department: '722 Жулебино'
    },
    {
        name: 'Анна Бердова',
        experience: '3 года в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Ангелина Воробьева',
        experience: '8 лет в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Елизавета Шевченко',
        experience: '2 года в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Артем Мурзин',
        experience: '6 лет в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Екатерина Кощеева',
        experience: '10 месяцев в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Диана Садек',
        experience: '3 месяца в Hoff',
        department: 'Дирекция по персоналу'
    },
    {
        name: 'Юлия Епифанова',
        experience: '1 год в Hoff',
        department: '320 ВС Новосибирск'
    },
    {
        name: 'Антон Должиков',
        experience: '1 год в Hoff',
        department: '602 Сочи'
    },
    {
        name: 'Андрей Казаков',
        experience: '5 лет в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Татьяна Ломеева',
        experience: '1 год в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Константин Тубольцев',
        experience: '10 месяцев в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Оксана Янаева',
        experience: '8 лет в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Денис Покотило',
        experience: '1 год в Hoff',
        department: '770 Центральный склад'
    },
    {
        name: 'Наталья Шперлинг',
        experience: '5 лет в Hoff',
        department: 'Дирекция по маркетингу'
    },
    {
        name: 'Михаил Веревкин',
        experience: '1 год в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Анастасия Желовникова',
        experience: '1 год в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Алёна Голендеева',
        experience: '1 год в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Татьяна Беримец',
        experience: '1 год в Hoff',
        department: '320 ВС Новосибирск'
    },
    {
        name: 'Александр Стрельцов',
        experience: 'первый месяц в Hoff',
        department: '722 Жулебино'
    },
    {
        name: 'Ольга Белоусова',
        experience: '7 месяцев в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Константин Андреев',
        experience: '4 года в Hoff',
        department: '811 Гудзон'
    },
    {
        name: 'Артем Алатарцев',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Анна Алатарцева',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Дарья Кокошкина',
        experience: '1 год в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Игорь Семикин',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Юлия Васильева',
        experience: '5 лет в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Марина Маркеева',
        experience: '3 года в Hoff',
        department: '306 ВС Санкт-Петербург'
    },
    {
        name: 'Алла Власюк',
        experience: '2 года в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Елена Кобзева',
        experience: '2 года в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Наталья Бондарчук',
        experience: '3 года в Hoff',
        department: '806 Рио Дмитровское шоссе'
    },
    {
        name: 'Ольга Гладких',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Павел Закарлюка',
        experience: '2 месяца в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Оксана Гречухина',
        experience: '1 год в Hoff',
        department: '724 Ходынка'
    },
    {
        name: 'Дарья Панова',
        experience: '5 месяцев в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Андрей Шувалов',
        experience: '3 месяца в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Елена Разгоняева',
        experience: '8 лет в Hoff',
        department: 'Дирекция планирования цепочек поставок'
    },
    {
        name: 'Ольга Кулагина',
        experience: '2 месяца в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Елена Лазарева',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Владислав Зеленский',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Наталья Мельник',
        experience: '6 месяцев в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Татьяна Берникова',
        experience: '4 года в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Александра Клинтух',
        experience: '4 года в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Ольга Литвинова',
        experience: '4 года в Hoff',
        department: '738 Новороссийск'
    },
    {
        name: 'Сергей Еремин',
        experience: '10 месяцев в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Татьяна Ковязина',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Ольга Воинова',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Валентина Волкова',
        experience: '1 год в Hoff',
        department: 'Дирекция по персоналу'
    },
    {
        name: 'Юлия Бобовникова',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Алексей Рогожин',
        experience: '8 месяцев в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Дмитрий Дюдин',
        experience: '1 год в Hoff',
        department: '740 Курск'
    },
    {
        name: 'Виктория Толмачева',
        experience: '1 год в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Оксана Брагина',
        experience: '1 год в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Юлия Чумакова',
        experience: '8 лет в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Елена Сашина',
        experience: '4 года в Hoff',
        department: '306 ВС Санкт-Петербург'
    },
    {
        name: 'Светлана Филиппова',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Максим Савоськин',
        experience: '5 лет в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Алёна Пронькина',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Константин Свинолобов',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Любовь Тиханская',
        experience: 'первый месяц в Hoff',
        department: '825 Новосибирск Красный Мамонт'
    },
    {
        name: 'Олеся Немцева',
        experience: '4 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Дмитрий Сергеев',
        experience: '4 месяца в Hoff',
        department: '738 Новороссийск'
    },
    {
        name: 'Илья Королев',
        experience: '2 года в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Марина Кужелева',
        experience: '1 год в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Александра Панфилова',
        experience: '11 лет в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Нина Лобанкова',
        experience: '3 года в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Татьяна Грошенкова',
        experience: '7 месяцев в Hoff',
        department: 'Дирекция по персоналу'
    },
    {
        name: 'Елена Леонова',
        experience: '1 год в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Екатерина Горлова',
        experience: '3 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Дарья Федорищева',
        experience: '2 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Анна Монастырская',
        experience: '1 год в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Максим Эрдниев',
        experience: '7 месяцев в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Надежда Алямкина',
        experience: '1 год в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Евгений Логинов',
        experience: '1 год в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Станислав Акчурин',
        experience: '2 месяца в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Елизавета Роднова',
        experience: '1 год в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Александр Дуплин',
        experience: '12 лет в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Карина Голубь',
        experience: '4 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Светлана Терехина',
        experience: '4 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Елена Пузикова',
        experience: '4 года в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Сергей Городбин',
        experience: '4 года в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Иван Киселев',
        experience: '12 лет в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Леонид Бабенко',
        experience: '8 месяцев в Hoff',
        department: '717 Екатеринбург'
    },
    {
        name: 'Роман Черных',
        experience: '10 лет в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Ксения Халикова',
        experience: '10 лет в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Ирина Самчук',
        experience: '10 лет в Hoff',
        department: '717 Екатеринбург'
    },
    {
        name: 'Елизавета Кравецкая',
        experience: 'первый месяц в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Патина Даногуева',
        experience: '3 года в Hoff',
        department: '816 Санкт-Петербург Кубатура'
    },
    {
        name: 'Кристина Силаева',
        experience: '1 год в Hoff',
        department: '722 Жулебино'
    },
    {
        name: 'Екатерина Самодурова',
        experience: '6 лет в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Екатерина Кравчинская',
        experience: '13 лет в Hoff',
        department: 'Финансовая дирекция'
    },
    {
        name: 'Илья Иванников',
        experience: '2 года в Hoff',
        department: '317 ВС Воронеж'
    },
    {
        name: 'Елена Гусарова',
        experience: '1 год в Hoff',
        department: '713 Краснодар'
    },
    {
        name: 'Аида Юлбалдыева',
        experience: '2 года в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Юлия Литра',
        experience: '8 лет в Hoff',
        department: '723 Минское шоссе'
    },
    {
        name: 'Мария Коротенко',
        experience: '6 лет в Hoff',
        department: '736 Санкт-Петербург Приморский проспект'
    },
    {
        name: 'Ирина Писарницкая',
        experience: '13 лет в Hoff',
        department: 'Дирекция по персоналу'
    },
    {
        name: 'Дарья Остапенко',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Марина Дудорова',
        experience: '11 лет в Hoff',
        department: '711 Новая Рига'
    },
    {
        name: 'Евгения Ивачева',
        experience: '5 лет в Hoff',
        department: '717 Екатеринбург'
    },
    {
        name: 'Татьяна Слабунова',
        experience: '1 год в Hoff',
        department: '726 Краснодар Красная Площадь'
    },
    {
        name: 'Анастасия Савина',
        experience: '2 года в Hoff',
        department: '742 Волгоград'
    },
    {
        name: 'Наталья Пенигина',
        experience: '3 года в Hoff',
        department: '737 Тюмень'
    },
    {
        name: 'Марина Кунаева',
        experience: '5 лет в Hoff',
        department: '726 Краснодар Красная Площадь'
    },
    {
        name: 'Анна Подалко',
        experience: '4 месяца в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Ольга Спундина',
        experience: '5 лет в Hoff',
        department: 'Дирекция по розничным продажам'
    },
    {
        name: 'Татьяна Кузьминых',
        experience: '6 месяцев в Hoff',
        department: 'ЕЦО'
    },
    {
        name: 'Гельсем Морозова',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Любовь Ворошилова',
        experience: '2 года в Hoff',
        department: '714 Ростов-на-Дону'
    },
    {
        name: 'Инна Подрез',
        experience: '1 год в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Владислав Караваев',
        experience: '1 год в Hoff',
        department: '726 Краснодар Красная Площадь'
    },
    {
        name: 'Юлия Новаленко',
        experience: '13 лет в Hoff',
        department: 'Дирекция по логистике'
    },
    {
        name: 'Маргарита Чаплинская',
        experience: '3 года в Hoff',
        department: '726 Краснодар Красная Площадь'
    },
    {
        name: 'Оксана Корнеева',
        experience: '1 год в Hoff',
        department: '726 Краснодар Красная Площадь'
    },
    {
        name: 'Ирина Яковлева',
        experience: '5 лет в Hoff',
        department: '736 Санкт-Петербург Приморский проспект'
    },
    {
        name: 'Анна Ткачук',
        experience: '3 года в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Галина Алексеева',
        experience: '12 лет в Hoff',
        department: '714 Ростов-на-Дону'
    },
    {
        name: 'Евгения Коряковцева',
        experience: '4 месяца в Hoff',
        department: 'Дирекция по персоналу'
    },
    {
        name: 'Гульнара Азиева',
        experience: '2 года в Hoff',
        department: '819 Ижевск'
    },
    {
        name: 'Юлия Сорочан',
        experience: '1 год в Hoff',
        department: '803 Краснодар СБС Молл'
    },
    {
        name: 'Дмитрий Кабанов',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Виктория Мирошниченко',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Юлия Исаева',
        experience: '3 года в Hoff',
        department: '810 Европолис'
    },
    {
        name: 'Сергей Кирьянов',
        experience: '1 год в Hoff',
        department: '814 Новосибирск'
    },
    {
        name: 'Юлия Гаранина',
        experience: '5 лет в Hoff',
        department: 'ЕЦО'
    },
    {
        name: 'Екатерина Бороденко',
        experience: '3 года в Hoff',
        department: '732 Белая Дача'
    },
    {
        name: 'Елена Диесперова',
        experience: '7 лет в Hoff',
        department: 'Интернет-Магазин'
    },
    {
        name: 'Олег Троицков',
        experience: '7 месяцев в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Наталья Буровая',
        experience: '5 лет в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Елена Яценко',
        experience: '6 лет в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Елена Зудилина',
        experience: '5 месяцев в Hoff',
        department: 'Коммерческая дирекция'
    },
    {
        name: 'Наталья Титова',
        experience: '1 год в Hoff',
        department: 'Дирекция по сервису'
    },
    {
        name: 'Софья Волощенко',
        experience: '1 год в Hoff',
        department: 'Дирекция по сервису'
    }
]

const list = document.getElementById('participants-list');

window.addEventListener('load', () => {
    participantsList.forEach((el, index) => {
        el.id = index;
        const item = document.createElement('li')
        item.innerHTML = `<b>${el.name}</b><br> ${el.experience}, ${el.department}`
        list.appendChild(item)
    })
})

export {participantsList};