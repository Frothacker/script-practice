let side1 = 7.0;
let side2 = 5.0;
let side3 = 6.0;
let sp = (side1 + side2 + side3)/2.0;
let area = Math.sqrt(sp * (sp - side1) * (sp - side2) * (sp - side3));

document.getElementById('area').innerHTML = area;

// real challenge with area of triangle is finding the formula. 
// note: area of a triange uses semi-perimeter (perimeter/2), not normal perimeter. 