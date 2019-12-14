import React from "react";
import ColorBox from "../component/ColorBox";
import axios from "axios";

class Home extends React.Component {
  state = {
    colors: []
  };

  componentDidMount() {
    axios.get("/api/colors")
      .then(results => this.setState({colors: results.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        {this.state.colors.map(color=> <ColorBox hex={color.hex} name={color.name} key={color._id} />)}
      </div>

    );
  }
}

export default Home;