const addCart = () => {
    const pN = document.getElementById('porductN')
    const pQ = document.getElementById('porductQ')
    const PrN = pN.value;
    const PrQ = pQ.value;
    pN.value = '';
    pQ.value = '';

    if (PrN === '' || PrQ === '') {
        alert('pleas input somthing')
        return;
    }
    // console.log(PrN, PrQ)
    DisPro(PrN, PrQ)
    SavePro(PrN, PrQ)
}

const DisPro = (Pn,Pq) => {
    const ol = document.getElementById('ol');
    const li = document.createElement('li');
    li.innerText = `Name:${Pn}------------>${Pq} ps.`
    ol.appendChild(li)
}

const getCart = () => {
    let cart = {};
    const SCart = localStorage.getItem('cart');
    if (SCart) {
        cart=JSON.parse(SCart)
    }

    return cart;
}

const SavePro = (pr,qn) => {
    const cart = getCart();
    cart[pr] = qn;

    const cartStri = JSON.stringify(cart);
    localStorage.setItem('cart',cartStri)


    // console.info(cartStri)
}

const disFLS = () => {
    const saved = getCart();
    // console.log(saved)
    for (const pr in saved) {
        const qn=saved[pr]
        // console.log(pr,qn)
        DisPro(pr,qn)
    }
}
disFLS()