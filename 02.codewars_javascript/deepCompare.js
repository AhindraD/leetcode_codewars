https://www.codewars.com/kata/53c235e4d5cd9c397200021d/train/javascript
function deepCompare(o1, o2) {
    if (typeof o1 !== "object" || typeof o2 !== "object") {
        return o1 === o2;
    }
    if (Object.keys(o1 || {}).length !== Object.keys(o2 || {}).length) {
        return false;
    }
    for (const key in o1) {
        if (!Object.hasOwnProperty.call(o2, key) || !deepCompare(o1[key], o2[key])) {
            return false;
        }
    }
    return true;
}




// Test case 1
console.log(deepCompare({}, {})); // Expected output: true

// Test case 2
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 2 })); // Expected output: true

// Test case 3
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 3 })); // Expected output: false

// Test case 4
console.log(deepCompare({ a: 1, b: 2 }, {b:[1,2,3]})); // Expected output: false

// Test case 5
console.log(deepCompare({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // Expected output: false