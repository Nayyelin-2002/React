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
