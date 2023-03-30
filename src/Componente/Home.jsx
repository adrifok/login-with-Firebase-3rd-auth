import React from 'react'
import {useAuth} from "../context/authContect";

function Home() {

//para ver la info del usuario//que la puedo traer de mi base de datos tambien.
const { user, logout} = useAuth();
console.log(user)

const cerrar = async () => {
  await logout();
}

  return (
    <div>
      <h1>{user.email}</h1>

      <button onClick={cerrar}>Cerrar</button>
    </div>
  )
}

export default Home