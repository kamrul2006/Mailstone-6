const loadAllPost = async (catagory) => {
    // const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts`)
    // const data = await res.json()
    // console.log(data.posts)
    if (catagory) {
        

    }
    else {

    }

}

const handleSearchByCategory = () => {
    const SBarTxt = document.getElementById('searchPosts').value;

    loadAllPost(SBarTxt)
}















loadAllPost()