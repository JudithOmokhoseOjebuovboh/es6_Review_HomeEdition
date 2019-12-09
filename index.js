//1. How do you store data available for operartions?
var a; //Declare variable named a.
a = 10; //Assign the integer value of 10 to variable a.
b = 11; //Create variable b and assign a value to it. No previous declaration statement.
var c = 12; //Declare variable c and assign it the value of 12 in one statement. 

console.log(a); //Print the content of variable a
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c

//to show the mutability of variables 
a = 13; //Reassign a new value of type number a
console.log(a); //Prints out 13.
b = "Another value which is a string"; //Reassign a new value of type string to a.
console.log(b); //Prints out Another value which is a string.
c = true; //Reassign a new value of type boolean - i.e. true or false.
console.log(c); //Prints out true. 

//illustrating primitive value types
var d;
console.log(d); //This will print out the value undefined
e = null;
console.log(e); //This will print out the null

//illustrating basic arithmetics
f = 10; //Assign variable f the value of 10
g = 20; //Assign variable g the value of 20
h = f + g; //Add value in f and g and put the result in variable c.
console.log(h); //This should print out 30
console.log(g - f); //Subtract g value from f value; displays 10 in console.
console.log(g/f); //Divide g value by f value; displays 2 in console.
console.log(f*g); //Multiply f value by g value; displays 200 in console.
console.log(g%f); //Divide g value by f value and return remainder; displays 0 in console.
console.log(f**2); //f value raised to power 2; displays 100 in console.
f++; //Increment f value.
console.log(f); //Displays 11 in console.
g--; //Increment g value.
console.log(g); //Displays 19 in console.

//string operations
firstName = "Omokhose";
lastName = "Ojebuovboh";
fullName = firstName + " Judith " + lastName; //Concatenate firstName, whitespace and lastName
console.log(fullName); //This should output the full name Omokhose Ojebuovboh. 

//comparison operators
a = 10;
a < 11; //Returns true
console.log(a < 11); //Displays true in console
var test = a > 20; //Declares a variable named test and gives it the value of false.
console.log(test); //Displays false in console
a >= 10; //Returns true
a <= 20; //Returns true
a == 10; //Returns true
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10" 

//logical operators
a = 1;
b = 2;
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true. 

//tetianary operators - to conditionally assign a value to a variable
var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult); //This should display the string "No" 

//bitwise operations work on the smallest constituent elements of data, the bits.
console.log(5 << 1); //Equivalent of 5 * 2
console.log(5 << 2); //Equivalent of 5 * 4
console.log(5 << 3); //Equivalent of 5 * 8
console.log(40 >> 1); //Equivalent of 40 / 2
console.log(40 >> 2); //Equivalent of 40 / 4
console.log(40 >> 3); //Equivalent of 40 / 8 

//the typeof operator returns the 
console.log(typeof "Omokhose J Ojebuovbh"); //Returns the value "string"
console.log(typeof false); //Returns the value "boolean"
console.log(typeof (10 + 10)); //Returns the value "number"
console.log(typeof 33); //Returns the value "number" 

//if/else statement examples of coding
var minimumVotingAge = 18;
var age = 17;
if (age < minimumVotingAge){
console.log("Not eligible to vote");
}else{
console.log("Eligible to vote");
}

//no1 switch statement example
var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount){
    case 1:
    console.log("Sunday");
    break;
case 2:
    console.log("Monday");
    break;
case 3:
    console.log("Tuesday");
    break;
case 4:
    console.log("Wednesday");
    break;
case 5:
    console.log("Thursday");
    break;
case 6:
    console.log("Friday");
    break;
case 7:
    console.log("Saturday");
    break;
default:
    console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
} //The switch statement prints out Sunday

var ageRange = "below 13";
switch (ageRange){
case "below 1":
console.log("Infant");
break;
case "below 13":
console.log("Pre-teen");
break;
case "below 20":
console.log("Teenager");
break;
default:
console.log("Adult")
}//This switch statement should print out Pre-teen.

