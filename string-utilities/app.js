/*
2. Test the Module in app.js:
    ○ Import the stringUtils.js module into app.js.
    ○ Test each function with different string inputs and log the results to the console.
*/

const stringUtils = require("./stringUtils");

// let str = "javascript is so much fun to learn!";
let str = "";
let substr = "fun to learn";

console.log(stringUtils.capitalizeString(str));
console.log(stringUtils.reverseString(str));
console.log(stringUtils.containsSubString(str, substr));