"use strict";

/**
 * @method
 * @desc executes the yesL function
 * @returns {null}
 */
document.getElementById(`w-y`).addEventListener("click", function(){
    yesW;
});

/**
 * @method
 * @desc executes the noL function
 * @returns {null}
 */
document.getElementById(`w-n`).addEventListener("click", function(){
    noW();
});

/**
 * @method
 * @desc lets the user confirm that they like the other user
 * @returns {null}
 */
function yesW() {
    document.getElementById(`w-cont`).style.display = `none`;
    document.getElementById(`p-cont`).style.display = `block`;
    yesMessage();
}

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function noW() {
    document.getElementById(`w-cont`).style.display = `none`;
    document.getElementById(`p-cont`).style.display = `block`;
}

/**
 * @method
 * @desc displays a message to the user
 * @returns {null}
 */
function yesMessage() {
    window.alert(`When this user likes you back the two of you can message!`);
}