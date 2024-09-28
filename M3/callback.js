function greeting1(greeting, name) {
    greeting(name);
};

// // now we can pass any thing as argument in this function.

// greeting1('Halim Khan.')           //string
// greeting1(15)                              //number
// greeting1([1,2,3,4,5,6])              // array
// greeting1({
//     name: 'kamal',
//     age: 32,
//     isMarried: 'marrid'
// })                                                     // object

//greeting1(
//     function greetingMorning(name) {
//         console.log('Good Morning', name);
//     }
// );                                                         // function.


/*********************************************************************************************************************************************************** */

function greeting(greeting, name) {
    greeting(name);
};

// //-------------------------------------------------  CallBack Function.  ----------------


function greetingMorning(name) {
    console.log('Good Morning', name);
}
function greetingNoon(name) {
    console.log('Good Noon', name);
}
function greetingEvening(name) {
    console.log('Good Evening', name);
}
function greetingNight(name) {
    console.log('Good Night', name);
}

greeting(greetingMorning, 'Kamal');
greeting(greetingMorning, 'Jamal Khan');
greeting(greetingNoon, 'Kamal');
greeting(greetingEvening, 'Kamal');
greeting(greetingNight, 'Kamal');


