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







//LECTURE 108 ARROW FUNCTIONS: LEXICAL 'this' KEYWORD
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







//LECTURE 109 DESTRUCTURING
/*

// Destructuring is brekaing down an array or object into individual variables
//ES5 
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

//ES6
const [name6, age6] = ['John', 26];

console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return  [age, 65 - age];
} 
const [connorAge, connorRetire]= calcAgeRetirement(1996);
console.log(connorRetire);
console.log(connorAge);
*/





//LECTURE 110 ARRAYS IN ES6
/*
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(curr) {
    curr.style.backgroundColor = 'dodgerblue';
});

//ES6

var boxesArr6 = Array.from(boxes)
Array.from(boxes).forEach( curr => curr.style.backgroundColor = 'dogerblue');


//ES5
//for(var i = 0; i < boxesArr5.length; i++){
//    if(boxesArr5[i].className === 'box blue'){
//        continue;
//        //break;
//    } else{
//        boxesArr5[i].textContent = 'I changed to blue blue!';
//    }
//}

//ES6
for (const curr of boxesArr6) {
    if(curr.className.includes('blue')){
        continue;
        //break;
    } else{
        curr.textContent = 'I changed to a diferent color!';
    } 
}


//ES5
var ages = [12, 17, 4, 21, 14, 11];

var full = ages.map(function(curr) {
    return curr >= 21;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(curr => curr >= 21));
console.log(ages[ages.findIndex(curr => curr >= 21)]);

*/







//LECTURE 112 Spread operator

/*
function addFourAges (a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30 ,12 ,21);
console.log(sum1);



//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
var sum3 = addFourAges(...ages);
console.log(sum3);



const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');

const boxesNew = document.querySelectorAll('.box');
const all = [h, ...boxesNew];
console.log(all);

Array.from(all).forEach(curr => curr.style.color = 'DarkSlateBlue');
*/







//LECTURE 109 REST PARAMETERS
// Rest parameters allow us to pass an arbitrary number of agruments into a function and use them in that function.
//Rest paramenters are the exact oposite of the Spread operator.
//Rather than spread it out it joins elements into one object

/*
//ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    argsArr.forEach(function(curr) {
        console.log(2020 - curr >= limit);
    });
}
isFullAge5(21, 1990, 2002, 1965);
isFullAge5(21, 1990, 2002, 1965, 2015, 1969);

console.log('');

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(curr => console.log((2020 - curr) >= limit));
}
isFullAge6(21, 1990, 2002, 1965, 2015, 1969);
*/







//LECTURE 113 DEFAULT PARAMETERS

/*
//ES5

//function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//    nationality === undefined ? nationality = 'American' : nationality = nationality;
//    
//    
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//}



function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);
*/







//LECTURE 114 MAPS
// Hash map - Map string keys to arbitrary values
// key value data structure
// in maps you can use anything for the key.  Not just strings.  Can use numbers, strings, or booleans, or even funcitons or objects as keys.

/*
const question = new Map();
question.set('question', 'What basketball team plays in Chicago?');
question.set(1, 'Chicago bruins');
question.set(2, 'Chicago Bulls');
question.set(3, 'Chicago Hawks');
question.set(4, 'Chicago Raptors');
question.set('answer', 2);

question.set(true, 'Congratulations, that is correct!');
question.set(false, 'Sorry, that is the wrong answer!');

//if(question.has(4)) {
//    question.delete(4);
//}

//question.clear();

// Can loop through Map
question.forEach((value, key) => console.log(`This is ${key} and it is set to ${value}`));
console.log(' ');

console.log(question.get('question'));

for (let [key, value] of question.entries()) {
    if(typeof(key) === 'number'){
        console.log(`${key}: ${value}`);
    }
}
//alert(question.get(prompt(question.get('question')) === question.get(question.get('correct'))));

const ans = parseInt(prompt('What is the correct answer?'));
console.log(question.get(ans === question.get('answer')));
*/







//LECTURE 115 CLASSES
//Classes are not hoised!  This is unlike function constructors

