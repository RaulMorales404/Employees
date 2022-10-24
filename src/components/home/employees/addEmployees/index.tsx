import React, { useState } from "react";
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import insertDataEmploye from "./AddnewEmploye";

export const AddEmploye = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDay, setBirthDay] = useState("");

    const backTo: any = () => {
        navigate('/home');
    }

    const validaVacio = (valor: any) => {
        return valor && valor.trim().length && valor.length < 31;
    }
    const AddNewEmploye = () => {
        if (validaVacio(name) &&
            validaVacio(lastName) &&
            validaVacio(birthDay)) {
            insertDataEmploye(name, lastName, birthDay);
            setTimeout(() => {
                backTo();
            }, 300);
        } else {
            alert("Los campos que están vacíos o exceden el límite de tamaño 30 caracteres Maximo");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <span className="return" onClick={() => { backTo() }}>
                        <img style={{ width: 55 }} src={require('../../../../assets/icons8-left-50.png')} alt="img" />
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col mt-5">
                    <h4>Agregar Empleado</h4>
                </div>
            </div>
            <div className="row">
                <div className="col mt-5">
                    <div className="col-md-12 mb-3">
                        <label className="form-label">Nombres</label>
                        <input type="text" className="form-control"
                            value={name} onChange={(event) => { setName(event.target.value) }}
                            placeholder="Roberto" />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label className="form-label">Apellidos</label>
                        <input type="email" className="form-control"
                            value={lastName} onChange={(event) => { setLastName(event.target.value) }}
                            placeholder="Gómez Bolaños" />
                    </div>
                    <div className="col-md-12  mb-3">
                        <label className="form-label">Fecha de Naciemitno</label>
                        <input type="date" className="form-control"
                            value={birthDay} onChange={(event) => { setBirthDay(event.target.value) }}
                            placeholder="name@example.com" />
                    </div>
                    <div className="col-md-12">
                        <div className="col-auto d-flex justify-content-end ">
                            <button type="button" className="btn btn-danger col-sm-12 col-md-3  mt-3"
                                onClick={() => { backTo() }}>Cancelar</button>
                            <button type="button" className="btn btn-primary  col-sm-12 col-md-3  mt-3 ml-3"
                                onClick={() => { AddNewEmploye() }}>Guardar</button>
                        </div>

                    </div>

                </div>
                <div className="col-md-6">
                    <img style={{ width: "100%" }} src={require('../../../../assets/Add.png')} alt="img" />
                </div>

            </div>
        </div>)

}


