//playing with modularity
/*var log = function(output){
    document.getElementById("output").innerHTML = output;
   };

export default log;*/
/*
//more examples
var log = function(output){
    document.getElementById("output").innerHTML = output;
};

export var appName = "Chapter 10 Code Illustrations";
export var dummyFunction = function(){
  return "I am a dummy function";
}

export default log;
//These codes in modularity failed. show doctor pius for clarification. 
//could not get any display on live server unless I commented out all but one export

//tagged templates
export var weatherTag = function(string, temperature){
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    var substring0 = string[0];
    var substring1 = string[1];
    var weatherCondition;
    //Let us use the embedded expressions for some logic
    if (temperature > 26){
        weatherCondition = "hot day"
    }else{
        weatherCondition = "cool day"
    }
        return `${substring0}${temperature}${substring1}${weatherCondition}`
}; */

//arrow functions; updated tools.js

/*var log = output => {
    document.getElementById("output").innerHTML = output;
}
export var appName = "Chapter 10 Code Illustrations";
export var dummyFunction = () => {
    return "I am a dummy function";
}
export const weatherTag = (string, temperature) =>{
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    let substring0 = string[0];
    let substring1 = string[1];
    let weatherCondition;
    //Let us use the embedded expressions for some logic
    if (temperature > 26){
    weatherCondition = "hot!"
    }else{
    weatherCondition = "cool!"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}

export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}`
}

export default log; 
//it only resonds to one export function??? Everything before arrow functions in prep 2
*/

const log = output => {
    document.getElementById("output").innerHTML = output;
    }
export const appName = "Chapter 10 Code Illustrations";
export const dummyFunction = () => {
    return "I am a dummy function";
    }
export const weatherTag = (string, temperature) =>{
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.
    //We can capture these two parts as array elements
    let substring0 = string[0];
    let substring1 = string[1];
    let weatherCondition;
    //Let us use the embedded expressions for some logic
    if (temperature > 26){
    weatherCondition = "hot!"
    }else{
    weatherCondition = "cool!"
    }
    return `${substring0}${temperature}${substring1}${weatherCondition}`
}//var versus is let. let is better for lexical block scoping
//default rest parameters???? Refer in study

//illustrating deconstructuring
export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++']
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`
}

export const genericFunctions  = () => { //deliberately misnamed different from the note
    //declare an object literal
    let personalInformation = {
    firstName : 'Pius',
    lastName : 'Onobhayedo',
    gender : 'Male',
    religion : 'Christianity (Catholic)',
    fathersName : 'John',
    mothersName : 'Patricia'
}
//deconstruct into new variables firstName, last name and otherPersonalInfo
let {firstName, lastName, ...otherPersonalInfo} = personalInformation;
return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
}

export const genericFunctions3 = () => { //also changed this deliberately
    //declare an object literal with nested objects
    let biodata = {
        personalInformation : {
            firstName : 'Pius',
            lastName : 'Onobhayedo',
            gender : 'Male',
            religion : 'Christianity (Catholic)',
            fathersName : 'John',
            mothersName : 'Patricia'
        },
        education : {
            highestQualificationObtained : 'PhD',
            institution : 'University of Navarra'
        },
        occupation : 'University Lecturer',
            skills : ['Programming', 'Teaching', 'Innovation','Talent management'],
            interestsAndHobbies : ['Tennis', 'Soccer Leagues', 'Tech Innovation News']
    };
    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation.
    let {personalInformation : {firstName, lastName}, occupation} = biodata;//makes firstName, lastName and occupation directly available as variables within our function.
    //deconstruct personalInformation and then the rest using the spread operator
    let {personalInformation, ...otherBiodata} = biodata;//makes personalInformation object directly available as a variable. The rest (using Spread operator) are made available as part of an object named otherBiodata
    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines as well for us
    return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data are available. For example: <br/><br/>
    Gender: ${personalInformation.gender}<br/>
    Religion: ${personalInformation.religion}<br/>
    Skills: ${otherBiodata.skills}<br/>
    Interests and Hobbies: ${otherBiodata.interestsAndHobbies}<br/>
    Education: Highest qualification obtained is ${biodata.education.highestQualificationObtained} from ${biodata.education.institution}<br/>`;
}
    
export const genericFunctions4 = (a, b=1) => { //at this point you get it, yeah?
    //This function multiplies any two numbers
    //if only one argument is sent as argument when function is called, b will default to 1.
    return (a * b);
}

export const genericFunctions5 = (...numbers) => {
    var product = 1;
    if (numbers.length < 2){
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for(let number of numbers){
        product = product * number;
    }
    return product;
}

export class Person{
    constructor(firstName, lastName, gender, height){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    }
};

//Create a function that will capitalize the first letter of a string.
const toTitleCase = (str) => {
    str.toLowerCase();//first set the whole string to lowercase in case
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase
}
export class PersonB{ //name changed too
    constructor(firstName, lastName, gender, height){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height
    }
    getFirstName(){
        return toTitleCase(this.firstName)
    }
};

export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
    super(firstName, lastName, gender, height);
    this.username = username;
    this.password = password;
    }
}//Illustrating inheritance


//static methods
export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a,b){
        return Math.pow(a,b);
    }
}
    
export default log;    




