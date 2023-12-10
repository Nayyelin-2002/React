import { useState } from "react";
import Card from "./Card";

function Form(props) {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [email, setEmail] = useState("");
  let submitform = function (event) {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      address.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert("Please fill informations");
      return;
    }
    let info = {
      name,
      address,
      email,
    };
    props.userleepl(info);
    setAddress("");
    setEmail("");
    setName("");
  };

  let chgname = (event) => {
    setName(event.target.value);
  };
  let chgadd = (event) => {
    setAddress(event.target.value);
  };
  let chgem = (event) => {
    setEmail(event.target.value);
  };
  return (
    <Card>
      <form action="" onSubmit={submitform}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={chgname} />
        </div>
        <div className="form-div">
          <label htmlFor="name">Address</label>
          <input type="text" id="Address" value={address} onChange={chgadd} />
        </div>
        <div className="form-div">
          <label htmlFor="name">Email</label>
          <input type="text" id="Email" value={email} onChange={chgem} />
        </div>
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
}

export default Form;
