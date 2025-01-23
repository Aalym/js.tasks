//ДЗ_16


// let a = [
//         {
//             "name": "Elon Musk",
//             "field": "SpaceX, Tesla",
//             "nationality": "South African",
//             "netWorth": 250,
//             "age": 52,
//             "patents": 350,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["SpaceX", "Tesla", "Neuralink"]
//         },
//         {
//             "name": "Jeff Bezos",
//             "field": "Amazon",
//             "nationality": "American",
//             "netWorth": 180,
//             "age": 59,
//             "patents": 50,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": false,
//             "projects": ["Amazon", "Blue Origin"]
//         },
//         {
//             "name": "Tim Cook",
//             "field": "Apple",
//             "nationality": "American",
//             "netWorth": 1.5,
//             "age": 63,
//             "patents": 10,
//             "isFounder": false,
//             "isInvestor": false,
//             "isEngineer": true,
//             "projects": ["Apple"]
//         },
//         {
//             "name": "Sundar Pichai",
//             "field": "Google",
//             "nationality": "Indian",
//             "netWorth": 1.3,
//             "age": 52,
//             "patents": 20,
//             "isFounder": false,
//             "isInvestor": false,
//             "isEngineer": true,
//             "projects": ["Google", "Android"]
//         },
//         {
//             "name": "Satya Nadella",
//             "field": "Microsoft",
//             "nationality": "Indian-American",
//             "netWorth": 0.75,
//             "age": 56,
//             "patents": 15,
//             "isFounder": false,
//             "isInvestor": false,
//             "isEngineer": true,
//             "projects": ["Microsoft"]
//         },
//         {
//             "name": "Mark Zuckerberg",
//             "field": "Meta",
//             "nationality": "American",
//             "netWorth": 110,
//             "age": 39,
//             "patents": 40,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Facebook", "Instagram", "WhatsApp"]
//         },
//         {
//             "name": "Bill Gates",
//             "field": "Microsoft",
//             "nationality": "American",
//             "netWorth": 120,
//             "age": 68,
//             "patents": 100,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Microsoft", "Bill & Melinda Gates Foundation"]
//         },
//         {
//             "name": "Larry Page",
//             "field": "Google",
//             "nationality": "American",
//             "netWorth": 100,
//             "age": 50,
//             "patents": 200,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Google", "Alphabet"]
//         },
//         {
//             "name": "Sergey Brin",
//             "field": "Google",
//             "nationality": "American",
//             "netWorth": 95,
//             "age": 50,
//             "patents": 190,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Google", "Alphabet"]
//         },
//         {
//             "name": "Jack Dorsey",
//             "field": "Twitter, Block",
//             "nationality": "American",
//             "netWorth": 4,
//             "age": 46,
//             "patents": 25,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Twitter", "Block"]
//         },
//         {
//             "name": "Sheryl Sandberg",
//             "field": "Meta",
//             "nationality": "American",
//             "netWorth": 1.8,
//             "age": 54,
//             "patents": 0,
//             "isFounder": false,
//             "isInvestor": true,
//             "isEngineer": false,
//             "projects": ["Facebook"]
//         },
//         {
//             "name": "Reed Hastings",
//             "field": "Netflix",
//             "nationality": "American",
//             "netWorth": 5,
//             "age": 63,
//             "patents": 15,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Netflix"]
//         },
//         {
//             "name": "Susan Wojcicki",
//             "field": "YouTube",
//             "nationality": "American",
//             "netWorth": 0.9,
//             "age": 55,
//             "patents": 5,
//             "isFounder": false,
//             "isInvestor": false,
//             "isEngineer": false,
//             "projects": ["YouTube"]
//         },
//         {
//             "name": "Evan Spiegel",
//             "field": "Snapchat",
//             "nationality": "American",
//             "netWorth": 2.6,
//             "age": 33,
//             "patents": 35,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": false,
//             "projects": ["Snapchat"]
//         },
//         {
//             "name": "Travis Kalanick",
//             "field": "Uber",
//             "nationality": "American",
//             "netWorth": 2.5,
//             "age": 48,
//             "patents": 5,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": false,
//             "projects": ["Uber"]
//         },
//         {
//             "name": "Ginni Rometty",
//             "field": "IBM",
//             "nationality": "American",
//             "netWorth": 0.05,
//             "age": 66,
//             "patents": 2,
//             "isFounder": false,
//             "isInvestor": false,
//             "isEngineer": false,
//             "projects": ["IBM"]
//         },
//         {
//             "name": "Daniel Ek",
//             "field": "Spotify",
//             "nationality": "Swedish",
//             "netWorth": 5,
//             "age": 40,
//             "patents": 20,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": false,
//             "projects": ["Spotify"]
//         },
//         {
//             "name": "Drew Houston",
//             "field": "Dropbox",
//             "nationality": "American",
//             "netWorth": 2.4,
//             "age": 40,
//             "patents": 10,
//             "isFounder": true,
//             "isInvestor": true,
//             "isEngineer": true,
//             "projects": ["Dropbox"]
//         },
//         {
//             "name": "Marissa Mayer",
//             "field": "Yahoo",
//             "nationality": "American",
//             "netWorth": 0.6,
//             "age": 48,
//             "patents": 15,
//             "isFounder": false,
//             "isInvestor": false,
//             "isEngineer": true,
//             "projects": ["Yahoo"]
//         },
//         {
//             "name": "Linus Torvalds",
//             "field": "Linux",
//             "nationality": "Finnish-American",
//             "netWorth": 0.15,
//             "age": 54,
//             "patents": 5,
//             "isFounder": true,
//             "isInvestor": false,
//             "isEngineer": true,
//             "projects": ["Linux", "Git"]
//         }
//         ]

