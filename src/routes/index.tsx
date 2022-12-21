import React from "react";
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom'
import { Home } from '../views/home/index';
import { NotFound } from "../views/notFound";

export const Navegation = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/name_URL" element={<componente />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}