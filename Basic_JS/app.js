// // import { apikey, abc } from './utils.js'
// import * as utils from './utils.js'

// // console.log(apikey)
// // console.log(typeof abc)
// console.log(utils)
// const [a, b, c] = [1, 2, 3]
// console.log(a)
// const {a, b} = {a: 10, b: 2}
// console.log(a)
// console.log(b)
// const {a: newname1, b: newname2} = {a: 1, b: 2}
// console.log(newname1)
// console.log(newname2)

// const a = {
//     'name': 'Rushikesh',
//     'name1': 'Bhavsar',
//     func1(name) {
//         this.name=name
//         console.log(this.name)
//     }
// }
// console.log(a.name)
// a.func1('Rushi')
// console.log(a.name)
// function my({name, id}){
//     console.log(name)
//     console.log(id)
// }
// my({name: 'Rushikesh', id: 2})

// function my([name, id]){
//     console.log(name)
//     console.log(id)
// }
// my(['Rushikesh', 2])

// const a = [1, 2, 3]
// const b = [1, 2, 3]
// const c = [...a, ...b]
// console.log(c)

const a = {name: 'Rushikesh', name1: "Bhavsar"}
const b = {age: 28, gender: 'male'}
const c = {...a, ...b}
console.log(c)