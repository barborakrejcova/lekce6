//Maximum ze dvou čísel

/*
Napište funkci max2, která vrátí větší ze dvou zadaných čísel.
V JavaScriptu už na toto funkce existuje, jmenuje se Math.max.
Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.
*/

const max2 = (number1, number2) => {
    if (number1 > number2) {
    return document.body.innerHTML = `<p>${number1}</p>`
    } else if (number1 < number2) {
        return document.body.innerHTML = `<p>${number2}</p>`
    } else {
        return document.body.innerHTML = `<p>Čísla jsou stejně velká</p>`
    }
}

document.body.innerHTML += `<p>${max2(1, 2)}</p>`
document.body.innerHTML += `<p>${max2(3, 2)}</p>`
document.body.innerHTML += `<p>${max2(1, 1)}</p>`

//Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

/*
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
*/