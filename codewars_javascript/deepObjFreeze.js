// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/train/javascript
Object.deepFreeze = function (object) {
    Object.freeze(object);
    for (const key in object) {
        if (typeof object[key] === "object" || !Object.isFrozen(object[key])) {
            Object.deepFreeze(object[key])
        }
    }
}