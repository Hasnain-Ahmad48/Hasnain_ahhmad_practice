import React, {use, useState} from "react";

function RenderingForm() {
  const [name, setName] = useState("");
  const {age, setAge} = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        
      />
      <br />
      <input
        type="email"
        placeholder="Enter valid Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      
      />
      <br />
      <input
        type="number"
        placeholder="Enter yor age"
        value={age}
        onChange={e => setAge(e.target.value)}
        
      />
    </>
  );
}

export default RenderingForm;
