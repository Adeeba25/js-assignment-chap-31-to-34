//   // Q1//

// document.addEventListener('DOMContentLoaded', function() {
//     const currentDate = new Date();
//     const options = {
//       weekday: 'short',
//       month: 'short',
//       day: '2-digit',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       timeZoneName: 'short'
//     };

//     const formattedDate = currentDate.toLocaleString('en-US', options);
//     document.getElementById('currentDateTime').textContent = formattedDate;
//   });
//     // Q2//

//     var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var newDate = new Date();
// var month = newDate.getMonth();
// var currentMonth = monthNames[month]; 
// alert("Current Month: " + currentMonth);

// // Q3//

// let dateToday = new Date();
// let dayToday = dateToday.getDay();

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let theDay = days[dayToday]
// let shortFormOfDay;

// if (theDay === "Thursday") {
//     shortFormOfDay = theDay.slice(0, 5);
// }
// else {
//     shortFormOfDay = theDay.slice(0, 3)
// }

// document.write("Today is " + shortFormOfDay);

// Q4//

// var getDate = new Date();
// var getDay = getDate.getDay();
// if (getDay === 0 || getDay === 6) {
//     alert("It's Fun Day");
// }
// else {
//     alert("It's working Day")
// }

// Q5//

// var date  = new Date();
// var days = date.getDate
// if (days < 16) {
//     alert("First fifteen days of the month" )
// }
// else {
//     alert("Last days of the month")
// }

// Q6//

// let theTime = new Date();
// document.write("Current date: " + theTime + "<br>");

// let milliSecs = theTime.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSecs + "<br>");

// let timeInMins = milliSecs / (1000 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + timeInMins);





