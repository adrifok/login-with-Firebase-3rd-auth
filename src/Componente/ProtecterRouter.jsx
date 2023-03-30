//para proteger la rutas, osea si no esta logeado no va a poder entrar a Home

import React from 'react'
import {useAuth} from "../context/authContect";
import { Navigate } from 'react-router-dom';

function ProtecterRouter({children}) {
  const { user, loading } = useAuth();

  //esto es para que acuando el usuario refresque las pagina espere a que se cumpla la promesa de nuevo con la info del user, sino salta error
  if(loading) return <h1>loading...</h1>

  if(!user) return <Navigate to="/login" />

  return <>{children}</> 
}

export default ProtecterRouter