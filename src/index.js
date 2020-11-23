import React from "react";
import ReactDOM from "react-dom";

/*
  - Render the ReactDOM Does:
    - What to show:
      - To show more than One inside single render, use a div
    - Where to show it:
      - The root from the index.html
*/
// javascript variable:
const fName = "Bob";
const lName = "Fisher";
const fullName = fName + " " + lName;
const currentDate = new Date(); // built in function
const year = currentDate.getFullYear();

// html code inside javaScript & then javaScript inside html with using {}
// CSS, className is same as class element in html
// contentEditable allows you to edit the text in the browser, keep CamelCase in html its just lowercase, 4 styling
// prefered way is to use className & style in css
ReactDOM.render(
  <div>
    <h1 className="headingRed" contentEditable="true" spellCheck="false">
      Hello {fName + " " + lName}
    </h1>
    <h1 className="headingBlue" contentEditable="false" spellCheck="false">
      Top Ten Game Series:
    </h1>
    <p>My opion of course....</p>
    <ul>
      <li>Final Fantasy</li>
      <li>Metal Gear Solid</li>
      <li>Witcher</li>
      <li>Yakuza</li>
      <li>Read Dead Redemption</li>
      <li>Syphon Filter</li>
      <li>Legend Of Zelda</li>
      <li>Mass Effect</li>
      <li>The Last Of US</li>
      <li>The Elder Scrolls</li>
    </ul>
    <br></br>
    <p>Created by {fullName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
