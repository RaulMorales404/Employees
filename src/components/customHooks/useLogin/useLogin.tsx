import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../context/globalStatus";
import { UserContextType } from "../../context/types";

export const  useLogin = ()=> {


    const { setUserAuth } = useContext(GlobalState) as UserContextType;
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        localStorage.setItem('name', "Roberto")
        localStorage.setItem("password", "Exam123$%");
        localStorage.setItem("seccion", "false");
    }, [])
    const validaVacio = (valor: any): boolean => {
        return valor && valor.trim().length;
    }


    const doLogin = (): void => {
        validaVacio(user) && validaVacio(password) ? validateCredentials() : alert("credenciales incorrectas nombre de usuario o contraseña no válidos");
        setUser("");
        setPassword("");
    }

    const startSeccion = (): void => {
        localStorage.setItem("seccion", "true");
        setUserAuth(true);
        navigate('/home');
    }
    const validateCredentials = (): void => {
        localStorage.getItem("name") === user &&
            localStorage.getItem("password") === password ?
            startSeccion() : alert("Credenciales No Son Validas");
    }

    const blockAction = (id: string): void => {
        let myInput: any = document.getElementById(id);
        myInput.onpaste = (e: any) => {
            e.preventDefault();
            alert("esta acción está prohibida");
        }
        myInput.oncopy = (e: any) => {
            e.preventDefault();
            alert("esta acción está prohibida");
        }

    }

    window.onload = () => {
        blockAction("user");
        blockAction("password");
    }

  return {
    user,
    password,
    setPassword,
    setUser,
    doLogin
  }
}

