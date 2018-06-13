function checkYear() {
    let year = document.getElementById('inputYear').value;

// uses ternary operator
    let isYear = (year % 100 == 0) ? (year % 400 == 0) : ( year % 4 == 0);
   
    if (isYear) {
      document.getElementById('isYear').innerHTML = year + " is a leap year";
    } else {
      document.getElementById('isYear').innerHTML = year + " is not a leap year";
    }

    //more practice with terneray operators
    let animal = "giraff";

    // double ternary !!!!
    let animalType = (animal === "chicken")? 'bird' : ((animal === "lizard")? 'lizard' : 'not a lizard or a bird' );
  
    console.log('the animal type is a ' + animalType);
  }