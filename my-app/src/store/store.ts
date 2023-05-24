import { observable, action } from 'mobx';

let stol = require('../img/Стол.webp');
let skamya = require('../img/скамья.webp');
let grabli = require('../img/грабли.webp');
let lopata = require('../img/лопата.webp');
let sekator = require('../img/секатор.webp');
let shezlong = require('../img/шезлонг.webp');
let semM = require('../img/семена морковь.webp');
let semR = require('../img/семена редис.webp');

const Store = observable({
    shopItems: [
        {
            id: 1,
            url: 'skamya-sadovaya-alma',
            title: 'Скамья садовая Alma',
            price: '1 986',
            category: 'Садовая мебель',
            urlCategory: 'sadovaya-mebel',
            description: 'Скамья Alma подойдет для обустройства загородного дома и сада. Послужит местом для отдыха и украсит участок. Изготовлена из стали и текстилена. Подлокотники повышают комфорт использования. Скамья переносная, не требует крепления к основанию. Максимальная нагрузка — 110 кг. Страна производства — Китай.',
            image: skamya
        },
        {
            id: 2,
            url: 'stol-sadovyjn-skladnojn',
            title: 'Стол садовый складной',
            price: '4 350',
            category: 'Садовая мебель',
            urlCategory: 'sadovaya-mebel',
            description: 'Стол садовый складной с цельной ровной столешницей станет практичной деталью оформления зоны отдыха на свежем воздухе. Изготовлен из прочного износостойкого пластика. Фактура поверхности столешницы и боковой кромки имитирует древесину. Размер столешницы — 137х70 см. Форма — прямоугольная. За столом с комфортом разместятся 4 взрослых человека. Высота от пола до верхней плоскости стола — 74 см. Вес изделия — 10 кг.',
            image: stol
        },
        {
            id: 3,
            url: 'shezlong-naterial-fiesta',
            title: 'Шезлонг Naterial Fiesta',
            price: '3 642',
            category: 'Садовая мебель',
            urlCategory: 'sadovaya-mebel',
            description: `Шезлонг Fiesta Naterial можно разместить как в саду, так и, благодаря складной конструкции, взять с собой на пляж. Сиденье выполнено из текстилена бежевого цвета. Размер в разложенном виде: 142 х 60 x 99 см.`,
            image: shezlong
        },
        {
            id: 4,
            url: 'lopata-shtykovaya-geolia',
            title: 'Лопата штыковая Geolia',
            price: '662',
            category: 'Садовый инвентарь',
            urlCategory: 'sadovyy-inventar',
            description: 'Geolia – качественная штыковая лопата с металлическим черенком. Применяется для садовых и огородных работ. Имеет удобную ручку, которая снижает нагрузку на руки при длительном использовании. Выполненный из стали штык обладает большой прочностью и износостойкостью. Благодаря изогнутой форме он легко входит даже в сухую почву.',
            image: lopata
        },
        {
            id: 5,
            url: 'sekator-sadovyjn-geolia',
            title: 'Секатор садовый Geolia',
            price: '880',
            category: 'Садовый инвентарь',
            urlCategory: 'sadovyy-inventar',
            description: 'Секатор универсальный Geolia с силовым приводом — это плоскостный секатор с возможностью двухпозиционного захвата для комфортной подрезки ветвей разной толщины. Силовой привод существенно увеличивает мускульную энергию, передаваемую с ручек, что позволяет легко срезать даже сухие ветви в одно движение. Нагрузка на руку при этом остается минимальной, что делает работу более продуктивной. По своим эксплуатационным характеристикам силовой привод считается более надежным, чем храповый. Производитель гарантирует работоспособность инструмента в течение 10 лет.',
            image: sekator
        },
        {
            id: 6,
            url: 'grabli-pryamye-geolia',
            title: 'Грабли прямые Geolia',
            price: '677',
            category: 'Садовый инвентарь',
            urlCategory: 'sadovyy-inventar',
            description: 'Металлические грабли Geolia — новинка из коллекции садового инвентаря собственной марки Leroy Merlin. Инструмент рекомендовано использовать при обработке почвы, в уборке территорий.',
            image: grabli
        },
        {
            id: 7,
            url: 'semena-redis-zhara-ayelita',
            title: 'Семена Редис Жара Аэлита',
            price: '3',
            category: 'Семена',
            urlCategory: 'semena',
            description: 'Редис «Жара» — ранний сорт, выращиваемый на огородах и в теплицах. Растение дает круглые красные корнеплоды средних размеров. Плотная светлая мякоть имеет приятный неострый вкус. Редиску едят в необработанном виде, добавляют в салаты, холодные супы и другие блюда.',
            image: semR
        },
        {
            id: 8,
            url: 'semena-morkov-«nantskaya-krasnaya»',
            title: 'Семена Морковь «Нантская красная»',
            price: '4',
            category: 'Семена',
            urlCategory: 'semena',
            description: 'Морковь «Нантская красная» — среднеспелый сорт с ярким оттенком корнеплода. Мякоть содержит большое количество сахара и каротина, что положительно сказывается на ее вкусовых характеристиках. Морковь рекомендована для детского питания и производства соков.',
            image: semM
        },
    ],

    sortedShopItems: [{
        id: 1,
        url: '',
        title: '',
        price: '',
        category: '',
        urlCategory: '',
        description: '',
        image: ''
    }],
    
    inputLine: '',

    updateData: action(() => {
        if (localStorage['shop']) {
            console.log(JSON.parse(localStorage['shop']))
            Store.shopItems = JSON.parse(localStorage['shop'])
            Store.sortedShopItems = JSON.parse(localStorage['shop'])
        }
    }),
    
    setInputLine: action((str: string) =>{
        Store.inputLine = str
    }),

    setSortBySearch: action(() => {
        Store.sortedShopItems = JSON.parse(JSON.stringify(Store.shopItems.filter(item => item.title.includes(Store.inputLine.toLocaleLowerCase()))))
    }),

    setSortBySelect: action((selected: string) => {
        if (selected) Store.sortedShopItems = JSON.parse(JSON.stringify(Store.shopItems.filter(item => item.category === selected)))
        else Store.sortedShopItems = JSON.parse(JSON.stringify(Store.shopItems))
    }),

    setSorting: action((method: string) => {
        Store.shopItems.sort((a, b) => Number(a.price.replace(' ', '')) - Number(b.price.replace(' ', '')))
        if (method === 'По возрастанию') Store.sortedShopItems.sort((a, b) => Number(a.price.replace(' ', '')) - Number(b.price.replace(' ', '')))
        else if (method === 'По убыванию') Store.sortedShopItems.sort((a, b) => Number(b.price.replace(' ', '')) - Number(a.price.replace(' ', '')))
    }),

    deleteItem: action((id:number) => {
        Store.shopItems = Store.shopItems.filter((item) =>item.id !== id)
    }),


    cyrToLat: ((str: string) => {
        let result: string = ''
        str = str.toLocaleLowerCase()
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'а') result += 'a'; 
            else if (str[i] === 'б') result += 'b'; else if (str[i] === 'в') result += 'v'; 
            else if (str[i] === 'г') result += 'g'; else if (str[i] === 'д') result += 'd'; 
            else if (str[i] === 'е') result += 'e'; else if (str[i] === 'ё') result += 'e';  else if (str[i] === 'ж') result += 'zh'; 
            else if (str[i] === 'з') result += 'z'; else if (str[i] === 'и') result += 'i';  else if (str[i] === 'й') result += 'jn'; 
            else if (str[i] === 'к') result += 'k'; else if (str[i] === 'л') result += 'l';  else if (str[i] === 'м') result += 'm'; 
            else if (str[i] === 'н') result += 'n'; else if (str[i] === 'о') result += 'o';  else if (str[i] === 'п') result += 'p'; 
            else if (str[i] === 'р') result += 'r'; else if (str[i] === 'с') result += 's';  else if (str[i] === 'т') result += 't'; 
            else if (str[i] === 'у') result += 'u'; else if (str[i] === 'ф') result += 'f';  else if (str[i] === 'х') result += 'h'; 
            else if (str[i] === 'ц') result += 'c'; else if (str[i] === 'ч') result += 'ch';  else if (str[i] === 'ш') result += 'sh'; 
            else if (str[i] === 'щ') result += 'sch'; else if (str[i] === 'ъ') result += '';  else if (str[i] === 'ы') result += 'y'; 
            else if (str[i] === 'ь') result += ''; else if (str[i] === 'э') result += 'ye';  else if (str[i] === 'ю') result += 'yu'; 
            else if (str[i] === 'я') result += 'ya'
            else if (str[i] === ' ') result += '-'
            else result += str[i]
        }
        return result
    })

    
})

export default Store;