//for loops define a range through which a code runs repeatedly
for (var c = 1; c < 11; c++){
    console.log(c);
}

for (var c = 1; c < 11; c++){
    if(c == 7) break;
    console.log(c);
} //utilising the break feature to interrupt the repeated execution

for (var c = 1; c < 11; c++){
    if(c == 7) continue;
    console.log(c);
} // the continue feature allows the code to skip one set of the repeated execution
//while loops set a code to execute repeatedly based on the outcome of an executed statement
var n = 0;
while(n != 5){
 n = Math.floor((Math.random() * 10));
 console.log(n)
}

var n = 0;
while(n != 5){
n = Math.random(); //generate a random number between 0 and 1 exclusive of 1.
n = n * 10;//multiply the number generated by 10
n = Math.floor(n); //round down
console.log(n); //print the final number
}

//a simple do... while code
var x = 0;
do{
 x+= 1;
 console.log(x)
}while(x < 10)

//a do... while code illustrating its benefit over regular while code
//the readline module is an in-built NodeJs feature that reads input from the user. Readline-sync is downloaded to allow it work inside a loop function
//read up blocking versus non-blocking input/output models
var readlineSync = require('readline-sync'); //make the module just installed available for use in our program
var answer; //declare variable named answer;
do{
    //use question() function to read input and assign the value to answer
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
    console.log('You asked me to '+ answer)
}while(answer != 'exit')

//this code  illustrates the use of the asynchronous in-built readline module which does not accommodate the synchronous do... while loop: 
var readline = require('readline'); //load the readline module into the runtime environment
//Next, create the input/output interface as required by readline module.
var readlineAsync = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Next, declare and define a function named recursiveReadLineAsync
function recursiveReadLineAsync() {
    readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){
        console.log('You asked me to ' + answer)
        if (answer == 'exit') //Condition for terminating further self call
            return readlineAsync.close(); //quit the function if answer == exit
        recursiveReadLineAsync(); //No exit yet. Call self again to ask another question.
    });

};
//Finally, invoke the defined function to start the recursion
recursiveReadLineAsync();

//direct declaration of a function
console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA defined below. Correct!
function addTwoNumbersA(number1, number2){
 return number1 + number2; //Add the two numbers passed when function is called
}
//function expression
var addTwoNumbersB = function(number1, number2){
    return number1 + number2;
}
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50)

//passing arguments to functio by value or by reference
//Define a function that receives a number to be squared
function square(number){
    number = number**2;
    return number;
   }
var number = 20; //Declare variable that holds number to be squared
var numberSquared = square(number); //Pass number (by value) to the square() function
console.log(numberSquared); //The function returns 400
console.log(number); //The value of number variable outside the function remains 20 

//capturing arguments as array within the funtion - the arguments objects
function multiplier(){
    var product = 1;
    for (var x=0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}
console.log(multiplier(10,30));//Prints 300 to the console
console.log(multiplier(10,30,10));//Prints 3000 to the console 

//function scope variables
var accumulatedTotal = 0; //Declare and initialize a global variable.
//Declare function named sum that expects two parameters named number1 and number2.
function sum(number1, number2){
 //The variables named total, number1 and number2 below are function scope variables.
 //They are not visible from outside the function.
 var total = number1 + number2;
 //Update the global variable named accumulatedTotal.
 //Even though not declared within the function, it is visible.
 accumulatedTotal = accumulatedTotal + total;
 return total;
}
console.log(sum(2,3)); //Call sum() function and print to console the total returned.
console.log(sum(10,20)); //Call sum() function and print to console the total returned.
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35 

//array literals - an expression containing other expressions
//Declare a variable named vehicles and assign an array literal that contains three elements
var vehicles = ["car","lorry","trailer"];
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ]
//Declare a variable named basket and assign an empty array literal.
var basket = [ ];
console.log(basket); //Prints out the array literal [ ] 

//Declare a variable named myExpressions and assign an array literal which contains expressions.
var myExpressions = ["car", 2+3, 10, true]; //The second element includes a plus operation
console.log(myExpressions); //Prints out [ 'car', 5, 10, true]

