import React from "react";
import "./App.css";
import { Button, Input } from "./components";

class App extends React.Component {
  // const [firstname, setfirstname] = useState("");
  // const [state,setstate]=useState({
  //   firstname: "",
  //   secondname: "",
  //   age: "",
  // });
  state = {
    firstname: "",
    secondname: "",
    age: "",
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setstate((state) => ({
    //   ...state,
    //   [e.target.name]: e.target.value,
    // }));
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    //console.log(this.state)
  };
  display= ()=> {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input
            label="First Name"
            name="firstname"
            type="text"
            placeholder="Enter your First name"
            onChange={this.onChange}
          />

          <Input
            label="Second Name"
            name="secondname"
            type="text"
            placeholder="Enter your Second name"
            onChange={this.onChange}
          />
          <Input
            label="Age"
            name="age"
            type="number"
            placeholder="Enter your age"
            onChange={this.onChange}
          />

          <Button onClick={this.display} name="Submit" />
        </header>
      </div>
    );
  }
}

export default App;
