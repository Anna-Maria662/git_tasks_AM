const sumArray1 = (arr: any[]): number => {
  if (!Array.isArray(arr)) {
    console.error("ERROR: Argument should be an array.");
    return NaN;
  }

  let sum: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      console.warn(`Pay attention: Element with index ${i} is not a number and will be ignored.`);
      continue;
    }
    sum += arr[i];
  }
  return sum; 
};

const stringArray1: string[] = ["1", "2", "3", "4", "5"];
const numberArray1: number[] = [1, 2, 3, 4, 5, 6];
const stringArrayFixed: number[] = stringArray.map(Number);
const stringSum1: number = sumArray(stringArrayFixed);
console.log("String elements sum:", stringSum);

const numberSum1: number = sumArray(numberArray);
console.log("String numbers sum:", numberSum);