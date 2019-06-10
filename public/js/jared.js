"use strict";

/**
 * @method
 * @desc executes the yesJ function
 * @returns {null}
 */
document.getElementById(`r-y`).addEventListener("click", function(){
    yesR();
});

/**
 * @method
 * @desc executes the noJ function
 * @returns {null}
 */
document.getElementById(`r-n`).addEventListener("click", function(){
    noR();
});

/**
 * @method
 * @desc lets the user confirm that they like the other user
 * @returns {null}
 */
function yesR() {
    document.getElementById(`r-cont`).style.display = `none`;
    document.getElementById(`t-cont`).style.display = `block`;
    yesMessage();
}

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function noR() {
    document.getElementById(`r-cont`).style.display = `none`;
    document.getElementById(`t-cont`).style.display = `block`;
}

/**
 * @method
 * @desc displays a message to the user
 * @returns {null}
 */
function yesMessage() {
    window.alert(`When this user likes you back the two of you can message!`);
}