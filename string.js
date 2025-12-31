let input = String(prompt("Enter a string"))

function createWhiteSpace(text) {
    let result = ""

    for (let i = 0; i < text.length; i++) {
        let current = text[i]
        let previous = text[i - 1]

        if (previous &&/[a-z]/.test(previous) &&/[A-Z]/.test(current)) {
            result += " "
        }
        result += current
    }
    return result
}

console.log(createWhiteSpace(input))
