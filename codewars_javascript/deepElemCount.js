// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript
function deepCount(a) {
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            res += deepCount(a[i]);
        }
        res++;
    }
    return res;
}