// Date and Time in JavaScript

// Get the current date and time
let date = new Date();

// getFullYear() - Gets the full year in 4 digits (yyyy)
let year = date.getFullYear(); // Example: 2024
console.log(year);

// getMonth() - Gets the month (0-11) -> (January is 0, December is 11)
let month = date.getMonth(); // Example: 9 (October)
let strMonth = date.toLocaleString('en-gb', { month: 'long' }); // "October"
let strMonthShort = date.toLocaleString('en-gb', { month: 'short' }); // "Oct"
console.log(strMonth);
console.log(strMonthShort);

// getDate() - Gets the date (1-31)
let todayDate = date.getDate(); // Example: 2
console.log(todayDate);

// getHours() - Gets the hours (0-23)
let getHours = date.getHours();

// getMinutes() - Gets the minutes (0-59)
let getMinutes = date.getMinutes();

// Example: Display current date and time in human-readable format
console.log(`${todayDate}/${strMonthShort}/${year} ${getHours}:${getMinutes}`); // Example: "2/Oct/2024 9:22"

// ----------------------------------------------------------------------------------------

// Human-readable formatted date (dd/mm/yyyy)
let day = date.getDate();
let month1 = date.getMonth();
let year1 = date.getFullYear();
console.log(`${day}/${month1}/${year1}`); // Example: "3/9/2024"

// Method 1: Using a ternary operator to add leading zeros
let dayFormat = day < 10 ? `0${day}` : day;
let monthFormat = month1 < 10 ? `0${month1}` : month1;
console.log(`${dayFormat}/${monthFormat}/${year1}`); // Example: "03/09/2024"

// Method 2: Using padStart() to add leading zeros
let padDayFormat = String(day).padStart(2, '0');
let padMonthFormat = String(month1).padStart(2, '0');
console.log(padDayFormat);
console.log(padMonthFormat);
console.log(`${padDayFormat}/${padMonthFormat}/${year1}`); // Example: "03/09/2024"

// ----------------------------------------------------------------------------------------

// Time in 12-hour format
let curTime = date.getHours();
let curMin = date.getMinutes();
let curSec = date.getSeconds();

// Display the time in 24-hour format
console.log(`${curTime}:${curMin}:${curSec}`); // Example: "8:27:37"

// Convert 24-hour format to 12-hour format
let amPm = curTime >= 12 ? "PM" : "AM"; // Example: PM for 13:00
let curHours = curTime % 12;
curHours = curHours ? curHours : 12; // Convert "0" hours to "12" for 12:00
let paddedTime = String(curHours).padStart(2, '0');
let paddedMin = String(curMin).padStart(2, '0');
    
// Display the time in 12-hour format
console.log(`${paddedTime}:${paddedMin}:${curSec} ${amPm}`); // Example: "08:37:54 AM"

// ----------------------------------------------------------------------------------------

// Time conversion in different timezones

// Indian timezone
let curIndianTime = date.toLocaleString("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
console.log("Indian timezone:", curIndianTime); // Example: "12/08/2022, 08:51:07 AM"

// US timezone
let curUSTime = date.toLocaleString("en", {
    timeZone: 'America/New_York',
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
console.log("US-TIME-ZONE:", curUSTime); // Example: "12/07/2022, 10:24:13 PM"

// ----------------------------------------------------------------------------------------

// Manipulating dates with setDate() and setMonth()

// Example: Generate a date 5 days later
let manipulatedDate = new Date();
let futureDate = manipulatedDate.getDate(); // current date 
manipulatedDate.setDate(futureDate + 5); // Adds 5 days
console.log(manipulatedDate.getDate()); // Example: "8"

// Manipulating months
let futureMonth = manipulatedDate.getMonth();
manipulatedDate.setMonth(futureMonth + 2); // Adds 2 months  (0--11)
console.log(manipulatedDate.getMonth() + 1); // Example: "12" (Note: +1 because getMonth() is zero-based)
 
// Manipulating years
let year2 = manipulatedDate.getFullYear();
manipulatedDate.setFullYear(year2 - 2); // Subtracts 2 years
console.log(manipulatedDate.getFullYear()); // Example: "2022"

// ----------------------------------------------------------------------------------------
