// makes a user name a variable
let pickedName = prompt("please name a variable");

// went some step further and let the user create variable's content aswell. 
let content = prompt("please create " + pickedName + "'s contents");

this[pickedName] = content;

console.log(' the value of `' + pickedName + '` is --> ' + this[pickedName]);