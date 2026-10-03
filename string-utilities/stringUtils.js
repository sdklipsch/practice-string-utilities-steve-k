/* 
Create the stringUtils.js Module:
○ Define and export the following functions:
    ■ capitalize(str): Converts the first letter of a string to uppercase.
    ■ reverse(str): Reverses the characters in a string.
    ■ contains(str, substr): Checks if a substring exists within a string and returns true or false.
*/

function capitalizeString (str) {
    if (str === "") {
        return ""
    }

    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    if (str === "") {
        return "";
    }

    return str.split("").reverse().join("");
}

function containsSubString(str, substr) {
    if (str === "") {
        return false;
    }
    
    return str.includes(substr);
}

module.exports = {capitalizeString, reverseString, containsSubString};