//iilustrating accessing array elements
console.log(myExpressions[0]); //Prints out 'car'
console.log(myExpressions[1]); //Prints out 5
console.log(myExpressions[2]); //Prints out 10
console.log(myExpressions[3]); //Prints out true
myExpressions[3] = false; //Change the expression at position 3.
console.log(myExpressions[3]); //Prints out false
//illustrations of an array in possesion of undefined elements
var myExpressions = ["car", , 10, true]; //The second element (i.e. index position 1), is undefined
console.log(myExpressions[1]); //Prints out undefined

//object literals
var myObject = {
    name: {
        firstName : "Omokhose",
        surname: "Ojebuovboh"
    }, //elements, or properties of an objet literal
    expertise: "Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
} //more properties
//accessing the object properties   
console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject.expertise); //Prints out Software design and development
console.log(myObject['expertise']); //Also prints out Software design and development
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject.isRetired); //Prints out false
console.log(myObject['isRetired']); //Also prints out false
console.log(myObject.favouriteCombination); //Prints out 6
console.log(myObject['favouriteCombination']); //Also prints out 6 

//Accessing nested objects
console.log(myObject.name.firstName); //Prints out Pius.
console.log(myObject['name']['firstName']); //Also prints out Pius. 
//the accesss method can be employed to modify the value of a property
myObject.favouriteCombination = 9 + 9;
console.log(myObject.favouriteCombination); //Prints out 18 
//illustrating the addition of a new object
myObject.newProperty = "another property added"; //Add a new property named newProperty
console.log(myObject); //Prints out the string, another property added 

//illustrating in  and delete operators in code
var phones = {
    make: 'Samsung',
    model: 'S7',
    cost: 500
}
console.log('make' in phones); //Prints out true; in checks for the presence of a property
delete phones.make; //Delete property phones.make
console.log('make' in phones); //Prints out false

//using codes to understand object oriented programming
//an example of a user-created object blueprint 
function Person(firstName, lastName, height, weight){
    
    //Below are properties, using the this operator associates them with any particular object on instantiation
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ 
        return this.firstName + " " + this.lastName}
}

//instantiating an object using the new operator
//new properties and methods can be added dynamically, refer to object literals above
var person1 = new Person("Judith", "Oyebola",1.72, 80);
var person2 = new Person("Mary", "Joseph", 1.7, 70)
console.log (person1.firstName); //Prints out Pius
console.log (person1.getFullName()); //Prints out Pius Onobhayedo
console.log (person2.firstName); //Prints out Mary
console.log (person2.getFullName()); //Prints out Mary Joseph 

console.log (person1.constructor); //JavaScript associates constructor with any object instantiated as a property which points back to the original footprint

//prototype is a code that associates with the blueprint of the code itself and not the instantiated person
console.log(person1.constructor); //every function defined has a constructor which is the Function object plueprint itself
//console.log(Person.prototype); 
Person.prototype.complexion = "honey brown";
//the above code sets the complexion property in Person to honey brown, hence every instance of person will have its complexion value read honey brown except specified otherwise
person1.complexion = "light brown"; //Specify complexion value for object instance, person1.
console.log(person1.complexion); //Prints out light brown.
console.log(person2.complexion); //Prints out the default value for complexion i.e. dark brown. 

//illustrating how to employ the prototype code to add methods and modify to object blueprints
//its not exactly ideal or efficient though
Person.prototype.getComplexion = function ( ){
    return this.complexion
}
Person.prototype.setComplexion = function (complexion){
    this.complexion = complexion;
}
person1.setComplexion('black'); //Use the method just added to blueprint person
console.log(person1.getComplexion( )); //Prints out black. 

//Built-in object blueprints

Math.E; //The static property E holds the value of Euler’s number i.e. 2.718281828459045.
Math.PI; //The static property PI holds the value of Pi i.e. 3.141592653589793.
Math.cos(45); //Method returns the cosine of number passed as argument.
Math.abs(-30); //Method returns the absolute number equivalent of argument.
Math.random( ); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1.
Math.max(10,5,60); //Method returns the maximum number among the arguments passed.
Math.min(10,5,60); //Method returns the minimum number among the arguments passed. 

