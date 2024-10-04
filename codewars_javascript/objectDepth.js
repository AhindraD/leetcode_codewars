// https://www.codewars.com/kata/5aa1ca484a6b34f9a000011e/train/javascript
function depth(obj) {
    var d = 0;
    function helperDepth(obj) {
        if (typeof obj === "object" && obj !== null && !Array.isArray(obj) && Object.keys(obj).length > 0) {
            let max = Number.NEGATIVE_INFINITY;
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    let temp = (1 + helperDepth(obj[key]));
                    max = max > temp ? max : temp;
                }
            }
            return max;
        } else {
            return 0;
        }
    }
    d = helperDepth(obj)
    return d;
}


// var obj = { a: 1, b: { c: { d: 2 } } };
// console.log(depth(obj))