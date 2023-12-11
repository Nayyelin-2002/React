import { useState, useRef } from "react";
import Card from "./Card";

function Form(props) {
  //   let [name, setName] = useState("");
  //   let [address, setAddress] = useState("");
  //   let [email, setEmail] = useState("");

  let reduser = useRef();
  let reflive = useRef();
  let refmail = useRef();
  let submitform = function (event) {
    event.preventDefault();
    if (
      reduser.current.value.trim().length === 0 ||
      reflive.current.value.trim().length === 0 ||
      refmail.current.value.trim().length === 0
    ) {
      alert("Please fill informations");
      return;
    }

    let info = {
      name: reduser.current.value,
      address: reflive.current.value,
      email: refmail.current.value,
    };
    props.userleepl(info);
    //     setAddress("");
    //     setEmail("");
    //     setName("");

    console.log(
      reduser.current.value,
      reflive.current.value,
      refmail.current.value
    );
    reduser.current.value = "";
    reflive.current.value = "";
    refmail.current.value = "";
  };

  //   let chgname = (event) => {
  //     setName(event.target.value);
  //   };
  //   let chgadd = (event) => {
  //     setAddress(event.target.value);
  //   };
  //   let chgem = (event) => {
  //     setEmail(event.target. value);
  //   };
  return (
    <Card key={refmail}>
      <form action="" onSubmit={submitform}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            //     value={reduser}
            //     onChange={chgname}
            ref={reduser}
          />
        </div>
        <div className="form-div">
          <label htmlFor="name">Address</label>
          <input
            type="text"
            id="Address"
            //     value={reflive}
            //     onChange={chgadd}
            ref={reflive}
          />
        </div>
        <div className="form-div">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="Email"
            //     value={refmail}
            //     onChange={chgem}
            ref={refmail}
          />
        </div>
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
}

export default Form;
