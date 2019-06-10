"use strict";

let acctNum;
acctNum = 0;

document.getElementById(`sign-up`).addEventListener("click", function(){
    signUp();
});

/**
 * @method
 * @desc lets the user log in
 * @returns {null}
 */
function signUp() {
    window.prompt (`Please enter your name`);
    window.prompt (`Please enter a password`);
    window.alert(`Your user ID is ${acctNum ++}`);
}