// input 2 2 
// output 6

var row = 3;
var col = 3;
var res = Array.from({ length: row }, () => new Array(col).fill(0));
console.log(JSON.stringify(res));
for (let i = 1; i < row; i++) {
    res[i][0] = 1;
}
for (let i = 1; i < col; i++) {
    res[0][i] = 1;
}
for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
        res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
}
console.log(JSON.stringify(res));
console.log(res[row - 1][col - 1]);