// SPREAD property  of js:-

//01. no spread:
//1.1
const max = Math.max(1, 2, 10, 4, 5, 6, 7, 8, 9);

// console.log(max);

//1.2; it will not work properly; and print a NaN for an Array and object.
const Number = [1, 5, 7, 8, 2, 12, 5, 5, 6, 5, 63, 3, 56, 56, 859, 96, 52, 6256, 263, 526, 65, 66, 56, 89];
const arrayMax = Math.max(Number);

// console.log(arrayMax);



//  02 : With spread operator '    ...  '   :- 
const Number1 = [1, 5, 7, 8, 2, 12, 5, 5, 6, 5, 63, 3, 56, 56, 859, 96, 52, 6256, 263, 526, 65, 66, 56, 89];
const arrayMax1 = Math.max(...Number1);

// console.log(arrayMax1);


//-----------------------------------   Use spread operator to copy:-    ----------- ---------------------------
// * with out spread operator:
const friends = [19, 20, 19, 18, 17];
const bondhu = friends;

// if push or pull or pop something from 'bondhu' now it will act for both 'bondhu' and 'friend'. Example:-
bondhu.push(21)

// console.log(bondhu);
// console.log(friends);

// with spread operator:-
const friends2 = [19, 20, 19, 18, 17];
const bondhu2 = [...friends2];

// if push or pull or pop something from 'bondhu2' now it will  not act for both 'bondhu2' and 'friend2' but only for 'bondhu2'. Example:-
bondhu2.push(21)
// you can add any new item directly with spread operator;-
const bondhu3 = [...friends2, 12, 45, 78];

console.log(friends2);
console.log(bondhu2);
console.log(bondhu3);