var today = new Date(); //Get today’s date
//Instantiate new Date passing year, month-index and day in numbers
var birthday = new Date(1980,4,30); //Note that month index is 0-11 for Jan-Dec
//Instantiate new Date passing equivalent datetime string with date same as above
var birthday = new Date('May 30, 1980 19:00:00');
//Instantiate new Date passing date and time using numbers
var birthday = new Date(1980, 4, 30, 19, 0, 0);//Passing year, month-index, day, hour, min, sec as numbers
//Below is a simple function that calculates present age
function calculateAge(birthday){
 var today = new Date();
 var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time
 //Get the equivalent year for difference
 var yearEquivalent = new Date(difference).getFullYear();
 //Subtract 1970 to get age.
 return yearEquivalent - 1970;
}
//Invoke function calculateAge()
var birthday = new Date (1980,12,30);
console.log(calculateAge(birthday)); //Prints out birthday

function sleep(milliseconds) {
    console.log("Going to sleep for " + milliseconds + " milliseconds...")
    var begin = new Date().getTime();
    do{
        nextTime = new Date().getTime();
    }while(nextTime - begin < milliseconds)
    console.log("Sleep over");
}
//Call sleep
sleep(3000); 

var re = new RegExp('xyz'); //'xyz' is the pattern to be matched. 
var re = /xyz/;
var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
//Simply check if pattern is in searchString using test() method.
console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString.
//Find index position using exec() method
console.log(re.exec(searchString)); //Returns an array containing pattern, index and input as shown in comment below
/*[ 'xyz',
 index: 7,
 input: 'Locate xyz pattern in this text. The xyz could be in XYZ location' ]*/
//Find index position using search() method of String object passing the pattern as argument.
console.log(searchString.search(re)); //Returns index position. 

var re = new RegExp('xyz','g'); //'xyz' is the pattern to be matched; global option set. 
var re = /xyz/g; 
console.log(searchString.search(re)); //Returns index position. 

var re = new RegExp('xyz','gi'); //'xyz' is the pattern to be matched; g and i options set.
var re = /xyz/gi; 
console.log(searchString.search(re)); //Returns index position. 

var result;
while((result = re.exec(searchString))!= null){ //loop until no more match
 //display the index found and the string
 console.log("Index position " + result.index + " contains " + result[0]);
}

//JSON means Javascript Object Notation;  It is a syntax for transporting and storing data of varied types. it is a language-independent data-exchange text format
var personJSON1 =' { \
    "firstName":"John", \
    "lastName": "Mikael", \
    "complexion": "brown", \
    "heightInMeters": 1.7,\
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
}' //JSON string example with  properties defined in key-value pairs

var personJSON2 =' { \
    "names":{ \
    "firstName":"Pius", \
    "lastName": "Onobhayedo" \
    }, \
    "complexion": "brown", \
    "heightInMeters": 1.7, \
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
} ' //JSON Strings can be nested

//JSON Object
//Convert JSON string named personJSON1 to object equivalent
var p1Object = JSON.parse(personJSON1);
console.log(p1Object);
//Convert JSON string named personJSON2 to object equivalent
var p2Object = JSON.parse(personJSON2);
console.log(p2Object);

//to convert the new objects back to the JSON String equivalent
var p1JSON = JSON.stringify(p1Object);
var p2JSON = JSON.stringify(p2Object); 

//dot notation approach to accessing object properties
p1Object.complexion; //Returns brown
p1Object.degrees[0]; //Returns BSc
p2Object.names.firstName; //Returns Pius
//Array style approach to accessing object properties
p1Object["complexion"]; //Also returns brown
p1Object["degrees"][0]; //Also returns BSc
p2Object["names"]["firstName"]; //Also returns Pius 

