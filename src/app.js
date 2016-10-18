'use strict'

//args  function    returns
const add = (a, b)       =>      a + b 

const numbers = [1,2,3];

let mapped = numbers.map(number => 2 * number);


const double = number => number * 2;

console.log(double(5))


// Template strings
const team = {
    members: ['James', 'Scott', 'Amar'],
    teamName: 'JARD',
    teamSummary: function(){
        return this.members.map((member) => {
            return  `${member} is on ${this.teamName}`
        })
    }
}

team.teamSummary()


// Array helpers and Arrow functions!

const inventory = [
    {
        title: 'Harry Potter',
        price: 15
    },
    {
        title: 'Eloquent Javascript',
        price: 5
    }
];

const createBookShop = function(inventory){

    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total, book) => total += book.price, 0);
        },
        priceByTitle(title){
            return this.inventory.find(book => book.title == title ).price
        }
    }
};

const bookShop = createBookShop(inventory)

console.log('inventory value', bookShop.inventoryValue())
console.log('the price of Eloquent Javascript is ' + bookShop.priceByTitle('Eloquent Javascript'));


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

var expense = {
    type: 'business',
    amount: '£45'
}

// var type = expense.type;
// var amount = expense.amount;

//ES6 Destructuring


//Variable 'type' == expense.type
const { type,  amount } = expense;

