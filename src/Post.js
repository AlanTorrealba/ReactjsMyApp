import {VscBug} from 'react-icons/vsc'

export const Post = () => {
  return (
    <button
      onClick={async () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
        <VscBug/>
      Lo que sea
    </button>
  );
};
