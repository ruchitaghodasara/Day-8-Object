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
