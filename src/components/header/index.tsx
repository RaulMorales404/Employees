import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context/globalStatus";
import { UserContextType } from "../context/types";
import './styles.css'
type Props = {
    activeButton: boolean
}
export const Header = (props: Props) => {
    const navigate = useNavigate();
    const { setUserAuth } = useContext(GlobalState) as UserContextType;
    const closeSecction = () => {
        localStorage.setItem("seccion", "false");
        setUserAuth(false)
        navigate('/login');
    }
    return (
        <div className="col" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Examen |</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className={props.activeButton ? "nav-link active" : "nav-link"} aria-current="page" to="/home">Empleados</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className={props.activeButton ? "nav-link" : "nav-link active"} to="/upload">Subir a</Link>
                            </li>
                        </ul>
                        <button className="nav-link active" style={{ border: 0, background: "none" }} onClick={() => { closeSecction() }}>Salir</button>
                    </div>
                </div>
            </nav>
        </div>)
}