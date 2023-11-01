# Day - 1

### Basic Of Java Script

#### Build Process(Pending)

#### Import and Export

- In order to use any variable, function or class from one file(module) into another file then we need to first export the value and then import it.
- In case of vanilla JS we need to mention the **type=module** in Script tag of HTML.
- Example

```js
// File one utils.js
export let apikey = "anyrandomkey";
```

```js
// File two main.js
import { apikey } from "./utils.js";
```

- We can expprt multiple named value from the module.

```js
export let apikey = "anyrandomapikey";
export let abc = "bnas";
```

```js
import { apikey, abc } from "./utils.js";
```

- We can also use **as** keyword to change the variable name while importing.

```js
import { apikey, abc as newname } from "./utils.js";
console.log(newname);
```

- We can also import multiple values as a JS object type.

```js
import * as util from "./utils.js";
console.log(util);
```

- **Default Export is one of the type to export values from file.**
- We can have only one default export in a single file.

```js
export default "anyrandomkey";
```

```js
import { apikey } from "./utils.js";
```

- In case of default export we don't need to mention the variable name we just need to mention the value.
- While importing we can give any name to the exported value.

#### Objects

- Objects are key value.
- We can have function also in object.
- We can also access/manipulate the keys of object inside the function.

```js
const a = {
  name: "Rushikesh",
  name1: "Bhavsar",
  func1(name) {
    this.name = name;
    console.log(this.name);
  },
};
console.log(a.name);
a.func1("Rushi");
console.log(a.name);
// Output:
// Rushikesh
// Rushi
// Rushi
```

#### Destructuring

- Destructuring means "pull out" the object(properties), array(values) and make them available as locally scoped variables
- Array Destructuring means storing the items of array in variable name.

```js
const [a, b, c] = [1, 2, 3];
```

- **Name of the variable while destructuring can be any name.**
- Object Destructuring means storing the values of objects key in variable.

```js
const { a, b } = { a: 1, b: 2 };
```

- In case of object destructuring we need to same the variable name same as object key.
- Using below syntax we can name different variable name while destructuring.

```js
const { a: newname1, b: newname2 } = { a: 1, b: 2 };
console.log(newname1);
console.log(newname2);
```

- We can also apply the destructuring while passing the object as paramter to function.

```js
function my({ name, id }) {
  console.log(name);
  console.log(id);
}
my({ name: "Rushikesh", id: 2 });
// Output
// Rushikesh
// 2
```

- The my function takes only one argument.
- Same is applied incase of array destructuring.

```js
function my([name, id]) {
  console.log(name);
  console.log(id);
}
my(["Rushikesh", 2]);
// Output
// Rushikesh
// 2
```

#### Spread Operator.

- We can merge N-number of array and objects into one array and one ojects respectively.

```js
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [...a, ...b];
console.log(c);
// Output
// [1, 2, 3, 1, 2, 3]
```

```js
const a = { name: "Rushikesh", name1: "Bhavsar" };
const b = { age: 28, gender: "Male" };
const c = { ...a, ...b };
console.log(c);
// Output
// {name: 'Rushikesh', name1: 'Bhavsar', age: 28, gender: 'Male'}
```

# Day - 2

## React Notes.

#### Components

- React component is the reuseable building blocks that is created using HTML, CSS and JS.
- React application is collect of such component.
- Each component can have separate file and hence all the code(HTML, JS and CSS) can be stored together.
- Component is the fundamental building block of React.
- With React, we write Declarative code.
- JSX is JavaScript Syntax eXtension.
- Using .jsx file we can write HTML code in JS file. This creating a React Component.
- React component can a function base code of class base code.
- The name of the react component function should start with capital letter.
- The function should return a single HTML render value which means that single HTML tag which can have n-number of internal tags.

```jsx
const Header = () => {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
```

- If we want to load dynamic values into HTML code in component we need to use **{}**.

```jsx
const reactDescription = ["Fundamental", "Crucial", "Core"];
const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
const Header = () => {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
```

- Passing JS variable as an attribute to HTML Tag.

```jsx
import reactImg from "./assets/react-core-concepts.png";

<img src={reactImg} alt="Stylized atom" />;
```

- Passing a parameter to a component is called as **props.**
- Props are nothing but a JS object.
- Each component can have only one props object which internally can store any value.
- The name of the props variable can be anything.

```jsx
const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

const App = () => {
  return (
    <div>
      <CoreConcept
        title="Components"
        description="The core UI building block."
        image={componentsImg}
      />
    </div>
  );
};
```

- Same as **Default Argument** concept for any JS Function we also have default props for React Component.

```jsx
export default function Button({ caption, type = "submit" }) {
  // caption has no default value, type has a default value of "submit"
}
```

- The above way of passing props is called as JS object destructuring.

# Day - 3

#### Children Props

- When we pass the value between the component then it is called as children props.

```jsx
<menu>
  <TabButton>Components</TabButton>
</menu>
```

- In above case we are passing **Components** in between react component and not passing as attribute to react component.
- We can access this **Components** value inside react component using **props.children** or **{children}**.

```jsx
export const TabButton = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};
```

#### EventListener Functions.

- There are various EventListener present.
- In react components EventListener are present as attributes on HTML components.
- We need to pass function reference as a value to this attributes.
- EventListener function are passed as a props to html tags in react.
- We can pass EventListener function as a props to any html tag inside components.

```jsx
// Passing EventListener as props to html tag inside components.
export const TabButton = ({ children }) => {
  const myEvent = () => {
    console.log("Hi Event Triggered.");
  };
  return (
    <li>
      <button onClick={myEvent}>{children}</button>
    </li>
  );
};
```

- We can also pass the EventListener function as a props to components and then pass it as a props to actual html tag.

```jsx
// App.jsx
function App() {
  const onSelect = () => {
    console.log("My Custom Event.");
  };
  return (
    <div>
      <main>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={onSelect}>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
```

```jsx
// Component.jsx
export const TabButton = ({ children, onSelect }) => {
  const myEvent = () => {
    console.log("Hi Event Triggered.");
  };
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};
```

- The name of the EventListener usually starts with camelCase with **on** prefix.
- In-order to pass the argument to EventListener function we need to pass it an arrow function which internally calls the EventListener function with normal argument.

```jsx
// App.jsx
function App() {
  const handleEvent = (selectedButton) => {
    console.log(selectedButton);
  };
  return (
    <div>
      <main>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleEvent("components")}>
              Components
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}
```
