// https://www.codewars.com/kata/56a1c63f3bc6827e13000006/train/javascript
function smaller(nums) {
    let curr;
    function reducer(accumulator, current) {
        if (curr > current) {
            ++accumulator;
        }
        return accumulator
    }
    const res = nums.map((elem, i) => {
        curr = elem;
        // console.log(curr)
        // console.log(nums.slice(i + 1))
        return nums.slice(i + 1).reduce(reducer, 0)
    })
    // console.log(res)
    return res;
}

console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));
//  [4, 1, 5, 5, 0, 0, 0, 0, 0]