function Click2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
//----------------------------------------------------------------------------------

function Click3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
}

//----------------------------------------------------------------------------------
function Click4() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => DUser(data))
}

function DUser(data) {
    for (const user of data) {
        console.log(user)
        // console.log(user.email)
        // console.log(user.username)
    }
}

//----------------------------------------------------------------------------------
function Click5() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => DUserName(data))
}

function DUserName(data) {
    const ul = document.getElementById('uList');
    for (const user of data) {
        // console.log(user.name)
        const UserName = user.name;
        // console.log(user.email)
        // console.log(user.username)
        const li = document.createElement('li');
        li.innerText = UserName;
        ul.appendChild(li)
        ul.removeAttribute('style')
    }

}

