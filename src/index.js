import React from "react";
import ReactDOM from "react-dom";

/*
  - Render the ReactDOM Does:
    - What to show:
      - To show more than One inside single render, use a div
    - Where to show it:
      - The root from the index.html
*/
ReactDOM.render(
  <div>
    <h1>Turtle Loves to dance</h1>
    <p>Only on the weekends</p>
  </div>,
  document.getElementById("root")
);
