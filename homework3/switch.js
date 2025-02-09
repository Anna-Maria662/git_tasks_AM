const b1 = false;
const b2 = false;

switch (b1,b2) {
    case b1 && b2:
    console.log ('say example 1');
    break;
} 

switch (b1,b2) {
    case b1 || b2:
        console.log ('say example 2');
        break;
    case b2 || b1:
        console.log ('if worked example 2');
        break;
}

switch (b1,b2 ){
    case b1 !=b2:
        console.log('if worked');
        break;
    case b2 !=b1:
        console.log ('else worked');
        break;
}

let a = 0;
const b = a < 1;
switch(a,b){
    case b == a < 1:
        console.log(b);
        break;
    case  b == a > 1:
        console.log(b);
        break;
}
