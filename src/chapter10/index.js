//non module illustration
/*var log = function(output){
    document.getElementById("output").innerHTML = output;
   };
   //For illustration, call the function above to log an output
   log("Welcome to Chapter 10!");*/

//import log from './tools'
//For illustration, call the imported log function
//log("Welcome to Chapter 10! We are now having fun with modularity"); 

//more examples
//import log, {appName, dummyFunction} from './tools';
//log("Welcome to Chapter 10! The application name is \'" + appName + "\'. There is a function that returns \'" + dummyFunction() + "\'.");
//These codes in modularity failed. show doctor pius for clarification. 
//could not get any display on live server unless I commented out all but one export

//template literals
//import log, {appName, dummyFunction, weatherTag} from './tools';
//log(`Welcome to Chapter 10! The application name is "${appName}".
//There is a function that returns "${dummyFunction()}".`)
//tagged templates 
//log(weatherTag`The temperature is ${27} degrees centigrade. The day is `);

//import log, {genericFunction} from './tools';
//log(genericFunction());

//import log, {genericFunctions5} from './tools';
//log(genericFunctions()); 
//log(genericFunctions3()); 
//log(genericFunctions5(4,3));
//log(genericFunctions4(6));

//class instantation
/*import log, {Person} from './tools';
let person1 = new Person("Pius", "Onobhayedo", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);

import log, {PersonB} from './tools';
let person1 = new PersonB("Pius", "Onobhayedo", "Male",1.7);
let person2 = new PersonB("Mary", "Joseph", "Female", undefined);
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter
log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.*/

//import log, {CustomMath} from './tools';
//log(CustomMath.sqrt(100));

import log, {User} from './tools';
/*let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)

new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Timeout is over"); //send out a success feedback with data using resolve
        }, 1000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
        log(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
        log(`${error}`);
    });
//Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)*/

new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a reject feedback
        }, 5000)
    }).then((data) => {
        log(`${data}`);//This should output "Timeout is over" if resolve("Timeout is over") is invoked
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
        log(`Error message received: ${error}`);
    })
//Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)

let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
fetch(url)
    .then(response => response.json()) //convert data returned to json
    .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
    .catch(error => log(`Error: ${error}`));
let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array.
.then((data)=>{
    log(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
})

//Define the function that will return new Promise that wraps the asynchronous call to setTimeout()
const promiseAwareTimeout = (milliseconds=4000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
        }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
}
//define a function that uses our Promise executor
const usePromiseAwareTimeout = async (milliseconds) => {
    log('About to call timeout')
    try{
        log(await promiseAwareTimeout(milliseconds));
    }catch(error){
        log(error);
    }
};
//call the async function.
usePromiseAwareTimeout(3000);

/*let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) => { //user id parameter is expected
    let url = usersUrl + userId; //get the specific url for the user to fetch
    const response = await fetch(url); //make a call to the asynchronous fetch()
    const data = await response.json(); //make a call to the asynchronous conversion to json.
    log (data.name); //log the feedback.
}
getUserById(2); //This should display 'Ervin Howell' on the browser.*/

/*let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) => {
    let url = usersUrl + userId;
    try{
        const response = await fetch(url);
        const data = await response.json();
        /*
        The if statement below is to ensure that errors like URL not found (ie Error 404) is caught.
        fetch() unfortunately does not send a Promise.reject() in such a case.
        So here, we are throwing exception if HTTP response status is
        outside the OK range (the 2xx range are OK), so that it can be caught.
        
        if (response.status >= 200 && response.status < 300){
            log(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it
        }else{
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below.
        }
    }catch(error){
        log(`Error: ${error}`);
    }
}
getUserById(2);*/

let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) => {
    let url = usersUrl + userId;
    try{
        const response = await fetch(url);
        const data = await response.json();
        /*
        The if statement below is to ensure that errors like URL not found (ie Error 404) is caught.
        fetch() unfortunately does not send a Promise.reject() in such a case.
        So here, we are throwing exception if HTTP response status is
        outside the OK range (the 2xx range are OK), so that it can be caught.
        */
        if (response.status >= 200 && response.status < 300){
            return data;
            //log(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it
        }else{
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below.
        }
    }catch(error){
        //log(`Error: ${error}`);//do whatever you want to deal with error
        return error;
    }
}
Promise.all([getUserById(0),getUserById(2),getUserById(3)]) //getUserById() is deliberately passed Id of 0 in the first case to provoke Error: 404.
.then((data) => {
    log(`User1 = ${data[0].name=='Error'?data[0]:data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
})

/*function* waitList(list){
    for(let person of list){
        yield person; //create yield point for each item on the list
    }
    //return; terminates a generator at any point. It does not have to be used at all. It can be used between yield statements if the developer wants the rest of the yield to be ignored.
}

let myWaitList = waitList(['Peter','Mary','John']); //call waitList

//Prepare the output.
let output = `The first yielded value is: ${myWaitList.next().value} <br/>
    Here is what is returned in the next call: ${myWaitList.next().value} <br/>
    Hopefully we still have room for a next call. Here is the return: ${myWaitList.next().value} <br/>
    What if we call again when there is no more value to yield. Here is what we get: ${myWaitList.next().value}`
    
log(output);*/

function* waitList(list){
    for (let [index, value] of list.entries()){
        yield `Hi ${value}. You are number ${index + 1} on the list`
    }
    //return; terminates a generator at any point. It does not have to be used at all. It can be used between yield statements if the developer wants the rest of the yield to be ignored.
}

let myWaitList = waitList(['Peter','Mary','John']); //call waitList

//Prepare the output.
let output = `The first yielded value is: ${myWaitList.next().value} <br/>
    Here is what is returned in the next call: ${myWaitList.next().value} <br/>
    Hopefully we still have room for a next call. Here is the return: ${myWaitList.next().value} <br/>
    What if we call again when there is no more value to yield. Here is what we get: ${myWaitList.next().value}`
log(output);