import React from "react";
import "./App.css";
import Header from "./components/header/header.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "empty",
    };
  }
  
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
