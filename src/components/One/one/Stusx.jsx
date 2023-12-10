import { useState } from "react";
function Stus(props) {
  let [name, setName] = useState(props.name);
  let age = props.age;
  let alertstus = function () {
    console.log(`before update ${name}`);
    setName("changed name");
    console.log(`after update ${name}`);
  };
  return (
    <ul>
      <li>
        <div>
          <p> name : {name}</p>
          <p> age : {age}</p>
        </div>
      </li>
    </ul>
  );
}

export default Stus;
