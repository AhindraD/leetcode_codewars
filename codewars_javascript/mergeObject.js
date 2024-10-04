// https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript
function objConcat(objArr) {
    function reducerFn(accumulator, tempObj) {
        Object.assign(accumulator, tempObj);
        return accumulator
    }
    const res = objArr.reduce(reducerFn, {});
    return res;
}