// Structure of a function
function helloWorld(){
    console.log('hello world');
}

// This function requires a value to work
// It is called a parameter
function helloUser(user){
    console.log('Hello ' + user);
}

// There is no limit to the number of parameters a function uses
function add(num1, num2){
    /* 
        Not all functions need to immediately output something
        We can simply return a value to wherever this function is called
    */
    return num1 + num2;
}

function hi(name){
    alert('Hello there '+name+'!');
}
