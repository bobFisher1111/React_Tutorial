import React from "react";

const fName = "Bob";
const lName = "Fisher";
const fullName = fName + " " + lName;
const currentDate = new Date(); // built in function
const year = currentDate.getFullYear();

function CreateCopyRight() {
  return (
    <div>
      <br></br>
      <p>Created by {fullName}</p>
      <p>Copyright {year}</p>
    </div>
  );
}

export default CreateCopyRight;
