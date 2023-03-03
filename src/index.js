import React from "react";
import ReactDOM from "react-dom/client";
//import { Greeting } from "./Greeting";
//import { Button } from "./Button";
//import Product from "./Product";
import { TaskCard } from "./Task";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Button text={"hellow hellow"} />
   <Button text={"hellow hellow"} />
   <Button text='' name = "Jelo"/>
   */}

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
