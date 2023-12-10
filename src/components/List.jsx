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
