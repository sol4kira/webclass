let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let input = Number(prompt("Enter a number between 1 - 12"))

if(input >= 1 && input <=12){
    console.log("The month is: " + months[input - 1]);
}
else{
    console.log("Invalid Input: input must be 1-12 to show the correct month")
}

