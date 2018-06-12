
let d = new Date();
let year = d.getFullYear();
let day = d.getDate();
let month = d.getMonth();

let daysLeftThisMonth = (31 - day);

let daysLeftAllMonths = ((12 - month)*31);

let daysLeft = 356 - daysLeftThisMonth - daysLeftAllMonths;
console.log("days left untill christmas : " +daysLeft);

// loss in acuracy to assumtion that all months are 31 days long. 