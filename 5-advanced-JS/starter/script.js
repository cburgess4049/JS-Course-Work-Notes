// Function constructor

var connor = {
    name: 'Connor',
    yearBorn: 1996,
    job: 'teacher'
};


//constructor for the Person object
var Person = function(name, yearBorn, job) {
    this.name = name;
    this.yearBorn = yearBorn;
    this.job = job;
};

//Inheritance of a method
Person.prototype.calcAge = function(){
    console.log(2020 - this.yearBorn);
};

//Inheritance of a property
//This will set the last name of all obejcts made as an instance of Person
Person.prototype.lastName = 'Smith';

//Creating a John object which is an instance of Person

var john = new Person('John', 1990, 'teacher');
john.calcAge();
console.log(john.lastName);

var jane = new Person('Jane', 1969, 'Designer');
console.log(john.lastName);
var mark = new Person('Mark', 1920, 'Milk man');
console.log(john.lastName);


//TRUE john's prototype and Person's prototype are the same. 
console.log(john.__proto__ === Person.prototype);

//Checking for properties in an object
console.log(john.hasOwnProperty('job'));//TRUE job is a part of John's own object
console.log(john.hasOwnProperty('lastName'));//FALSE it was inherited.  It is not one of John's OWN properties.
console.log(john instanceof Person);//TRUE John is an instance of Person.

var arr = [1,2,3];
console.log(arr instanceof Object);//TRUE arrays are Objects.

var num = 2;
console.log(num instanceof Object);//FALSE num is a primitive not an Object


//Marking where Lecture 63 begins
console.log('Begin Lecture 63');

//Object.create
var personProto = {
    calcAge: function() {
        console.log(2020 - this.yearBorn);
    }
};

var marissa = Object.create(personProto);
marissa.name = 'Marissa';
marissa.yearBorn = 1996;
marissa.job = 'Tech Consultant';


var Connor = Object.create(personProto, {
    name: { value: 'Connor'},
    yearBorn: { value: 1996},
    job: { value: 'Teacher'}
});


//Marking where Lecture 64 begins
console.log('Begin Lecture 64 - Primitives vs Objects');

//Primitives hold the actual data as opposed to holding a reference to data.
var a = 23;
var b = a;

a = 46;
console.log('a: ' + a + '  b: ' +  b);

//Objects are different in that they do not hold the data
//they simply hold a reference that points to the data.
//object1 and object2 both hold the same reference which points to the same data

var object1 = {
    name: 'John',
    age: 26
};
var object2 = object1;

object1.age = 30;

console.log('Object 1 age: ' + object1.age);
console.log('Object 2 age: ' + object2.age);

//Functions
var age = 23;
var obj = {
    name: 'Connor',
    city: 'Naples'
};


//b will contain the same reference as the original obj object
//Therefore, it will change the data the same way obj can/will
//as a will hold a primitive it has a different set of data to the
//originally passed data from the age variable.
function change (a, b) {
    a = 30;
    b.city = 'San Fran'; 
}

change(age, obj);
console.log('Age : ' + age + ' City: ' + obj.city);






//Marking where Lecture 65 begins
console.log('Begin Lecture 65 - Passing Functions as Arguments');

var years = [1990, 1965, 1996, 2005, 2019];

//The below function will call the passed function for every element in the array
//It will return the resulting array once completed
function arrCalc(arr, fn) {
    var arrResult = [];
    for(var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

//The 3 functions below can be used along with arrCalc()
//to create a new array with processed data.
function calcAge(year) {
    return 2020 - year;
}

function isAdult(age) {
    return age >= 21;
}

function maxHeart(age) {
    if(age >= 18 && age <= 81){
       return Math.round(206.9 - (0.67 * age));
    } else{
       return -1;
    }
    
}

var agesArr = arrCalc(years, calcAge);
console.log(agesArr);

var fullAges = arrCalc(agesArr, isAdult); 
console.log(fullAges);


var heartRates = arrCalc(agesArr, maxHeart);
console.log(heartRates);


//Marking where Lecture 66 begins
console.log('Begin Lecture 66 - Functions Returning Functions');


function interviewQuest(job) {
    if (job === 'designer'){
            return function(name) {
                console.log(name + ', can you please explain what UX design is?');
        }
        } else if (job === 'teacher'){
                return function(name)  {
                    console.log('What subject do you teach, ' + name + '?');
                }  
        } else {
            return function(name){
                console.log('Hello ' + name + ', what do you do?');
            }
        }
}

var john = {
    name: 'John',
    job: 'teacher'
}

var johnIntQuest = interviewQuest(john.job);
johnIntQuest(john.name);

var designerQuestion = interviewQuest('designer');
designerQuestion('Janet');


//Marking where Lecture 67 begins
console.log('Begin Lecture 67 - Immediately Invoked Function Expression');


//function game() {
//    var score = Math.random() * 10;
//    
//    console.log(score >= 5);
//}
//
//game();

//By using IIFE you are creating a new scope to keep the data seperate and private
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
)();

//console.log(score);

//TRUE
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}
)(5);



















