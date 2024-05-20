let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

let arrayOfMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
if (month >= 0 && month <= 11) {
    month = arrayOfMonths[month];
}
day = day < 10 ? "0" + day : day;

let date = document.getElementById('todaysDate');
date.innerHTML = day + "-" + month + "-" + year;
date = document.getElementById('todaysDate2');
date.innerHTML = day + "/" + month + "/" + year;
date = document.getElementById('todaysDate3');
date.innerHTML = month + "-" + day + "-" + year;
date = document.getElementById('todaysDate4');
date.innerHTML = month + "/" + day + "/" + year;