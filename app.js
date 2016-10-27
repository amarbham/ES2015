// args  function    returns
const add = (a, b) => a + b;
const numbers = [1, 2, 3];
const mapped = numbers.map(number => 2 * number);
const double = number => number * 2;

console.log(double(5));
console.log(add);
console.log(mapped);


const team = {
  members: ['James', 'Scott', 'Amar'],
  teamName: 'JARD',
  teamSummary() {
    return this.members.map(member => `${member} is on ${this.teamName}`);
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


const createBookShop = function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((curr, book) => {
        let total = curr;
        total += book.price;
        return total;
      }, 0);
    },
    priceByTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    },
  };
};

const bookShop = createBookShop(inventory);

console.log('inventory value', bookShop.inventoryValue());
console.log(`the price of Eloquent Javascript is ${bookShop.priceByTitle('Eloquent Javascript')}`);


const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};
MathLibrary.calculateProduct(5, 2);


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

/**
 * Default function args
 * **/

const savedFile = {
  extension: 'jpg',
  fileName: 'repost',
  size: 14040,
};

const savedFile2 = {
  extension: 'doc',
  size: 1650,
};

function printSummary({
  fileName = 'default',
  extension,
  size,
}) {
  return `${fileName}.${extension} is of size ${size}`;
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

const convertDataStructureInES5 = points.map((point) => {
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

const classesAsObject = classes.map((item) => {
  return {
    subject: item[0],
    time: item[1],
    teacher: item[2],
  };
});

/** function Car(options) {
  this.title = options.title;
}

function Toyota(options) {
  Car.call(this, options);
  this.colour = options.colour;
}

Car.prototype.drive = function drive() {
  return 'vroom';
};


Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

const car = new Car({ title: 'work' });
const toyota = new Toyota({ colour: 'red', title: 'Daily driver' });

Toyota.prototype.honk = function honk() {
  return 'honk';
};
**/

class Car {
  constructor({
    title,
  }) {
    this.title = title;
  }
  drive() {
    this.drive = 'vroom';
    return this.drive;
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.colour = options.colour;
  }
  honk() {
    this.honk = 'beep';
    return this.honk;
  }
}

const toyota = new Toyota({
  colour: 'red',
  title: 'daily driver',
});


class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}

class Snake extends Monster {
  bite(target) {
    const snake = target;
    snake.health -= 10;
    return snake;
  }
}

const snake = new Snake({
  name: 'snake',
});
const snakey = new Snake({
  name: 'snakey',
});


// function myHandler(responseText){
//     console.log(responseText)
// };

// function foo(cb){
//   var httpRequest = new XMLHttpRequest();
//     httpRequest.onload = function(){ // when the request is loaded
//        cb(httpRequest.responseText);// we're calling our method
//     };
//     httpRequest.open('GET', "https://jsonplaceholder.typicode.com/users/");
//     httpRequest.send();
// };

// foo(myHandler);

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  });
}

let promiseValue;

delay().then((response) => {
  promiseValue = response;
});


const url = 'https://jsonplaceholder.typicode.com/users/';

function get(url) {
  return fetch(url)
    .then(response => response.json());
}

const users = get(url)
  .then(users => users);


let firstNames;
users.then((user) => {
  firstNames = user.map(user => user.name.split(' ')[0]);
});


function getByUsername(x) {
  return users
    .then((user) => {
      return user.find((user) => {
        return user.username === x;
      });
    });
}
let kamren = getByUsername('Kamren').then((user) => {
  kamren = user;
  return kamren;
});
