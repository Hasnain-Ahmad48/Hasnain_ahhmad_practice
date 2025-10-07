import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Task from "./Task.jsx";
import ToDoList from "./ToDoList.jsx";

createRoot(document.getElementById("root")).render(<ToDoList />);
