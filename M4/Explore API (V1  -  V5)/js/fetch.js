//--------------------------------------------  1  ------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())      //response .json is similar  to JSON.pars  

//     // .then(response => console.log(response))    

//     // .then(json => console.log(json))

//-------------------------------------------  2  --------------------------------------------------------
// const url = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

//----------------------------------------  3  -------------------------------------------------

function Click() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}