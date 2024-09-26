//    // Default : if ouu don't provide any parameters data it will take a given given value: Example:


//    //with no default value:-
function Add(n1, n2) {
    const Resault = n1 + n2
    console.log(n1, '+', n2, '=', Resault)
    return
}
//   // Now if I call the function:-
// Add(1, 2)
// Add(1)
// Add()


//    //with  default value:-
function Add2(n1 = 0, n2 = 0) {   //you can set any digit as default value.
    const Resault = n1 + n2
    console.log(n1, '+', n2, '=', Resault)
    return
}
//   // Now if I call the function:-
// Add2(1, 2)
// Add2(1)
// Add2(47, 2)


// Here are some default value for example
/**
 * for  ADD & subtract ------------------->  0
 * for multiply & division ----------------> 1
 * for a STRING --------------------------> ' '
 * for an ARRAY  -------------------------> [ ]
 * for an OBJECT ------------------------> { }
 * 
*/


