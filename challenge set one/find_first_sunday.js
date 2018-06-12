let year = 2014;
let firsts = [];

while (year < 2051) {
  let d = new Date(year, 1,0);
  
  if (d.getDay() === 0) {
    firsts.push(year);
  }

  year += 1;
}

firsts.forEach(function(year) {
  console.log("Jan 1st is a Sunday on " + year);
});