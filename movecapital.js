let input = String(prompt("Enter a string"))

function moveCapitalTOFront(text){
    let result =""
    for(let i=0; i<text.length; i++){
        if (/[A-Z]/.test(text[i])) {
            result = text[i] + result
        } else {
            result += text[i]
        }
    }
    return result
}

let result = moveCapitalTOFront(input)

console.log(result)