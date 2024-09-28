function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
const secondServer = kitchen();

// // now you call any function they have their own scope.

console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

console.log(secondServer());

console.log(firstServer());

console.log(secondServer());
console.log(secondServer());
console.log(secondServer());

console.log(firstServer());


