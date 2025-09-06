import React from "react";
import ReactDOM from "react-dom/client";

const h2 = React.createElement("h2", {}, "content");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    h2,
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(parent); //return an js object
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("head"));
root.render(parent); //responsible for converting the object and tag and rendering it
root2.render(heading);
