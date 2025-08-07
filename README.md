# Lets Learn React 🚀

# Parcel
- Dev Build
- Creates a Local server
- HMR = Hot Module Replacement (Reloads the page for us on every save)
- Has a File watching algorithm written in c++ that whats all the files and performs HMR on every change 
- Caching - gives faster builds through parcel cache files so that next build are developed faster 
- Image optimization 
- Minification - Minify our file while creating a production build
- Bundling
- compress
- consistent hashing (keeps the track of hash code)
- code splitting (split the code file)
- differential bundling (when your app is opened it can be opened in any version of internet explorer which is taken care by parcel)
- diagnostics
- better error handling (error suggestions)
- HTTPs hosting (ssl)
- Tree shaking (remove unsed code for you)
- Different dev and prod bundles

# browserslist
- you can add this in package.json to make your app work for any versions of browser you like 

# Ep1 : Inception Code
``` the empty object is used to to give attributes to the tag Eg:{id:"heading"}

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!!!");
console.log(heading);

// here the above console will print the react element in the console that is nothing but the javascript object containing the tag name, attributes and children
// ReactDOM is used to render the react element to the DOM
// ReactDOM.createRoot is used to create a root for the React application
// document.getElementById("root") is used to get the root element in the HTML file
// render is the method that is used to render the react element to the DOM that is displaying the h1 tag with the text "Hello world from React!!!" in the root element of the HTML file.

<!-- /* <div id = "parent"> 
    <div id = "child">
        <h1 id="heading">Hello From H1 Tag !!!</h1>
    </div>
</div> */ -->

// To render the above HTML structure using React, we can create a parent and child element as follows:

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello From H1 Tag !!!"),
    React.createElement("h2", { id: "heading1" }, "Hello From H2 Tag !!!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 

// The above way to display the HTML structure is not recommended as it is not readable and maintainable. Instead, we can use JSX to write the same code in a more readable way. 
```

# Ep3 : Laying the Foundation
```
# Ep 3: Laying the foundation 

``` import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="heading" className="head">
    "Hello React from JSX 🚀"
  </h1>
);

const Title = () => (
    <div id ="container" className="container">
    <h1>
      Rendering from Title functional component
    </h1>
    </div>
)

// React component 
// Class based component - OLD way of writing code (nobody uses now)
// Functional component - NEW 

// React Functional Component is just a javascript component which returns some jsx element (name it with a capital letter always)

// const HeadingComponent = () => {
//     return <h1>React from Functional component</h1>
// };

// const HeadingComponent2 = () => <h1>React from Functional Component</h1>; // wrap it inside () if you have multiple lines shown below

const number = 1000;
// Functional component 
const HeadingComponent = () => (
  <div id ="container" className="container">
   {/* this is how we rendering from different fucntional component also known as component composition */}
    <Title/>
    {Title()}
    {/* we can inject any javascript code inside these curly braces inside jsx => js inside jsx */}
    {number}
    {/* this is how we render the react element in jsx  */}
    {jsxHeading} 
  <h1>
    React from Functional Component 
  </h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the React element to the root
// root.render(jsxHeading);
// Rendering the React component to the root
root.render(<HeadingComponent />);
```






