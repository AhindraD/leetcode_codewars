// https://www.codewars.com/kata/5303229f1f5c12ef39000061/train/javascript

Object.prototype.flatArr = function () {
    const arr = [];
    function flatHelper(obj) {
        if (Object.keys(obj).length === 0) { return }
        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                flatHelper(obj[key])
            } else if (typeof obj[key] !== "function") {
                arr.push(obj[key])
            }
        }
    }
    flatHelper(this);
    return arr;
}

Object.prototype.random = function () {
    const FLAT_ARRAY = this.flatArr();
    let randomNum = Math.floor(Math.random() * FLAT_ARRAY.length);
    return FLAT_ARRAY[randomNum];
};

Object.prototype.toRandomArray = function () {
    const FLAT_ARRAY = this.flatArr();
    const permutationArr = [];
    function permutationFn(arr = [], indexGot = []) {
        if (arr.length === FLAT_ARRAY.length) {
            permutationArr.push([...arr]);
            // console.log(arr);
            return true;
        }
        for (let index = 0; index < FLAT_ARRAY.length; index++) {
            const element = FLAT_ARRAY[index];
            if (indexGot.includes(index)) continue;
            arr.push(element);
            indexGot.push(index);
            permutationFn(arr, indexGot);
            indexGot.pop();
            arr.pop();
        }
        return true;
    }
    permutationFn();
    let randomNum = Math.floor(Math.random() * permutationArr.length);
    return permutationArr[randomNum];
};

var obj = {
    a: 1,
    b: {
        x: 2,
        y: 3
    },
    c: {
        z: {
            q: 4
        }
    }
};
console.log(obj.toRandomArray())