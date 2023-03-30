/*En este archivo van las credenciales de mi proyecto creado en firebase, para obtenerlas voy a mi proyecto y 
selecciono el enganaje de configuracion que esta arriba a la izquierda. Despues selecciono "configuracion de proyecto" 
y voy abajo de todo que me da para eleguir para que aplicacion va a ser. En este caso un web. Esto nos va a tirar un codigo de 
configuracion que lo pegamos aca.
Ahora esto no tiene la configuracion para la autenticacion es solo para que se conecte a la base de datos de firebase.
para configurar la autenticacion vamos a importar:
import {getAuth} from 'firebase/auth'
y despues agrego esta linea al final: export const auth = getAuth(app)
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAheAyzNrMXNuX92dW1UxuZ8uhTTRrUmwY",
  authDomain: "login-react-firebase-f6a79.firebaseapp.com",
  projectId: "login-react-firebase-f6a79",
  storageBucket: "login-react-firebase-f6a79.appspot.com",
  messagingSenderId: "369127263082",
  appId: "1:369127263082:web:e3da0a083f428f528fb313"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)