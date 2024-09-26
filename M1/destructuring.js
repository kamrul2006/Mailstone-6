const actor = {
    name: 'Ananta',
    phone: '01222222222',
    age: 30,
    income: 100001
}

// const name = actor.name;
// const phone = actor.phone1;
// const age = actor.age;

// console.log(name);
// console.log(age);
// console.log(phone);

// ************************************       DESTRUCTURING of OBJECT     *************************

// if the right side is an object than the destructuring of left side will be an object too.
// declare a variable name as a variable that contain the property.
const { phone } = actor;
// you can set more than one variable with a destructuring.
const { name, age, income } = actor;
// you can change the variable name with destructuring also.(Alias)
const { name: calling, age: boyos } = actor;

// console.log(name);
// console.log(age);
// console.log(phone);
// console.log(income);
// console.log(boyos);
// console.log(calling);


// ************************************       DESTRUCTURING of OBJECT     *************************
const number = [1, 2, 3, 4, 5];
function Di(x, y) {
    return [x * 2, y * 2];
};


// if the right side is an Array than the destructuring of left side will be an Array too.
// declared  variable name will contain that positions property.
const [a, b, c, d, e] = number;
//you can skip any property of any position by ,, & that will not contain that positions property.
const [i, , j, , k, l] = number;
// you ca declare a functions parameter with destructuring.
const [m, n] = Di(1, 2);


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log('------------------------------------');
console.log(m);
console.log(n);