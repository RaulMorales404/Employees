import React from "react";
import { Header } from "../header";
import { Table } from "./employees";


export const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <Header activeButton={true} />
            </div>
            <div className="row mt-5">
                <h4 className="mt-3">Empleados</h4>
            </div>
            <div className="row">
                <Table></Table>
            </div>
        </div>
    )

}