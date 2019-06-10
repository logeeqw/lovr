"use strict";

document.getElementById(`look`).addEventListener("click", function(){
    look();
});

/**
 * @method
 * @desc lets the user say that they dislike the other user
 * @returns {null}
 */
function look() {
    document.getElementById(`index-cont`).style.display = `none`;
    document.getElementById(`j-cont`).style.display = `block`;
}