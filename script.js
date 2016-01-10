"use strict";
function getUserValues(message) {
    return window.prompt(message);
}

function showWeeklyPay() {
    var hoursPerWeek; 
    var basePay;
    var overtimePay;
    var totalPay;
    var employeeName;
    var rate;
    employeeName = getUserValues("Enter Employee Name. If no more entries, enter \"DONE\".");

    
    while (employeeName != "DONE") {
        hoursPerWeek = getUserValues("Enter Number of Hours This Week.  If no more entries, enter \"DONE\".");
        rate = getUserValues("Enter Hourly Rate.");
    if (hoursPerWeek <= 40) {
        basePay = hoursPerWeek * rate; 
        overtimePay = "None";
        totalPay = basePay;
        console.log("Employee:  \t", employeeName);
        console.log("Hours:  \t", hoursPerWeek);
        console.log("Base Pay:  \t$", basePay);
        console.log("Overtime Pay:\tNONE");
        console.log("Total Pay:\t$", basePay);

    }else if (hoursPerWeek >40) {
        basePay = hoursPerWeek * rate;
        overtimePay = (hoursPerWeek -40) * 1.5 * rate;
        totalPay = basePay + overtimePay;
        console.log("Employee:  \t", employeeName);
        console.log("Hours:  \t", hoursPerWeek);
        console.log("Base Pay:  \t$", basePay);
        console.log("Overtime:\t$", overtimePay);
        console.log("Total Pay:\t$", totalPay);
    }
    else {
        console.log("End of List.");

    }
        employeeName = getUserValues("Enter Employee Name. If no more entries, enter \"DONE\".");

}

}

showWeeklyPay();