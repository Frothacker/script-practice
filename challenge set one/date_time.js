
let date = new Date();
//getting day
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[date.getDay()];

//getting time
let hours = date.getHours();
let minutes = date.getMinutes();
let ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
let strTime = hours + ':' + minutes + ' ' + ampm;

document.getElementById('replaceDate'). innerHTML = day;
document.getElementById('replaceTime'). innerHTML = strTime;