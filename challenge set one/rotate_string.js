
let string = 'Lorem ipsum dimsum';

function rotate() {
  let rotatedString = (string.slice(-1) + string.substr(0,string.length-1));
  document.getElementById('replace').innerHTML = rotatedString;
  string = rotatedString;
}