"use strict";

/**
 * @method
 * @desc executes the yesJ function
 * @returns {null}
 */
document.getElementById(`j-y`).addEventListener("click", function(){
    yesJ();
});

/**
 * @method
 * @desc executes the noJ function
 * @returns {null}
 */
document.getElementById(`j-n`).addEventListener("click", function(){
    noJ();
});

/**
 * @method
 * @desc lets the user confirm that they like the other user
 * @returns {null}
 */
function yesJ() {
    document.getElementById(`j-cont`).style.display = `none`;
    document.getElementById(`r-cont`).style.display = `block`;
    yesMessage();
}

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function noJ() {
    document.getElementById(`j-cont`).style.display = `none`;
    document.getElementById(`r-cont`).style.display = `block`;
}

/**
 * @method
 * @desc displays a message to the user
 * @returns {null}
 */
function yesMessage() {
    window.alert(`When this user likes you back the two of you can message!`);
}