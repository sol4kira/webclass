let num = 11;

for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
        row += "* ";
    }
    console.log(row);
}

    console.log("")


for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
    console.log("")

for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row );
}

