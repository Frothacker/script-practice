// makes a user name a variable
let pickedName = window.prompt("please name a variable");

// went some step further and let the user create variable's content aswell. 
let content = window.prompt("please create " + pickedName + "'s contents");

this[pickedName] = content;

console.log(' the value of `' + pickedName + '` is --> ' + this[pickedName]);