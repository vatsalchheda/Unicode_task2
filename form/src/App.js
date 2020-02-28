import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      Bdate: ""
    };
  }
  fnameChangeHandler = event => {
    this.setState({ fname: event.target.value });
  };
  lnameChangeHandler = event => {
    this.setState({ lname: event.target.value });
  };
  dateChangeHandler = event => {
    this.setState({ Bdate: event.target.value });
  };
  render() {
    return (
      <form>
        <div id="left">
          <h1>Enter Your Details in the form</h1>
          <p>Enter your Firstname:</p>
          <input type="text" onChange={this.fnameChangeHandler} />
          <p>Enter your Lastname:</p>
          <input type="text" onChange={this.lnameChangeHandler} />
          <p>Enter your BirthDate:</p>
          <input type="text" onChange={this.dateChangeHandler} />
        </div>
        <div id="right">
          <h1>Hola! Your Specified Details are</h1>
          <h1>
            Your First name is <span className="Cred">{this.state.fname} </span>{" "}
          </h1>
          <h1>
            Your Last name is <span className="Cred"> {this.state.lname} </span>{" "}
          </h1>
          <h1>
            Your BirthDate is <span className="Cred"> {this.state.Bdate} </span>{" "}
          </h1>
        </div>
      </form>
    );
  }
}

export default App;