/*
//ES5 - Function constructors
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function (){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var jimmy = new Person5('Jimmy', 1996, 'Teacher');
jimmy.calculateAge();



//ES6 - Classes
class Person6 {
    
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
        
    }
    
    static greeting() {
        console.log('Hey There!');
    }
}

var connor = new Person6('Connor', 1996, 'Teacher');
connor.calculateAge();
Person6.greeting();
*/






//LECTURE 115 CLASSES WITH SUBCLASSES

/*
//ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function (){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var michael5 = new Athlete5('Michael', 1985, 'swimmer', 4, 28);
michael5.calculateAge();
michael5.wonMedal();

//ES6

class Person6 {
    
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(`${this.name} is ${age} years old.`);
        
    }
}

var jimmy = new Person6('Jimmy', 1996, 'Teacher');
jimmy.calculateAge();

class Athelete6 extends Person6 {
    
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

var michael6 = new Athelete6('Michael', 1985, 'Swimmer', 4, 28);
michael6.calculateAge();
michael6.wonMedal();
*/






//CODING CHALLENGE 8
// MY SOLUTION

/*
class Park {
    constructor (name, buildYear, numOfTrees, area ){
        this.name = name;
        this.buildYear = buildYear;
        this.numOfTrees = numOfTrees;
        this.area = area;
    }
    
    getDensity() {
        return this.numOfTrees / this.area;
    }
}

class Street {
    constructor (name, buildYear, streetLength, size = 'normal' ){
        this.name = name;
        this.buildYear = buildYear;
        this.streetLength = streetLength;
        this.size = size;
    }
}


console.log('----PARKS REPORT----');

var parks = [];

parks.push(new Park('Green Park', 1924, 985, 1.05));
parks.push(new Park('National Park', 1945, 3469, 3));
parks.push(new Park('Green Park', 1960, 369, .35));

let sumYear = 0;
parks.forEach(curr => sumYear += curr.buildYear);

console.log(`Our ${parks.length} parks have an average of ${sumYear/parks.length} years.`);

parks.forEach(curr => console.log(`${curr.name} has a tree density of ${curr.getDensity()} per square km.`));
parks.forEach(curr => curr.numOfTrees > 1000 ? console.log(`${curr.name} has more than 1000 trees.`) : curr.numOfTrees);


console.log('----STREETS REPORT----');

var streets = [];

streets.push(new Street('Ocean Avenue', 1999, 2.24, 'big'));
streets.push(new Street('Evergreen Ave', 2008, .6345, 'small'));
streets.push(new Street('4th Street', 2015, 1.8));
streets.push(new Street('Sunset Boulevard', 1982, 3.1, 'huge'));

let sumLength = 0;
streets.forEach(curr => sumLength += curr.streetLength);

console.log(`Our ${streets.length} streets have a total of ${sumLength}  km, with an average of ${sumLength/parks.length}`);
streets.forEach(curr => console.log(`${curr.name}, built in ${curr.buildYear}, is a ${curr.size} street.`));

*/





//JONAS' SOLUTION

class TownFeature {
    
    constructor(name, buildyear){
        this.name = name;
        this.buildYear = buildyear;
    }
}

class Park extends TownFeature {
    
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km^2
        this.numTrees = numTrees;
    }
    
    treeDensity(){
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
    
}

class Street extends TownFeature {
    
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1984, 2.9, 3541),
                 new Park('Old Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1,1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr){
    const sum = arr.reduce((prev, current, index) => prev + current, 0);
    
    return [sum, sum/arr.length];
}


function reportParks(p) {
    console.log('----PARKS REPORT----');
    
    //DENSITY
    p.forEach(el => el.treeDensity());
    
    //AVERAGE AGE
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalage, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    //WHICH PARK HAS MORE THAN 1000 TREES
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1,000 trees.`);
}

function reportStreets(s) {
    console.log('----STREETS REPORT----');
    
    //TOTAL AND AVERAGE LENGTHS
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} kms with an average of ${avgLength} kms.`);
    
    //CLASSIFY SIZES
    s.forEach(el => el.classifyStreet());
}


reportParks(allParks);
reportStreets(allStreets);






























