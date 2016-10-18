'use strict';

//args  function    returns

var add = function add(a, b) {
    return a + b;
};

var numbers = [1, 2, 3];

var mapped = numbers.map(function (number) {
    return 2 * number;
});

var double = function double(number) {
    return number * 2;
};

console.log(double(5));

// Template strings
var team = {
    members: ['James', 'Scott', 'Amar'],
    teamName: 'JARD',
    teamSummary: function teamSummary() {
        var _this = this;

        return this.members.map(function (member) {
            return member + ' is on ' + _this.teamName;
        });
    }
};

team.teamSummary();

// Array helpers and Arrow functions!

var inventory = [{
    title: 'Harry Potter',
    price: 15
}, {
    title: 'Eloquent Javascript',
    price: 5
}];

var createBookShop = function createBookShop(inventory) {

    return {
        inventory: inventory,
        inventoryValue: function inventoryValue() {
            return this.inventory.reduce(function (total, book) {
                return total += book.price;
            }, 0);
        },
        priceByTitle: function priceByTitle(title) {
            return this.inventory.find(function (book) {
                return book.title == title;
            }).price;
        }
    };
};

var bookShop = createBookShop(inventory);

console.log('inventory value', bookShop.inventoryValue());
console.log('the price of Eloquent Javascript is ' + bookShop.priceByTitle('Eloquent Javascript'));

function makeAjaxRequest(url, method) {
    method = method || 'GET';
    return method;
};

console.log(makeAjaxRequest('http://www.google.co.uk'));

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
};

// var type = expense.type;
// var amount = expense.amount;

//ES6 Destructuring


//Variable 'type' == expense.type
var type = expense.type;
var amount = expense.amount;

console.log(type);