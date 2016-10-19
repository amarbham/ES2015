// args  function    returns
const add = (a, b) => a + b;
const numbers = [1, 2, 3];
const mapped = numbers.map(number => 2 * number);
const double = number => number * 2;

console.log(double(5));
console.log(add);
console.log(mapped);

// Template strings


const team = {
  members: ['James', 'Scott', 'Amar'],
  teamName: 'JARD',
  teamSummary() {
    return this.members.map((member) => {
      return `${member} is on ${this.teamName}`;
    });
  },
};

team.teamSummary();

// Array helpers and Arrow functions!

const inventory = [{
  title: 'Harry Potter',
  price: 15,
}, {
  title: 'Eloquent Javascript',
  price: 5,
}];


const createBookShop = function (inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total += book.price, 0);
    },
    priceByTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    },
  };
};

const bookShop = createBookShop(inventory);

console.log('inventory value', bookShop.inventoryValue());
console.log(`the price of Eloquent Javascript is ${bookShop.priceByTitle('Eloquent Javascript')}`);

// const MathLibrary = {
//     calculateProduct(...rest){
//         console.log('Please use multiply method instead');
//         return this.multiply(...rest)
//     },
//     multiply(a,b){
//         return a * b;
//     }
// }
// MathLibrary.calculateProduct(5, 2)
/** Destructuring
 *  ES5
    var type = expense.type;
    var amount = expense.amount;
**/


const expense = {
  type: 'business',
  amount: '£45',
};


// Variable 'type' == expense.type

const {
  type,
  amount,
} = expense;

const savedFile = {
  extension: '.jpg',
  fileName: 'repost',
  size: 14040,
};

const {
  extension,
  fileName,
  size,
} = savedFile;

function printSummary({
  file,
  mb,
  ext,
}) {
  return `${ext}.${file} is of size ${mb}`;
}

printSummary(savedFile);

const companies = [
  'Google',
  'Facebook',
  'Uber',
];


const {
  length,
} = companies;

const [company, ...rest] = companies;

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];


const convertDataStructure = points.map(([x, y]) => {
  return {
    x,
    y,
  };
});

const convertDataStructureInES5 = points.map(point => {
  return {
    x: point[0],
    y: point[1],
  };
});

const profile = {
  title: 'Engineer',
  department: 'Engineering',
};


function isEngineer({
  title,
  department,
}) {
  return title === 'Engineer' && department === 'Engineering';
}


const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

const classesAsObject = classes.map((item => {
  return {
    subject: item[0],
    time: item[1],
    teacher: item[2],
  };
}));