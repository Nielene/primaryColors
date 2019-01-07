const React = require("react");

class Primaries extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
  }

  colorChanger = () => {
    let { color } = this.state;
    if (color === "red") {
      this.setState({
        color: "blue"
      });
    } else if (color === "blue") {
      this.state({
        color: "yellow"
      });
    }
  };

  render() {
    const { color } = this.state;

    return (
      <div className="colors">
        <button onClick={this.colorChanger}>
          Color
        </button>
      </div>
    );
  }
}

// export default Primaries;
