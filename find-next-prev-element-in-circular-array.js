const items = [10, 20, 30, 40];

// find current index element in circular array
function findCurrentIndexValue(array, index) {
    const calcIndex = index % (array.length);
    return array[calcIndex];
}

console.log(findCurrentIndexValue(items, 0)); // 10
console.log(findCurrentIndexValue(items, 3)); // 40
console.log(findCurrentIndexValue(items, 4)); // 10

// find current index element in circular array
function findNextIndexValue(array, index) {
    const calcIndex = (index + 1) % (array.length);
    return array[calcIndex];
}

console.log(findNextIndexValue(items, 0)); // 20
console.log(findNextIndexValue(items, 2)); // 40
console.log(findNextIndexValue(items, 3)); // 10
console.log(findNextIndexValue(items, 4)); // 20

// find current index element in circular array
function findPreviousIndexValue(array, index) {
    const calcIndex = (index + array.length - 1) % array.length;
    return array[calcIndex];
}

console.log(findPreviousIndexValue(items, 0)); // 40
console.log(findPreviousIndexValue(items, 1)); // 10
console.log(findPreviousIndexValue(items, 3)); // 30
console.log(findPreviousIndexValue(items, -1)); // 30
