/**     PassBy of value of any elements.
 * 
 * --> if you change any primitive value inside a function , it will not change in outside.
 * --> if you change any non-primitives value inside a function , it will change in outside also.
 */


// // ----------------------------- Primitive :-
const Num1 = 1;
const Num2 = 2;

function change(A, B) {
    A = 5;
    console.log(A, B);
}

// change(Num1, Num2);
// console.log(Num1, Num2);



//  // ---------------------------Non-primitive:
const team1 = { Name: 'Imran', Partner: 'Bithi' };
const team2 = { Name: 'Rony', Partner: 'Ekra' };

function game(A, B) {
    A.Name = 'Sadia';
    B.Partner = 'Mim';
}

// console.log(team1, team2);
// game(team1, team2);
// console.log(team1, team2);


