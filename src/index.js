import React from "react";
import ReactDOM from "react-dom";
import { SketchPicker } from "react-color";
import Vishwamitra from "./vishwamitra";

import "./styles.css";

const detectLightOrDark = color => {
  const rgbString = `rgba(${color.r},${color.g},${color.b},1)`;
  return (
    <p
      style={{
        fontFamily: "Sans-Serif",
        fontSize: 20
      }}
    >
      {`The Chosen `}
      <i
        style={{
          color: rgbString,
          fontStyle: "normal",
          textDecoration: "underline",
          textUnderlinePosition: "under"
        }}
      >
        {"Colour"}
      </i>
      {" is "}
      <i
        style={{
          color: "orange",
          textDecoration: "underline",
          textUnderlinePosition: "under"
        }}
      >
        {Vishwamitra.guess(color)}
      </i>
    </p>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenColor: { r: 117, g: 127, b: 206 }
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange(color) {
    const { rgb } = color;
    this.setState(
      {
        chosenColor: { r: rgb.r, g: rgb.g, b: rgb.b }
      },
      this.render
    );
  }
  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            marginTop: "10%"
          }}
        >
          <div style={{ margin: "auto" }}>
            <SketchPicker
              color={this.state.chosenColor}
              onChangeComplete={this.handleColorChange}
            />
            <div style={{ marginTop: "20%" }}>
              {detectLightOrDark(this.state.chosenColor)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
