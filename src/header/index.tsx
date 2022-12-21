/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import './styles.css'
type Props = {
    activeButton: boolean
}
export const Header = (props: Props) => {

    const navigate = useNavigate();

    return (
        <div className="col" >
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <div className="container-fluid">
                    <a className="navbar-brand">Test |</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                {/* <Link className={props.activeButton ? "nav-link active" : "nav-link"} aria-current="page" to="rute_name">Name Button</Link> */}
                            </li>
                            <li className="nav-item ">
                                {/* <Link className={props.activeButton ? "nav-link" : "nav-link active"} to="/upload">Item</Link> */}
                            </li>
                        </ul>
                        {/* <button className="nav-link active" style={{ border: 0, background: "none" }} onClick={() => { console.log('') }}>Name Button</button> */}
                    </div>
                </div>
            </nav>
        </div>)
}