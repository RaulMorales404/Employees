import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../context/globalStatus";
import { EmployeesContextType,UserContextType} from '../../context/types';
import { useContext, useEffect } from 'react';
import "./styles.css"
import axios, { AxiosResponse } from "axios";

export const Table = () => {
   
const { employeesContext,setEmployeesContext} = useContext(GlobalState) as EmployeesContextType;
const[isLoading,setIsLoading] = useState(false);


    useEffect(() => {
        // get all Employees and update context
        axios.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:raul_Morales')
            .then((response: AxiosResponse) => {
                setEmployeesContext(response.data.data.employees);
            });
            setTimeout(() => {
                setIsLoading(true)
            }, 300);
           
    }, []);

    
    let employees = employeesContext.map((item) =>
        <tr>
            <td key={item.id} >{item.id}</td>
            <td>{item.name}</td>
            <td>{item.last_name}</td>
            <td>{item.birthday}</td>
        </tr>
    )    
    $(document).ready(function () {
        ($('#example') as any).DataTable();
    });
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <Link className="btn btn-primary button" to="/new">Agregar</Link>
                    {employees.length && isLoading &&
                        <table id="example" className="table table-striped table-bordered" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th className="col-1">ID</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Cumpleaños</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees}
                            </tbody>
                        </table>}
                </div>
            </div>
        </div>
    )
}

