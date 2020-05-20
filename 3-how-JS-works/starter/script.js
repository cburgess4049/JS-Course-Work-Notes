///////////////////////////////////////
// Lecture: Hoisting

calcAge(1996);


function calcAge(year){
    console.log(2020 - year);
}
var hello = 'hello';
calcAge(1996);

//Because the retirement function was declared as a variable it is hoisted as an undefined variable.  The call (commented out) is 
//not executable.
//in short, if the function is declared in this fashion order of operations matters greatly!  It must be used 
//after it is declared in the program.

//retirement(1990);

var retirement = function(year){
    console.log(65 - (2020 - year));
}


retirement(1990);

console.log(age);//undefined
var age = 23;// Global execution context (window)
console.log(age);//23


function foo(){
    var age = 65; //foo's execution context
    console.log(age);
}

foo();//will print age as 65 because it has it's own local versino of age
console.log(age);//this will print 23 because it is using the global context version of age



console.log('END HOISTING SECTION');
///////////////////////////////////////
// Lecture: Scoping
/*
Because second() is declared within first(), second() has access to the variable b.  It also has access to global variables, in this example a.  And of course all variables declared within second().  Therefore, it can use all variables, a b and c.  First() cannot utilize variables declared in second() because it is not within scope.  Scope words downward not upwards.
*/

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain
/*
This program will NOT run successfully. This is because the fucntion third is not defined within the scope of the fisrt() function.  Therefore, while it does have variables a(global) and d(local to third()) within scope.  variables b and c are both out of scope having been declared in the frist() and second() functions respectively. 
*/
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);//Will print out the Window object!  Window object is default (Basically the ultimate global object)

calculateAge(1996);
function calculateAge(year){
    console.log(2020 - year);
    console.log(this);//function is within the context of the Window Object so it will print the Window Object.
}

var john = {
    name: 'John',
    dateOfBirth: 1996,
    calculateAge: function (){
        console.log(2020 - this.dateOfBirth);
        console.log(this);//this will print out the John object because it is being called within a method found inside the john object
        
//        function innerFunction(){//This inner function is just to show what this will print for a function within a function within an object
//            console.log(this);//This will print the Window object because this is a standard function.  Not a method within an object.
//        }
//        innerFunction();
    }
};
john.calculateAge();


var mike = {
    name: 'Mike',
    dateOfBirth: 1901
};

mike.calculateAge = john.calculateAge;
//No parenthesis needed becuase we are treating the function as a variable.  Thus easily passing the method from one object to another.

mike.calculateAge();