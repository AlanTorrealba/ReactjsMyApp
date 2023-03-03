import React from "react";
import ReactDOM from "react-dom/client";
//import { Saludar } from "./Saludar";
//import { Greeting } from "./Greeting";
// import { Button } from "./Button";
// import { TaskCard } from "./Task";
import { Post } from "./Post";
//import Product from "./Product";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const handleChange = (e)=>{
//   console.log(e.target.value)
// }
root.render(
  <>
    <Post />

    {/* 

  <TaskCard ready={false}></TaskCard>

  <Saludar></Saludar>


    <Button text={"hellow hellow"} />
   <input onChange={handleChange}></input> */}


    {/*  <Greeting
      tittle="hola"
      propiedad1="12431243"
      propiedad2="12431243"
      propiedad3="12431243"

      greet = {function () {
        alert("EY CUIDADO")
      }}
    /> */}

    <TaskCard />
  </>
);
