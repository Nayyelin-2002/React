import Stus from "./components/One/one/Stusx";
//d htl ko css br pr lr tl
import Form from "./components/One/one/Form";
import { useState } from "react";
function App() {
  let [stus, setStus] = useState([]);

  let member = (mminfo) => {
    setStus([...stus, mminfo]);
  };

  let showdates = <p>No Member yet</p>;

  if (stus.length > 0) {
    showdates = stus.map(function (stu) {
      return <Stus name={stu.name} age={stu.age} key={stu.name} />;
    });
  }

  return (
    <div className="App">
      <section>{showdates}</section>
      <Form addnewmember={member} />
    </div>
  );
}

export default App; //t chr ny yr ka pyn khw 3
