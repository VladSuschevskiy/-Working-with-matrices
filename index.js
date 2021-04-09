const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 2, 9],
];

const matrixB = [
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
];

// matrices are equal
const combineMatrixes = (m1, m2, operator) => {
    if (operator !== "+" && operator !== "-" && operator !== "*") {
       return console.error(operator, "not supported")
    }

    const matrixC = [];

    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            if(operator === "+") {
                matrixC.push(m1[i][j] + m2[i][j]) ;
            } else if (operator === "-") {
                matrixC.push(m1[i][j] - m2[i][j]) ;
            } else if (operator === "*") {
                matrixC.push(m1[i][j] * m2[i][j]) ;
            }
        }
    }

    return matrixC;
}

console.log(combineMatrixes(matrixA, matrixB, "+"));
