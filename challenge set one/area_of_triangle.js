let side1 = 7.0;
let side2 = 5.0;
let side3 = 6.0;
let p = (side1 + side2 + side3)/2.0;
let area = Math.sqrt(p * ((p - side1) * (p - side2) * (p - side3) ));

document.getElementById('area').innerHTML = area;