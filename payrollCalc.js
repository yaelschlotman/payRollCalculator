"use strict";
function findHoursPerWeek(){
	window.prompt ("Enter Number of Hours This Week.  \nIf no more entries, enter \"none".);
}
function findPayRate( ){
	window.prompt ("Enter Hourly Payrate.  \nIf no more entries, enter \"none\"");
}
function calcStandardPay(){
    hoursperweek * payrate;
}
function calcOvertimeHours(){
    hoursperweek - 40.00;
}
function calcOvertimePay(){
	standardpay * 1.5 * overtimehours;
}
function calcTotalPay(){
	overtimepay + standardpay;
}

while
if (overtimehours > 0) {
	totalpay = (Math.round (overtimepay * 100) / 100);
	console.log(Hoursperweek, "at $", payrate, ".");
	console.log(totalpay);


}else {
    totalpay = Math.round (standardpay*100)/100;
    console.log (hoursperweek, "$", payrate, ".");
    console.log ("$", totalpay);
}
}