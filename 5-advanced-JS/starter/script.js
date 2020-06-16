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


//Marking where Lecture 68 begins
console.log('Begin Lecture 68 - Closures');


//An inner function always ahs access to variables and 
//parameters of its outer function even after teh outer 
//function has returned.
function retirement (retirementAge) {
    var a = ' years left until retirement.';
    return function (yearBorn) {
        var age = 2020 - yearBorn;
        console.log((retirementAge - age) + a);
    }
}


var retireUS = retirement(67);
retireUS(1996);
retirement(67)(1996);

var retireGermany = retirement(65);
retireGermany(1996);
var retirePluto = retirement(1000);
retirePluto(1996);

//My solution:
function intQuestionClos (job) {
    var quest = '';
    if (job === 'teacher') {
      quest = ' What do you teach, ' ;
    } else if (job === 'designer') {
      quest = 'What is UX design, ' 
    } else {
      quest = 'What do you do, '     
    }
    return function (name) {
        console.log(quest + name + '?');
    }
    
}

var jimQuest = intQuestionClos('teacher');
jimQuest('Jim');

//Jonas Solution:
function intQuestJonas (job) {
    return function (name) {
        if (job === 'designer') {
           console.log(name + ', can you please explain what UX design is?');  
        } else if (job === 'teacher') {
           console.log('What subject do you teach, ' + name + '?');        
        } else {
           console.log('Hello ' + name + ', what do you do?'); 
        }
    }
}

intQuestJonas('designer')('Thomas');





//Marking where Lecture 69 begins
console.log('Begin Lecture 69 - Bind, Call and Apply');

var connor = {
  name: 'Connor' ,
  age: 23,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
      if (style === 'formal') {
          console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
      } else if (style === 'friendly') {
          console.log('Hey!  What\'s up?  I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + 'years old. Have a nice ' + timeOfDay + '.');       
      }
  }
    
};

connor.presentation('formal', 'Morning');
connor.presentation('friendly', 'Morning');


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

//---------------CALL---------------
//Using call to allow the emily object to borrow the presentation
//method from connor.  The call method allows you to set the this 
//variable in the first argument.
connor.presentation.call(emily, 'formal', 'Evening');

//---------------APPLY---------------
//Will not work because our presentation function is not expecting an array
//Apply method allows objects to borrow methods while passing through arrays
//connor.presentation.apply(emily, ['friendly', 'Afternoon']);

//---------------BIND---------------
//Bind generates a copy of the function rather than immediately invoke it

//This will give access to the method that will have the context of
//connor for its this and will have its style parameter/argument set to friendly.
//it will still require the timeOfDay argument to be passed through when invoked.
var connorFriendly = connor.presentation.bind(connor, 'friendly');
connorFriendly('Night');

var emilyFormNight = connor.presentation.bind(emily, 'formal', 'Night');
emilyFormNight();


var years = [1996, 1990, 1901, 1565, 2005];


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

function isAdult(limit, age) {
    return age >= limit;
}

var ages = arrCalc(years, calcAge);

console.log(arrCalc(ages, isAdult.bind(this, 18)));




//Marking where Lecture 70-72 begins
console.log('Begin Lecture 70-72 - Coding Challenge 7');

//My solution:
var score = 0;
var Question = function (question, answers, corrAnswer) {
    this.question = question;
    this.answers = answers;
    this.corrAnswer = corrAnswer;
    this.askQuestion = function () {
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    this.checkAnsewr = function (ans, questions) {

        if(ans == this.corrAnswer){
           console.log('You are correct');
           score++;
           console.log(score);
           var rand = Math.floor(Math.random() * (3));
           questions[rand].askQuestion();
           var answer = prompt('Please enter your answer');
           questions[rand].checkAnsewr(answer, questions);
        } else if (ans == 'exit') {
            console.log('Game over! Your score was: ' + score)
            //exit the game
        }
        else {
            console.log('How could you get it wrong???? :(');
            console.log(score);
            var rand = Math.floor(Math.random() * (3));
            questions[rand].askQuestion();
            var answer = prompt('Please enter your answer');
            questions[rand].checkAnsewr(answer, questions);
        }
    }
};


var question1 = new Question('What color hair does Connor have?', ['Black', 'Blue', 'Brown'], 2);
var question2 = new Question('What color eyes does Connor have?', ['Black', 'Blue', 'Brown'], 2);
var question3 = new Question('Is Marissa Lee the greatest?', ['Yes', 'No'], 0);

var questions = [question1, question2, question3];

console.log(questions);
var rand = Math.floor(Math.random() * questions.length);
questions[rand].askQuestion();
var ans = prompt('Please enter your answer');
questions[rand].checkAnsewr(ans, questions);

//Jonas' Solution
/* Basic solution
(function() {
     function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.askQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct) {
            console.log('Correct!');
        } else {
            console.log('Incorrect');
        }
    }

    var question1 = new Question ('What is the color of Connor\'s hair?',
                                  ['Brown', 'Black', 'Gray'],
                                  0);
    var question2 = new Question ('What is the color of Connor\'s eye?',
                                  ['Gray', 'Black', 'Brown'],
                                  2);
    var question3 = new Question ('Is 2 a number?',
                                  ['no', 'yes'],
                                  1);
    var question4 = new Question ('Is Marissa the greatest?',
                                  ['Hell yeah', 'I mean, I guess', 'Nahh'],
                                  0);

    var questions = [question1, question2, question3, question4];

    var rand = Math.floor(Math.random() * questions.length);

    questions[rand].askQuestion();

    var answer = parseInt(prompt('Please answer the question'));

    questions[rand].checkAnswer(answer);
})();

*/






