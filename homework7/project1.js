function sumArray(arr) {
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
}
var stringArray = ["1", "2", "3", "4", "5", "6"];
var numberArray = [1, 2, 3, 4, 5, 6];
// Convert string array to number array and calculate the sum
var stringSum = sumArray(stringArray.map(Number));
console.log("String elements sum:", stringSum);
var numberSum = sumArray(numberArray);
console.log("String numbers sum:", numberSum);
