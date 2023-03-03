import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
//import { Saludar } from "./Saludar";
//import { Greeting } from "./Greeting";
//import { Button } from "./Button";
//import { TaskCard } from "./Task";
//import { Post } from "./Post";
//import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = [
  {
    id: 1,
    name: "Al T",
    image: "https://robohash.org/user2",
  },
  {
    id: 1,
    name: "FT",
    image: "https://robohash.org/user1",
  },
];

// const handleChange = (e)=>{
//   console.log(e.target.value)
// }

function Counter() {
  useEffect(() => {


    console.log("RENDER")
  }, [counter]);

  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button type="submit">Save</button>
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);
