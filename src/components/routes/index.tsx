import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom'
import { Login } from '../login/index';
import { AddEmploye } from '../home/employees/addEmployees/index';
import { Home } from '../home/index';
import { NotFound } from "../notFound";
import { UserContextType } from "../context/types";
import { GlobalState } from "../context/globalStatus";
export const Navegation = () => {
    const { userAuth } = useContext(GlobalState) as UserContextType;
    const RoutePrivate = () => {
        return <Login />
    }
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={userAuth ? <Home /> : RoutePrivate()} />
                <Route path="/new" element={userAuth ? <AddEmploye /> : RoutePrivate()} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </HashRouter>
    )
}