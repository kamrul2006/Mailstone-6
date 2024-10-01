const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('An Error Occurred', error))
}


//-------------------------------------------------------------------------------

const loadComments2 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log(data);

}

//-------------------------------------------------------------------------------

const loadComments3 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json()
        console.log(data);
    }
    catch (error) {
        console.log('An Error Occurred', error);
    }

}



