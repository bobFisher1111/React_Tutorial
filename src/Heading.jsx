// Creating Components: Create one with for heading giving the name:
// in the ReactDOM.render() it will be shown like this <Heading></Heading>
function Heading() {
  return (
    <h1 className="headingRed" contentEditable="true" spellCheck="false">
      Hello {fName + " " + lName}
    </h1>
  );
}
