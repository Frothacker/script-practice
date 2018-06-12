
function guess() {
  let rand = Math.floor(Math.random() * 10)+1;
  let guess = parseInt(document.getElementById('guess').value);
  if (guess === rand) {
    document.getElementById('feedback').innerHTML = 
    'You guessed correctly! The random number was ' + rand;
  } else {
    document.getElementById('feedback').innerHTML = 
    'Too bad: the random number was ' + rand;
  }
}