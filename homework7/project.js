var sumArray1 = function (arr) {
    if (!Array.isArray(arr)) {
        console.error("ERROR: Argument should be an array.");
        return NaN;
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            console.warn("Pay attention: Element with index ".concat(i, " is not a number and will be ignored."));
            continue;
        }
        sum += arr[i];
    }
    return sum;
};
var stringArray1 = ["1", "2", "3", "4", "5"];
var numberArray1 = [1, 2, 3, 4, 5, 6];
var stringArrayFixed = stringArray.map(Number);
var stringSum1 = sumArray(stringArrayFixed);
console.log("String elements sum:", stringSum);
var numberSum1 = sumArray(numberArray);
console.log("String numbers sum:", numberSum);
