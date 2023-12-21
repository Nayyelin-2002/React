// import React, { useState } from "react";
// import Card from "./Card";

// function Form(props) {
//   let [name, setName] = useState("");
//   let [age, setAge] = useState("");
//   let [email, setEmail] = useState("");

//   let username = function (event) {
//     setName(event.target.value);
//   };
//   let userage = function (event) {
//     setAge(event.target.value);
//   };
//   let useremail = function (event) {
//     setEmail(event.target.value);
//   };

//   let adduser = function (event) {
//     event.preventDefault();
//     if (
//       name.trim().length === 0 ||
//       age.trim().length === 0 ||
//       email.trim().length === 0
//     ) {
//       alert("fill infomations");
//       return;
//     }
//     let infos = [name, age, email];
//     props.giveinfo(infos);
//     console.log(infos);
//     setName("");
//     setEmail("");
//     setAge("");
//   };
//   return (
//     <Card>
//       <form onSubmit={adduser}>
//         <div className="form-div">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" value={name} onChange={username} />
//         </div>
//         <div className="form-div">
//           <label htmlFor="age">Age</label>
//           <input type="number" id="age" value={age} onChange={userage} />
//         </div>
//         <div className="form-div">
//           <label htmlFor="email">email</label>
//           <input type="text" id="email" value={email} onChange={useremail} />
//         </div>
//         <button className="btn" type="submit">
//           Add user
//         </button>
//       </form>
//     </Card>
//   );
// }

// export default Form;
import { useState, useRef, useEffect, useReducer } from "react";
import Card from "./Card";

function Form(props) {
  //   let [name, setName] = useState("");
  //   let [address, setAddress] = useState("");
  //   let [email, setEmail] = useState("");
  // let [username, setUsername] = useState("");
  // let [count, setCount] = useState(0);
  let firstReducer = (state, action) => {
    switch (action.type) {
      case "minus":
        return { ...state, count: state.count - 1 }; // Update count using object spread syntax

      case "plus":
        return { ...state, count: state.count + 1 };
      case "updateusername":
        return { ...state, username: action.payload };
      default:
        throw new Error();
    }
  };
  let [state, dispatch] = useReducer(firstReducer, { count: 0, username: "" });

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
      username: state.username,
    };
    props.userleepl(info);
    //     setAddress("");
    //     setEmail("");
    //     setName("");

    console.log(
      reduser.current.value,
      reflive.current.value,
      refmail.current.value,
      state.username
    );
    reduser.current.value = "";
    reflive.current.value = "";
    refmail.current.value = "";
    state.username = "";
  };

  //   let chgname = (event) => {
  //     setName(event.target.value);
  //   };
  //   let chgadd = (event) => {
  //     setAddress(event.target.value);
  //   };

  useEffect(() => {
    console.log("I am useeff");
  }, []);
  return (
    <Card key={refmail}>
      {/* useeff 3 nee */}
      <h1>Your username is - {state.username}</h1>
      <div className="username">
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
        <span>{state.count}</span>
        <button
          onClick={() => {
            dispatch({ type: "plus" });
          }}
        >
          +
        </button>
      </div>
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
          <label htmlFor="name">Userame</label>
          <input
            type="text"
            id="username"
            value={state.username}
            onChange={(e) => {
              dispatch({ type: "updateusername", payload: e.target.value });
            }}
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
