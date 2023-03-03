
import "./tasks.css";

export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>MI TASKCARD</h1>
      <span
        className={ready ? 'bg-green' : 'bg-red'}
      > {ready === true ? "Tarea Realizada" : "Tarea Pendiente"}</span>
      <p>34123412341234</p>
    </div>
  );
}

