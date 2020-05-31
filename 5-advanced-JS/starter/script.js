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






console.log('Begin Lecture 63');

//Object.create
var personProto = {
    calcAge: function() {
        console.log(2020 - this.yearBorn);
    }
};

var james = Object.create(personProto);
james.name = 'James';
james.yearBorn = 1991;
james.job = 'teacher';


var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearBorn: { value: 1969},
    job: { value: 'designer'}
});




