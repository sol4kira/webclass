const para = document.getElementById("para");
const btn1 = document.getElementById("btn1");
let count = 0;

function changeContent(){
    count += 1;
    para.textContent = "The content has been changed!";
    para.textContent += `Button clicked ${count} times`;

    if(count>10){
        para.textContent= "stop spamming me"
        btn1.disabled = true;
    }

    
}