// console.log('hello')

localStorage.setItem('hello', 'im here!')

const hello = window.localStorage.getItem('hello')
console.log(hello)

const addAge = () => {
    localStorage.setItem('age', 21)
}
const addNUM = () => {
    localStorage.setItem('Number', '0186562844')
}

const age = localStorage.getItem('age')
console.log(age)
const num = localStorage.getItem('Number')
console.log(num)


// window.localStorage আর শুধু   localStorage একই কথা। 