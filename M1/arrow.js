//       You can write A function in various ways.

//    01. function declaration:-
// 1.1          
function add(num1 = 0, num2 = 0, num3 = 0) {
    Result = num1 + num2 + num3;
    return Result;
}
// 1.12         
function add(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

//   02. function expression:-
const add2 = function (num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}


//  03. ARROW  function  => 
const add3 = (num1 = 0, num2 = 0, num3 = 0) => num1 + num2 + num3;





console.log(add(1, 2, 3))
console.log(add2(1, 2, 3))
console.log(add3(1, 2, 3))