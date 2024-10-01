// JavaScript Object Notation  ----> JSON.
const user = { name: 'Kamrul', dateOfBirt: '08/06/2006', mobile: '01865628444' };

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);       //----------> JSON string: will convert in string.

//-------------------------------------------------------------------------------------------------------------

const shope = {
    name: 'Sokher dokan',
    owner: 'KAmrul',
    address: {
        street: 'Gochihata-Katiadi',
        city: 'Gochihata',
        shopeNo: '12/4, ButhMall'
    },
    isOpen: true,
    isNew: false
};

const shopeJSON = JSON.stringify(shope);

// console.log(shope);
// console.log(shopeJSON);

//------------------------------------------------------------------------------------------

const shopeString = shopeJSON;
const shopObj = JSON.parse(shopeString);        //---------> convert Json String in object.
console.log(shopObj);                                            
