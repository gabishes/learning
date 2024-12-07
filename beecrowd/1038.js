var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let values = input.split(' ')
let item = parseInt(values[0]);
let quantity = parseInt(values[1]);
let  result;

if(item  ==  1){
    result = quantity *  4;
}

if(item  ==  2){
    result = quantity *  4.50;
}

if(item  ==  3){
    result = quantity *  5;
}

if(item  ==  4){
    result = quantity *  2;
}

if(item  ==  5){
    result = quantity *  1.50;
}

console.log(`Total: R$ ${result.toFixed(2)}`)