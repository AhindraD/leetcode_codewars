// https://www.codewars.com/kata/5398beaf53f51088a9000fa7/train/javascript
function List(...arr) {
    this.length = 0;
    for (const key in arr) {
        this[key] = arr[key]
        this.length++;
    }
}

List.prototype.push = function (...elem) {
    elem.forEach(elem => { this[this.length++] = elem })
    // console.log(this, this.length)
    return this.length;
}

List.prototype.pop = function () {
    if (this.length <= 0) return
    this.length--;
    let lastElem = this[this.length];
    delete this[this.length];
    // console.log(this, this.length)
    return lastElem;
}

List.prototype.shift = function () {
    if (this.length <= 0) return
    let firstElem = this[0];
    for (const key in this) {
        if (key == 0) continue;
        let tempNum = Number(key);
        let tempVal = this[key];
        this[tempNum - 1] = tempVal;
    }
    this.length--;
    delete this[this.length];
    // console.log(this, this.length)
    return firstElem;
}

List.prototype.unshift = function (...elem) {
    let noOfElems = elem.length;
    let tempAdd = noOfElems;
    let lastIndexToCopy = this.length - 1;
    for (let i = this.length; i >= 0; i--) {
        this[this.length - 1 + tempAdd] = this[lastIndexToCopy];
        lastIndexToCopy--;
        tempAdd--;
    }
    elem.forEach((e, i) => this[i] = e)
    this.length += noOfElems;
    // console.log(this, this.length)
    return this.length;
}

List.prototype.filter = function (fn) {
    const filteredList = new List();
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            filteredList.push(this[i]);
        }
    }
    // console.log(this, this.length)
    return filteredList;
}