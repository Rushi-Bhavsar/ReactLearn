# Day - 1
### Basic Of Java Script

#### Build Process(Pending)

#### Import and Export
- In order to use any variable, function or class from one file(module) into another file then we need to first export the value and then import it.
- In case of vanilla JS we need to mention the **type=module** in Script tag of HTML.
- Example
```js
// File one utils.js
export let apikey = 'anyrandomkey';
```
```js
// File two main.js
import { apikey } from './utils.js'
```
- We can expprt multiple named value from the module.
```js
export let apikey = 'anyrandomapikey'
export let abc = 'bnas'
```
```js
import {apikey, abc } from './utils.js'
```
- We can also use **as** keyword to change the variable name while importing.
```js
import {apikey, abc as newname} from './utils.js'
console.log(newname)
```
- We can also import multiple values as a JS object type.
```js
import * as util from './utils.js'
console.log(util)
```
- **Default Export is one of the type to export values from file.**
- We can have only one default export in a single file.
```js
export default 'anyrandomkey';
```
```js
import {apikey} from './utils.js'
```
- In case of default export we don't need to mention the variable name we just need to mention the value.
- While importing we can give any name to the exported value.

#### Objects
- Objects are key value.
- We can have function also in object.
- We can also access/manipulate the keys of object inside the function.
```js
const a = {
    'name': 'Rushikesh',
    'name1': 'Bhavsar',
    func1(name) {
        this.name=name
        console.log(this.name)
    }
}
console.log(a.name)
a.func1('Rushi')
console.log(a.name)
// Output:
// Rushikesh
// Rushi
// Rushi
```
#### Destructuring
- Destructuring means "pull out" the object(properties), array(values) and make them available as locally scoped variables
- Array Destructuring means storing the items of array in variable name.
```js
const [a, b, c] = [1, 2, 3]
```
- **Name of the variable while destructuring can be any name.**
- Object Destructuring means storing the values of objects key in variable.
```js
const {a, b} = {a: 1, b: 2}
```
- In case of object destructuring we need to same the variable name same as object key.
- Using below syntax we can name different variable name while destructuring.
```js
const {a: newname1, b: newname2} = {a: 1, b: 2}
console.log(newname1)
console.log(newname2)
```
- We can also apply the destructuring while passing the object as paramter to function.
```js
function my({name, id}){
    console.log(name)
    console.log(id)
}
my({name: 'Rushikesh', id: 2})
// Output
// Rushikesh
// 2
```
- The my function takes only one argument.
- Same is applied incase of array destructuring.
```js
function my([name, id]){
    console.log(name)
    console.log(id)
}
my(['Rushikesh', 2])
// Output
// Rushikesh
// 2
```
#### Spread Operator.
- We can merge N-number of array and objects into one array and one ojects respectively.
```js
const a = [1, 2, 3]
const b = [1, 2, 3]
const c = [...a, ...b]
console.log(c)
// Output
// [1, 2, 3, 1, 2, 3]
```
```js
const a = {name: 'Rushikesh', name1: "Bhavsar"}
const b = {age: 28, gender: 'Male'}
const c = {...a, ...b}
console.log(c)
// Output
// {name: 'Rushikesh', name1: 'Bhavsar', age: 28, gender: 'Male'}
```