
import "./tasks.css";

export function TaskCard({ready, name, image}) {
  return (
    <div className="card">
      <h1>{name} </h1>

    <img className="image" src={image}></img>
    <br></br>
      <span
        className={ready ? 'bg-green' : 'bg-red'}
      > {ready === true ? "Tarea Realizada" : "Tarea Pendiente"}</span>
      <p>34123412341234</p>
    </div>
  );
}

