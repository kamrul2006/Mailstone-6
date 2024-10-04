console.log(1);
console.log(2);
setTimeout(ss, 4000);     // SetTimeout and fetch do not follow the line. it load by itself.
Click();
console.log(4);
console.log(5);



function ss() {
    console.log(3)
}

function Click() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}