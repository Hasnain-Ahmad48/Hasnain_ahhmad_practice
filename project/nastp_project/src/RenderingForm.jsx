import React, {use, useState} from "react";

function RenderingForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <>
      <div>
        <p>
          My nAme is {name}: My age is {age}: Email is {email}
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{
          padding: "5px",
          margin: "10px",
          border: "none",
          outline: "none",
        }}
      />
      <br />
      <input
        type="email"
        placeholder="Enter valid Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          padding: "5px",
          margin: "10px",
          border: "none",
          outline: "none",
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Enter yor age"
        value={age}
        onChange={e => setAge(e.target.value)}
        style={{
          padding: "5px",
          margin: "10px",
          border: "none",
          outline: "none",
        }}
      />
    </>
  );
}

export default RenderingForm;
