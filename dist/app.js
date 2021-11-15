"use strict";
var appId = 'abc';
var button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log(this.userName);
    console.log('Clicked! ' + message);
}
var person = {
    userName: "Hajimss"
};
if (button) {
    button.addEventListener('click', clickHandler.bind(person, "Good job!"));
}
//# sourceMappingURL=app.js.map