function deepClone(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = deepClone(obj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}




// Test case 1: cloning an empty object
const test1 = deepClone({});
console.log(test1); // Expected output: {}

// Test case 2: cloning an object with primitive values
const test2 = deepClone({ name: "John", age: 25 });
console.log(test2); // Expected output: { name: "John", age: 25 }

// Test case 3: cloning an object with nested objects
const obj = {
    name: "John",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    },
};
const test3 = deepClone(obj);
console.log(test3); // Expected output: { name: "John", age: 25, address: { street: "123 Main St", city: "New York", state: "NY" } }

// Test case 4: cloning an array
const arr = [1, 2, 3, [4, 5]];
const test4 = deepClone(arr);
console.log(test4); // Expected output: [1, 2, 3, [4, 5]]