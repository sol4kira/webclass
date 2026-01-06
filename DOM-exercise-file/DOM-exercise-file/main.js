//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻
// Kirubel Solomon 🤓

//Question 1
const sample1 = document.getElementById("sample1");
const div = document.querySelector("div");
console.log(div)
console.log(sample1.textContent);

//Question 2
const techCompanies = document.getElementById("techCompanies");
const techCompanies2 = document.querySelector("#techCompanies");

console.log(techCompanies);
console.log(techCompanies2);

const techCompaniesCounter = document.querySelectorAll("#techCompanies li");
console.log(techCompaniesCounter.length);

const redItemsQS = document.querySelectorAll(".red");
console.log(redItemsQS);

const redItemsClass = document.getElementsByClassName("red");
console.log(redItemsClass);

const facebookLi = document.createElement("li");
facebookLi.textContent = "Facebook";
console.log(facebookLi);

const sony = document.querySelector("#techCompanies li:last-child");
sony.after(facebookLi);

facebookLi.classList.add("blue")

const blueItems = document.querySelectorAll("#techCompanies .blue");
const blueCount = blueItems.length;

const blueCompaniesDiv = document.getElementById("blueCompanies");
blueCompaniesDiv.innerHTML += `<p>Blue companies count: ${blueCount}</p>`;

//Question 3
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

function changeColorBlue(){
    document.body.style.backgroundColor = "#99ecff";
}

function changeColorNone(){
    if(document.body.style.backgroundColor != "none"){
        document.body.style.backgroundColor = "none";
    }
}

//Question 4

const submitbtn = document.getElementById("submitButton");
const first = document.querySelector('input[name="first-value"]');
const second = document.querySelector('input[name="second-value"]');
const result = document.getElementById("sum");

submitbtn.addEventListener("click", function (e) {
    e.preventDefault();
    addAndAverage();
});

function addAndAverage(){
    if(validateInput()){
        const sum = Number(first.value) + Number(second.value);
        const average = sum / 2;
        result.textContent = `sum ${sum} average ${average}`; 
    }
    else{
        result.textContent = "Please enter numerical values only.";
    }
}

function validateInput(){
    return !isNaN(first.value) && !isNaN(second.value) && first.value !== "" && second.value !== "";
}






