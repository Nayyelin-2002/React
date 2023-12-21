// import React from "react";
// import Card from "./Card";

// function List(props) {
//   return (
//     <>
//       {props.user.map((information) => {
//         console.log(information.name);
//         return (
//           <Card>
//             <div>
//               <h1>Name: {information.name}</h1>
//               <p>Age: {information.age}</p>
//               <p>Email: {information.email}</p>
//             </div>
//           </Card>
//         );
//       })}
//     </>
//   );
// }

// export default List;

import Card from "./Card";

function List(props) {
  return (
    <>
      {props.informations.length > 0 ? (
        <>
          {props.informations.map((information) => {
            return (
              <Card css={"card-mt"} key={information.email}>
                <div className="list">
                  <p>Name : {information.name}</p>
                  <p>Address :{information.address}</p>
                  <p>Gmail : {information.email}</p>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Card css={"card-mt"}>
            <p>Fill informations</p>
          </Card>
        </>
      )}
    </>
  );
}

export default List;
