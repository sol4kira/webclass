let input = prompt("Enter a date in YYYY-MM-DD format");
if(!/^[0-9-]+$/.test(input)){
    console.error("Invalid input. Please enter only numbers and hyphens. Words or other symbols are not allowed.");
    process.exit(1);
}
    

let parts = input.split("-");
if(parts.length !== 3){
    console.error("Invalid date format. Please enter a date in the format YYYY-MM-DD.");
    process.exit(1);
}
let year = Number(parts[0]);
let month = Number(parts[1]);
let day = Number(parts[2]);

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isValidDate(year, month, day) {

    if (!Number.isInteger(year) || year < 1) {
        console.error("Invalid year");
        return false;
    }

    if (!Number.isInteger(month) || month < 1 || month > 12) {
        console.error("Invalid month");
        return false;
    }

    let monthDays = {
        1: 31,
        2: isLeapYear(year) ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    if (!Number.isInteger(day) || day < 1 || day > monthDays[month]) {
        console.error(`Invalid day for month ${month}`);
        return false;
    }

    return true;
}

if (isValidDate(year, month, day)) {
    isPalindromicDate(input);
}

function isPalindromicDate(dateString) {
    let cleaned = dateString.replace(/-/g, "");
    
    let reversed = cleaned.split("").reverse().join("");

    if( cleaned === reversed){
        console.log("The date is palindromic");
    } else {
        console.log("The date is not palindromic");
    }
}
