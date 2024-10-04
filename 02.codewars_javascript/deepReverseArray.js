// https://www.codewars.com/kata/5786f020e55533ebb7000153/train/javascript
function deepReverse(l) {
    let res = [];
    let i=0;
    while (l.length>0) {
        if (typeof l[l.length-1] === "object") {
            res[i] = deepReverse(l.pop());
        } else {
            res[i] = l.pop();
        }
        i++
    }
    return res
}


// Test Case 1: Testing empty list
const input1 = [];
const expected1 = [];
const result1 = deepReverse(input1);
console.log(result1); // []

// Test Case 2: Testing list with single element
const input2 = [1];
const expected2 = [1];
const result2 = deepReverse(input2);
console.log(result2); // [1]

// Test Case 3: Testing list with multiple elements
const input3 = [1, [2, 3], [4, [5, 6]]];
const expected3 = [[[[6, 5], 4], [3, 2]], 1];
const result3 = deepReverse(input3);
console.log(result3); // [[[[6, 5], 4], [3, 2]], 1]