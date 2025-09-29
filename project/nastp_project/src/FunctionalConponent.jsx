import React from "react";

export default function FunctionalConponent({firstName, lastName}) {
  const users = [
    {name: "Hasnain", lastName: "Ahmad"},
    {name: "Ali", lastName: "Khan"},
    {name: "saad", lastName: "Ahmed"},
  ];
 return (
    <>
        <h1>Name in the List are</h1>
    {
        users.map((users,index)=>(
<div key={index}>
    <p>My first Name is {users.name} and my Last Name is {users.lastName}</p>
</div>
        ))

        
    }
    </>
 )
}

// import React from 'react'

// export default function FunctionalComponet( {name, secondName} ) {
//   return (
//     <div>
//         <h1>FunctionalComponet 1</h1>
//         <h2>My name is {name} and my second name is {secondName}</h2>

//         </div>
//   )
// }
