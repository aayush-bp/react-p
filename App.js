import React from "react";
import ReactDOM from "react-dom/client"; 
// the empty object is used to to give attributes to the tag Eg:{id:"heading"}

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!!!");
console.log(heading);

// here the above console will print the react element in the console that is nothing but the javascript object containing the tag name, attributes and children
// ReactDOM is used to render the react element to the DOM
// ReactDOM.createRoot is used to create a root for the React application
// document.getElementById("root") is used to get the root element in the HTML file
// render is the method that is used to render the react element to the DOM that is displaying the h1 tag with the text "Hello world from React!!!" in the root element of the HTML file.

/* <div id = "parent"> 
    <div id = "child">
        <h1 id="heading">Hello From H1 Tag !!!</h1>
    </div>
</div> */

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

