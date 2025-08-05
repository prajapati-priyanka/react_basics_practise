// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
// console.log(heading);

// Nested Div:

{/* <div class="parent">
  <div class="child">
    <h1 id="heading">Hello World From React!!</h1>
  </div>
</div>; */}

// const parent = React.createElement("div",{className:"parent"}, React.createElement("div", {className:"child"}, React.createElement("h1",{id:"heading"}, "Hello World From React!!")))

// Nested Div with Siblings

{/* <div class="parent">
  <div class="child">
    <h1 id="heading">Hello World From React!!</h1>
    <h1 id="heading">Hello World From Brother React!!</h1>
  </div>
</div>; */}

// You can pass multiply children as an array but with this you require to add a KEY.
// const parent = React.createElement("div",{className:"parent"}, React.createElement("div", {className:"child"}, [React.createElement("h1",{id:"heading"}, "Hello World From React!!"), React.createElement("h1",{id:"heading"}, "Hello World From Brother React!!")]))

// You can also add multiple children comma separated. With this you do not need to add a KEY.
// const parent = React.createElement("div",{className:"parent"}, React.createElement("div", {className:"child"}, React.createElement("h1",{id:"heading"}, "Hello World From React!!"), React.createElement("h1",{id:"heading"}, "Hello World From Brother React!!")))
 
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
