
////////////////ESTO VA DENTRO DEL RENDER DE INDEX//////////////////////////////////////////////////////////////////////////////


{user.map((user, k) => {
    return <TaskCard key={k} name={user.name} image={user.image} />;
  })}

  {/* <Post /> */}

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