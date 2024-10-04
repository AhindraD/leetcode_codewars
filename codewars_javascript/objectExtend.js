// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb/train/javascript
var extend = function (...args) {
    const res = {}
    function helper(obj) {
        if (typeof obj === "object") {
            for (const key in obj) {
                if (!Object.hasOwnProperty.call(res, key)) {
                    res[key] = obj[key]
                }
            }
        }
    }
    args.forEach(element => {
        helper(element)
    });
    return res;
}


let obj = extend({ a: 1, b: 2 }, { a: 3, c: 3 });
console.log(obj);
// should  === {a: 1, b: 2, c: 3}