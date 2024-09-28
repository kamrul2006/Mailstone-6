/** -----------------Get true or false value.------------------------ */

/** ----------true:-         check truthy --->  (x) or (!!x) or (x === true )
 *   1. if directly set a value to true.
 * 2. any kind of number is true. (+,-) without 0.
 * 3. any kind of string is true. without empty string''.
 * 4. all kind of object is true.
 * 5. all kind of Array is true.
 */

/**  ----------false:-           check falsy  --->   (!x) or (x === false )
 * 1. if directly set a value to false.
 * 2. 0 is false.
 * 3. empty '' string is false.
 * 4. All kind of undefined value is false
 * 5. Null is false. 
*/

// //--------------------------------------------------------------------
const a = true;
const b = false;
// console.log(a, b);


const c = -1;
const d = 1;
const e = 0;
// if (c) {
//     console.log('true')
// }
// //-----------------------
// if (d) {
//     console.log('true')
// }
// //-----------------------
// if (e) {
//     console.log('true')
// }
// //-----------------------
// else {
//     console.info('false')
// }


const f = 'xyz';
const g = '';
// if (f) {
//     console.log('true')
// }
// //-----------------------
// if (g) {
//     console.log('true')
// }
// //-----------------------
// else {
//     console.info('false')
// }



// //   ===   type coercion.   {check the value and type.}
// //fd   ==   {check the value, not type.}


