console.log(React)

console.log(ReactDOM)

var h1 = React.createElement("h1",null,"hellooo")
var h2 = React.createElement("h2",{id:"attribute"},"hellooo2")

var cont = [h1,h2]

let rootDiv = document.querySelector("#body-should-not-be-root")

var root = ReactDOM.createRoot(rootDiv)

root.render(cont) //only one argument accepted

