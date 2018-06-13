let num1 = +(prompt("input first number"));
let num2 = +(prompt("input second number"));

if (num1 === 50 || num2 === 50) {
   alert('one of these is 50');
} else if(num1 + num2 === 50) {
  alert('they add to 50');
} else {
  alert('Neither number is 50, nor do they add to 50');
}
