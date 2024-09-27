/** MAP --->   loops trough each element of the array and do the operation that passed in the callback function and hold the result from each operation in an ARRAy and finally returns you the ARRAy of values. */



const number = [4, 5, 6, 7, 8, 9, 10];
// //------------------------------------------   01  ------------------------------------
const result = [];
for (num of number) {
    const doubled = num * 2;
    result.push(doubled);
}

// console.log(result);
// //------------------------------------------  02  -------------------------------------
function doubleIt(num) {
    return num * 2;
};

const result2 = number.map(doubleIt);
// console.log(result2);
// //-----------------------------------------  03  ---------------------------------------
const doubleIt2 = n => n * 2;

const result3 = number.map(doubleIt2);
// console.log(result3);
// //-----------------------------------------  04  ---------------------------------------
const result4 = number.map(n => n * 2);

console.log(result4);

//get first letter letter of frinds array:-
const friends = ['kalam', 'balam', 'salam', 'aslam', 'gelam'];
const fLetter = friends.map(f => f[0]);
console.log(fLetter.toLocaleUpperCase);