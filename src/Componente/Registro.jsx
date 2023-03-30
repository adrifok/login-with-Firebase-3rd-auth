import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContect"
import Alert from "./Alert";

function Registro() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const {registrarUserFirebase} = useAuth();

  const actualizarEstadouser = (evento) => {
    const { name, value } = evento.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const enviarDatos = async (evento) => {
    evento.preventDefault();
    setError("");
    try {
      await registrarUserFirebase(user.email, user.password)
      navigate("/")
    } catch (error) {
      console.log(error.code);//esto me muestra por consola el codigo del error, para poder cambiar el mensaje.
      if(error.code === "auth/invalid-email"){
        setError("correo invalido")
      }
      if(error.code === "auth/weak-password"){
        setError("contraseña incorrecta")
      }
      if(error.code === "auth/email-already-in-use"){
        setError("este correo ya se encuentra registrado")
      }
    }
    
  }

  return (
    <div>
      {error && <Alert message={error}/>}
      <form onSubmit={enviarDatos}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jonathan@hotmail.com"
          onChange={actualizarEstadouser}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="contraseña"
          onChange={actualizarEstadouser}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registro;

//Ahora falta ver login de usuario que esta en la 1:03:00 del video 