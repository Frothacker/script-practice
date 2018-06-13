let num = +(prompt("input a number"));

let target1 = 100;
let target2 = 400;

if ((num < (target1 + 20)) && (num > (target1 - 20))) {
   alert(num + ' is less than 20 away from ' + target1 );
} else if((num < (target2 + 20)) && (num > (target2 - 20))) {
  alert(num + ' is less than 20 away from ' + target2 );
} else {
  alert('the number you chose, ' + num + ' , is not within 20 units of ' + target1 + ' or ' + target2);
}
