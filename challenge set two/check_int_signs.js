let num1 = +(prompt("input first number"));
let num2 = +(prompt("input second number"));

if ((Math.sign(num1) === -1 || Math.sign(num2) === -1) && (Math.sign(num1) === 1 || Math.sign(num2) === 1)) {
   alert('one is positive and one is negative');
} else {
  alert('not positive and negative');
}