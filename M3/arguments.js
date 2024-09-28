function add(a, b, c) {
    // console.log(arguments);             // 'arguments' can only be called inside a function.
    console.log([...arguments]);             // if you want  'arguments' to print inside an Array.

    const result = a + b + c;
    return result;
}
/**  Arguments (inside a function only) 
 * 
 * ---> you cant declare it outside of any function.
 * ---> you can trow a for, for(of) loop.
 * ---. you cant push pop pull anything.
 * ---> you can print its element with its index[].
 * 
*/

// const total = add(1, 2, 3);
const total = add(1, 2, 3, 4, 5, 6, 7, 8);

console.log(total);

