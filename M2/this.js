class Man {
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    sleep() {
        console.log(`${this.Name} is sleeping.` )
    }
    
}

const kodom = new Man('Kodom Ali', 25);
console.log(kodom)
kodom.sleep();