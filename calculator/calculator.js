function doCal() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let answer = 0

  let e = document.getElementById('operatorInput');
  let calcType = e.options[e.selectedIndex].value;
  console.log(calcType);

  if (calcType == 'add') {
    answer = num1 + num2 ;
  }else if (calcType == 'subtract') {
    answer = num1 - num2 ;
  }else if (calcType == 'multiply') {
    answer = num1 * num2 ;
  }else if (calcType == 'divide') { 
    answer = num1 / num2 ;
  } else {
    answer = 'error: no operator symbol'
  }
  
  document.getElementById('change_me').innerHTML = answer ;
}