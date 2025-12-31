// function myFirst(){
//     console.log("Hello World");
// }
// myFirst();

// let names=prompt("Enter name",parseInt())
// function mysecond(name){
//     console.log(`hello ${name}`)
// }

// mysecond(names);


// let min = prompt("Enter min")
// function minTOSec(min){
//     if(!isNaN(min)){
//         console.log("Enter a valid input, Please enter a number value")
//     }
//     else{
//     let sec = min*60;
//     console.log(sec)
//     }
    
// }
// minTOSec(min);


// let hour = prompt("Enter hours",parseInt())
// function hourToSec(hour){
//     let sec = hour * 3600;
//     console.log(sec)
// }
// hourToSec(hour)

// let age = prompt("Enter age",parseInt())
// function ageToDay(age){
//     let day= age*365
//     console.log(day)
// }
// ageToDay(age)

// let chicken = prompt("enter chicken leg",parseInt())
// let pig = prompt(parseInt("enter pig leg"))
// let cow = prompt(parseInt("enter cow leg"))
// function legs(cows, chickens, pigs){
//     let total = parseInt(cows+ chickens+ pigs)
//     console.log(total)
// }
// legs(cow, chicken, pig)

// let grade = prompt("Enter garde",parseInt())
// function score(grade){
//     if(grade >= 100 && grade <0){
//         console.log("invalid score")
//     }
//     else if(grade>=90 && grade <= 100){
//         console.log("A")
//     }
//     else if(grade>=80 && grade <= 90){
//         console.log("b")
//     }
//     else if(grade>=70 && grade <= 80){
//         console.log("c")
//     }
//     else if(grade>=60 && grade <= 70){
//         console.log("c")
//     }
// }
// score(grade)

let number =prompt("Enter number",parseInt())
function evenOdd(number){
        if(number >=0 && number%2 === 0){
            console.log("Positive Even")
        }
        else if(number <=0 && number%2 === 0){
            console.log("Negative Even")
        }
        else if(number >=0 && number%2 != 0){
            console.log("POsitive odd")
        }
        else{
            console.log("Negative odd")
        }
}  
evenOdd(number)