// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
multiplicationTable = function (size) {
    const resMatrix = Array(size).fill(0).map(() => Array(size));
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            resMatrix[i - 1][j - 1] = i * j;
        }
    }
    return resMatrix
}