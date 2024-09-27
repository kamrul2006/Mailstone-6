// Data access:
//-------------------------------------------------------------------------------------------------------------------------
const Data = [{ data: 1, name: 'Abul', address: 'Kishoreganj' }];

//  //  will not get the value directly: cause it is not a simple object.
// console.log(Data.address);         
// //first you have to get the first element of the object of the array by its index.
// console.log(Data[0]);                     
// //now after getting the Object ,you can get the property.
// console.log(Data[0].address);        
//--------------------------------------------------------------------------------------------------------------------------
const Data2 = {
    count: 50000,
    data: [
        { id: 1, Name: 'Lenovo', price: 65000 },
        { id: 2, Name: 'Hp', price: 55000 },            // Hp price?
        { id: 3, Name: 'Asius', price: 45000 }
    ],
    shope: 'Katiadi'
};

const hpPrice = Data2.data[1].price;
// console.log(hpPrice);

//----------------------------------------------------------------------------------------------------------------------------
const user = {
    Name: 'Kamrul',
    address: {
        District: 'Kishoreganj',
        thana: 'Katiadi',
        Home: {
            Union: 5,
            word: 1,
            village: {
                name: 'Mumurdia',
                part: 'Uttar mumurdia',
                house: {
                    s1: 'Shinghapukor',
                    s2: 'Haqqani Darbar Sharif.',
                    s3: 'It Is My House.'                                     //Get my house!
                }
            }
        }
    }
};

const myHouse = user.address.Home.village.house.s3;
// const Haqqani = user.address.home.village.house.s3;                  // there is no home property . so it will trow an error.
const Haqqani = user.address.home?.village.house.s3;          // for the ? mark in here it will stay undefined but will not trow any error.
console.log(myHouse);
console.log(Haqqani);