// main function to execute the operations
function main(){
    let opp = prompt("Enter operation to perform: \nadd,\n subtract, \n multiply, \n transpose");
    switch (opp) {
        case "add":
            matrixinputa()
            matrixinputb()
            let addResult = addMatrices();
            console.log("Addition Result:");
            console.log(addResult);
            break;
        case "subtract":
            matrixinputa()
            matrixinputb()
            let subResult = subMatrices();
            console.log("Subtraction Result:");
            console.log(subResult);
            break;
        case "multiply":
            matrixinputa()
            matrixinputb()
            let mulResult = multiplyMatrices();
            console.log("Multiplication Result:");
            console.log(mulResult);
            break;
        case "transpose":
            matrixinputa();
            let transA = transposeMatrix(matrixa);
            console.log("Transpose of Matrix A:");
            console.log(transA);
            break;
    
        default:
            break;
    }
}
// input fro the 2 matrices
let matrixa =[[],[]]
let matrixb =[[],[]]

// function to accept matrix input
function matrixinputa(){
    for(let i = 0; i<2; i++){
        for(let j=0; j<2;j++){
            matrixa[i][j] = Number(prompt("Enter element for matrix A at position (" + i + "," + j + "): "));
        }
    }
}
function matrixinputb(){
for(let i = 0; i<2; i++){
        for(let j=0; j<2;j++){
            matrixb[i][j] = Number(prompt("Enter element for matrix b at position (" + i + "," + j + "): "));
        }
    }
}
// function to add two matrices
function addMatrices(){
    let result = [[],[]]

    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            result[i][j] = parseInt(matrixa[i][j]) + parseInt(matrixb[i][j]);
        }
    }
    return result
}

//substract two matrices
function subMatrices(){
    let result = [[],[]]

    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            result[i][j] = parseInt(matrixa[i][j]) - parseInt(matrixb[i][j]);
        }
    }
    return result
}

//multiply two matrices 
function multiplyMatrices(){
    let result = [[],[]]
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            result[i][j] = 0;
            for(let k=0;k<2;k++){
                result[i][j] += parseInt(matrixa[i][k]) * parseInt(matrixb[k][j]);
            }
        }
    }
    return result
}

// transpose of a matrix
function transposeMatrix(matrix){
    let transpose =[[],[]]

    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            transpose[i][j] = matrix[j][i];
        }
    }
    return transpose;
}



main()