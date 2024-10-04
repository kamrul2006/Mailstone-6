
//-------------------load btn
const loadBtn = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayBtn(data.categories))
        .catch((error) => console.error(error))
}

//remove active colour:
const removeActive = () => {
    const bbtn = document.getElementsByClassName('cbtn');
    for (let btn of bbtn) {
        btn.classList.remove('active')
    }
}

// video load by category:
const loadCetaVdo = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const avbtn = document.getElementById(`btn-${id}`)
            avbtn.classList.add('active');

            displayVdo((data.category));
        })
        .catch((error) => console.error(error))
}

//--------------------- display btn
const displayBtn = (categories) => {
    categories.forEach(element => {
        const buttoncon = document.createElement('div');
        // buttoncon.classList = ''
        buttoncon.innerHTML = `
        <button id="btn-${element.category_id}" onclick="loadCetaVdo(${element.category_id})" class="btn cbtn"> ${element.category}</button> `;
        document.getElementById('btns').appendChild(buttoncon);
    });
}

//-------------------load VDO
const loadVdo = (searchText = "") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        // .then(data => console.log(data.videos))
        .then(data => displayVdo((data.videos)))
        .catch((error) => console.error(error))
}

// load deatels
const loadDetVd = async (vdoID) => {
    my_modal_5.showModal();
    // console.log(vdoID);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${vdoID}`;
    const res = await fetch(url);
    const data = await res.json()
    displayDet(data.video);
}
const displayDet = (vdod) => {
    // console.log(vdod)
    const modal = document.getElementById('dis');

    modal.innerText = `${vdod.description
        }`

}


//--------------------- display VDO
const displayVdo = (videos) => {

    document.getElementById('video').innerHTML = '';

    if (videos.length === 0) {
        document.getElementById('video').classList.remove("grid");
        document.getElementById('video').innerHTML = `
        <div class="text-center mx-auto w-full ">
             <img class="mx-auto mb-6" src="./assets/Icon.png" >
             <h2 class="text-xl font-black">Oops!! Sorry, <br> There is no content here.</h2>
        </div>`;
        return;
    }
    else {
        document.getElementById('video').classList.add("grid");

    }

    function convertSeconds(seconds) {
        const hours = parseInt(seconds / 3600); // Get the total hours
        const remainingMinutes = parseInt((seconds % 3600) / 60);
        const minutes = parseInt(seconds / 60); // Get the total minutes
        const remainingSeconds = seconds % 60;
        return ` ${hours}h. ${remainingMinutes}m. ${remainingSeconds}s. ago`
    }

    videos.forEach(element => {
        // console.log(element)
        const thmb = element.thumbnail;
        const title = element.title;
        const pp = element.authors[0].profile_picture;
        const otr = element.authors[0].profile_name;
        const vrfy = element.authors[0].verified;
        const vL = element.others.posted_date;


        const VidCon = document.createElement('div');
        VidCon.classList = 'card border-b-2 border-green-400 shadow-md '
        VidCon.innerHTML = `
        <figure class="h-[170px] relative">
            <img class="w-full h-full object-cover" src="${thmb}" />

            ${vL?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 px-2 bg-black text-green-400 text-xs rounded-xl">${convertSeconds(vL)}</span>`}

        </figure>

      <div class="pr-2 py-2  flex items-center justify-between ">

        <div class="pl-2 py-2  flex gap-2 ">
             <div>
                  <img class="w-10 h-10 object-cover mask mask-decagon" src="${pp}"/>
            </div>

            <div>
                  <h2 class="card-title text-lg font-bold font-serif">
                       ${title}
                  </h2>
                  <div class="flex gap-1">
                       <p class="text-sm text-gray-400">${otr}</p>
                      ${vrfy === true ? ` <img class="w-5" src="./assets/tik.png" />` : " "}
                 </div>
             </div>

        </div>

        <div>
        <button onclick="loadDetVd('${element.video_id}')" class="btn btn-xs bg-green-300">Details</button>
        </div>

    </div>  `;
        document.getElementById('video').appendChild(VidCon)
    });
}

document.getElementById('src').addEventListener('keyup', (e) => {
    const stxt = e.target.value;
    loadVdo(stxt)
})



loadBtn()
loadVdo()