// console.log(a);     




//class-work

// let a = 5

// if(a == 5) {
// console.log("a равняется 5");
// } else if (a > 5){
// console.log("a больше 5");
// }else{
// console.log("a меньше 5");
// }


// let tempDeg = 40

// if(tempDeg == 24) {
// console.log("показатели в норме");
// } else if (tempDeg > 24){
// console.log("необходимо найти источник питьевой воды!");
// }else{
// console.log("необходимо найти источник тепла!");
// }


// let a = -30 

// if(a > -Infinity && a <= -20) {
// console.log("a от минус бесконечности до -20");
// } else if (a > -20 && a <= 0){
// console.log("a меньше либо равно 0 и больше -20");
// }


// let i = 0;
// while (i < 10) { 
// alert( i );
// i++;
// }






//ДЗ_17

// let KatesFavouriteColor = 'розовый';

// if (KatesFavouriteColor == 'розовый' || KatesFavouriteColor == 'белый') {
//     console.log("Это любимый цвет Кэт");
// } else if (KatesFavouriteColor == 'черный' || KatesFavouriteColor == 'фиолетовый') {
//     console.log("Это НЕ любимый цвет Кэт");
// } else {
//     console.log("Это нейтральный цвет для Кэт");
// }

// let SamsFavouriteColor = 'синий';

// if (SamsFavouriteColor == 'серый' || SamsFavouriteColor == 'синий') {
//     console.log("Это любимый цвет Сэма");
// } else if (SamsFavouriteColor == 'оранжевый' || SamsFavouriteColor == 'красный') {
//     console.log("Это НЕ любимый цвет Сэма");
// } else {
//     console.log("Это нейтральный цвет для Сэма");
// }

// let BobsFavouriteColor = 'красный';

// if (BobsFavouriteColor == 'красный' || BobsFavouriteColor == 'синий') {
//     console.log("Это любимый цвет Боба");
// } else if (BobsFavouriteColor == 'зеленый' || BobsFavouriteColor == 'черный') {
//     console.log("Это НЕ любимый цвет Боба");
// } else {
//     console.log("Это нейтральный цвет для Боба");
// }

// let StevesFavouriteColor = 'фиолетовый';

// if (StevesFavouriteColor == 'синий' || StevesFavouriteColor == 'черный' || StevesFavouriteColor == 'фиолетовый') {
//     console.log("Это любимый цвет Стива");
// } else if (StevesFavouriteColor == 'серый' || StevesFavouriteColor == 'оранжевый') {
//     console.log("Это НЕ любимый цвет Стива");
// } else {
//     console.log("Это нейтральный цвет для Стива");
// }

// let JohnsFavouriteColor = 'желтый';

// if (JohnsFavouriteColor == 'желтый' || JohnsFavouriteColor == 'синий') {
//     console.log("Это любимый цвет Джона");
// } else if (JohnsFavouriteColor == 'оранжевый') {
//     console.log("Это НЕ любимый цвет Джона");
// } else {
//     console.log("Это нейтральный цвет для Джона");
// }



//class-work

// let i = 0 

// while (i < 10) {
//     i++
//     console.log(i);
    
// }

// const names = [-
//     'Adylhan',
//     'Azamat',
//     'Bekzhan',

// ]

// for (const letter of names) {
//     console.log(letter);
// }


// let i = 0 

// while (i < 50) {
//     i++
//     if (i % 2 == 0){
//         console.log();
//     } else {
//         console.log(i);
//     }
// }







//ДЗ_18

//задание первое
// let i = 0 

// while (i < 10) {
//     i++
//     console.log(i);
    
// }


//задание второе

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);


//задание третье

// let i = 0 

// while (i < 20) {
//     i++
//     if (i % 2 != 0){
//         console.log();
//     } else {
//         console.log(i);
//     }
// }



//задание четвертое

// const numbers = [4, 5, 8, 7, 6];

// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log(doubledNumbers);




//задание пятое 

const n = parseInt(prompt("Введите количество чисел в последовательности Фибоначчи:"));

if (isNaN(n) || n <= 0) {
    console.log("Введите положительное число.");
} else {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

