const b1 = true;
const b2 = false;

switch (b1 && b2) {
    case 'example 1':
    console.log ('say example 1');
    break;
} 
switch (b1 || b2) {
    case 'example 2':
        console.log ('say example 2');
        break;
    case 'if worked example 2':
        console.log ('if worked example 2');
        break;
}

switch (b1 !=b2 ){
    case 'if worked':
        console.log('if worked');
        break;
    case 'else worked':
        console.log ('else worked');
        break;
}

let a = 0;
const b = a < 1;
switch(b == a < 1){
    case 'positive':
        console.log('b');
        break;
    case 'negative':
        console.log('b');
        break;
}
