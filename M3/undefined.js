/**  <--------------------   8 ways to get undefined;  ---------------------->
 * 1. variable that is not initialized.
 * 2. function with no return.
 * 3. parameter that is not passed will be undefined,
 * 4. if return has nothing on the right side will return undefined,
 * 5. property that do not exist in any object that will return undefined,
 * 6. accessing the array element outside of the index range.
 * 7. deleting an element inside of an array.
 * 8. if you directly set a value to undefined.
*/

let f;
// console.log(f)


function second(a, b) {
    const total = a + b
};
// console.log(second())


function third(a, b, c) {
    const total = a + b + c;
    console.log(a, b, c)
};
// console.log(third(1, 2))


function neg(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b
};
// console.log(neg(1, -1))


const ss = { name: 'Nadim', salery: 12000 };
// console.log(ss.name, ss.age);


const kk = [40, 50, 60, 70, 80];
// console.log(kk[0], kk[1], kk[100]);


delete kk[2]                                         //never use that , use splice.
// console.log(kk)


const eight = undefined;
// console.log(eight);