import { useState } from "react";
import "./App.css";
import { Button, Input } from "./components";

function App() {
  // const [firstname, setfirstname] = useState("");
  const [state, setstate] = useState({
    firstname: "",
    secondname: "",
    age: "",
  });

  function display() {
    console.log(state);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
        label="First Name"
          name="firstname"
          type="text"
          placeholder="Enter your First name"
          onChange={onChange}
        />

        <Input
        label="Second Name"
          name="secondname"
          type="text"
          placeholder="Enter your Second name"
          onChange={onChange}
        />
        <Input
          label="Age"
          name="age"
          type="number"
          placeholder="Enter your age"
          onChange={onChange}
        />

        <Button onClick={display} name="Submit" />
      </header>
    </div>
  );
}

export default App;
