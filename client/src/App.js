import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";

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
        <main className="main">
          <Home />
        </main>
      </>
    );
  }
}

export default App;
