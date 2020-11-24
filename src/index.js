import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
/*
  - Render the ReactDOM Does:
    - What to show:
      - To show more than One inside single render, use a div
    - Where to show it:
      - The root from the index.html
*/
// html code inside javaScript & then javaScript inside html with using {}
// CSS, className is same as class element in html
// contentEditable allows you to edit the text in the browser, keep CamelCase in html its just lowercase, 4 styling
// prefered way is to use className & style in css
// <Heading> is the compoent Created just above
ReactDOM.render(<App />, document.getElementById("root"));
