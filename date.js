let todaysDate = {
    getDay: function () {
        let today = new Date();
        let day = today.getDate();
        day = day < 10 ? "0" + day : day;
        return day;
    },
    getMonth: function () {
        let today = new Date();
        let month = today.getMonth();
        let arrayOfMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        if (month >= 0 && month <= 11) {
            month = arrayOfMonths[month];
        }

        return month;
    },
    getYear: function () {
        let today = new Date();
        let year = today.getFullYear();

        return year;
    },
    getDayMonthYear: function (param1, param2) {
        let day = this.getDay();
        let month = this.getMonth();
        let year = this.getYear();

        let date = document.getElementById(param1);
        date.innerHTML = day + "-" + month + "-" + year;
        date = document.getElementById(param2);
        date.innerHTML = day + "/" + month + "/" + year;

    },
    getMonthDayYear: function (param1, param2) {
        let day = this.getDay();
        let month = this.getMonth();
        let year = this.getYear();

        let date = document.getElementById(param1);
        date.innerHTML = month + "-" + day + "-" + year;
        date = document.getElementById(param2);
        date.innerHTML = month + "/" + day + "/" + year;

    }
}

todaysDate.getMonthDayYear('todaysDate', 'todaysDate2');
todaysDate.getDayMonthYear('todaysDate3', 'todaysDate4');



