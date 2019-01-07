import React from "react";
import "./WarmUp.css";

class WarmUp extends React.Component {
  constructor() {
    super();
    this.state = {
      colorArray: ["red", "blue", "yellow"],
      colorIdx: 0
    };
    this.handleClick = this.handleClick.bind(this); //keeps "this" inside the handleClick
  } // binding is good for debugging purposes. even with es6.
  //could also bind down there (button) but for the sake of being upfront with readers, corey likes to put it up here.
  //bind is keeping the context of this. handleclikc is a callback function.
  //function style , method style, callback style...

  //a callback function
  handleClick = () => {
    let { colorIdx, colorArray } = this.state;
    this.setState({
      colorIdx: (colorIdx + 1) % colorArray.length
    });
  };

  render() {
    let { colorArray, colorIdx } = this.state;
    return (
      // <React.Fragment> shortened to '<>'
      <>
        <div
          id="primaryColor"
          className={
            colorArray[colorIdx] + " anotherClassName"
          }
        />
        <button onClick={this.handleClick}>
          Click for Primary!
        </button>
      </>
    );
  }
}

export default WarmUp;

//===================
// <div
//   id="primaryColor"
//   className={
//     colorArray[colorIdx] +
//     "anotherClassName"
//   }
// />
//===================
// class Animal extends from Creature{
//   constructor(name, species) {
//     super(name)
//     // super()
//     // this.name = name;
//     this.species = species
//   }
// }

// human = new Animal ('corey', 'cat')
//===================
