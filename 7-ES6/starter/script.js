//LECTURE 104 LET AND CONST VS VAR

/* EXAMPLE 1
//ES5 
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);



//ES6
const name6 = 'Jane Smith';
let age6 = 23;

//cannot change a constant.  They are immutable
//name6 = 'Jane Miller';
console.log(name6);

*/


/* EXAMPLE 2
//ES5
// Var's scope is function based.  Therefore it can be seen in the entire function's scope
function driversLiscense5(passedTest) {
    if(passedTest){
        // All variables are hoisted and set to undefined
        console.log(firstName); 
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car. ' );
}

driversLiscense5(true);


// ES6
// let and Const are block based.  Therefore, they cannot be seen outside of the if statement block that they are declared in.
// let can be used if declared outside the if statement
//const cannot be used in the if statement if it is declared outside of it.
function driversLiscense6(passedTest) {
    //temporal debt zone
    // lets are still hoisted but they cannot be accessed until they are defined
    console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest){
        firstName = 'John';
    }
        console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car. ' );

}

driversLiscense6(true);

*/



/* EXAMPLE 3
//In this example let allows the values to be kept seperate as they are in different blocks.
let i = 23;

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

//In this example j ends up being 5 because both j's are in the same scope.  So after declaring j as 23 it will be overwritten to 0.
var j = 23;

for(var j = 0; j < 5; j++){
    console.log(j);
}

console.log(j);
*/






//LECTURE 105 BLOCKS AND IIFEs

//Blocks are not restricted to functions, if statements, for loops, etc.  you can simply use curly brackets {}
//Therefore to restrict access you do not necesarily have to create IIFEs.  You can simply use brackets


/* EXAMPLE 1

//ES6
{
    //this is a block
    
    const a = 1;
    let b = 2;
    var c = 3;
    console.log(a + b);
}
console.log(3);
//console.log(a + b);

//ES5 (IIFE)
(function() {
    var c = 3;
})();
//console.log(c);

*/




//LECTURE 106 STRINGS


/* EXAMPLE 1 

let firstName = 'John';
let lastName = 'Smith';
const yearofBirth = 1990;

function calcAge(year) {
    console.log(firstName);
    return 2020 - year;
}


//ES5
console.log('This is ' + firstName + ' ' + lastName + '. They were born in ' + yearofBirth + '.  Today, he is ' + calcAge(yearofBirth) + ' years old.');


//ES6 template liberals
console.log(`This is ${firstName} ${lastName}. They were born in ${yearofBirth}. Today, he is ${calcAge(yearofBirth)} years old`);


// New methods!!
const n = `${firstName} ${lastName}`;
console.log(n);

console.log(n.startsWith('J'));
console.log(n.endsWith('4'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));


*/



//LECTURE 107 ARROW FUNCTIONS
// Arrow funcitons are quicker to write

/*
const years = [1990, 1965, 1982, 1937];

//ES5

var ages5 = years.map(function(curr){
    return 2020- curr;
});
console.log(ages5);



//ES6 ARROW FUNCTION EXAMPE
// one argument and one line of code
let ages6 = years.map(year => 2020 - year);

console.log(ages6);

//Two arguments and one line of code
ages6 = years.map((el, index) => `Person ${index + 1} is ${2020-el} years old.`);
console.log(ages6);

//two arguments and multiple lines of code
//If there are more lines of code the return function is no longer implicit and must be written out
age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Person ${index + 1} is ${2020-el} years old.`;
});
console.log(age6);
*/







//LECTURE 107 ARROW FUNCTIONS: LEXICAL 'this' KEYWORD
// Arrow functions do not have their own this keyword
//They use the this keyword of the function they are written in

/* 
//ES5

// The this.position and this.color will return undefined because it points withhin the function 
// That is because this refers to the item returned by the querySelector, not the original clickMe function
// A work around is to declare a variable that contains the this of the original function and use it in the event listener.
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box #' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function()  {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box #' + this.position + ' and it is ' + this.color;
            alert(str); 
        });
    }
}
//box6.clickMe();


// Example of this falling out of proper score again
//// Rather than being scoped to the object using an arrow function in the property definition gives it the Window (or global) scope.
//const box66 = {
//    color: 'green',
//    position: 1,
//    clickMe: () => {
//        document.querySelector('.green').addEventListener('click', () => {
//            var str = 'This is box #' + this.position + ' and it is ' + this.color;
//            alert(str); 
//        });
//    }
//}
//box66.clickMe();



// Function constructor for a Person object
function Person(name) {
    this.name = name;
}

//ES5
// By using the bind function a new function will be returned to the map with a manually defined this of the current Person object.
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el + '.';
        
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends);


//ES6

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}.`);
}
var friends = ['Jim', 'Connor', 'Jimbo']
new Person('Scott').myFriends5(friends);

*/





















