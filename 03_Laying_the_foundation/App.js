import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS object => HTMLElement(render)
//jsx (babel transpiled before it reaches the JS) - Parcel - Babel
const elem = <span>React Element</span>;
const jsxHeading = <h2>{elem}</h2>;

const Title = () => {
  return <h1> Title</h1>;
};

// React functional Component

const number = 1000;

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1>{jsxHeading}</h1>
      <h1>React Functional Component</h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
