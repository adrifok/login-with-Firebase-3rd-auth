/*
Este archivo remplazaria lo que seria ridux, en este video no se usa ridux por eso se crearia este archivo
para permitir importar todos los componentes o sus estados locales donde se necesite.
Esto lo importo en app y envuelvo todas mis rutas
*/

import { createContext, useContext, useEffect, useState } from "react";
//estas importacione son para poder registrar los usuarios en Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../FirebaseConfing/firebase"

export const authContex = createContext();

//para cerrar
const logout = () => signOut(auth)

export const useAuth = () => {
    const contex = useContext(authContex);
    return contex
}


export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoadin] = useState(true);

    const registrarUserFirebase = async (email, password) => {
       const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password);
       return credencialesUsuario
    }

    const iniciarLogin = async (email, password) => {
        const credencialesUsuario = await signInWithEmailAndPassword(auth, email, password);
        return credencialesUsuario
     }

     //iniciar con google
     const loginGoogle = () => {
       const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
     }

    //para recuperar la contraseña
     const resetearContraseña = async (email) =>{
       return await sendPasswordResetEmail(auth, email)
     }
//para guardar los dotos del usuario cuando se logea, si no esta logeado va a estar vacio
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoadin(false)
        })
    }, [])

    return (
        <authContex.Provider value={{registrarUserFirebase, iniciarLogin, logout, loginGoogle, resetearContraseña, user, loading }}>
            {children}
        </authContex.Provider>
    )
}
