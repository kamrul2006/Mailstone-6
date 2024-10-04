function a() {
    console.log('a');
    b()

    console.log('aa');
}
function b() {
    console.log('b')
    c()
    console.log('bb')
}
function c() {
    console.log('c')
    console.log('cc')
}

setTimeout(function () {
    console.log('nnn');
}, 2000)

const url = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

a()