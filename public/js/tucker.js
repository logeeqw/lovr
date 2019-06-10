"use strict";

/**
 * @method
 * @desc executes the yesB function
 * @returns {null}
 */
document.getElementById(`t-y`).addEventListener("click", function(){
    yesT();
});

/**
 * @method
 * @desc executes the noB function
 * @returns {null}
 */
document.getElementById(`t-n`).addEventListener("click", function(){
    noT();
});

/**
 * @method
 * @desc lets the user confirm that they like the other user
 * @returns {null}
 */
function yesT() {
    document.getElementById(`t-cont`).style.display = `none`;
    document.getElementById(`w-cont`).style.display = `block`;
    yesMessage();
}

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function noT() {
    document.getElementById(`t-cont`).style.display = `none`;
    document.getElementById(`w-cont`).style.display = `block`;
}

/**
 * @method
 * @desc displays a message to the user
 * @returns {null}
 */
function yesMessage() {
    window.alert(`When this user likes you back the two of you can message!`);
}