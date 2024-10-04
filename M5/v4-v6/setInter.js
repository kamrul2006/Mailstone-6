console.log(1);
console.log(2);

// setTimeout(function () {
//     console.log(3);
// }, 2000)


let i = 0;
const clockId = setInterval(function () {
    i++;
    console.log(i);

    if (i >= 10) {
        clearInterval(clockId)
    }
}, 2000)

console.log(4);
console.log(5);
console.log(6);