const b1 = false;
const b2 = false;

if (b1 && b2) {
    console.log ('if worked');
} else if (b1 || b2) {
    console.log ('else if worked');
} else {
    console.log ('else worked');
}

console.log('-------------------');
console.log(b1 != b2 ? 'if worked' : 'else worked');

let a = 0;
const b = a < 1 ? 'positive' : 'negative';
console.log(b);