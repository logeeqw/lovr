"use strict";

/**
 * @method
 * @desc executes the yesH function
 * @returns {null}
 */
document.getElementById(`h-y`).addEventListener("click", function(){
    yesH();
});

/**
 * @method
 * @desc executes the noH function
 * @returns {null}
 */
document.getElementById(`h-n`).addEventListener("click", function(){
    noH();
});

/**
 * @method
 * @desc lets the user confirm that they like the other user
 * @returns {null}
 */
function yesH() {
    document.getElementById(`h-cont`).style.display = `none`;
    document.getElementById(`j-cont`).style.display = `block`;
    yesMessage();
}

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function noH() {
    document.getElementById(`h-cont`).style.display = `none`;
    document.getElementById(`j-cont`).style.display = `block`;
}

/**
 * @method
 * @desc displays a message to the user
 * @returns {null}
 */
function yesMessage() {
    window.alert(`When this user likes you back the two of you can message!`);
}