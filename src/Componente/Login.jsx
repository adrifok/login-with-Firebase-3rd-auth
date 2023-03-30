import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContect"
import Alert from "./Alert";

function Login() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const {iniciarLogin, loginGoogle, resetearContraseña} = useAuth();

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
     await iniciarLogin(user.email, user.password)
      navigate("/")

    } catch (error) {
      console.log(error.code);//esto me muestra por consola el codigo del error, para poder cambiar el mensaje.
      if(error.code === "auth/user-not-found"){
        setError("Usuario no registrado")
      }
      if(error.code === "auth/wrong-password"){
        setError("contraseña incorrecta")
      }
    }
    
  }

    const iniciarGoogle = async () => {
      try {
        await loginGoogle()
        navigate("/")
      } catch (error) {
        setError(error.message)
      }
    }
   
    const recuperarContraseña = async () => {
      if(!user.email) return setError("Por favor coloca un email")
      try {
        await resetearContraseña(user.email)
        setError("Te mandamos un email para que reinicies tu password")
      } catch (error) {
        setError(error.message)
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

        <button type="submit">Login</button>
        <button onClick={recuperarContraseña}>Resetear Password</button>
      </form>
      <button onClick={iniciarGoogle}>google</button>
    </div>
  );
}

export default Login