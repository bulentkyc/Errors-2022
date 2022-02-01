alert('Hello World');

//Compilation error: if the code has some characters or etc.
//@

//Runtime error: since test is not defined
//consol.log(test);

//Logical error: if pepople don't write a number!
let number = prompt('Please give me a number')
console.log(parseInt(number) * 5);

const test = (arrayParam) => {
    
    //The debugger statement invokes any available debugging functionality, 
    //such as setting a breakpoint. 
    //If no debugging functionality is available, this statement has no effect.
    //debugger;

    const testResult = arrayParam.map(item => item.toUpperCase());
    return testResult;
}

console.log(test(['Hello World', 'ffff', 'we are learning error!']));
//console.log(test(123)); //Uncaught TypeError: arrayParam.map is not a function

//////////////////////////////////////////////////////////////////////
/*Debugger is a developer tool and below 3 has own debuggers:
    1. Browsers
    2. VS Code or most of developer editors
    3. Node JS itself (node inspect)
*/

//////////////////////////////////////////////////////////////////////
//try and catch
//Syntax:

try {
    //Code goes here to be executed
} catch (error) {
    //If there'd be error with the code in try then code on here will be executed
}


//alert(bulent); app crashes and the rest of the code will not be executed
//ReferenceError: bulent is not defined

try {
    alert(bulent);//App does not crash and the rest of the code will be executed.
} catch (error) {
    alert('Something went wrong!')
    console.log(error);
} finally { // Does not matter try or catch worked but finally always works!
    console.log(`"finnally" is done`);
}

//Don't stop the application
console.error(`Whoops! Something went wrong`);
console.warn(`Heyyy! Are you there`);

//throw 'App is stopped'; // Throw the error and stop the application

const err = new Error('Testing a new error object!');

//console.error(err); // App continues.

//throw err; //App crashes.

alert('Application is over!');