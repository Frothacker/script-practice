
function guess() {
  let rand = Math.floor( Math.random() * 10 ) + 1; 
  // "+1" is needed beacsue .floor rounds the value down to zero if its small enough, and we don't want zero

  let guess = parseInt(document.getElementById('guess').value);
  if (guess === rand) {
    document.getElementById('feedback').innerHTML = 
    'You guessed correctly! The random number was ' + rand;
  } else {
    document.getElementById('feedback').innerHTML = 
    'Too bad: the random number was ' + rand;
  }
}