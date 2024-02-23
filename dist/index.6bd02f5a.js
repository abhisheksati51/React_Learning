// const heading = React.createElement(
//   "h1",
//   {id:'heading'},
//   "Hello everyone this is my first react Project"
// );
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "This is heading 1"),
    React.createElement("h2", {}, "This is heading 2")
]), React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {}, "This is heading 1"),
    React.createElement("h2", {}, "This is heading 2")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
