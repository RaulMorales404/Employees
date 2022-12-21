import React from "react";
import { Header } from "../../header";


export const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <Header activeButton={true} />
            </div>
            <div className="row mt-5">
                <p className="fs-3 mt-3">Empleados</p>
            </div>
            <div className="row">
                a qui van los empleados
            </div>
        </div>
    )

}