export const Post = () => {
  return (
    <button
      onClick={async () => {
        fetch("https://jsonplaceholder.typicode.comd/todos")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      Lo que sea
    </button>
  );
};
