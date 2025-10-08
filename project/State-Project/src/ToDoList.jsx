// import React from "react";

// export default function ToDoList() {
//   const [name, setName] = React.useState("");
//   const [task, setTask] = React.useState([]);

//   return (
//     <div>
//       <h1>TO DO LIST</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />

//       <button
//         onClick={() => {
//           task.push(name);
//           console.log(task);
//           setTask(task);
//         }}
//       >
//         Add task to list
//       </button>

//       <ul>
//         {task.map(a => (
//           <li key={a}>{a}</li>
//         ))}

//         <button
//           onClick={() => {
//             // task.pop();
//             // setTask(task);

//           }}
//         >
//           Delete
//         </button>
//       </ul>
//     </div>
//   );
// }

import React from "react";

export default function ToDoList() {
  const [name, setName] = React.useState("");
  const [task, setTask] = React.useState([]);

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button
        onClick={() => {
          if (name.trim() !== "") {
            setTask([...task, name]);
            setName(""); // clear input
          }
        }}
      >
        Add task to list
      </button>

      <ul>
        {task.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      <button onClick={() => setTask(task.slice(0, -1))}>Delete Last</button>




    </div>
  );
}
