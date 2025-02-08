
const stringArray = ["apple", "banana", "cherry", "date"];
console.log("StringArray:", stringArray);

console.log("forEach:");
stringArray.forEach((item, index) => {
    console.log(`Element ${index}: ${item}`);
});

const stringArrayUpperCase = stringArray.map(item => item.toUpperCase());
console.log("\n map (toUpperCase):", stringArrayUpperCase);

const numberArray = [1, 2, 3, 4, 5];
console.log("\n NumberArray", numberArray);

console.log("forEach:");
numberArray.forEach((item, index) => {
    console.log(`Element ${index}: ${item * 2}`);
});

const numberArraySquared = numberArray.map(item => item * item);
console.log("map (square):", numberArraySquared);

const booleanArray = [true, false, true, true, false];
console.log("\n BooleanArray:", booleanArray);

console.log("forEach:");
booleanArray.forEach((item, index) => {
    console.log(`Element TrueVSFalse ${index}: ${item ? "True" : "False"}`);
});

const booleanArrayString = booleanArray.map(item => item.toString());
console.log("map (toString):", booleanArrayString);

const anyArray = [1, "hello", true, { name: "John" }];
console.log("\n AnyArray:", anyArray);

console.log("forEach:");
anyArray.forEach((item, index) => {
    console.log(`Element ${index}:`, item);
});

const anyArrayType = anyArray.map(item => typeof item);
console.log("map (typeof):", anyArrayType);

console.log("\n Additional Operations with Number Array:");

const evenNumbers = numberArray.filter(item => item % 2 === 0);
console.log("filter (Even numbers):", evenNumbers);

const sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reduce (sum):", sum);

const firstGreaterThanThree = numberArray.find(item => item > 6);
console.log("find (Greater than three):", firstGreaterThanThree);

