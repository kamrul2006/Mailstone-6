const number = [1, 2, 3, 4, 5, 6];

// -------------------- forEach ------------------
// //Performs the specified action for each element in an array.forEach do the work like map but do not return anything like map.

const result = number.forEach(n => n * 2);   
// const result1 = number.map(n => n * 2);
// console.log(result);
// console.log(result1);

// ------------------- filter ----------------------
// //Returns the elements of an array that meet the condition specified in a callback function if it obey the conditions of the function or it will return an empty array.

const filter = number.filter(p => p > 5);
// console.log(filter);


// //--------------------- find  -------------------
// //Returns the first element of an array that meet the condition specified in a callback function if it obey the conditions of the function or it will return undefined .যাকে আগে পাবে, শুধু তাকেই দিবে।

const find = number.find(p => p > 1);
// console.log(find);

// // --------------------- reduce ---------------
// // will need tow parameter as a function to work. and work alike map.

const reduce = number.reduce((p, c) => p + c, 0);
console.log(reduce);
