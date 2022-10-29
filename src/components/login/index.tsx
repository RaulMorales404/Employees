/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalState } from "../context/globalStatus";
import { UserContextType } from "../context/types";

export const Login = () => {

    const { setUserAuth } = useContext(GlobalState) as UserContextType;
    const navigate = useNavigate();
    const [user, setUser] = useState("Roberto");
    const [password, setPassword] = useState("Exam123$%");

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


    return (
        <div className="container">
            <div className="row mt-5">
                <div className=" mt-5 col-md-6">
                    <img style={{ width: "100%" }} src={require('../../assets/undraw_coffee_break_h3uu.png')} alt="img" />
                </div>
                <form className=" col-md-6 mt-5" >
                    <div className="col-md-8 mt-5">
                        <label className="form-label">Usuario</label>
                        <input type="text" id="user" className="form-control" value={user} onChange={(event) => { setUser(event.target.value) }} placeholder="Roberto" />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">Contraseña</label>
                        <input type="password" id="password" className="form-control" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="Roberto123" />
                    </div>
                    <div className="col-8">
                        <button className="btn btn-primary col-md-3 col-ms-12 mt-3 offset-md-9" onClick={doLogin} type="button">Iniciar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

