let input = String(prompt("Enter a string"))

function middleElement(text){
    let middleindex = text.length/2

    if(text.length%2 === 0){
        return(text[middleindex], text[middleindex+1])
    }
    else{
        return(text[middleindex])
    }
}

console.log(middleElement(input))