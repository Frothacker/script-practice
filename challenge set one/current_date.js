let date = new Date();

let mm = (date.getMonth() + 1);
let dd = date.getDate();
let yyyy = date.getFullYear();

console.log(yyyy + mm + dd);

if (mm.length < 2) mm = '0' + mm;
if (dd.length < 2) dd = '0' + dd;


let currentDate = [yyyy, mm, dd].join('-');
document.getElementById('currentDate'). innerHTML = currentDate;
