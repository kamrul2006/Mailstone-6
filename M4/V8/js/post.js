
function LoadPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayPost(data))
}

function DisplayPost(posts) {
    const postContainer = document.getElementById('postContainer');
    for (const post of posts) {
        const ID = post.userId;
        const Title = post.title;
        const Body = post.body;

        const Div = document.createElement('div');
        Div.innerHTML = `
        <div  style="text-align: center; background-color: lightgreen;  padding: 5px;">
               <h5> User Id:${ID}</h5>
        <h3>${Title}</h3>
        <p >${Body}</p>
        </div>

        <hr>
        `;

        postContainer.appendChild(Div)
    }
    return;

}


//--------------------------------------------------------------------------------

function deletpost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

deletpost()

//--------------------------------------------------------------------------------
function putPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

putPost()

//------------------------------------------------------------------------------------
function creatPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

creatPost() 
