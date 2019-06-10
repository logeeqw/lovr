
"use strict";

document.getElementById(`login`).addEventListener("click", function(){
    login();
});

function login() {
    window.prompt(`please enter your user id, or your user name`);
    window.prompt(`please enter your password`);
    window.alert(`you are now signed in`)
}