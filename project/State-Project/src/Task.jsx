import React from "react";

export default function Task() {
  const [FirstName, setFirstName] = React.useState("Hasnain");
  const [LastName, setLastName] = React.useState("Ahmad");

  return (
    <div>
      <h2>
        My Name is {FirstName} {LastName}
      </h2>
      <button onClick={() => setFirstName("ahmad")}>Change first name</button>
      <button onClick={() => setLastName("hasnain")}>Change last name</button>
    </div>
  );
}
