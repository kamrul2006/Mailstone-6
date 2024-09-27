data: [
    { id: 1, Name: 'Lenovo', price: 65000 },
    { id: 2, Name: 'Hp', price: 55000 },
    { id: 3, Name: 'Asius', price: 45000 }
];

class Product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`Talking about ${talk}`)
    }
}

const lenovo = new Product('Le LE Lenovo')
// console.log(lenovo);
// lenovo.speak('Babu kaico?')

// //-----------------------------------------------------------------------
class Teacher {
    constructor(Name, Subject) {
        this.Name = Name;
        this.Subject = Subject;
    }
}

const Tapan = new Teacher('Sah Jahan Tapan', 'Math');
// console.log(Tapan)
const Jhanku = new Teacher('Jhankar Mahobub', 'Programming');
// console.log(Jhanku)