import React from 'react';
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Candidate from './Components/Candidate';
import About from './Components/About';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Candidate" element={<Candidate />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
