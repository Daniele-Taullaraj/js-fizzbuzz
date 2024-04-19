
let container = document.getElementById('contenitore');
container.style.gap = "10px";

for (let i = 1; i <= 100; i++) {

    let block = document.createElement('div');
    block.style.display = "flex";
    block.style.alignItems = "center";
    block.style.justifyContent = "center";
    block.style.padding = "20px";
    block.style.width = "calc((100% - 90px) / 10)";
    block.style.aspectRatio = "1";

    if (i % 3 === 0 && i % 5 === 0) {
        block.textContent = "FizzBuzz";
        block.style.backgroundColor = "#ff0000";
        container.append(block);
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        block.textContent = "Fizz";
        block.style.backgroundColor = "#00ff00";
        container.appendChild(block);
        console.log('Fizz');
    } else if (i % 5 === 0) {
        block.textContent = "Buzz";
        block.style.backgroundColor = "#0000ff";
        container.appendChild(block);
        console.log('Buzz');
    } else {
        block.textContent = i;
        block.style.backgroundColor = "#ffffff";
        container.appendChild(block);
        console.log(i);
    }
}



































// let block = document.createElement('div');
// block.style.display = "flex";
// block.style.alignItems = "center";
// block.style.justifyContent = "center";
// block.style.padding = "20px";
// block.style.margin = "10px";
// block.style.width = "10%"
// block.style.aspectRatio = "1";

// let block2 = document.createElement('div');
// block.style.display = "flex";
// block.style.alignItems = "center";
// block.style.justifyContent = "center";
// block.style.padding = "20px";
// block.style.margin = "10px";
// block.style.width = "10%"
// block.style.aspectRatio = "1";


// let block3 = document.createElement('div');
// block.style.display = "flex";
// block.style.alignItems = "center";
// block.style.justifyContent = "center";
// block.style.padding = "20px";
// block.style.margin = "10px";
// block.style.width = "10%"
// block.style.aspectRatio = "1";

// let container = document.getElementById('contenitore');





// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         block.textContent = "FizzBuzz";
//         block.style.backgroundColor = "#ff0000";
//         container.append(block);
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         block2.textContent = "Fizz";
//         block2.style.backgroundColor = "#00ff00";
//         container.appendChild(block2);
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         block3.textContent = "Buzz";
//         block3.style.backgroundColor = "#ff0000";
//         container.appendChild(block3);
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }
