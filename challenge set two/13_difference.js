let num = prompt('input a number');

if (num < 14) {
  alert("the difference between 13 and the number you chose, " + num + ", is " + (13 - num));
} else {
  alert("the difference between 13 and the number you chose, " + num + ", times two, is " + ((num - 13) * 2));
}