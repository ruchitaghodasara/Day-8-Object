const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki',
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const keyVal = Object.keys(person);
console.log(keyVal);
const keyValues = Object.values(person);
console.log(keyValues);
const entries = Object.entries(copyPerson);
console.log(entries);
console.log(copyPerson.hasOwnProperty('firstName'));

console.log(copyPerson.hasOwnProperty('name'));

for (let key of Object.keys(person)) {
  console.log(key);
}

for (let val of Object.values(person)) {
  console.log(val);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let val of Object.values(salaries)) {
    sum += val;
  }

  return sum;
}

console.log(sumSalaries(salaries));

function sumReduce(salaries) {
  return Object.values(salaries).reduce((accum, curr) => accum + curr, 0);
}

console.log(sumReduce(salaries));

for (let [key, value] of Object.entries(salaries)) {
  console.log(key, value);
}

const dog = {
  name: 'Whisky',
  legs: 5,
  color: 'black',
  bark: function () {
    return 'woof woof';
  },
};

console.log(dog, dog.bark());

for (let value of Object.values(dog)) {
  console.log(value);
}

console.log(dog);

dog.breed = 'Lbrador';

dog.getDogInfo = function () {};

console.log(dog);
let users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let skillLen = [];

// for (const key in users) {
//   if (users.hasOwnProperty(key)) {
//     const element = users[key];
//     console.log(key + ': ', element, element.skills);
//   }
// }
let maxLen = 0;
let currLen = 0;
let userName = '';
let count = 0;
let currPoint = 0;
let countUser = 0;
Object.keys(users).forEach((key, index) => {
  currLen = users[key].skills.length;

  if (currLen > maxLen) {
    maxLen = currLen;
    userName = key;
  }
  if (users[key].isLoggedIn === true) {
    count++;
  }

  currPoint = users[key].points;

  if (currPoint >= 50) {
    countUser++;
  }
});
console.log(userName, count, countUser);

const personAccount = {
  firstName: 'Ruchita',
  lastName: 'Rajpara',
  incomes: 1200000,
  expenses: {
    totalIncome: 1200000,
    totalExpense: 500000,
    accountInfo: 'HDFC',
    addIncome: 9000,
  },
};
