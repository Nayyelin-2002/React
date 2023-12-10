import React, { useState } from "react";

function Form(props) {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  // let [info, setInfo] = useState({
  //   name: "",
  //   age: "",
  // });

  let chg = (event) => {
    setName(event.target.value);
  };

  let agee = (event) => {
    setAge(event.target.value);
  };

  let showdata = (event) => {
    event.preventDefault();
    let data = {
      name: name,
      age: age,
    };
    props.addnewmember(data);
    setName("");
    setAge("");
  };
  return (
    <form action="">
      <input type="text" placeholder="name" onChange={chg} value={name} />
      <input type="text" placeholder="age" onChange={agee} value={age} />
      <button type="submit" onClick={showdata}>
        Submit
      </button>
    </form>
  );
}

export default Form;
