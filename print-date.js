// add a printDate function in here
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var printDate = date + ' ' + time;
alert(printDate);
// eg: console.log("Hello World")