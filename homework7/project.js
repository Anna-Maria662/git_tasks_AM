const sumArray = function (arr) {
    if (!Array.isArray(arr)) {
        console.error("ERROR: Argument should be an array.");
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            console.warn("Pay attention: Element with index ".concat(i, " is not a number and will be ignored."));
            continue;
        }
        sum += arr[i];
    }
    return sum;
};
const stringArray = ["1", "2", "3", "4", "5"];
const numberArray = [1, 2, 3, 4, 5, 6];
const stringArrayFixed = stringArray.map(Number);
const stringSum = sumArray(stringArrayFixed);
console.log("String elements sum:", stringSum);
const numberSum = sumArray(numberArray);
console.log("String numbers sum:", numberSum);
