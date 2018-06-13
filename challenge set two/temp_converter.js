
let celsius = 60
let farenheit = 45

let toFaren = celsius * (9/5) + 32
let toCel = ((farenheit - 32) / 1.8).toFixed(2)

console.log( "" ); // make it print better
console.log(celsius + "° celsius = " + toFaren + "° farenheit" );
console.log(farenheit + "° farenheit = " + toCel + "° celsius");