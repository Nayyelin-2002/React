// import React, { useState } from "react";
// import Form from "./Form";
// import List from "./List";

// function Main() {
//   const [user, setUser] = useState([]);

//   const giveinfofromain = (info) => {
//     setUser([...user, info]);
//   };

//   return (
//     <section className="main">
//       <Form giveinfo={giveinfofromain} />
//       <List user={user} /> {/* Pass user prop here */}
//     </section>
//   );
// }

// export default Main;
import { useState } from "react";
import Form from "./Form";
import List from "./List";
function Main() {
  let [userinfo, setUserinfo] = useState([]);
  let user = (userabout) => {
    setUserinfo([...userinfo, userabout]);
  };
  return (
    <section className="Main">
      <Form userleepl={user} />
      <List informations={userinfo} />
    </section>
  );
}

export default Main;
