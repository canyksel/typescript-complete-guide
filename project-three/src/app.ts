const userName = "Can";
//userName = 'can' --> const değeri değiştirilemez.
let age = 29;

age = 30;

// function add(a: number, b: number){
//     var result;
//     result = a+b;
//     return result;
// }

// if(age > 20){
//     let isOld = true;
// }

// console.log(isOld);
// console.log(result);

const add = (a: number, b: number = 1) => a + b;

//const add = (a: number = 1, b: number) => a + b;  --> bu kullanım yanlıştır. Default argument sonda kullanılabilir.

//const add = (a: number, b: number = 1) => a + b; --> default argument kullanımı.

console.log(add(2, 5));

// const printOutput = (output: string | number) =>{
//     console.log(output);
// }

const printOutput: (a: number | string) => void = output =>console.log(output);

printOutput(add(5));

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}