//String objects are instantiated using the new keyword
var x = 'This is a string literal';
var y = new String ('This is a String object'); 
// A difference to keep in mind however is that string literals are immediately evaluated and returned as the string literal form whereas the object is evaluated and returned as a String object
console.log(x); //This will output 'This is a string literal'
console.log(y); //This will output '[String: 'This is a String object']'
console.log(y.toString()); //This will output 'This is a String object' 

var z = x + y;
console.log (z); //This will output 'This is a string literalThis is a String object'. Notice that there is no need to invoke toString() method.

console.log(x.length); //This should print out 24 which is the length of the string 'This is a string literal' 
console.log(x.constructor); //This should output [Function: String] 

//testing useful methods to access and manipulate strings
//concat() concatenate two or more strings
var firstName = 'Pius';
var lastname = 'Onobhayedo';
var fullName = firstName.concat(' ' , lastname); //Concatenate firstName, space and last name
console.log(fullName); //This should output the string 'Pius Onobhayedo'
var fullName = firstName + ' ' + lastname; //This is equivalent to the concat statement above.
console.log(fullName); //This should also output the string 'Pius Onobhayedo' 
//includes checks for the presence of a string within a string
console.log(fullName.includes('Pius')); //Outputs true
//search() looks for a pattern match in a string returns only the first match
var x = 'Let us search this text for pius. If Pius is found, …';
var regex = /pius/gi; //All occurences of Pius independent of case
console.log(x.search(regex)); //This will return only the index of the first occurrence of condition specified in the regular expression i.e. 28 which is the index for 'pius' 
//indexOf, unlike search(), returns all the occurrences, but lacks suport for case insensitive search term
//it searches for a given term starting from the beginning of the search string or from a given index position
var x = 'Let us search this text for pius. If Pius is found, …';
var searchTerm = 'pius';
var matchIndex;
var startIndex = 0; //start from the beginning
while((matchIndex = x.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
 console.log(matchIndex); //Output the index of match
 startIndex = matchIndex + 1; //change search start position to beyond the last match index
}
var regex = /pius/gi; //All occurences of Pius independent of case
var x = 'Let us search this text for pius. If Pius is found, …';
var match;
while((match = regex.exec(x))!= null){ //loop until no more match
 //Below should display the index found and the string. Expected output are:
 //Index position 28 contains pius
 //Index position 37 contains Pius
 console.log("Index position " + match.index + " contains " + match[0]);
}

//replace() searches for a string match and replaces with another specified string
var x = 'Let us search this text for pius. If Pius is found, …';
var regex = /pius/gi; //All occurences of Pius independent of case
var y = x.replace(regex,'John'); //Replaces any match found with 'John'
console.log(y); // This should output the string 'Let us search this text for John. If John is found, …'
console.log(x); // This remains 'Let us search this text for pius. If Pius is found, …' 

//slice() is a method used to ectract an specified part of s string
var x = 'Let us search this text for pius. If Pius is found, …';
var y = x.slice(34); //Counting from the beginning of the string (i.e. 0 index position), this will extract text from position 34 to the end.
console.log(y); //Expected to output the string 'If Pius is found, …'
var y = x.slice(28,32);//Counting from index position 28, extract text up to position 32
console.log(y); // This should output the string 'pius' 

var x = 'Let us search this text for pius. If Pius is found, …';
var y = x.slice(-1); //Extract from the last position.
console.log(y); // Should return the string '...'
var y = x.slice(-16, -12); //Extract from the 16th position from the rear to the 12th position from the rear
console.log(y); //Should output the string 'Pius'
var y = x.slice(-16);// Extract the letters from position 16 from the rear
console.log(y);//This should return 'Pius is found, …'

//array objects can be instantiated with the new keyword
//Create and initialize an array with 5 elements
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
//Use the object's length property to return the number of elements in the array. This should return 5.
console.log(languages.length);
//other methods to employ on arrays include
//forEach() passes a callback function that iterates each elements in the array at runtime - it is a loop
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
//log each element in the forEach loop
languages.forEach(function(element) {
 console.log(element); //This should output each element successively.
});
//Print each element’s position (index+1) concatenated with a dot, a space and element name. Notice here that the use of variable named language to capture element name inside the function passed to the method, instead of the name element. The choice is yours
languages.forEach(function(language, index) {
 var output = index+1 + '. ' + language;
 console.log(output);
});
/*The above should result in the output:
1. Python
2. JavaScript
3. Java
4. C#
5. C++ */

//indexOf() returns the index position of the first occurrence of an element in an array
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
console.log(languages.indexOf('JavaScript')); //This should output 1
//To return all occurrences, loop, indicating start Index each time, as we did for strings
var searchTerm = 'JavaScript';
var matchIndex;
var startIndex = 0; //start from the beginning
while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
 console.log(matchIndex); //Output the index of match
 startIndex = matchIndex + 1; //change search start position to beyond the last match index
}
//The above while loop should output 1 and 5 to the console. 

