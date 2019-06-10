"use strict";

/**
 * @method
 * @desc executes the yesP function
 * @returns {null}
 */
document.getElementById(`p-y`).addEventListener("click", function(){
    yesP();
});

/**
 * @method
 * @desc executes the noP function
 * @returns {null}
 */
document.getElementById(`p-n`).addEventListener("click", function(){
    noP();
});

/**
 * @method
 * @desc lets the user confirm that they like the other user
 * @returns {null}
 */
function yesP() {
    document.getElementById(`p-cont`).style.display = `none`;
    document.getElementById(`h-cont`).style.display = `block`;
    yesMessage();
}

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function noP() {
    document.getElementById(`p-cont`).style.display = `none`;
    document.getElementById(`h-cont`).style.display = `block`;
}

/**
 * @method
 * @desc displays a message to the user
 * @returns {null}
 */
function yesMessage() {
    window.alert(`When this user likes you back the two of you can message!`);
}