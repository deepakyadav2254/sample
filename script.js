'use strict';

/*function printName() {
  console.log('My name is Soyam.');
}

printName();

const printNamArrow = () =>
  console.log('My name is Soyam using arrow function.');

printNamArrow();

const myAge = function (birthYear) {
  return 2021 - birthYear;
};

console.log(myAge(1993));

const yourAge = (birthYear) => 2030 - birthYear;

const age = yourAge(2000);

console.log(age); */

/*const whoIsGreater = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

console.log(whoIsGreater(10, 6));

const whoIsGreaterUsingArrow = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

console.log(whoIsGreaterUsingArrow(1, 7)); */

/*const currentAge = 10;
const myName = 'Soyam';

if (currentAge >= 18) {
  console.log(`${myName} can drive.`);
} else {
  const yearsToDrive = 18 - currentAge;
  console.log(`${myName} has ${yearsToDrive} years left to drive.`);
}

currentAge >= 18
  ? console.log(`${myName} can drive.`)
  : console.log(`${myName} has ${yearsToDrive} years left to drive.`); */

/*let pracAge = 10;
pracAge >= 18 ? 'beer' : 'water';

console.log(`I like to drink ${pracAge >= 18 ? 'beer' : 'water'}.`); */

// Coding challenge 1, test 1

/*const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnweight = 92;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnweight / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

const markHigherBmi = markBMI > johnBMI;
console.log(markHigherBmi);

//Coding challenge 2

if (markHigherBmi) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`);
}
*/

//Function calling another function.

/*function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, orange) {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);
  const juice = `Give me a juice of ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 6));

const newProcessor = (spinach, celery) => {
  const spinachPieces = cutPieces(spinach);
  const celeryPieces = cutPieces(celery);
  const smoothie = `In the evening, I like to drink green smoothie with ${spinachPieces} units of spinach and ${celeryPieces} units of celery. `;
  return smoothie;
};

console.log(newProcessor(6, 2)); */

//Coding challenge- functions
/*const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
  } else {
    console.log(`No one wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas); */

//Arrays

/*const soyam = ['Soyam', 'Gupta', 1993, 2021 - 1993, 'Woman'];

console.log(soyam);

console.log(soyam[0]);
console.log(soyam.length);
console.log(soyam[soyam.length - 1]);

const calcAge = (years) => {
  return 2021 - years;
};

const year = [1990, 2000, 2010, 2020, 1930, 1980];

console.log(calcAge(year[0]));
console.log(calcAge(year[2]));
console.log(calcAge(year[4]));
console.log(calcAge(year[year.length - 1]));

const age = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[3]),
  calcAge(year[4]),
];

console.log(age); */

/*const year = [1990, 2000, 2010, 2020, 1930, 1980];
const empty = [];

console.log(year.push('Soyam'));
console.log(year);

console.log(year.unshift('Love'));
console.log(year);

console.log(year.pop());
console.log(empty.pop());

console.log(year.shift());

console.log(year);

console.log(year.indexOf('soyam'));
console.log(year.indexOf(2020));

console.log(year.includes());
console.log(year.includes(1990));

if (year.includes('Soyam')) {
  console.log(`Soyam is in the array.`);
} else {
  year.unshift('Soyam');
  console.log(`I have added Soyam in the array.`);
}
console.log(year[0]); */

// coding challenge- arrays

const calcTip = (bill) => {
  if (bill > 50 && bill < 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
console.log('hello');