//push() adds a new element to the end of an array
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
languages.push('PHP');
console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript', 'PHP'] 

//pop() removes an element from the end of the array
languages.pop();
console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the last element, 'PHP'. 

//shift() removes an element from the front of the array
languages.shift();
console.log(languages); //This should print out ['JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the first element, 'Python'. 

//unshift() adds an element to the front of an array
languages.unshift('Python');
console.log(languages); //This should print out ['Python','JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having added 'Python' to the beginning of the array. 

//map() is used to loop through array elements and act on them within the callback functio argument passed to map(), returning the reults in another array
var mynumbers = [10, 20, 30, 40, 50];
var mydoublednumbers = mynumbers.map(function(number){
 return number * 2;
})
console.log(mydoublednumbers); //This should output [20, 40, 60, 80, 100] 

//filter() creates another array of elements filtered from the parent tray via a bollean test
var mynumbers = [1, 2, 3, 4, 5, 6];
var myevennumbers = mynumbers.filter(function(number){
 return number % 2 == 0; //Test if the number is even
})
console.log(myevennumbers); //This should output [2, 4, 6] 

//reduce() returns a single value from an array by accumulating the values of the elements following the criteria specified in the callback function passed
var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
 return accumulatedValue + number; //Accumulate the sum iteratively
})
console.log(reduceOutput); //This should output 55. 

//an initial (accumulated) value can also be passed to the reduce()
var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
 return accumulatedValue + number;
}, 100)
console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array 

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Define the reducer function
var reducer = function(accumulatedValue, number){
 return accumulatedValue + number;
}
//Pass the reducer function to reduce() method
var reduceOutput = mynumbers.reduce(reducer, 100)
console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array 
//reduceRight() also exists

//number objects
a = 10; //Allocate a number literal to variable
b = Number('10'); //The function converts the string '10' to the number equivalent. b = Number(10) should give same result.
c = new Number(10); //Instantiates a new Number object. c = new Number ('10') should give the same result
c.
d = a.valueOf(); //This works but is superfluous. d = a is enough
e = b.valueOf(); //This works but is superfluous. e = b is enough
f = c.valueOf(); //This is necessary for f to hold only the numeric value in c
console.log(a); //This should output 10
console.log(b); //This should output 10
console.log(c); //This should output [Number: 10]
console.log(d); //This should output 10
console.log(e); //This should output 10
console.log(f); //This should output 10 

//Error Object
try{
    console.output('Provoking an error by calling a non-existent function');
   }catch(error){
    console.log (error.message); //Outputs the message 'console.output is not a function'
    console.log (error.name); //Outputs 'TypeError'
}
   
//instantiating a new error type object to create a custom error message
function multiplier(){
    var product = 1;
    if (arguments.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x=0; x < arguments.length; x++){
    product = product * arguments[x];
    }
    return product;
   }
   
 //Call function without arguments. Here error will be caught and message output to console
try{
    console.log(multiplier())
   }catch(error){
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1'
   }
   //Call function with arguments. No error here.
   try{
    console.log(multiplier(2,3)); //This will output 6
   }catch(error){
    console.log(error.message);
   }

   