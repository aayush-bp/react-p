import React from "react";
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

