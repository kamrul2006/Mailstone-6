// //-------------------Utilities.
const getId = (id) => {
    const bid = document.getElementById(id);
    return (bid)
}


//-------------------------- Loading display none. & cards:
const loadAllPhones = async (show, searchText) => {
    getId('loder').style.display = 'none'

    //--------------fetch
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : "iphone"}`
    // const url = ` https://openapi.programming-hero.com/api/phones?search=iphone`

    // //----------------with .then
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    // //-----------------with asyns/await
    const res = await fetch(url);
    const data = await res.json();
    if (show) {
        displayAllPhones(data.data)
    }
    else {
        displayAllPhones(data.data.slice(0, 6))
    }

}

//-------------------------showAll:
const HandleShowAll = () => {
    loadAllPhones(true)
}


//-----------------------display all phones.
const displayAllPhones = (phones) => {
    const phoneCon = getId('cardDiv');

    phones.forEach(phone => {
        // console.log(phone);

        // array destructuring.
        const { brand, phone_name, image, slug } = phone;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  mx-auto w-96 shadow-md">
  <figure class="px-10 pt-10">
    <img
      src="${image}"
      class="rounded-xl" />

  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone_name}</h2>
    <p>Brand Name  :  ${brand}.</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary btn-sm">Show Details</button>
    </div>
  </div>
</div>
        `;

        phoneCon.appendChild(div)

    });

}

//------------------load and after fetch function:
const HandleSearch = () => {
    getId('loder').style.display = 'block'

    const Search = getId('sbar').value;

    // // set time for 3 s.
    setTimeout(load => { loadAllPhones(false, Search) }, 3000)

}

// //--------------------phoneDetails
const phoneDetails = async (slug) => {
    my_modal_5.showModal()
    const modal = getId("dtext");

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data = await res.json();
    const data2 = (data.data)

    const div = document.createElement('div');
    div.innerHTML = `
                 <p>
                    Name:${data2.name} <br>
                    Storage Size :${data2.storage} <br>
                   Slug :${data2.slug} <br>
                   Mamory Size : ${data2.mainFeatures.memory}<br>
                    Display Size :${data2.mainFeatures.displaySize} <br>

                   Released On :${data2.releaseDate} <br>
                </p>
    `

    modal.appendChild(div)


}




loadAllPhones()