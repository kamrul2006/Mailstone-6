const glass = { name: 'Glass', color: 'Transparent', price: 12, isClean: true };
console.log(glass);

const keys = Object.keys(glass);    //only show the name of Property of the object.
// console.log(keys)

const Velue = Object.values(glass);   //only show the values of Property of the object.
// console.log(Velue);

const Entries = Object.entries(glass);  // only get the pare of entry and its parameter in an Array of  Array or Two dimensional Array.
// console.log(Entries);

delete glass.isClean;     // you can delete any objects property .
// console.log(glass);

Object.seal(glass);    // you can change existing parameter but can't add or remove any property.
glass.color='Red.'                                  // yes
glass.MadeBy = 'Bangladesh.';          //  no
delete glass.color                                 //  no
// console.log(glass);

Object.freeze(glass);    // now the object is freezed . now you cant change any thing on this Object.(push, pull, pop, change, delete, add, ....,  & nothing.)
glass.isClean = false
delete glass.color
// console.log(glass);
