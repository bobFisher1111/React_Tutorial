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
      <img
        className="favorite-video-games"
        src="https://mocah.org/uploads/posts/300770-Final-Fantasy-7-Remake-Tifa-Cloud-Aerith-4K.jpg"
      ></img>
      <li>Metal Gear Solid</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="http://cdn.knowledgehi.com/1600x900/20121027/metal%20gear%20solid%201600x900%20wallpaper_www.knowledgehi.com_86.jpg"
      ></img>
      <li>Witcher</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://www.techjeep.com/wp-content/uploads/2015/08/witcher-3-wallpapers-1.jpg"
      ></img>
      <li>Yakuza</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://wallpapercave.com/wp/wp3545674.jpg"
      ></img>
      <li>Read Dead Redemption</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://images8.alphacoders.com/359/359222.jpg"
      ></img>
      <li>Syphon Filter</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://pbs.twimg.com/media/CJfyVIgUEAAq_BH?format=jpg&name=medium"
      ></img>
      <li>Legend Of Zelda</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e36cc94-d6f8-4f61-bf51-2b5565ae7108/dabzhd6-ef602b3f-ed75-4651-8b6e-58c13597c0a6.png/v1/fill/w_1192,h_670,q_70,strp/minimalistic_legend_of_zelda_wallpaper__4k__by_henrikpw_dabzhd6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMTYwIiwicGF0aCI6IlwvZlwvNGUzNmNjOTQtZDZmOC00ZjYxLWJmNTEtMmI1NTY1YWU3MTA4XC9kYWJ6aGQ2LWVmNjAyYjNmLWVkNzUtNDY1MS04YjZlLTU4YzEzNTk3YzBhNi5wbmciLCJ3aWR0aCI6Ijw9Mzg0MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fs71cx3S9tOYVlIQ5Z2BuMj6bWtawqj2tlUp1DsyRN4"
      ></img>
      <li>Mass Effect</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://wallpaperaccess.com/full/2467174.jpg"
      ></img>
      <li>Uncharted</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://wallpapermemory.com/uploads/906/uncharted-drake-s-fortune-background-hd-1080p-497755.jpg"
      ></img>
      <li>The Elder Scrolls</li>
      <img
        className="favorite-video-games"
        alt="Video Game Picture"
        src="https://images7.alphacoders.com/319/319944.jpg"
      ></img>
    </ul>
    <br></br>
    <p>Created by {fullName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
