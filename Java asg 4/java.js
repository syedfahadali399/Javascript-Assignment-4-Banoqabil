let num = prompt('Please Enter a Number')

for (let a = 1; a <= 10; a++) {
    let result = a * num;
    console.log(`${num} * ${a} = ${result}`); 
}

// Factorial of 5!
let b = 5
function facfor(number) {
    let fac = 1;
    for (let i = 1; i <= number; i++) {
        fac = fac * i
    }
    return fac
}
console.log('The Factorial of 5! =', facfor(b));